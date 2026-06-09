"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                文
              </div>
              <span className="text-lg font-bold text-white">文墨轩</span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed">
              AI时代的笔墨工坊<br />
              精选AI写作工具，帮你写好每一篇文字
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">导航</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">首页</Link></li>
              <li><Link href="/category/social-media" className="hover:text-white transition-colors">分类浏览</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">工具排行</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">最新收录</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">内容</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">工具评测</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">使用教程</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">行业报告</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI写作技巧</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">关于</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">提交工具</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">合作联系</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">隐私政策</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-10 pt-6 text-center text-sm text-ink-500">
          <p> 2026 文墨轩 wenmoxun.com - AI写作工具导航</p>
        </div>
      </div>
    </footer>
  );
}
