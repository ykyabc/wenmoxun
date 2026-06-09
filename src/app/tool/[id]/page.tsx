import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tools, getToolById, getCategoryById } from "@/data/tools";

interface ToolPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = getToolById(params.id);

  if (!tool) {
    notFound();
  }

  const category = getCategoryById(tool.category);

  const pricingColors = {
    "免费": "bg-green-100 text-green-700",
    "免费增值": "bg-blue-100 text-blue-700",
    "付费": "bg-amber-100 text-amber-700",
    "企业版": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-ink-50 border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              首页
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/category/${category.id}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-ink-900 font-medium">{tool.name}</span>
          </div>
        </div>
      </div>

      {/* Tool Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Tool Info */}
            <div className="flex-1">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg flex-shrink-0">
                  {tool.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-ink-900 mb-2">
                    {tool.name}
                  </h1>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${pricingColors[tool.pricing]}`}
                    >
                      {tool.pricing}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-bold text-ink-700">
                        {tool.rating}
                      </span>
                      <span className="text-ink-400">
                        ({tool.reviewCount}条评价)
                      </span>
                    </div>
                  </div>
                  <p className="text-ink-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-ink-100 text-ink-700 text-sm rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="bg-ink-50 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-ink-900 text-lg mb-4">
                  核心功能
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tool.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-ink-700"
                    >
                      <svg
                        className="w-5 h-5 text-primary-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors text-lg shadow-lg"
                >
                  前往官网
                </a>
                <button className="flex-1 text-center py-4 bg-ink-100 hover:bg-ink-200 text-ink-700 font-bold rounded-xl transition-colors text-lg">
                  收藏工具
                </button>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:w-80 space-y-6">
              {/* Quick Info */}
              <div className="bg-white border border-ink-200 rounded-2xl p-6">
                <h3 className="font-bold text-ink-900 mb-4">基本信息</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-500">分类</span>
                    <span className="text-ink-900 font-medium">
                      {category?.name || "其他"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-500">价格</span>
                    <span className="text-ink-900 font-medium">
                      {tool.pricing}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-500">评分</span>
                    <span className="text-ink-900 font-medium">
                      {tool.rating}/5.0
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-500">评价数</span>
                    <span className="text-ink-900 font-medium">
                      {tool.reviewCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-white border border-ink-200 rounded-2xl p-6">
                <h3 className="font-bold text-ink-900 mb-4">同类推荐</h3>
                <div className="space-y-3">
                  {tools
                    .filter(
                      (t) =>
                        t.category === tool.category && t.id !== tool.id
                    )
                    .slice(0, 3)
                    .map((t) => (
                      <Link
                        key={t.id}
                        href={`/tool/${t.id}`}
                        className="flex items-center gap-3 p-3 hover:bg-ink-50 rounded-xl transition-colors"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-ink-900 text-sm">
                            {t.name}
                          </div>
                          <div className="text-xs text-ink-500">
                            {t.pricing}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
