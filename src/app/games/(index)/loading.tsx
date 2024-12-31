import { PageWrapper, Pagination } from "@/components";
import { getGameImage } from "@/helpers/games";
import { getIntArray } from "@/sections";
import Image from "next/image";
import Link from "next/link";

export default async function GamesLoading() {
  const placeholders = getIntArray(0, 11);
  return (
    <PageWrapper>
      <div className="container mx-auto my-6">
        <h1 className="text-3xl my-6">Games</h1>
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
          {placeholders.map((game) => {
            return (
              <div className="flex-center flex-col relative overflow-hidden">
                <div className="h-full w-full bg-slate-700/40 rounded-lg animate-pulse">
                  <div className=" object-cover transition duration-500 hover:scale-105 w-[600px] h-[250px] " />
                </div>
                <p className=" pt-2 pb-2 px-2 w-full">
                  <div className="bg-slate-700/40 w-full h-9 rounded-lg animate-pulse" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
