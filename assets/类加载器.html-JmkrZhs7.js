import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as o,b as e,d as a,a as r,e as i}from"./app-DXKPJHsU.js";const c={},d=i('<p>General summary</p><h2 id="类加载器结构" tabindex="-1"><a class="header-anchor" href="#类加载器结构"><span>类加载器结构</span></a></h2><h2 id="自定义类加载器" tabindex="-1"><a class="header-anchor" href="#自定义类加载器"><span>自定义类加载器</span></a></h2><h2 id="实战学习" tabindex="-1"><a class="header-anchor" href="#实战学习"><span>实战学习</span></a></h2><h3 id="使用自定义类加载器解析mybatis注解" tabindex="-1"><a class="header-anchor" href="#使用自定义类加载器解析mybatis注解"><span>使用自定义类加载器解析Mybatis注解</span></a></h3><h3 id="线程上下文类加载器" tabindex="-1"><a class="header-anchor" href="#线程上下文类加载器"><span>线程上下文类加载器</span></a></h3><h4 id="mysql-driver" tabindex="-1"><a class="header-anchor" href="#mysql-driver"><span>MySQL Driver</span></a></h4><h4 id="launchedurlclassloader" tabindex="-1"><a class="header-anchor" href="#launchedurlclassloader"><span>LaunchedURLClassLoader</span></a></h4><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><ol><li><p>如何判断两个类(Class对象)是否相等 ?</p></li><li><p>本地IDEA启动SpringBoot与服务器jar包形式运行SpringBoot项目的区别是什么 ?</p></li><li><p>对于String.class或者Object.class这样的由BootstrapClassLoader加载的类，当使用AppClassLoader加载器加载某个类时，若该类中出现String.class的话，那么是不是每次都需要基于双亲委派模型递归遍历，直至BootstrapClassLoader调用findLoadedClass方法时，才可以判断出String.class或者Object.class已被加载呢 ?</p></li></ol><ol start="4"><li><p>当自定义类加载需要加载的类中出现String.class时，类加载如何加载 ?</p></li><li><p>为什么我看不到AppClassLoader的源码 ?</p></li><li><p>在不遵循双亲委派模型的情况下，使用自定义类加载器加载String.class会发生什么 ?</p></li><li><p>JVM在加载一个类时，发现类中引用了尚未被加载至JVM中的类(对于每个类)，JVM是如何处理处理的 ?</p></li></ol><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>',12),h={href:"https://developer.aliyun.com/article/1114576",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),_={href:"https://blog.csdn.net/yangliuhbhd/article/details/81022057",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),b={href:"https://frank909.blog.csdn.net/article/details/54973413",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),g={href:"https://blog.csdn.net/zxh1991811/article/details/107981268",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),y={href:"http://www.yxhuang.com/2020/07/07/java-class-loader/",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),v={href:"https://blog.csdn.net/m0_46761060/article/details/124417972",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),w={href:"https://blog.csdn.net/zuodaoyong/article/details/113788263",target:"_blank",rel:"noopener noreferrer"},j=e("br",null,null,-1),B={href:"https://blog.csdn.net/justloveyou_/article/details/72217806",target:"_blank",rel:"noopener noreferrer"},M=e("br",null,null,-1),z={href:"https://spring-source-code-learning.gitbook.teaho.net/boot/spring-boot-loader.html",target:"_blank",rel:"noopener noreferrer"},q=e("br",null,null,-1),L={href:"https://www.jianshu.com/p/0a86966146b6",target:"_blank",rel:"noopener noreferrer"},V=e("br",null,null,-1),E={href:"https://mp.weixin.qq.com/s?__biz=MzkwNzI0MzQ2NQ==&mid=2247488905&idx=1&sn=654ee37d8aaaa1415f30bdbf065de129&source=41#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},A=e("br",null,null,-1),N={href:"https://blog.csdn.net/qq_44543508/article/details/102983363",target:"_blank",rel:"noopener noreferrer"},C=e("br",null,null,-1),J={href:"https://segmentfault.com/a/1190000023130736?utm_source=sf-similar-article",target:"_blank",rel:"noopener noreferrer"};function S(D,Q){const t=l("ExternalLinkIcon");return s(),o("div",null,[d,e("p",null,[e("a",h,[a("https://developer.aliyun.com/article/1114576"),r(t)]),p,e("a",_,[a("https://blog.csdn.net/yangliuhbhd/article/details/81022057"),r(t)]),u,e("a",b,[a("https://frank909.blog.csdn.net/article/details/54973413"),r(t)]),m,e("a",g,[a("https://blog.csdn.net/zxh1991811/article/details/107981268"),r(t)]),f,e("a",y,[a("http://www.yxhuang.com/2020/07/07/java-class-loader/"),r(t)]),k,e("a",v,[a("https://blog.csdn.net/m0_46761060/article/details/124417972"),r(t)]),x,e("a",w,[a("https://blog.csdn.net/zuodaoyong/article/details/113788263"),r(t)]),j,e("a",B,[a("https://blog.csdn.net/justloveyou_/article/details/72217806"),r(t)]),M,e("a",z,[a("https://spring-source-code-learning.gitbook.teaho.net/boot/spring-boot-loader.html"),r(t)]),q,e("a",L,[a("https://www.jianshu.com/p/0a86966146b6"),r(t)]),V,e("a",E,[a("https://mp.weixin.qq.com/s?__biz=MzkwNzI0MzQ2NQ==&mid=2247488905&idx=1&sn=654ee37d8aaaa1415f30bdbf065de129&source=41#wechat_redirect"),r(t)]),A,e("a",N,[a("https://blog.csdn.net/qq_44543508/article/details/102983363"),r(t)]),C,e("a",J,[a("https://segmentfault.com/a/1190000023130736?utm_source=sf-similar-article"),r(t)])])])}const I=n(c,[["render",S],["__file","类加载器.html.vue"]]),O=JSON.parse('{"path":"/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html","title":"深度解析JVM类加载机制","lang":"zh-CN","frontmatter":{"title":"深度解析JVM类加载机制","category":["java"],"tag":["JVM","classLoader","注解"],"article":false,"date":"2023-06-28T00:00:00.000Z","description":"General summary","head":[["meta",{"property":"og:url","content":"https://raysunwhut.github.io/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"浪客剑心"}],["meta",{"property":"og:title","content":"深度解析JVM类加载机制"}],["meta",{"property":"og:description","content":"General summary"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:tag","content":"classLoader"}],["meta",{"property":"article:tag","content":"注解"}],["meta",{"property":"article:published_time","content":"2023-06-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"深度解析JVM类加载机制\\",\\"description\\":\\"General summary\\"}"]]},"headers":[{"level":2,"title":"类加载器结构","slug":"类加载器结构","link":"#类加载器结构","children":[]},{"level":2,"title":"自定义类加载器","slug":"自定义类加载器","link":"#自定义类加载器","children":[]},{"level":2,"title":"实战学习","slug":"实战学习","link":"#实战学习","children":[{"level":3,"title":"使用自定义类加载器解析Mybatis注解","slug":"使用自定义类加载器解析mybatis注解","link":"#使用自定义类加载器解析mybatis注解","children":[]},{"level":3,"title":"线程上下文类加载器","slug":"线程上下文类加载器","link":"#线程上下文类加载器","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"java/jvm/类加载器.md","localizedDate":"2023年6月28日","excerpt":"<p>General summary</p>\\n","autoDesc":true}');export{I as comp,O as data};
