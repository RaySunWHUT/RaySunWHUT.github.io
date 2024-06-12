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
  navbarTitle: "Ray's Blog",
  
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

  // footer: "",
  // displayFooter: true,

  // 隐藏打印按钮
  print: false,

  // 全屏按钮, 纯净模式下会失效
  // 注: 与浏览器全屏效果一致
  fullscreen: false,

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
    // PageView: 浏览量(仅在开启Waline评论服务时才会支持)
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
  toc: true,

  // 路径导航
  breadcrumb: false,

  // 插件配置
  plugins: {
    // vuepress-theme-hope 默认捆绑 @vuepress/plugin-prismjs 支持代码高亮
    // 置为false, 以使 @vuepress/plugin-prismjs 生效
    prismjs: false,
    
    // markdown增强
    mdEnhance: {
      // 启用 GFM 警告
      alert: true,
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

      figure: true,
      // imgSize开启时, 可使用 =widthxheight 指定图像大小
      imgSize: true,
      
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
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

    // 使用Giscus作为文章评论区
    comment: {
      provider: "Giscus",
      repo: "RaySunWHUT/Giscus-Discussions",
      repoId: "R_kgDOL1vc9g", 
      category: "Announcements",
      categoryId: "DIC_kwDOL1vc9s4CfEXP"
    },
    
    // 自动生成目录(最大支持深度为3)
    catalog: {
      // exclude: 不进行目录解析的.md文件
      exclude: [
        "/java/jvm/", 
        "/algorithm/binarySearch/",
      ],
    },
  },
});
