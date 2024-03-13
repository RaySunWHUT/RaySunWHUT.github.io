import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "浪客剑心",
  description: "浪客剑心'BLOG",

  theme,
  plugins: [],

  // vite构建工具
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),


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