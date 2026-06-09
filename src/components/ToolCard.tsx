"use client";

import Link from "next/link";
import { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = {
    "免费": "bg-green-100 text-green-700",
    "免费增值": "bg-blue-100 text-blue-700",
    "付费": "bg-amber-100 text-amber-700",
    "企业版": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="group bg-white rounded-2xl border border-ink-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
              {tool.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-ink-900 text-lg group-hover:text-primary-700 transition-colors">
                {tool.name}
              </h3>
              <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mt-1 ${pricingColors[tool.pricing]}`}>
                {tool.pricing}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-ink-700">{tool.rating}</span>
            <span className="text-ink-400 text-sm">({tool.reviewCount})</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-ink-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-ink-100 text-ink-600 text-xs rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-1.5 mb-5">
          {tool.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-ink-500">
              <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <Link
            href={`/tool/${tool.id}`}
            className="flex-1 text-center py-2.5 bg-ink-100 hover:bg-ink-200 text-ink-700 font-medium rounded-xl transition-colors text-sm"
          >
            查看详情
          </Link>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors text-sm"
          >
            前往官网
          </a>
        </div>
      </div>
    </div>
  );
}
