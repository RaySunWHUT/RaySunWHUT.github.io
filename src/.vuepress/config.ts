import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "浪客剑心",
  description: "浪客剑心'BLOG",

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // pagePatterns: [
  //   // 匹配指定目录下的所有 Markdown 文件
  //   // "src/components/git/*.md",
  //   // 匹配特定的 Markdown 文件
  //   // "path/to/markdown/file.md",
  //   // // 匹配带有特定前缀的 Markdown 文件
  //   // "path/to/markdown/prefix-*.md",
  // ],

  // Enable it with pwa
  // shouldPrefetch: false,
});