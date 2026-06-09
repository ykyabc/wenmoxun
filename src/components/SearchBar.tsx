"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-ink-400 group-focus-within:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索AI写作工具，如：小红书文案、论文写作..."
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-ink-200 rounded-2xl text-ink-900 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all text-base shadow-sm hover:shadow-md"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 bottom-2 bg-primary-600 hover:bg-primary-700 text-white px-6 rounded-xl font-medium transition-colors"
        >
          搜索
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {["小红书文案", "论文写作", "公众号", "短视频脚本", "AI对话"].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setQuery(tag);
              router.push(`/search?q=${encodeURIComponent(tag)}`);
            }}
            className="px-3 py-1 bg-white/60 hover:bg-white text-ink-600 text-sm rounded-full border border-ink-200 hover:border-primary-300 transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </form>
  );
}
