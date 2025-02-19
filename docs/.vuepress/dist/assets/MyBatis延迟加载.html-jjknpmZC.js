import{_ as t,r as e,o as p,c as l,a,b as n,d as o,w as c,e as u}from"./app-CilA4iky.js";const i={},k=a("h2",{id:"mybatis-延迟加载",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mybatis-延迟加载"},[a("span",null,"MyBatis 延迟加载")])],-1),r=u(`<h3 id="开启延迟加载" tabindex="-1"><a class="header-anchor" href="#开启延迟加载"><span>开启延迟加载</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>SqlMapConfig.xml
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--全局开启延迟加载--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazyLoadingEnabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aggressiveLazyLoading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(m,g){const s=e("font");return p(),l("div",null,[k,a("blockquote",null,[a("p",null,[n("在"),o(s,{color:"red"},{default:c(()=>[n("MyBatis 一堆多查询中")]),_:1}),n("，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。")])]),r])}const h=t(i,[["render",d],["__file","MyBatis延迟加载.html.vue"]]),q=JSON.parse('{"path":"/admin/Java/MyBatis/MyBatis%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"MyBatis 延迟加载","slug":"mybatis-延迟加载","link":"#mybatis-延迟加载","children":[{"level":3,"title":"开启延迟加载","slug":"开启延迟加载","link":"#开启延迟加载","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatis/MyBatis延迟加载.md","excerpt":"<h2>MyBatis 延迟加载</h2>\\n<blockquote>\\n<p>在，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。</p>\\n</blockquote>\\n<h3>开启延迟加载</h3>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code>SqlMapConfig.xml\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>settings</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token comment\\">&lt;!--全局开启延迟加载--&gt;</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>setting</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>lazyLoadingEnabled<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>true<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>setting</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>aggressiveLazyLoading<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>false<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">/&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>settings</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');export{h as comp,q as data};
