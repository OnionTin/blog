import{_ as a,r as e,o as t,c as p,a as n,d as o,w as c,e as l,b as i}from"./app-C_RrakEG.js";const u={},r=n("h2",{id:"视图",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#视图"},[n("span",null,"视图")])],-1),d=n("p",null,"视图是虚拟存在的表，如果一个查询重复使用，那么可以用视图简化。",-1),k=n("p",null,"视图就是一张表，所以他的增删改查操作和表一样，只是视图的数据来源是真实表。",-1),m=l(`<h2 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图"><span>创建视图</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">create</span> <span class="token keyword">view</span> view_name <span class="token punctuation">(</span>列名<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">as</span> 复杂的查询语句

<span class="token comment">-- user 和 computer 两张表，查询 tom 有几台电脑，将用户名和所拥有的电脑名给展示出来</span>
<span class="token keyword">create</span> <span class="token keyword">view</span> user_computer <span class="token punctuation">(</span>user_name<span class="token punctuation">,</span> computer_name<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">select</span>
u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> c<span class="token punctuation">.</span>name <span class="token keyword">from</span> <span class="token keyword">user</span> u<span class="token punctuation">,</span> computer c <span class="token keyword">where</span> u<span class="token punctuation">.</span>id <span class="token operator">=</span> c<span class="token punctuation">.</span>uid <span class="token operator">and</span> u<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改视图内容" tabindex="-1"><a class="header-anchor" href="#修改视图内容"><span>修改视图内容</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">update</span> view_name <span class="token keyword">set</span> 列名 <span class="token operator">=</span> 值 <span class="token keyword">where</span> 条件

<span class="token keyword">update</span> user_computer <span class="token keyword">set</span> computer_name <span class="token operator">=</span> <span class="token string">&#39;mac&#39;</span> <span class="token keyword">where</span> user_name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改视图结构" tabindex="-1"><a class="header-anchor" href="#修改视图结构"><span>修改视图结构</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">alter</span> <span class="token keyword">view</span> view_name <span class="token punctuation">(</span>列名<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">as</span> 复杂的查询语句

<span class="token comment">-- 修改视图结构</span>
<span class="token keyword">alter</span> <span class="token keyword">view</span> user_computer <span class="token punctuation">(</span>user_name<span class="token punctuation">,</span> cname<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">select</span>
u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> c<span class="token punctuation">.</span>name <span class="token keyword">from</span> <span class="token keyword">user</span> u<span class="token punctuation">,</span> computer c <span class="token keyword">where</span> u<span class="token punctuation">.</span>id <span class="token operator">=</span> c<span class="token punctuation">.</span>uid <span class="token operator">and</span> u<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图"><span>删除视图</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">drop</span> <span class="token keyword">view</span> view_name

<span class="token comment">-- 删除视图</span>
<span class="token keyword">drop</span> <span class="token keyword">view</span> user_computer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(w,h){const s=e("font");return t(),p("div",null,[r,n("blockquote",null,[d,k,o(s,{color:"red"},{default:c(()=>[i("视图的增删改查操作，都是对真实表的增删改查操作。")]),_:1})]),m])}const _=a(u,[["render",v],["__file","视图.html.vue"]]),b=JSON.parse(`{"path":"/admin/Java/MySql/%E8%A7%86%E5%9B%BE.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"视图","slug":"视图","link":"#视图","children":[]},{"level":2,"title":"创建视图","slug":"创建视图","link":"#创建视图","children":[]},{"level":2,"title":"修改视图内容","slug":"修改视图内容","link":"#修改视图内容","children":[]},{"level":2,"title":"修改视图结构","slug":"修改视图结构","link":"#修改视图结构","children":[]},{"level":2,"title":"删除视图","slug":"删除视图","link":"#删除视图","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/视图.md","excerpt":"<h2>视图</h2>\\n<blockquote>\\n<p>视图是虚拟存在的表，如果一个查询重复使用，那么可以用视图简化。</p>\\n<p>视图就是一张表，所以他的增删改查操作和表一样，只是视图的数据来源是真实表。</p>\\n</blockquote>\\n<h2>创建视图</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 格式</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">view</span> view_name <span class=\\"token punctuation\\">(</span>列名<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> 复杂的查询语句\\n\\n<span class=\\"token comment\\">-- user 和 computer 两张表，查询 tom 有几台电脑，将用户名和所拥有的电脑名给展示出来</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">view</span> user_computer <span class=\\"token punctuation\\">(</span>user_name<span class=\\"token punctuation\\">,</span> computer_name<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> <span class=\\"token keyword\\">select</span>\\nu<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">,</span> c<span class=\\"token punctuation\\">.</span>name <span class=\\"token keyword\\">from</span> <span class=\\"token keyword\\">user</span> u<span class=\\"token punctuation\\">,</span> computer c <span class=\\"token keyword\\">where</span> u<span class=\\"token punctuation\\">.</span>id <span class=\\"token operator\\">=</span> c<span class=\\"token punctuation\\">.</span>uid <span class=\\"token operator\\">and</span> u<span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'tom'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);export{_ as comp,b as data};
