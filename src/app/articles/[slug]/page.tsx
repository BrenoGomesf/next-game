import { PageWrapper } from "@/components";
import ArticleService from "@/services/Articles";
import Image from "next/image";

export default async function Page({ params }: {params: Promise<{ slug: string }>;}) {
  const { slug } = await params;
  const article = await ArticleService.getArticlesBySlug(slug)

  if(!article) return null;
  return (
    <PageWrapper>
       <div className="container mx-auto my-12">
          <div className="w-2/3">
            <h2 className="text-3xl my-6">{article.title}</h2>
            <Image src={`/assets/images/articles/${article.image}`} alt={article.title} width={600} height={400} className="w-full h-full object-cover my-6 rounded-lg "/>
            <div className="flex-col">
              <p className="my-2 p-2 bg-slate-700/20 rounded">{article.excerpt}</p>
              <p className="my-2">{article.content}</p>
            </div>
          </div>
        </div>
    </PageWrapper>
  );
}
