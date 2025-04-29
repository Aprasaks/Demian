import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Toc from "@/components/Toc";
import GraphMiniMap from "@/components/GraphMiniMap";
import { getAllGraphData } from "@/lib/getAllGraphData";

// Props 타입을 정의합니다.
// type Props = {
//   params: {
//     category: string;
//     slug: string;
//   };
  // searchParams가 필요하다면 여기에 추가할 수 있습니다.
  // searchParams?: { [key: string]: string | string[] | undefined };
// };
export type paramsType = Promise< {slug: string; category : string }>;
export default async function Postpage( props : {params: paramsType}){ 
  const { category, slug } = await props.params;
  const filePath = path.join(process.cwd(), "src/app/posts", category, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const { nodes, links } = getAllGraphData(); //

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-6xl mx-auto flex gap-8 relative">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
          <p className="text-gray-400 text-sm mb-6">
            {data.date ? new Date(data.date).toLocaleDateString() : "Invalid Date"}
          </p>
          <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed"> {/* */}
            <Markdown
              rehypePlugins={[rehypeRaw, rehypePrism, rehypeSlug, rehypeAutolinkHeadings]}
            >
              {content}
            </Markdown>
          </article>
        </div>

        <aside className="hidden lg:block w-64 sticky top-20">
          <Toc />
        </aside>

        {/* GraphMiniMap 컴포넌트 렌더링 부분 */}
        <div className="fixed bottom-6 right-6">
          <GraphMiniMap nodes={nodes} links={links} />
        </div>
      </div>
    </main>
  );
}