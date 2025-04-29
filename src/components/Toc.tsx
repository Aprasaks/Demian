"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function Toc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // ✅ 1. headings 수집 (딱 한 번만 실행)
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3")) as HTMLHeadingElement[];

    const newHeadings = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));

    setHeadings(newHeadings);
  }, []);

  // ✅ 2. 스크롤 감지 (activeId만 관리)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentId = "";

      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el && el.offsetTop <= scrollY + 100) {
          currentId = heading.id;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]); // ✅ headings 수집 후에만 스크롤 감지

  return (
    <nav className="sticky top-20 ml-8 hidden md:block">
      <h2 className="text-lg font-bold mb-2">목차</h2>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`px-2 py-1 rounded-md ${heading.level === 3 ? "ml-4" : ""} ${
              activeId === heading.id
                ? "bg-blue-500/20 text-blue-300 font-semibold"
                : "text-gray-400"
            }`}
          >
            <a href={`#${heading.id}`} className="block hover:underline transition">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
