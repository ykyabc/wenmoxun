import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-50">
      <div className="text-center">
        <div className="text-8xl mb-6">📄</div>
        <h1 className="text-4xl font-bold text-ink-900 mb-4">页面未找到</h1>
        <p className="text-ink-500 mb-8">抱歉，您访问的页面不存在</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
