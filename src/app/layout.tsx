import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "文墨轩 - AI写作工具导航",
  description: "文墨轩，AI时代的笔墨工坊。精选AI写作工具，帮你写好每一篇文字。",
  keywords: "AI写作工具,AI写作,AI文案,AI写论文,AI写小说,AI写作助手",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="baidu-site-verification" content="codeva-pTbazaAick" />
      </head>
      <body className="antialiased min-h-screen bg-ink-50 text-ink-900">
        {children}
      </body>
    </html>
  );
}
