"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import dynamic from "next/dynamic";
import type { ForceGraphMethods } from "react-force-graph-2d";

// ✅ ForceGraph2D 동적 import (서버사이드 렌더링 방지)
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false });

// ✅ 그래프 타입 정의
type GraphNode = { id: string };
type GraphLink = { source: string; target: string };

interface GraphMiniMapProps {
  nodes: GraphNode[];
  links: GraphLink[];
}

export default function GraphMiniMap({ nodes, links }: GraphMiniMapProps) {
  const router = useRouter();
  const graphRef = useRef<ForceGraphMethods | null>(null);

  const graphData = { nodes, links };

  return (
    <div
      className="fixed bottom-6 right-6 w-[240px] h-[160px] bg-black/40 border border-gray-600 rounded-lg shadow-md z-50 cursor-pointer"
      onClick={() => router.push("/graph")} // 👉 클릭하면 전체 /graph 페이지로 이동
    >
      <ForceGraph2D
        ref={(el) => {
          graphRef.current = el as ForceGraphMethods;
        }}
        graphData={graphData}
        nodeAutoColorBy="id"
        width={240}
        height={160}
        backgroundColor="transparent"
        enableZoomPanInteraction={false}
        enableNodeDrag={false}
        linkDistance={80} // ✅ 링크 간격 늘리기 (30 -> 80)
        cooldownTicks={30} // ✅ 30프레임 동안 서서히 퍼짐
        d3VelocityDecay={0.2} // ✅ 퍼질 때 천천히 퍼지게 부드럽게
        nodeRelSize={2} // ✅ 노드 기본 크기 작게
        onEngineStop={() => {
          if (graphRef.current) {
            graphRef.current.zoomToFit(200);
          }
        }}
        nodeCanvasObject={(node, ctx) => {
          const RADIUS = 3;
          const GLOW_COLOR = "white";

          ctx.beginPath();
          ctx.arc(node.x!, node.y!, RADIUS, 0, 2 * Math.PI, false);

          ctx.shadowColor = GLOW_COLOR;
          ctx.shadowBlur = 8;
          ctx.fillStyle = node.color || "white";
          ctx.fill();

          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";
        }}
      />
    </div>
  );
}
