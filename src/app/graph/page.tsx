import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GraphClient from "./GraphClient";

const groupColors: Record<string, string> = {
  html: "#fff4b0",
  css: "#a0cfff",
  javascript: "#ffffff",
  react: "#d0b0ff",
  node: "#b0ffd6",
  supabase: "#d33f2d",
};

interface Node {
  id: string;
  label: string;
  slug: string;
  group: string;
  color: string;
}

interface Link {
  source: string;
  target: string;
}

export const dynamic = "force-dynamic"; //  매번 최신 파일 반영

export default async function GraphViewPage() {
  const postsBaseDir = path.join(process.cwd(), "src/app/posts");

  //  categories 가져오기
  const categories = fs.readdirSync(postsBaseDir).filter((dir) => {
    const fullPath = path.join(postsBaseDir, dir);
    return fs.statSync(fullPath).isDirectory();
  });

  const nodes: Node[] = [];
  const links: Link[] = [];

  //  파일 별 content 저장용
  const fileMap: Record<string, { content: string; title: string }> = {};

  // . 먼저 모든 nodes 생성
  categories.forEach((category) => {
    const postsDir = path.join(postsBaseDir, category);
    const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

    files.forEach((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      const title = data.title ?? filename.replace(/\.md$/, "");
      const slug = title; // title = slug

      nodes.push({
        id: title,
        label: title,
        slug,
        group: category,
        color: groupColors[category] || "#ffffff",
      });

      fileMap[title] = { content: fileContent, title };
    });
  });

  // ✅ 3. 그 다음에 links 생성
  Object.values(fileMap).forEach(({ content, title }) => {
    const matches = [...content.matchAll(/\[\[([^\]]+)\]\]/g)];
    matches.forEach((match) => {
      const target = match[1].trim();
      if (nodes.find((n) => n.id === target)) {
        links.push({ source: title, target });
      }
    });
  });

  console.log(
    "✅ 현재 노드:",
    nodes.map((n) => n.id)
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <GraphClient nodes={nodes} links={links} />
    </main>
  );
}
