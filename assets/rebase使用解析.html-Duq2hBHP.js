import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as c,c as d,a as t,w as a,d as s,b as e,e as r}from"./app-DXKPJHsU.js";const g="/assets/git_rebase_pic-BqHBQunZ.png",m="/assets/merge_vs_rebase-DaXA4-3H.png",p="/assets/git_rebase-DcE5Qvzz.png",h="/assets/rebase_%E9%A1%BA%E5%BA%8F%E8%B0%83%E6%95%B4-B7VTTsoV.png",b="/assets/rebase_drop%E6%8C%87%E4%BB%A4-OQUDLaMH.png",u="/assets/rebase_squash%E6%8C%87%E4%BB%A4-CKTgPvFA.png",_="/assets/rebase_%E7%BB%BC%E5%90%88%E5%BA%94%E7%94%A8-DMsamUX8.png",k="/assets/image-2-BoPL4Sk0.png",f="/assets/rebase_commit_update-CC697EJw.gif",y="/assets/rebase_fixup-lOeys3Z9.png",v={},E=r('<div class="hint-container note"><p class="hint-container-title">浅析git rebase命令的作用、使用方法、适用场景以及和merge命令的区别</p></div><h2 id="一、文章梗概" tabindex="-1"><a class="header-anchor" href="#一、文章梗概"><span>一、文章梗概</span></a></h2><figure><img src="'+g+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="二、rebase-变基-与merge-合并-区别" tabindex="-1"><a class="header-anchor" href="#二、rebase-变基-与merge-合并-区别"><span>二、rebase(变基)与merge(合并)区别</span></a></h2><p>在开发过程中，经常遇到的一个场景是要将个人开发的feature分支 <strong>pull request</strong> 到master分支，但master分支又已经有了新的变更，pull request存在代码冲突(conflict)。面对这种情况通常有2种处理方式:</p><ol><li>将master分支的最新提交 <strong>合并(merge)</strong> 到feature分支， <strong>合并(merge)</strong> 过程中解决冲突。</li><li>在feature分支上执行 <strong>变基(rebase master)</strong>，<strong>变基(rebase master)</strong> 过程中解决冲突。</li></ol><figure><img src="'+m+'" alt="rebase与merge对比" width="700" height="480" tabindex="0"><figcaption>rebase与merge对比</figcaption></figure><p><strong>合并(merge)</strong> 操作会执行三路合并(<strong>c1、c4、c6</strong>)，并在feature分支生成一个合并后的新commit提交节点(<strong>c7</strong>)。<br> 分支的合并痕迹可在git graph(执行命令 <strong><code>git log --oneline --graph --decorate</code></strong>)查看。</p><p><strong>变基(rebase)</strong> 操作会将feature分支的commit提交节点暂存下来，并以master分支的最新提交(HEAD)为新的<strong>基(base)</strong>，将暂存下的commit提交节点接到新的 <strong>基(base)</strong> 上，实现 <strong>变基(rebase)操作</strong>(<strong>c1 -&gt; c6</strong>)。<br> 可以看到，<strong>rebase操作没有新增commit提交</strong>，并且即使通过git graph查看也感知不到有将master分支最新提交整合至feature分支的操作。</p><p>由于代码评审时，commit提交节点愈清晰愈好，且不应在feature分支增加不属于feature分支本身的commit提交；<strong>所以，在整合个人开发的feature分支时，推荐使用rebase，而非merge</strong>。</p>',10),A=e("b",null,"注",-1),B=e("strong",null,"merge(c7)",-1),C=e("strong",null,"rebase(c4')",-1),x=r('<h2 id="三、交互式rebase" tabindex="-1"><a class="header-anchor" href="#三、交互式rebase"><span>三、交互式rebase</span></a></h2><p>在日常开发中，rebase操作的正确使用姿态是 —— <strong>使用交互式rebase</strong>，使用交互式rebase可以让操作执行者参与到git rebase操作的整个过程，更加精确的实现commit提交的压缩、拆分、重排、修改和丢弃等操作。</p><h3 id="_3-1、rebase操作命令" tabindex="-1"><a class="header-anchor" href="#_3-1、rebase操作命令"><span>3.1、rebase操作命令</span></a></h3><p>在feature分支上执行 <strong><code>git rebase -i master</code></strong> 后会出现如下内容：<br><img src="'+p+'" alt=""><br> 其中 <strong>c2、c3、c4</strong> 分别表示feature分支创建后的3次新commit提交。<br> 通过修改文件内容可以实现：</p><ol><li><p><strong>调整commit提交顺序</strong><br><img src="'+h+'" alt="" width="800" height="480"></p></li><li><p><strong>销毁某次commit提交(drop)</strong><br><img src="'+b+'" alt="" width="800" height="480"></p></li><li><p><strong>合并多个commit提交(squash)</strong><br> squash命令会将当前commit提交合并(压缩)到上一个commit提交中，合并后的“新”commit提交会有新的commit哈希值。<br><img src="'+u+'" alt="" width="830" height="480"></p></li><li><p><strong>修改commit提交的描述信息(reword)</strong></p></li><li><p><strong>修改commit提交的描述信息和内容(edit)</strong></p></li><li><p>不希望真正执行变基, 但又需要整理commit提交历史的场景(<strong>伪变基</strong>)</p></li></ol><p>可根据实际情况将上述操作结合使用<br><img src="'+_+'" alt="" width="800" height="480"></p><h3 id="_3-2、rebase-edit命令与reword命令区别" tabindex="-1"><a class="header-anchor" href="#_3-2、rebase-edit命令与reword命令区别"><span>3.2、rebase: edit命令与reword命令区别</span></a></h3>',7),F=e("li",null,[e("p",null,[e("strong",null,"reword"),s("："),e("br"),s(" 使用 "),e("strong",null,"reword"),s(" 命令，可以修改提交的描述信息(msg)，但无法修改提交内容。"),e("br"),s(" 使用 "),e("strong",null,"reword"),s(" 命令时，git会打开一个编辑器，可在编辑器内修改commit提交的描述信息。完成后，git会创建一个替换原commit提交的hash值不同的“新”提交。")])],-1),w=r("<p><strong>edit</strong>：<br> 使用 <strong>edit</strong> 命令，可以修改提交的描述信息(msg)以及提交内容。<br><strong>edit命令不同使用场景处理方法</strong>：</p><ol><li>没有修改commit提交内容(如新增、修改和删除文件内容等)，但要修改commit提交的描述信息(msg)<br><strong>处理方法</strong>: 此时只能通过 <strong><code>git commit --amend</code></strong> 修改提交描述信息。</li><li>修改了commit提交内容(已通过 <strong><code>git add</code></strong> 添加至 <strong>暂存区(stage)</strong>)，同时要修改commit提交的描述信息(msg)<br><strong>处理方法(2种)</strong>: <ol><li>执行 <strong><code>git commit --amend</code></strong> 修改提交描述信息，然后执行 <strong><code>git rebase --continue</code></strong> 命令继续rebase操作。</li><li>直接执行 <strong><code>git rebase --continue</code></strong> 命令，如果之前没有执行过 <strong><code>git commit --amend</code></strong> 命令，则git会打开一个编辑器，可在编辑器内修改commit提交的描述信息。</li></ol></li></ol><p><strong>补充说明</strong>：<br> 使用 <strong>edit</strong> 命令时，git 会暂停 rebase 过程，并将当前分支的 <strong>HEAD</strong> 指向选中提交。此时，可以使用 <strong><code>git commit --amend</code></strong> 命令修改选中提交的描述信息。</p>",3),D=e("b",null,"注",-1),q=e("strong",null,"--amend",-1),T=e("strong",null,"最近一次提交(HEAD)",-1),H=e("strong",null,"HEAD",-1),I=e("strong",null,"edit",-1),V=e("strong",null,"--amend",-1),Z=r(`<h2 id="四、场景实践" tabindex="-1"><a class="header-anchor" href="#四、场景实践"><span>四、场景实践</span></a></h2><h3 id="_4-1、伪变基-修改指定分支的commit提交描述信息-reword" tabindex="-1"><a class="header-anchor" href="#_4-1、伪变基-修改指定分支的commit提交描述信息-reword"><span>4.1、伪变基-修改指定分支的commit提交描述信息(reword)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 命令解释:</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># commitId: 要修改提交信息的commit提交的哈希值</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># ~1: git引用操作符，表示选择该提交的父提交作为基来进行伪变基操作</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> rebase</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -i</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [commitId]~1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e.g. 修改commitId为 1c6ce75 的提交描述信息<br><img src="`+k+'" alt=""></p><p>操作流程如下:<br><img src="'+f+`" alt=""></p><h3 id="_4-2、标记commit提交-实现rebase自动编排" tabindex="-1"><a class="header-anchor" href="#_4-2、标记commit提交-实现rebase自动编排"><span>4.2、标记commit提交，实现rebase自动编排</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 命令解释:</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 使用 --fixup 或 --squash 参数项可对commit提交进行额外标记</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --fixup=[commitId]</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;提交描述信息&quot;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --squash=[commitId]</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;提交描述信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 使用 --autosquash 参数项可对已标记的commit提交自动完成指令组装，将有标记的commit提交合并(压缩)到 --fixup 或 --squash 参数项对应的commit提交</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> rebase</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -i</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [commitId] --autosquash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+'" alt="" width="800" height="400" tabindex="0"><figcaption></figcaption></figure><h2 id="五、rebase优缺点" tabindex="-1"><a class="header-anchor" href="#五、rebase优缺点"><span>五、rebase优缺点</span></a></h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ol><li>整合master分支时，不会增加不属于feature分支本身的提交</li><li>rebase可以使分支的提交历史变得整洁</li><li>可以使用交互式rebase，更加精确的实现commit提交的压缩、拆分、重排、修改和丢弃等操作，掌控代码开发的全流程</li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ol><li>rebase会更改git提交历史，使得git操作历史难以回溯</li><li>在公共分支上执行rebase可能会导致提交日志记录发生混乱(相同作者、时间、内容的commit重复出现等情况)</li></ol><h2 id="六、使用法则" tabindex="-1"><a class="header-anchor" href="#六、使用法则"><span>六、使用法则</span></a></h2><p>在个人开发的feature分支上执行 <strong>rebase(变基)</strong>，在公共分支上执行 <strong>merge(合并)</strong>。</p>',15),N=e("b",null,"注",-1),z=e("strong",null,"永远不要在多人协作(已被其他人引用)的公共分支(e.g. master分支)上执行rebase！！",-1),S=e("h2",{id:"七、参考文献",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#七、参考文献"},[e("span",null,"七、参考文献")])],-1),L={href:"https://www.bilibili.com/video/BV1Xb4y1773F/?spm_id_from=333.788",target:"_blank",rel:"noopener noreferrer"};function P(U,X){const i=n("font"),o=n("ExternalLinkIcon");return c(),d("div",null,[E,t(i,{color:"#C3002E"},{default:a(()=>[A]),_:1}),s(": 只要冲突(conflict)处理方式相同，那么分别执行 "),B,s(" 和 "),C,s(" 后的节点内容是完全相同的。"),x,e("ul",null,[F,e("li",null,[w,t(i,{color:"#C3002E"},{default:a(()=>[D]),_:1}),s(": "),q,s(" 参数项只能修改 "),T,s(" 的描述信息，但由于 "),H,s(" 此时正指向 "),I,s(" 命令对应的提交，所以，可以使用 "),V,s(" 参数项。")])]),Z,t(i,{color:"#C3002E"},{default:a(()=>[N]),_:1}),s(": "),z,S,e("ol",null,[e("li",null,[e("a",L,[s("https://www.bilibili.com/video/BV1Xb4y1773F/?spm_id_from=333.788"),t(o)])])])])}const Q=l(v,[["render",P],["__file","rebase使用解析.html.vue"]]),R=JSON.parse('{"path":"/components/git/rebase%E4%BD%BF%E7%94%A8%E8%A7%A3%E6%9E%90/rebase%E4%BD%BF%E7%94%A8%E8%A7%A3%E6%9E%90.html","title":"git rebase命令详解","lang":"zh-CN","frontmatter":{"title":"git rebase命令详解","index":true,"category":["中间件"],"tag":["git"],"date":"2024-02-22T00:00:00.000Z","star":true,"description":"浅析git rebase命令的作用、使用方法、适用场景以及和merge命令的区别","head":[["meta",{"property":"og:url","content":"https://raysunwhut.github.io/components/git/rebase%E4%BD%BF%E7%94%A8%E8%A7%A3%E6%9E%90/rebase%E4%BD%BF%E7%94%A8%E8%A7%A3%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"浪客剑心"}],["meta",{"property":"og:title","content":"git rebase命令详解"}],["meta",{"property":"og:description","content":"浅析git rebase命令的作用、使用方法、适用场景以及和merge命令的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-11T07:59:22.000Z"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2024-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-11T07:59:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git rebase命令详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-11T07:59:22.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、文章梗概","slug":"一、文章梗概","link":"#一、文章梗概","children":[]},{"level":2,"title":"二、rebase(变基)与merge(合并)区别","slug":"二、rebase-变基-与merge-合并-区别","link":"#二、rebase-变基-与merge-合并-区别","children":[]},{"level":2,"title":"三、交互式rebase","slug":"三、交互式rebase","link":"#三、交互式rebase","children":[{"level":3,"title":"3.1、rebase操作命令","slug":"_3-1、rebase操作命令","link":"#_3-1、rebase操作命令","children":[]},{"level":3,"title":"3.2、rebase: edit命令与reword命令区别","slug":"_3-2、rebase-edit命令与reword命令区别","link":"#_3-2、rebase-edit命令与reword命令区别","children":[]}]},{"level":2,"title":"四、场景实践","slug":"四、场景实践","link":"#四、场景实践","children":[{"level":3,"title":"4.1、伪变基-修改指定分支的commit提交描述信息(reword)","slug":"_4-1、伪变基-修改指定分支的commit提交描述信息-reword","link":"#_4-1、伪变基-修改指定分支的commit提交描述信息-reword","children":[]},{"level":3,"title":"4.2、标记commit提交，实现rebase自动编排","slug":"_4-2、标记commit提交-实现rebase自动编排","link":"#_4-2、标记commit提交-实现rebase自动编排","children":[]}]},{"level":2,"title":"五、rebase优缺点","slug":"五、rebase优缺点","link":"#五、rebase优缺点","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"六、使用法则","slug":"六、使用法则","link":"#六、使用法则","children":[]},{"level":2,"title":"七、参考文献","slug":"七、参考文献","link":"#七、参考文献","children":[]}],"git":{"createdTime":1690055411000,"updatedTime":1718092762000,"contributors":[{"name":"RaySunWHUT","email":"42628912+RaySunWHUT@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":5.47,"words":1642},"filePathRelative":"components/git/rebase使用解析/rebase使用解析.md","localizedDate":"2024年2月22日","excerpt":"<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">浅析git rebase命令的作用、使用方法、适用场景以及和merge命令的区别</p>\\n</div>\\n","autoDesc":true}');export{Q as comp,R as data};
