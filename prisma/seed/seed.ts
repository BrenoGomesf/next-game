import { PrismaClient } from "@prisma/client";

import Articles  from "../../src/data/articles.json"
import { slugfy } from "../../src/helpers/slugfy";
const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV == "development";
async function main() {
  await seedArticles();
  console.log("db seed")
}

async function  seedArticles(){
  if(!isDev) throw new Error('NODE_ENV is not a development enviroment.');

  //Delete all
  await prisma.article.deleteMany();
  //trucante
  await prisma.$executeRawUnsafe(`DELETE FROM SQLITE_SEQUENCE WHERE name=$1`, "Article");

  for(let article of Articles){
    const record = await prisma.article.create({
      data: {
        title:        article.title,
        slug:         slugfy(article.title),
        excerpt:      article.excerpt,
        content:      article.content,
        image:        article.image,
        publishedAt:  new Date(article.publish_date),
        }
      });
      console.log("*** create article***", record.id, record.title)
    }
}

main().then(async () => {
    await prisma.$disconnect();
  }).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });