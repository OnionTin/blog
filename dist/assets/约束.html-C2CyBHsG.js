import{_ as n,o as s,c as a,e}from"./app-C_RrakEG.js";const p={},t=e(`<h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h2><ol><li>非空约束：不能为空，即 不能为 Null</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span>
  字段名 数据类型 <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 非空约束</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> student{
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  age <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span>
}

<span class="token comment">-- 删除非空约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 数据类型<span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">modify</span> name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加非空约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 数据类型 <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">modify</span> name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>唯一约束：不能重复(Null 是没有值，没有重不重复这么一说)</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span>
	字段名 数据类型 <span class="token keyword">unique</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 唯一约束</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> student{
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unique</span><span class="token punctuation">,</span>
	age <span class="token keyword">int</span><span class="token punctuation">,</span>
	sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
}<span class="token punctuation">;</span>

<span class="token comment">-- 删除唯一约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">drop</span> <span class="token keyword">index</span> 字段名<span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">drop</span> <span class="token keyword">index</span> name<span class="token punctuation">;</span>

<span class="token comment">-- 添加唯一约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 数据类型 <span class="token keyword">unique</span><span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">modify</span> name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unique</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>主键约束：非空且唯一，每张表只能有一个主键</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span>
	字段名 数据类型 <span class="token keyword">primary</span> <span class="token keyword">key</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 主键约束</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> student{
	id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	age <span class="token keyword">int</span><span class="token punctuation">,</span>
	sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
}<span class="token punctuation">;</span>

<span class="token comment">-- 删除主键约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">drop</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">drop</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">;</span>
<span class="token comment">-- 删除之后需要再改一下(这个方法就这样)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> <span class="token keyword">modify</span> id <span class="token keyword">int</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加主键约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 数据类型 <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">modify</span> id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>主键自增约束：在主键的基础上自动增长，所以也是只能有一个，在上一条的基础上加 1</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span>
	字段名 数据类型 <span class="token keyword">auto_increment</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 自增约束</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> student{
	id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	age <span class="token keyword">int</span><span class="token punctuation">,</span>
	sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
}<span class="token punctuation">;</span>

<span class="token comment">-- 删除自增约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 数据类型<span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">modify</span> id <span class="token keyword">int</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加自增约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段名 数据类型 <span class="token keyword">auto_increment</span><span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">modify</span> id <span class="token keyword">int</span> <span class="token keyword">auto_increment</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>外键约束</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 标准格式</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 表<span class="token number">2</span>名<span class="token punctuation">(</span>
	<span class="token keyword">constraint</span> 键名 数据类型 <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>外键字段<span class="token punctuation">)</span> <span class="token keyword">references</span> 表<span class="token number">1</span>名<span class="token punctuation">(</span>表<span class="token number">1</span>的字段<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 简化格式(没有给键名，系统默认生成，键名可通过 show create table 表名 查看)</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 表<span class="token number">2</span>名<span class="token punctuation">(</span>
  <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>外键字段<span class="token punctuation">)</span> <span class="token keyword">references</span> 表<span class="token number">1</span>名<span class="token punctuation">(</span>表<span class="token number">1</span>的字段<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 外键约束</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">user</span><span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> student{
	id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  uid <span class="token keyword">int</span><span class="token punctuation">,</span>
  <span class="token keyword">constraint</span> stu_user_fk <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">references</span> <span class="token keyword">user</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
}<span class="token punctuation">;</span>

<span class="token comment">-- 删除外键约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表<span class="token number">2</span>名 <span class="token keyword">drop</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> 外键的名字<span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">drop</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> stu_user_fk<span class="token punctuation">;</span>

<span class="token comment">-- 添加外键约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表<span class="token number">2</span>名
<span class="token keyword">add</span> <span class="token keyword">constraint</span> 外键的名字 <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>外键字段<span class="token punctuation">)</span> <span class="token keyword">references</span> 表<span class="token number">1</span>名<span class="token punctuation">(</span>表<span class="token number">1</span>的字段<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> stu_user_fk <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">references</span> <span class="token keyword">user</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 注意：添加上外键约束后，想要删除主表是不行的，两种方式删除主表</span>
<span class="token comment">-- 1. 先删除外键约束，再删除子表</span>
<span class="token comment">-- 2. 先删除子表，此时因为子表没了那约束自然没了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[t];function l(c,i){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","约束.html.vue"]]),r=JSON.parse('{"path":"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E7%BA%A6%E6%9D%9F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"约束","slug":"约束","link":"#约束","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/单表查询/约束.md","excerpt":"<h2>约束</h2>\\n<ol>\\n<li>非空约束：不能为空，即 不能为 Null</li>\\n</ol>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 格式</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> 表名<span class=\\"token punctuation\\">(</span>\\n  字段名 数据类型 <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 非空约束</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> student{\\n  name <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">,</span>\\n  age <span class=\\"token keyword\\">int</span> <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">,</span>\\n  sex <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span>\\n}\\n\\n<span class=\\"token comment\\">-- 删除非空约束</span>\\n<span class=\\"token keyword\\">alter</span> <span class=\\"token keyword\\">table</span> 表名 <span class=\\"token keyword\\">modify</span> 字段名 数据类型<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">alter</span> <span class=\\"token keyword\\">table</span> student <span class=\\"token keyword\\">modify</span> name <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 添加非空约束</span>\\n<span class=\\"token keyword\\">alter</span> <span class=\\"token keyword\\">table</span> 表名 <span class=\\"token keyword\\">modify</span> 字段名 数据类型 <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">alter</span> <span class=\\"token keyword\\">table</span> student <span class=\\"token keyword\\">modify</span> name <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{d as comp,r as data};
