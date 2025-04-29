"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center p-12">
      <div className="max-w-md ml-4 text-left space-y-2 quote-block">
        <p>The bird fights its way out of the egg.</p>
        <p>The egg is the world.</p>
        <p>Who would be born must first destroy a world.</p>
        <p>The bird flies to God.</p>
        <p>
          That God&apos;s name is <span className="text-yellow-400">Abraxas</span>.
        </p>
      </div>

      {/* 새 아이콘 추가 */}
      <div className="mt-12 flex justify-end pr-12">
        <Link href="/graph">
          <img
            src="/bird.svg" // 또는 /bird.png
            alt="Bird flying to graph"
            className="w-64 h-64 cursor-pointer filter invert hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>
    </main>
  );
}
