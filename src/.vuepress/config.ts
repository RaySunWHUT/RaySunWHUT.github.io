import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "浪客剑心",
  description: "浪客剑心'BLOG",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
