"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import { searchTools } from "@/data/tools";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? searchTools(query) : [];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-ink-50 border-b border-ink-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-ink-900 mb-2">
            搜索结果：{query}
          </h1>
          <p className="text-ink-500">
            找到 <span className="font-bold text-ink-900">{results.length}</span> 款相关工具
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-ink-700 mb-2">
                未找到相关工具
              </h3>
              <p className="text-ink-500 mb-6">
                试试其他关键词，如&ldquo;小红书文案&rdquo;、&ldquo;论文写作&rdquo;等
              </p>
              <a
                href="/"
                className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
              >
                返回首页
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-ink-500">搜索中...</div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
