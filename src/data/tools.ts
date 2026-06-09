export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  pricing: "免费" | "免费增值" | "付费" | "企业版";
  rating: number;
  reviewCount: number;
  website: string;
  logo?: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  toolCount: number;
}

export const categories: Category[] = [
  {
    id: "social-media",
    name: "新媒体文案",
    description: "小红书、公众号、短视频脚本等社交媒体内容创作",
    icon: "📱",
    toolCount: 25,
  },
  {
    id: "academic",
    name: "学术写作",
    description: "论文写作、降重润色、文献总结等学术场景",
    icon: "📝",
    toolCount: 18,
  },
  {
    id: "office",
    name: "职场办公",
    description: "工作报告、PPT、邮件、简历等办公场景",
    icon: "💼",
    toolCount: 20,
  },
  {
    id: "ecommerce",
    name: "电商运营",
    description: "商品标题、详情页、直播脚本等电商场景",
    icon: "🛒",
    toolCount: 15,
  },
  {
    id: "novel",
    name: "小说创作",
    description: "网文写作、剧本、角色设定等创作场景",
    icon: "📖",
    toolCount: 12,
  },
  {
    id: "seo",
    name: "SEO写作",
    description: "SEO文章、批量内容、多语言生成",
    icon: "🌐",
    toolCount: 10,
  },
  {
    id: "marketing",
    name: "营销文案",
    description: "广告语、品牌故事、活动策划等营销场景",
    icon: "🎯",
    toolCount: 12,
  },
  {
    id: "general",
    name: "通用AI写作",
    description: "AI对话助手、通用写作平台、辅助插件",
    icon: "🔧",
    toolCount: 30,
  },
];

export const tools: Tool[] = [
  {
    id: "bilin",
    name: "笔灵AI",
    description: "专业AI写作工具，覆盖新媒体、学术、职场等多场景，模板丰富，中文写作能力强。",
    category: "social-media",
    tags: ["小红书文案", "公众号文章", "论文写作", "职场报告"],
    pricing: "免费增值",
    rating: 4.5,
    reviewCount: 3280,
    website: "https://ibiling.cn",
    features: ["200+写作模板", "AI续写", "智能改写", "多场景覆盖"],
  },
  {
    id: "mita",
    name: "秘塔写作猫",
    description: "国内老牌AI写作工具，擅长学术写作和文本纠错，高校师生群体口碑极好。",
    category: "academic",
    tags: ["论文改写", "智能降重", "文本纠错", "学术写作"],
    pricing: "免费增值",
    rating: 4.6,
    reviewCount: 4520,
    website: "https://xiezuocat.com",
    features: ["论文改写润色", "智能降重", "自动配图", "文献引用建议"],
  },
  {
    id: "doubao",
    name: "豆包",
    description: "字节跳动旗下AI助手，中文语境理解优秀，支持日常聊天、写作辅助、英语练习。",
    category: "general",
    tags: ["AI对话", "写作辅助", "中文理解", "多场景"],
    pricing: "免费",
    rating: 4.4,
    reviewCount: 8900,
    website: "https://doubao.com",
    features: ["中文理解强", "多模态", "免费使用", "字节生态"],
  },
  {
    id: "kimi",
    name: "Kimi",
    description: "月之暗面推出的AI助手，支持超长文本处理，适合长文档阅读和写作辅助。",
    category: "general",
    tags: ["长文本", "文档阅读", "写作辅助", "中文理解"],
    pricing: "免费",
    rating: 4.5,
    reviewCount: 5600,
    website: "https://kimi.moonshot.cn",
    features: ["200万字上下文", "文档解析", "网页搜索", "中文写作"],
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "国内最强开源大模型，擅长创意写作与代码生成，广泛应用于文案、论文等场景。",
    category: "general",
    tags: ["开源", "创意写作", "代码生成", "高性价比"],
    pricing: "免费",
    rating: 4.7,
    reviewCount: 7200,
    website: "https://deepseek.com",
    features: ["开源免费", "推理能力强", "代码生成", "API支持"],
  },
  {
    id: "xunfei",
    name: "讯飞写作",
    description: "科大讯飞旗下AI写作工具，语音输入+AI写作结合，适合快速产出内容。",
    category: "office",
    tags: ["语音输入", "工作报告", "会议纪要", "快速写作"],
    pricing: "免费增值",
    rating: 4.3,
    reviewCount: 2100,
    website: "https://writing.xfyun.cn",
    features: ["语音输入", "AI续写", "模板丰富", "办公场景"],
  },
  {
    id: "huoshan",
    name: "火山写作",
    description: "字节跳动旗下AI写作工具，利用AI技术帮助用户快速生成高质量文章。",
    category: "social-media",
    tags: ["文章生成", "内容创作", "字节生态", "多场景"],
    pricing: "免费",
    rating: 4.2,
    reviewCount: 1800,
    website: "https://writingo.net",
    features: ["快速生成", "多场景覆盖", "免费使用", "字节生态"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI推出的AI对话助手，多模态能力全面，支持文本生成、代码编写及实时搜索。",
    category: "general",
    tags: ["AI对话", "文本生成", "代码编写", "实时搜索"],
    pricing: "免费增值",
    rating: 4.6,
    reviewCount: 15000,
    website: "https://chatgpt.com",
    features: ["多模态", "GPT-4", "插件生态", "全球领先"],
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic开发的AI助手，写作质量高，语言自然，适合专业文案与程序员。",
    category: "general",
    tags: ["写作质量高", "语言自然", "长文本", "专业文案"],
    pricing: "免费增值",
    rating: 4.7,
    reviewCount: 6800,
    website: "https://claude.ai",
    features: ["写作质量高", "长文本处理", "代码能力", "安全对齐"],
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "国外知名AI营销文案工具，专注于广告、博客、社媒等营销内容生成。",
    category: "marketing",
    tags: ["营销文案", "广告生成", "博客写作", "社媒内容"],
    pricing: "付费",
    rating: 4.4,
    reviewCount: 3200,
    website: "https://jasper.ai",
    features: ["营销模板", "品牌语调", "团队协作", "多语言"],
  },
  {
    id: "copyai",
    name: "Copy.ai",
    description: "国外AI文案生成工具，专注于营销文案、广告语、产品描述等内容创作。",
    category: "marketing",
    tags: ["营销文案", "广告语", "产品描述", "社媒内容"],
    pricing: "免费增值",
    rating: 4.3,
    reviewCount: 2800,
    website: "https://copy.ai",
    features: ["营销模板", "免费额度", "多语言", "团队协作"],
  },
  {
    id: "writesonic",
    name: "WriteSonic",
    description: "国外AI写作平台，支持SEO文章、广告文案、产品描述等多种内容生成。",
    category: "seo",
    tags: ["SEO文章", "广告文案", "产品描述", "批量生成"],
    pricing: "免费增值",
    rating: 4.2,
    reviewCount: 1900,
    website: "https://writesonic.com",
    features: ["SEO优化", "批量生成", "多语言", "模板丰富"],
  },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter((tool) => tool.category === categoryId);
}

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function searchTools(query: string): Tool[] {
  const lowerQuery = query.toLowerCase();
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
