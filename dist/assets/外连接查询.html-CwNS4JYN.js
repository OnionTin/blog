import{_ as n,o as s,c as a,e}from"./app-C_RrakEG.js";const p={},t=e(`<h2 id="外连接查询" tabindex="-1"><a class="header-anchor" href="#外连接查询"><span>外连接查询</span></a></h2><p>取交集 + 左表(或者右表)的剩余记录的补充</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 左外连接查询格式</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">left</span> <span class="token keyword">join</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 左外连接案例</span>
<span class="token comment">-- 左外连接查询结果集 = 符合连接条件的记录 + 左表剩余记录</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> a<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> b<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;bbb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;ccc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">left</span> <span class="token keyword">join</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
<span class="token comment">-- 结果:</span>
<span class="token comment">-- +----+------+----+------+</span>
<span class="token comment">-- | id | name | id | name |</span>
<span class="token comment">-- +----+------+----+------+</span>
<span class="token comment">-- |  1 | a    |  1 | aaa    |</span>
<span class="token comment">-- |  2 | b    |  2 | bbb    |</span>
<span class="token comment">-- |  3 | c    |  null | null    |</span>
<span class="token comment">-- +----+------+----+------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 右外连接查询格式</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">right</span> <span class="token keyword">join</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 右外连接案例</span>
<span class="token comment">-- 右外连接查询结果集 = 符合连接条件的记录 + 右表剩余记录</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> a<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> b<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;bbb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;ccc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">right</span> <span class="token keyword">join</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
<span class="token comment">-- 结果:</span>
<span class="token comment">-- +----+------+----+------+</span>
<span class="token comment">-- | id | name | id | name |</span>
<span class="token comment">-- +----+------+----+------+</span>
<span class="token comment">-- |  1 | a    |  1 | aaa    |</span>
<span class="token comment">-- |  2 | b    |  2 | bbb    |</span>
<span class="token comment">-- |  null | null |  4 | ccc    |</span>
<span class="token comment">-- +----+------+----+------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","外连接查询.html.vue"]]),d=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%96%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"外连接查询","slug":"外连接查询","link":"#外连接查询","children":[]}],"git":{"updatedTime":1719909739000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/MySql/多表查询/外连接查询.md","excerpt":"<h2>外连接查询</h2>\\n<p>取交集 + 左表(或者右表)的剩余记录的补充</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 左外连接查询格式</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> a <span class=\\"token keyword\\">left</span> <span class=\\"token keyword\\">join</span> b <span class=\\"token keyword\\">on</span> a<span class=\\"token punctuation\\">.</span>id <span class=\\"token operator\\">=</span> b<span class=\\"token punctuation\\">.</span>id<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{u as comp,d as data};
