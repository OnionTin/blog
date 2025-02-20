import{_ as n,o as s,c as a,e as p}from"./app-C_RrakEG.js";const t={},e=p(`<h2 id="增删改" tabindex="-1"><a class="header-anchor" href="#增删改"><span>增删改</span></a></h2><h3 id="增加" tabindex="-1"><a class="header-anchor" href="#增加"><span>增加</span></a></h3><h4 id="添加一条记录" tabindex="-1"><a class="header-anchor" href="#添加一条记录"><span>添加一条记录</span></a></h4><ul><li>第一种格式</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名 <span class="token punctuation">(</span>字段<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 比如表内有两个字段，可以说只给一个赋值，另外一个不赋值</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二种格式</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名 <span class="token keyword">values</span> <span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 表内有几个字段就必须给几个值，且顺序都要对应</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加多条记录" tabindex="-1"><a class="header-anchor" href="#添加多条记录"><span>添加多条记录</span></a></h4><ul><li>第一种格式</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名 <span class="token punctuation">(</span>字段<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">values</span>
<span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二种格式</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名 <span class="token keyword">values</span> <span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;Jenny&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Chen&#39;</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>添加一条记录并获取自增 id</p></li><li><p>添加一条记录并获取自增 id</p></li></ol><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改"><span>修改</span></a></h3><h4 id="修改所有记录" tabindex="-1"><a class="header-anchor" href="#修改所有记录"><span>修改所有记录</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">update</span> 表名 <span class="token keyword">set</span> 字段<span class="token number">1</span> <span class="token operator">=</span> newdata1<span class="token punctuation">,</span> 字段<span class="token number">2</span> <span class="token operator">=</span> newdata2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改多条记录" tabindex="-1"><a class="header-anchor" href="#修改多条记录"><span>修改多条记录</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">update</span> 表名 <span class="token keyword">set</span> 字段<span class="token number">1</span> <span class="token operator">=</span> newdata1<span class="token punctuation">,</span> 字段<span class="token number">2</span> <span class="token operator">=</span> newdata2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">where</span> 条件<span class="token punctuation">;</span>

<span class="token comment">-- 条件的类型有很多，当前的条件格式是 字段名 = 值</span>
<span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> age <span class="token operator">=</span> <span class="token number">21</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">21</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><h4 id="删除所有记录" tabindex="-1"><a class="header-anchor" href="#删除所有记录"><span>删除所有记录</span></a></h4><p>方式一:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> 表名<span class="token punctuation">;</span>

<span class="token keyword">delete</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">truncate</span> <span class="token keyword">table</span> 表名<span class="token punctuation">;</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>区别：</p><ol><li>方式一是逐行删除，删除后，表的结构还在，可以重新插入数据</li><li>方式二是先将整张表删除，然后再重新创建一张同名表；表的结构被删除，不可以重新插入数据</li></ol><h4 id="删除多条记录" tabindex="-1"><a class="header-anchor" href="#删除多条记录"><span>删除多条记录</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> 表名 <span class="token keyword">where</span> 条件<span class="token punctuation">;</span>
<span class="token comment">-- 条件的类型有很多，当前的条件格式是 字段名 = 值</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">delete</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span> <span class="token operator">and</span> age <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","增删改.html.vue"]]),d=JSON.parse(`{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A2%9E%E5%88%A0%E6%94%B9.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"增删改","slug":"增删改","link":"#增删改","children":[{"level":3,"title":"增加","slug":"增加","link":"#增加","children":[]},{"level":3,"title":"修改","slug":"修改","link":"#修改","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]}]}],"git":{"updatedTime":1719909739000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/MySql/增删改.md","excerpt":"<h2>增删改</h2>\\n<h3>增加</h3>\\n<h4>添加一条记录</h4>\\n<ul>\\n<li>第一种格式</li>\\n</ul>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> 表名 <span class=\\"token punctuation\\">(</span>字段<span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> 字段<span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span>data1<span class=\\"token punctuation\\">,</span> data2<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> <span class=\\"token keyword\\">user</span> <span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span> age<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Tom'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 比如表内有两个字段，可以说只给一个赋值，另外一个不赋值</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> <span class=\\"token keyword\\">user</span> <span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Tom'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);export{k as comp,d as data};
