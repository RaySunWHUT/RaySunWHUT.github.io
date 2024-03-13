import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.ts";
import sidebar from "./sidebar.ts";

export default hopeTheme({
  hostname: "https://raysunwhut.github.io",

  // 文章作者信息
  // author: {
  //   name: "浪客剑心",
  //   url: "https://raysunwhut.github.io",
  //   email: "sunruikk@gmail.com"
  // },

  iconAssets: "fontawesome-with-brands",

  // 深色模式
  darkmode: "switch",

  // 网站图标
  logo: "/website_assets/website_self/avatar.png",

  repo: "https://github.com/RaySunWHUT",
  // 仓库标签是否展示
  repoDisplay: false,

  docsDir: "src",

  // 导航栏: navbar
  navbar,
  // 导航栏标题
  navTitle: false,
  // 导航栏是否启用图标
  navbarIcon: false,
  // 向下滚动时隐藏导航栏
  navbarAutoHide: "always",
  // 导航栏布局
  navbarLayout: { 
    start: ["Brand"], 
    center: ["Links"], 
    end: ["Search", "Outlook"],

    // v1
    // center: ["Brand", "Links", "Search", "Repo", "Outlook"] 
  },

  // 侧边栏: sidebar
  sidebar: false,
  sidebarIcon: false,

  // footer: "",
  // displayFooter: true,


  // 隐藏打印按钮
  print: false,

  // 全屏按钮
  fullscreen: true,

  // 热重启
  hotReload: true,

  // 纯净模式: e.g. 置为 false 后, tag标签无颜色
  pure: false,

  // 博客配置
  blog: {
    // 每页最大展示文章数
    articlePerPage: 15,
    
    // 时间线顶部文字
    timeline: "TIME LINE",
    roundAvatar: true,
    description: "活在，此时此刻！",
    // intro: "/intro.html",
    medias: {
      // bilibili: "https://space.bilibili.com/296553547",
      // Zhihu: "https://www.zhihu.com/people/yu-sui-jiang-nan-97",
      bilibili: "https://www.bilibili.com/",
      GitHub: "https://github.com/RaySunWHUT",
      GMail: "mailto:sunruikk@gmail.com",
    },

    // 文章展示信息
    articleInfo: ["Date", "PageView", "Category", "Tag"],
  },

  // 是否显示页面贡献者
  contributors: false,
  // 是否显示页面最后更新时间
  lastUpdated: false,
  // page meta/页面元数据置为false
  editLink: false,
  metaLocales: {
    editLink: "在 GitHub 上编辑此页"
  },

  // 是否在桌面模式下右侧展示文章标题列表
  toc: false,

  // 路径导航
  breadcrumb: false,

  // 插件配置
  plugins: {
    // markdown增强
    mdEnhance: {
      // 启用代码案例
      demo: true,
      // 启用 ECharts 图表
      // echarts: true,
      // 启动图表支持
      // chart: true,

      // 链接格式文字 => 链接
      linkify: true,
      codetabs: true,
      tabs: true,
      // 启用提示容器
      hint: true,
      gfm: true,
      // 启用幻灯片
      revealJs: true,
    },

    // 搜索插件
    searchPro: {
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string | string[] | null,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string | string[] | null,
          formatter: "标签：$content",
        },
      ],
      // 自动提示搜索建议
      autoSuggestions: true
    },

    copyCode: {
      showInMobile: true,
    },
    
    // 版权标识配置
    copyright: {
      global: true,
      // disableCopy: true,
      // disableSelection: true,
      author: '浪客剑心',
      license: 'MIT'
    },

    // 启用博客
    blog: true,

    // 文章评论区
    // comment: {
    //   // You should generate and use your own comment service
    //   // 此处应升级为Giscus, 有空配置
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
  },
});
