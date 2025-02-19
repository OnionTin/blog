import{_ as n,o as s,c as a,e as p}from"./app-CvP7wor-.js";const e={},t=p(`<h2 id="多表关系" tabindex="-1"><a class="header-anchor" href="#多表关系"><span>多表关系</span></a></h2><h3 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一"><span>一对一</span></a></h3><blockquote><p>一个男人只能娶一个媳妇，一个女人也只能嫁给一个男人；一般不会有一对一，因为完全可以把两个表合二为一</p></blockquote><h3 id="一对多-多对一" tabindex="-1"><a class="header-anchor" href="#一对多-多对一"><span>一对多(多对一)</span></a></h3><blockquote><p>一个人可以有多个电脑，而一台电脑只能属于一个人</p><p>怎么做呢？</p><p>一般需要在多的一方添加一个字段，并添加外键关联，关联少的一方的主键</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- user表</span>
<span class="token keyword">create</span> <span class="token keyword">user</span><span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  u_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- computer表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> computer<span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  c_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  uid <span class="token keyword">int</span><span class="token punctuation">,</span>
  <span class="token keyword">constraint</span> c_u_key <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">references</span> <span class="token keyword">user</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>u_name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> computer <span class="token punctuation">(</span>c_name<span class="token punctuation">,</span> uid<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;电脑1&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> computer <span class="token punctuation">(</span>c_name<span class="token punctuation">,</span> uid<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;电脑2&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 新增的时候可以给个默认值，也可以不写；或者给null也不报错，但是给null就没有意义了</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> computer <span class="token punctuation">(</span>c_name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;电脑3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> computer <span class="token punctuation">(</span>c_name<span class="token punctuation">,</span> uid<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;电脑4&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除外键约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> computer <span class="token keyword">drop</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> c_u_key<span class="token punctuation">;</span>
<span class="token comment">-- 添加外键约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> computer <span class="token keyword">add</span> <span class="token keyword">constraint</span> c_u_key <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">references</span> <span class="token keyword">user</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多对多关系" tabindex="-1"><a class="header-anchor" href="#多对多关系"><span>多对多关系</span></a></h3><blockquote><p>多个学生上多种课程</p><p>多个课程被多个学生选</p><p>学生表和课程表之间需要一个中间表，中间表中需要两个外键分别关联学生表和课程表</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 学生表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> student<span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 课程表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> course<span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 中间表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> student_course<span class="token punctuation">(</span>
  sid <span class="token keyword">int</span><span class="token punctuation">,</span>
  cid <span class="token keyword">int</span><span class="token punctuation">,</span>
  <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">(</span>sid<span class="token punctuation">,</span> cid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 联合主键</span>
  <span class="token keyword">constraint</span> stu_key <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>sid<span class="token punctuation">)</span> <span class="token keyword">references</span> student<span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">constraint</span> cou_key <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>cid<span class="token punctuation">)</span> <span class="token keyword">references</span> course<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 新增</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> student <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> course <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;语文&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> student_course <span class="token punctuation">(</span>sid<span class="token punctuation">,</span> cid<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 删除</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> student_course <span class="token keyword">where</span> sid <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">and</span> cid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[t];function c(l,k){return s(),a("div",null,o)}const i=n(e,[["render",c],["__file","多表关系.html.vue"]]),r=JSON.parse(`{"path":"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%9A%E8%A1%A8%E5%85%B3%E7%B3%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"多表关系","slug":"多表关系","link":"#多表关系","children":[{"level":3,"title":"一对一","slug":"一对一","link":"#一对一","children":[]},{"level":3,"title":"一对多(多对一)","slug":"一对多-多对一","link":"#一对多-多对一","children":[]},{"level":3,"title":"多对多关系","slug":"多对多关系","link":"#多对多关系","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/多表查询/多表关系.md","excerpt":"<h2>多表关系</h2>\\n<h3>一对一</h3>\\n<blockquote>\\n<p>一个男人只能娶一个媳妇，一个女人也只能嫁给一个男人；一般不会有一对一，因为完全可以把两个表合二为一</p>\\n</blockquote>\\n<h3>一对多(多对一)</h3>\\n<blockquote>\\n<p>一个人可以有多个电脑，而一台电脑只能属于一个人</p>\\n<p>怎么做呢？</p>\\n<p>一般需要在多的一方添加一个字段，并添加外键关联，关联少的一方的主键</p>\\n</blockquote>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- user表</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">user</span><span class=\\"token punctuation\\">(</span>\\n  id <span class=\\"token keyword\\">int</span> <span class=\\"token keyword\\">auto_increment</span> <span class=\\"token keyword\\">primary</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">,</span>\\n  u_name <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">-- computer表</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> computer<span class=\\"token punctuation\\">(</span>\\n  id <span class=\\"token keyword\\">int</span> <span class=\\"token keyword\\">auto_increment</span> <span class=\\"token keyword\\">primary</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">,</span>\\n  c_name <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  uid <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">constraint</span> c_u_key <span class=\\"token keyword\\">foreign</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">(</span>uid<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">references</span> <span class=\\"token keyword\\">user</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> <span class=\\"token keyword\\">user</span> <span class=\\"token punctuation\\">(</span>u_name<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'张三'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> computer <span class=\\"token punctuation\\">(</span>c_name<span class=\\"token punctuation\\">,</span> uid<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'电脑1'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> computer <span class=\\"token punctuation\\">(</span>c_name<span class=\\"token punctuation\\">,</span> uid<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'电脑2'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">-- 新增的时候可以给个默认值，也可以不写；或者给null也不报错，但是给null就没有意义了</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> computer <span class=\\"token punctuation\\">(</span>c_name<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'电脑3'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> computer <span class=\\"token punctuation\\">(</span>c_name<span class=\\"token punctuation\\">,</span> uid<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'电脑4'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 删除外键约束</span>\\n<span class=\\"token keyword\\">alter</span> <span class=\\"token keyword\\">table</span> computer <span class=\\"token keyword\\">drop</span> <span class=\\"token keyword\\">foreign</span> <span class=\\"token keyword\\">key</span> c_u_key<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">-- 添加外键约束</span>\\n<span class=\\"token keyword\\">alter</span> <span class=\\"token keyword\\">table</span> computer <span class=\\"token keyword\\">add</span> <span class=\\"token keyword\\">constraint</span> c_u_key <span class=\\"token keyword\\">foreign</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">(</span>uid<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">references</span> <span class=\\"token keyword\\">user</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);export{i as comp,r as data};
