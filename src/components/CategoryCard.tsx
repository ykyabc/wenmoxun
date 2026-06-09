"use client";

import Link from "next/link";
import { Category } from "@/data/tools";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.id}`}
      className="group block bg-white rounded-2xl border border-ink-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center text-3xl group-hover:from-primary-200 group-hover:to-primary-300 transition-colors">
          {category.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-ink-900 text-lg group-hover:text-primary-700 transition-colors">
            {category.name}
          </h3>
          <p className="text-ink-500 text-sm mt-1 line-clamp-1">{category.description}</p>
        </div>
        <div className="flex items-center gap-1 text-ink-400">
          <span className="text-sm font-medium">{category.toolCount}款</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
