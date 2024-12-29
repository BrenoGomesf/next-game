import { PrismaClient } from "@prisma/client";

import Articles from "../../src/data/articles.json";
import Games from "../../src/data/games.json";
import { slugfy } from "../../src/helpers/slugfy";
import { title } from "process";
const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV == "development";
async function main() {
  console.log("Command Line Interface - dev bg");
  if (!isDev) throw new Error("NODE_ENV is not a development enviroment.");

  const [, , ...args] = process.argv;
  const trucante = !!args.find((arg) => arg == "-trucante");
  const articles = !!args.find((arg) => arg == "articles");
  const games = !!args.find((arg) => arg == "games");

  const list = !!args.find((arg) => arg == "list");
  if (trucante) {
    if (articles) await trucanteArticles();
    if (games)    await trucanteGamesAndGenres();
  }
  if(list) listCommand();
  if (articles) await seedArticles();
  if (games)    await seedGamesAndGenres();

}

const listCommand = () => {
  console.log('Games',    '-Cria todos games');
  console.log('Articles', '-Cria articles');
  console.log('-Trucante',    'limpa todos dados');
} 
async function trucanteArticles() {
  await prisma.article.deleteMany();
  //trucante
  await prisma.$executeRawUnsafe(`DELETE FROM SQLITE_SEQUENCE WHERE name=$1`,"Article" );
}

async function trucanteGamesAndGenres() {
  await prisma.gameGenre.deleteMany();
  await prisma.games.deleteMany();
  await prisma.genres.deleteMany();

  //trucante
  await prisma.$executeRawUnsafe(`DELETE FROM SQLITE_SEQUENCE WHERE name=$1`,"GameGenre");
  await prisma.$executeRawUnsafe(`DELETE FROM SQLITE_SEQUENCE WHERE name=$1`,"Games");
  await prisma.$executeRawUnsafe(`DELETE FROM SQLITE_SEQUENCE WHERE name=$1`,"Genres");
}

async function seedArticles() {
  for (let article of Articles) {
    const record = await prisma.article.create({
      data: {
        title: article.title,
        slug: slugfy(article.title),
        excerpt: article.excerpt,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      },
    });
    console.log("*** create article***", record.id, record.title);
  }
}
async function seedGamesAndGenres() {
  for (let game of Games) {
    const genres = game.genre.map((title) => {
      const slug = slugfy(title);
      return {
        genre: {
          connectOrCreate: {
            where: { slug },
            create: { title, slug },
          },
        },
      };
    });
    const record = await prisma.games.create({
      data: {
        title: game.title,
        slug: game.slug,
        year: game.year,
        image: game.fileName,
        link: game.link || "#",
        plataform: "Nintendo 64",
        genres: {
          create: genres,
        },
      },
    });
    console.log("*** created game", record.id, record.title);
  }
  return;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
