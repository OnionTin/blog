import{_ as n,o as s,c as a,e as p}from"./app-C_RrakEG.js";const t={},o=p(`<h2 id="通过案例理解静态代理" tabindex="-1"><a class="header-anchor" href="#通过案例理解静态代理"><span>通过案例理解静态代理</span></a></h2><blockquote><p>拿租房子举例，有四种角色：租客(客户)、中介(代理)、房东(真实角色)、租房子(接口或抽象类)；代理的目的就是让真实角色(房东)尽量只做纯粹的事(租房子)，其他的(增加日志、统计、鉴权等)交给代理(中介)去做。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 1. 定义接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. 定义真实角色</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Host</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;房东出租房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 定义代理角色</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Proxy</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Host</span> host<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token class-name">Host</span> host<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>host <span class="token operator">=</span> host<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 中介带你看房子</span>
    host<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 房东租房子</span>
    <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 中介收中介费</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中介带你看房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中介收中介费&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4. 客户操作</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 房东要租房子</span>
    <span class="token class-name">Host</span> host <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Host</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 代理，中介帮房东租房子</span>
    <span class="token class-name">Proxy</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 客户找中介租房子，其中附属操作也都由代理完成</span>
    proxy<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 结果：</span>
    <span class="token comment">// 中介带你看房子</span>
    <span class="token comment">// 房东出租房子</span>
    <span class="token comment">// 中介收中介费</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理的好处" tabindex="-1"><a class="header-anchor" href="#代理的好处"><span>代理的好处</span></a></h3><ol><li>可以使真实角色(房东)的操作更加纯粹，不用关注一些公共的业务</li><li>公共业务交给代理角色(中介)完成，实现了业务的分工</li><li>公共业务发生扩展的时候，方便集中管理</li></ol><h3 id="静态代理的缺点" tabindex="-1"><a class="header-anchor" href="#静态代理的缺点"><span>静态代理的缺点</span></a></h3><ol><li>一个真实角色就会产生一个代理角色，代码量会翻倍，开发效率会降低</li></ol><h3 id="缺点的解决方案" tabindex="-1"><a class="header-anchor" href="#缺点的解决方案"><span>缺点的解决方案</span></a></h3><ol><li>使用动态代理</li><li>使用 AOP(面向切面编程)</li></ol>`,9),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","通过案例理解静态代理.html.vue"]]),d=JSON.parse('{"path":"/admin/Java/Spring/%E9%80%9A%E8%BF%87%E6%A1%88%E4%BE%8B%E7%90%86%E8%A7%A3%E9%9D%99%E6%80%81%E4%BB%A3%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"通过案例理解静态代理","slug":"通过案例理解静态代理","link":"#通过案例理解静态代理","children":[{"level":3,"title":"代理的好处","slug":"代理的好处","link":"#代理的好处","children":[]},{"level":3,"title":"静态代理的缺点","slug":"静态代理的缺点","link":"#静态代理的缺点","children":[]},{"level":3,"title":"缺点的解决方案","slug":"缺点的解决方案","link":"#缺点的解决方案","children":[]}]}],"git":{"updatedTime":1723453298000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Spring/通过案例理解静态代理.md","excerpt":"<h2>通过案例理解静态代理</h2>\\n<blockquote>\\n<p>拿租房子举例，有四种角色：租客(客户)、中介(代理)、房东(真实角色)、租房子(接口或抽象类)；代理的目的就是让真实角色(房东)尽量只做纯粹的事(租房子)，其他的(增加日志、统计、鉴权等)交给代理(中介)去做。</p>\\n</blockquote>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 1. 定义接口</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Rent</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">rent</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 2. 定义真实角色</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Host</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Rent</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token annotation punctuation\\">@Override</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">rent</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"房东出租房子\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 3. 定义代理角色</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Proxy</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Rent</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Host</span> host<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Proxy</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Host</span> host<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>host <span class=\\"token operator\\">=</span> host<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token annotation punctuation\\">@Override</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">rent</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">seeHouse</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 中介带你看房子</span>\\n    host<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">rent</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 房东租房子</span>\\n    <span class=\\"token function\\">fare</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 中介收中介费</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">seeHouse</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"中介带你看房子\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">fare</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"中介收中介费\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 4. 客户操作</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Client</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 房东要租房子</span>\\n    <span class=\\"token class-name\\">Host</span> host <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Host</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 代理，中介帮房东租房子</span>\\n    <span class=\\"token class-name\\">Proxy</span> proxy <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Proxy</span><span class=\\"token punctuation\\">(</span>host<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 客户找中介租房子，其中附属操作也都由代理完成</span>\\n    proxy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">rent</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 结果：</span>\\n    <span class=\\"token comment\\">// 中介带你看房子</span>\\n    <span class=\\"token comment\\">// 房东出租房子</span>\\n    <span class=\\"token comment\\">// 中介收中介费</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{k as comp,d as data};
