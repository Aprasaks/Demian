"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image, Color, TextStyle],
    content: "<p>여기에 글을 작성하세요!</p>",
  });

  if (!editor) return null;

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-2 flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("strike") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bulletList") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Bullet
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("orderedList") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Ordered
        </button>
        <button
          onClick={() => {
            const url = prompt("이미지 URL 입력:");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
          className="px-2 py-1 rounded bg-gray-200 text-black"
        >
          이미지
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="bg-white text-black p-4 rounded min-h-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
