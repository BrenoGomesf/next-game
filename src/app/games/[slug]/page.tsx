import { PageWrapper } from "@/components";
import { getGameImage } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";

export default async function Page({ params }: {params: Promise<{ slug: string }>;}) {
  const { slug } = await params;
  const game = await GamesService.getGamesBySlug(slug)

  if(!game) return null;
  return (
    <PageWrapper>
       <div className="container mx-auto my-12">
          <div className="w-2/3">
            <h2 className="text-3xl my-6">{game.title}</h2>
            <Image src={`${getGameImage(game.image)}`} alt={game.title} width={600} height={400} className="w-full h-full object-cover my-6 rounded-lg "/>
            <div className="flex-col">
              <p className="my-2 p-2 bg-slate-700/20 rounded">{game.plataform} -  {game.year}</p>
              
            </div>
          </div>
        </div>
    </PageWrapper>
  );
}
