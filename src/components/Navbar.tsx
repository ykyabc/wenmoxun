"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow">
              文
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-ink-900 leading-tight">文墨轩</span>
              <span className="text-[10px] text-ink-500 leading-tight">AI写作工具导航</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-ink-600 hover:text-primary-700 font-medium transition-colors">
              首页
            </Link>
            <Link href="/category/social-media" className="text-ink-600 hover:text-primary-700 font-medium transition-colors">
              分类
            </Link>
            <Link href="#" className="text-ink-600 hover:text-primary-700 font-medium transition-colors">
              评测
            </Link>
            <Link href="#" className="text-ink-600 hover:text-primary-700 font-medium transition-colors">
              排行
            </Link>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
              提交工具
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-ink-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-ink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-ink-200 space-y-3">
            <Link href="/" className="block px-3 py-2 text-ink-700 hover:bg-ink-100 rounded-lg" onClick={() => setIsOpen(false)}>
              首页
            </Link>
            <Link href="/category/social-media" className="block px-3 py-2 text-ink-700 hover:bg-ink-100 rounded-lg" onClick={() => setIsOpen(false)}>
              分类
            </Link>
            <Link href="#" className="block px-3 py-2 text-ink-700 hover:bg-ink-100 rounded-lg" onClick={() => setIsOpen(false)}>
              评测
            </Link>
            <Link href="#" className="block px-3 py-2 text-ink-700 hover:bg-ink-100 rounded-lg" onClick={() => setIsOpen(false)}>
              排行
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
