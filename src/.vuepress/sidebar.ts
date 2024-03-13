import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // home页路由
    // "",
    {
      text: "Java",
      prefix: "java/",
      children: "structure",
    },
    {
      text: "算法",
      prefix: "algorithm/",
      children: "structure",
    },
    {
      text: "中间件",
      prefix: "components/",
      children: "structure",
    },
  ],
});
