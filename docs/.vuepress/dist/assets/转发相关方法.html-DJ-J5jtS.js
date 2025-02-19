import{_ as n,o as s,c as a,e as t}from"./app-CilA4iky.js";const e="/blog/assets/转发-D3YXRJIm.jpg",p="/blog/assets/防盗链-CBOPllr7.jpg",o={},c=t('<h2 id="转发相关方法" tabindex="-1"><a class="header-anchor" href="#转发相关方法"><span>转发相关方法</span></a></h2><blockquote><p>转发：转发就是实现通过 Servlet 可以访问另外一个 Servlet 或者 html 的功能，这个功能和重定向很像，但有一定区别。</p></blockquote><p><img src="'+e+`" alt="转发"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
  <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 转发到某个servlet或者html</span>
    request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/servlet||/demo.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转发的特点" tabindex="-1"><a class="header-anchor" href="#转发的特点"><span>转发的特点</span></a></h3><ol><li>浏览器地址栏不变</li><li>转发只能进行内部跳转</li><li>转发是一次请求，一次响应，也是地址栏不能改变的原因</li><li>转发可以实现数据的共享(设置和获取)</li><li>转发可以实现 WEB-INF 目录下的资源访问</li><li>Tomcat 会自动添加项目的虚拟路径</li></ol><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向"><span>重定向</span></a></h3><ol><li>重定向是两次请求，两次响应</li><li>重定向可以访问其他站点</li><li>重定向地址栏会改变</li><li>正常情况下，重定向不能实现数据的共享，因为第二次请求是外部进来的</li><li>重定向不能实现 WEB-INF 目录下的资源访问， 因为第二次请求是外部进来的</li><li>需要手动设置项目的虚拟路径了，因为可以访问外部了</li></ol><h3 id="内部转发实现-web-inf-目录下的资源访问" tabindex="-1"><a class="header-anchor" href="#内部转发实现-web-inf-目录下的资源访问"><span>内部转发实现 WEB-INF 目录下的资源访问</span></a></h3><blockquote><p>浏览器(外部)正常是不能访问内部(WEB-INF、classes、META-INF、static、upload、resources)目录下的资源的，但是可以通过内部转发实现访问。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
  <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 转发到某个servlet或者html</span>
    request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/WEB-INF/demo.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防盗链的实现" tabindex="-1"><a class="header-anchor" href="#防盗链的实现"><span>防盗链的实现</span></a></h3><p><img src="`+p+`" alt="防盗链"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
  <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果referer存在，且包含youku，则转发到servlet||/demo.html</span>
    <span class="token comment">// 否则重定向到error.html</span>
    <span class="token class-name">String</span> referer <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;referer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>referer <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> referer<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;youku&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/servlet||/demo.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;/error.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[c];function i(u,r){return s(),a("div",null,l)}const d=n(o,[["render",i],["__file","转发相关方法.html.vue"]]),v=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/%E8%BD%AC%E5%8F%91%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"转发相关方法","slug":"转发相关方法","link":"#转发相关方法","children":[{"level":3,"title":"转发的特点","slug":"转发的特点","link":"#转发的特点","children":[]},{"level":3,"title":"重定向","slug":"重定向","link":"#重定向","children":[]},{"level":3,"title":"内部转发实现 WEB-INF 目录下的资源访问","slug":"内部转发实现-web-inf-目录下的资源访问","link":"#内部转发实现-web-inf-目录下的资源访问","children":[]},{"level":3,"title":"防盗链的实现","slug":"防盗链的实现","link":"#防盗链的实现","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Http/Request对象/转发相关方法.md","excerpt":"<h2>转发相关方法</h2>\\n<blockquote>\\n<p>转发：转发就是实现通过 Servlet 可以访问另外一个 Servlet 或者 html 的功能，这个功能和重定向很像，但有一定区别。</p>\\n</blockquote>\\n<p></p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code>\\n<span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">doGet</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> request<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">HttpServletResponse</span> response<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">ServletException</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n    request<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setCharacterEncoding</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"utf-8\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 转发到某个servlet或者html</span>\\n    request<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getRequestDispatcher</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/servlet||/demo.html\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forward</span><span class=\\"token punctuation\\">(</span>request<span class=\\"token punctuation\\">,</span> response<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{d as comp,v as data};
