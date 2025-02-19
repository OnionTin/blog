import{_ as p,r as o,o as l,c,a as n,d as a,w as t,e as u,b as e}from"./app-CilA4iky.js";const i={},d=n("h2",{id:"聚合函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#聚合函数"},[n("span",null,"聚合函数")])],-1),k=n("blockquote",null,[n("p",null,"注意："),n("p",null,"avg() 和 sum()函数中计算时，可能不准确，因为涉及到某个数字可能为 Null，即新增的时候没有给值，所以此时可以用 ifnull()函数来处理。"),n("p",null,"还有很多聚合函数，这里只介绍常用的，其他可以自行百度或者查文档。")],-1),r=n("thead",null,[n("tr",null,[n("th",null,"函数"),n("th",null,"作用")])],-1),m=n("tr",null,[n("td",null,"count()"),n("td",null,"统计数量")],-1),v=n("tr",null,[n("td",null,"sum()"),n("td",null,"求和")],-1),b=n("tr",null,[n("td",null,"max()"),n("td",null,"最大值")],-1),y=n("tr",null,[n("td",null,"min()"),n("td",null,"最小值")],-1),w=n("tr",null,[n("td",null,"avg()"),n("td",null,"平均值")],-1),f=n("tr",null,[n("td",null,"truncate(x,y)"),n("td",null,"保留 y 位小数")],-1),_=n("tr",null,[n("td",null,"round(x,y)"),n("td",null,"保留 y 位小数")],-1),h=u(`<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 查询学生数量</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">as</span> 总的人数 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token operator">and</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄总和</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 总年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 总年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄最大值</span>
<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄最小值</span>
<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄平均值</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生平均年龄保持两位小数</span>
<span class="token keyword">select</span> <span class="token keyword">truncate</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token keyword">truncate</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生平均年龄保留一位小数</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>


<span class="token comment">-- 查询学生平均年龄保留一位小数</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span>ifnull<span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(x,q){const s=o("font");return l(),c("div",null,[d,k,n("table",null,[r,n("tbody",null,[m,v,b,y,w,f,_,n("tr",null,[n("td",null,[a(s,{color:"red"},{default:t(()=>[e("ifnull(x,y)")]),_:1})]),n("td",null,[a(s,{color:"red"},{default:t(()=>[e("如果 x 值为 Null，返回 y")]),_:1})])])])]),h])}const N=p(i,[["render",g],["__file","聚合函数.html.vue"]]),A=JSON.parse('{"path":"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/单表查询/聚合函数.md","excerpt":"<h2>聚合函数</h2>\\n<blockquote>\\n<p>注意：</p>\\n<p>avg() 和 sum()函数中计算时，可能不准确，因为涉及到某个数字可能为 Null，即新增的时候没有给值，所以此时可以用 ifnull()函数来处理。</p>\\n<p>还有很多聚合函数，这里只介绍常用的，其他可以自行百度或者查文档。</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>函数</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>count()</td>\\n<td>统计数量</td>\\n</tr>\\n<tr>\\n<td>sum()</td>\\n<td>求和</td>\\n</tr>\\n<tr>\\n<td>max()</td>\\n<td>最大值</td>\\n</tr>\\n<tr>\\n<td>min()</td>\\n<td>最小值</td>\\n</tr>\\n<tr>\\n<td>avg()</td>\\n<td>平均值</td>\\n</tr>\\n<tr>\\n<td>truncate(x,y)</td>\\n<td>保留 y 位小数</td>\\n</tr>\\n<tr>\\n<td>round(x,y)</td>\\n<td>保留 y 位小数</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>"}');export{N as comp,A as data};
