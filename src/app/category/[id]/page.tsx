import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import { categories, getCategoryById, getToolsByCategory } from "@/data/tools";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.id);
  
  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(params.id);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Category Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-ink-500 mb-4">
            <a href="/" className="hover:text-primary-600 transition-colors">首页</a>
            <span>/</span>
            <span className="text-ink-900">{category.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center text-4xl">
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-ink-900">{category.name}</h1>
              <p className="text-ink-500 mt-1">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-ink-500">
              共 <span className="font-bold text-ink-900">{tools.length}</span> 款工具
            </p>
            <div className="flex gap-2">
              <select className="px-3 py-2 bg-white border border-ink-200 rounded-lg text-sm text-ink-600 focus:outline-none focus:border-primary-500">
                <option>默认排序</option>
                <option>评分最高</option>
                <option>最新收录</option>
                <option>最多评价</option>
              </select>
              <select className="px-3 py-2 bg-white border border-ink-200 rounded-lg text-sm text-ink-600 focus:outline-none focus:border-primary-500">
                <option>全部价格</option>
                <option>免费</option>
                <option>免费增值</option>
                <option>付费</option>
              </select>
            </div>
          </div>

          {tools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-ink-700 mb-2">暂无工具</h3>
              <p className="text-ink-500">该分类下暂时没有收录工具，敬请期待</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
