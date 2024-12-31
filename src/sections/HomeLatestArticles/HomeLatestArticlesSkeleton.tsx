import { getIntArray } from "@/helpers/math";

export function HomeLatestArticlesSkeleton() {
  const placeholders = getIntArray(0, 3);
  return (
    <div className="container mx-auto my-6 ">
      <h2 className="text-3xl my-6 underline">
        <div className="bg-slate-700/40 w-1/6 h-9 rounded-lg animate-pulse" />
      </h2>
      <div className="grid grid-cols-4 gap-4 h-[35vh]">
        {placeholders.map((v, i) => {
          return (
            <div key={v} className="flex-center  relative overflow-hidden animate-pulse">
              <div className="h-full w-full bg-slate-700/40 "/>
              <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                <span className="bg-slate-700/40 w-full h-6 rounded-lg block animate-pulse" />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
