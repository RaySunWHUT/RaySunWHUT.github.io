import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as a,c as l,b as t,d as e,a as r,e as i}from"./app-DXKPJHsU.js";const h="/assets/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C-luG9Kkz8.png",p="/assets/image-sTMEDcZB.png",c="/assets/image-1-DuDhkRky.png",g={},d=i('<p>描述一致性哈希算法的基本原理</p><h2 id="零、一致性哈希算法-思维导图" tabindex="-1"><a class="header-anchor" href="#零、一致性哈希算法-思维导图"><span>零、一致性哈希算法-思维导图</span></a></h2><figure><img src="'+h+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="一、问题背景" tabindex="-1"><a class="header-anchor" href="#一、问题背景"><span>一、问题背景</span></a></h2><p>在客户端请求量较大时，如何合理分配客户端对网站后台服务器集群的大量请求</p><h2 id="二、解决方案" tabindex="-1"><a class="header-anchor" href="#二、解决方案"><span>二、解决方案</span></a></h2><h3 id="_2-1、负载均衡层-加权轮询" tabindex="-1"><a class="header-anchor" href="#_2-1、负载均衡层-加权轮询"><span>2.1、负载均衡层 + 加权轮询</span></a></h3><p><strong>使用场景</strong>：每个节点存储的数据相同的情况，若数据分布式的存储在不同的节点的上，则无法使用加权轮询。</p><h3 id="_2-2、哈希算法" tabindex="-1"><a class="header-anchor" href="#_2-2、哈希算法"><span>2.2、哈希算法</span></a></h3><p>对节点数量进行取模运算。<br><strong>痛点</strong>：若节点数量发生变化，即在对系统做扩容或者缩容时，必须迁移改变了映射关系的数据。否则会出现查询不到数据的问题。</p><h3 id="_2-3、一致性哈希算法" tabindex="-1"><a class="header-anchor" href="#_2-3、一致性哈希算法"><span>2.3、一致性哈希算法</span></a></h3><p><strong>一致性哈希</strong> 是指将「<strong>存储节点</strong>」和「<strong>数据</strong>」都映射到一个首尾相连的哈希环上。</p><p>一致性哈希算法对2^32进行取模运算，由2^32个点组成 <strong>哈希环</strong>。<br><img src="'+p+'" alt="alt text" width="480" height="580"></p><p>一致性哈希算法流程：</p><ol><li>对 <strong>存储节点</strong> 进行哈希</li><li>对 <strong>数据</strong> 存取进行哈希</li></ol><p>在一致性哈希算法中，若 <strong>增加</strong> 或 <strong>移除</strong> 一个节点，仅影响该节点在哈希环上顺时针相邻的后继节点，其余数据不受影响。</p><p><strong>存在问题</strong></p><p>一致性哈希算法虽然减少了数据迁移量，但存在节点分布不均匀的问题。</p><h3 id="_2-4、带虚拟节点的一致性哈希算法" tabindex="-1"><a class="header-anchor" href="#_2-4、带虚拟节点的一致性哈希算法"><span>2.4、带虚拟节点的一致性哈希算法</span></a></h3><p>改为「<strong>两层</strong>」映射，<strong>目的</strong> 是 <strong>让节点相对均匀的分布在哈希环(节点数量越多，在哈希环上的分布就越均匀)</strong>。</p><ol><li>不再将 <strong>真实节点</strong> 映射到哈希环上。</li><li>将 <strong>虚拟节点</strong> 映射到哈希环上，并将 <strong>虚拟节点</strong> 映射(→) 到 <strong>实际节点</strong>。<br><img src="'+c+'" alt="alt text" width="480" height="480"></li></ol><p><strong>FAQ</strong>：使用 <strong>带虚拟结点</strong> 的一致性hash算法后，每次 新增/删除 物理机，都会 引入、剔除大量虚拟结点，那么数据迁移量不是更大了嘛 ?</p><p><strong>ans</strong>：引入虚拟结点后，在增删物理机时，虽然迁移的虚拟结点数量增多了，但两个虚拟结点间的 ”<strong>段长</strong>” 更短了；同时，无论是否使用带虚拟结点的一致性hash算法，机器上的总数据量是不变的，故迁移的数量是不变的，只是“带虚拟结点”的一致性hash算法会让数据分布的更均匀。</p><h2 id="三、一致性哈希算法实现" tabindex="-1"><a class="header-anchor" href="#三、一致性哈希算法实现"><span>三、一致性哈希算法实现</span></a></h2>',24),_={href:"https://mp.weixin.qq.com/s/zL-n7zq0Zyhf-l_GQil2dg",target:"_blank",rel:"noopener noreferrer"},m=t("h2",{id:"四、参考文献",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#四、参考文献"},[t("span",null,"四、参考文献")])],-1),u={href:"https://xiaolincoding.com/os/8_network_system/hash.html#_9-4-%E4%BB%80%E4%B9%88%E6%98%AF%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C",target:"_blank",rel:"noopener noreferrer"},E={href:"https://mp.weixin.qq.com/s/zL-n7zq0Zyhf-l_GQil2dg",target:"_blank",rel:"noopener noreferrer"};function f(x,y){const n=o("ExternalLinkIcon");return a(),l("div",null,[d,t("p",null,[e("可参考labuladong的"),t("a",_,[e("一致性hash算法实现"),r(n)])]),m,t("ol",null,[t("li",null,[t("a",u,[e("https://xiaolincoding.com/os/8_network_system/hash.html#_9-4-什么是一致性哈希"),r(n)])]),t("li",null,[t("a",E,[e("https://mp.weixin.qq.com/s/zL-n7zq0Zyhf-l_GQil2dg"),r(n)])])])])}const k=s(g,[["render",f],["__file","一致性哈希.html.vue"]]),v=JSON.parse('{"path":"/components/%E5%93%88%E5%B8%8C%E7%AE%97%E6%B3%95/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C.html","title":"一致性哈希","lang":"zh-CN","frontmatter":{"title":"一致性哈希","index":true,"category":["中间件"],"tag":["hash"],"date":"2024-03-01T00:00:00.000Z","star":false,"description":"描述一致性哈希算法的基本原理","head":[["meta",{"property":"og:url","content":"https://raysunwhut.github.io/components/%E5%93%88%E5%B8%8C%E7%AE%97%E6%B3%95/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C.html"}],["meta",{"property":"og:site_name","content":"浪客剑心"}],["meta",{"property":"og:title","content":"一致性哈希"}],["meta",{"property":"og:description","content":"描述一致性哈希算法的基本原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-11T07:59:22.000Z"}],["meta",{"property":"article:tag","content":"hash"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-11T07:59:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一致性哈希\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-11T07:59:22.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"零、一致性哈希算法-思维导图","slug":"零、一致性哈希算法-思维导图","link":"#零、一致性哈希算法-思维导图","children":[]},{"level":2,"title":"一、问题背景","slug":"一、问题背景","link":"#一、问题背景","children":[]},{"level":2,"title":"二、解决方案","slug":"二、解决方案","link":"#二、解决方案","children":[{"level":3,"title":"2.1、负载均衡层 + 加权轮询","slug":"_2-1、负载均衡层-加权轮询","link":"#_2-1、负载均衡层-加权轮询","children":[]},{"level":3,"title":"2.2、哈希算法","slug":"_2-2、哈希算法","link":"#_2-2、哈希算法","children":[]},{"level":3,"title":"2.3、一致性哈希算法","slug":"_2-3、一致性哈希算法","link":"#_2-3、一致性哈希算法","children":[]},{"level":3,"title":"2.4、带虚拟节点的一致性哈希算法","slug":"_2-4、带虚拟节点的一致性哈希算法","link":"#_2-4、带虚拟节点的一致性哈希算法","children":[]}]},{"level":2,"title":"三、一致性哈希算法实现","slug":"三、一致性哈希算法实现","link":"#三、一致性哈希算法实现","children":[]},{"level":2,"title":"四、参考文献","slug":"四、参考文献","link":"#四、参考文献","children":[]}],"git":{"createdTime":1718092762000,"updatedTime":1718092762000,"contributors":[{"name":"RaySunWHUT","email":"42628912+RaySunWHUT@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"components/哈希算法/一致性哈希.md","localizedDate":"2024年3月1日","excerpt":"<p>描述一致性哈希算法的基本原理</p>\\n","autoDesc":true}');export{k as comp,v as data};
