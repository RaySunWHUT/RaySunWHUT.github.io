import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // home页路由
    // "",
    {
      text: "操作系统",
      prefix: "os/",
      // link: "os/",
      // 通过文件结构自动生成侧边栏
      children: "structure",
    },
    {
      text: "数据库",
      prefix: "db/",
      children: "structure",
    },
    {
      text: "Java",
      prefix: "java/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});
