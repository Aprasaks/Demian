"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import type { ForceGraphMethods } from "react-force-graph-2d";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

type GraphNode = {
  id: string;
  label: string;
  slug?: string;
  group?: string;
  color: string;
  x?: number;
  y?: number;
};

type GraphLink = {
  source: string;
  target: string;
};

export default function GraphClient({
  nodes,
  links,
}: {
  nodes: GraphNode[];
  links: GraphLink[]; // 링크
}) {
  const router = useRouter();

  const graphRef = useRef<ForceGraphMethods | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <ForceGraph2D
      ref={graphRef as React.MutableRefObject<ForceGraphMethods>}
      graphData={{ nodes, links }}
      nodeLabel="label"
      nodeColor="color"
      onNodeClick={(node) => {
        const g = node as GraphNode;
        router.push(`/posts/${g.group}/${g.id}`); // ✅ id가 곧 slug니까!
      }}
      width={dimensions.width}
      height={dimensions.height}
      linkColor={() => "white"}
      // ⭐ 반짝이는 별 효과
      nodeCanvasObject={(node, ctx, globalScale) => {
        const g = node as GraphNode;

        const idLength = typeof g.id === "string" ? g.id.length : 0;
        const radius = Number(6 + Math.sin(Date.now() / 200 + idLength) * 2);

        const x = Number(g.x ?? 0);
        const y = Number(g.y ?? 0);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = (g.color as string) || "rgba(255, 255, 255, 0.8)";
        ctx.shadowColor = (g.color as string) || "#ffffff";
        ctx.shadowBlur = 10;

        ctx.fill();

        if (globalScale > 1.8) {
          ctx.font = `${12 / globalScale}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillStyle = "#ffffff";
          ctx.fillText(String(g.label), x, y + radius + 2);
        }
      }}
    />
  );
}
