// src/lib/getAllGraphData.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type GraphNode = { id: string };
export type GraphLink = { source: string; target: string };

export function getAllGraphData(): { nodes: GraphNode[]; links: GraphLink[] } {
  const postsDir = path.join(process.cwd(), "src/app/posts");
  const categories = fs.readdirSync(postsDir);

  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];

  for (const category of categories) {
    const catDir = path.join(postsDir, category);
    if (!fs.lstatSync(catDir).isDirectory()) continue;

    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(catDir, file);
      const { content } = matter(fs.readFileSync(filePath, "utf-8"));

      nodes.push({ id: slug });

      const matches = [...content.matchAll(/\[\[([^\]]+)\]\]/g)];
      matches.forEach((match) => {
        links.push({ source: slug, target: match[1] });
      });
    }
  }

  return { nodes, links };
}
