import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";
import { viteBundler } from '@vuepress/bundler-vite';
import { shikiPlugin } from "@vuepress/plugin-shiki";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "浪客剑心",
  description: "Ray's Blog",

  theme,
  plugins: [
    // @vuepress/plugin-shiki依赖: 可改变 代码背景颜色(code-bg-color) 等属性
    // 需将 @vuepress/plugin-prismjs 置为false，才会生效
    shikiPlugin({
      // 你的选项
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    }),
  ],

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