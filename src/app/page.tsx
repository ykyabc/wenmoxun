import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import { categories, tools } from "@/data/tools";

export default function Home() {
  const featuredTools = tools.slice(0, 6);
  const latestTools = tools.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-ink-50 pt-16 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-light rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-ink-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-ink-600">已收录 {tools.length}+ 款AI写作工具</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 leading-tight">
            AI时代的<span className="text-primary-600">笔墨工坊</span>
          </h1>
          <p className="text-lg sm:text-xl text-ink-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            文墨轩精选全球AI写作工具，帮你找到最适合的那一支&ldquo;笔&rdquo;<br className="hidden sm:block" />
            小红书文案、论文写作、职场报告、小说创作，一站搞定
          </p>
          
          <SearchBar />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink-900 mb-3">按场景找工具</h2>
            <p className="text-ink-500">8大写作场景，精准匹配你的需求</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-ink-900 mb-2">热门推荐</h2>
              <p className="text-ink-500">经过实测验证的优质AI写作工具</p>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium transition-colors">
              查看全部
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-ink-900 mb-2">最新收录</h2>
              <p className="text-ink-500">发现最新的AI写作利器</p>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium transition-colors">
              查看全部
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            有好用的AI写作工具？
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            欢迎提交你的AI写作工具，让更多人发现它
          </p>
          <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-xl font-bold text-lg transition-colors shadow-lg">
            提交工具
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
