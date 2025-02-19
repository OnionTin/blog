<template><div><h2 id="jstl" tabindex="-1"><a class="header-anchor" href="#jstl"><span>jstl</span></a></h2>
<blockquote>
<p>jstl 是 Jsp 标准标签函式库，用来替代 Java 代码的，提高了页面的维护性</p>
</blockquote>
<h3 id="jslt-如何使用" tabindex="-1"><a class="header-anchor" href="#jslt-如何使用"><span>jslt 如何使用</span></a></h3>
<ol>
<li>导入相关的 jar 包(依赖)</li>
<li>再 jsp 页面上引入指令</li>
<li>在 jsp 页面中写 jstl 标签库</li>
</ol>
<h3 id="常见的标签" tabindex="-1"><a class="header-anchor" href="#常见的标签"><span>常见的标签</span></a></h3>
<table>
<thead>
<tr>
<th>标签</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>if 标签</td>
<td>条件判断</td>
</tr>
<tr>
<td>c:forEach</td>
<td>循环</td>
</tr>
<tr>
<td>c:forTokens</td>
<td>循环</td>
</tr>
<tr>
<td>c:choose</td>
<td>分支选择</td>
</tr>
<tr>
<td>c:when</td>
<td>分支选择</td>
</tr>
<tr>
<td>c:otherwise</td>
<td>分支选择</td>
</tr>
<tr>
<td>c:out</td>
<td>输出</td>
</tr>
<tr>
<td>c:set</td>
<td>赋值</td>
</tr>
<tr>
<td>c:remove</td>
<td>删除</td>
</tr>
<tr>
<td>c:catch</td>
<td>异常处理</td>
</tr>
<tr>
<td>c:import</td>
<td>引入</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">%</span>@ page <span class="token keyword">import</span><span class="token operator">=</span><span class="token string">"java.util.ArrayList"</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ page <span class="token keyword">import</span><span class="token operator">=</span><span class="token string">"java.util.HashMap"</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ page contentType<span class="token operator">=</span><span class="token string">"text/html;charset=UTF-8"</span> language<span class="token operator">=</span><span class="token string">"java"</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ taglib prefix<span class="token operator">=</span><span class="token string">"c"</span> uri<span class="token operator">=</span><span class="token string">"http://java.sun.com/jsp/jstl/core"</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token generics"><span class="token punctuation">&lt;</span>html<span class="token punctuation">></span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>head<span class="token punctuation">></span></span>
  <span class="token generics"><span class="token punctuation">&lt;</span>title<span class="token punctuation">></span></span><span class="token class-name">Title</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token generics"><span class="token punctuation">&lt;</span>body<span class="token punctuation">></span></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>条件判断一：使用c<span class="token operator">:</span>set设置变量 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>set <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">"num"</span> value<span class="token operator">=</span><span class="token string">"${3}"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>choose<span class="token operator">></span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>when test<span class="token operator">=</span><span class="token string">"${num == 3}"</span><span class="token operator">></span>
    约
  <span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>when<span class="token operator">></span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>otherwise<span class="token operator">></span>
    不约
  <span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>otherwise<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>choose<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">--</span>条件判断二：使用request<span class="token punctuation">.</span>setAttribute设置变量<span class="token operator">--</span><span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">%</span>
  <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"num"</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">"${num == 3}"</span><span class="token operator">></span>约<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">"${num != 3}"</span><span class="token operator">></span>不约<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">></span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">></span></span>

<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">--</span>
forEach 遍历
<span class="token keyword">var</span><span class="token operator">:</span> 定义的变量
begin<span class="token operator">:</span> 从几开始
end<span class="token operator">:</span> 到几结束
step<span class="token operator">:</span> 步长
varStatus<span class="token operator">:</span> 遍历状态
  index<span class="token operator">:</span> 索引
  count<span class="token operator">:</span> 遍历次数
items<span class="token operator">:</span> 被遍历的容器<span class="token punctuation">(</span>数组、单双例集合<span class="token punctuation">)</span>
<span class="token operator">--</span><span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">"num"</span> begin<span class="token operator">=</span><span class="token string">"1"</span> end<span class="token operator">=</span><span class="token string">"10"</span> step<span class="token operator">=</span><span class="token string">"1"</span> varStatus<span class="token operator">=</span><span class="token string">"status"</span><span class="token operator">></span>
  $<span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>index<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">></span></span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>out value<span class="token operator">=</span><span class="token string">"${num}"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">%</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"arr"</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"bbb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"list"</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"xiaoming"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"map"</span><span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">"num"</span> step<span class="token operator">=</span><span class="token string">"1"</span> varStatus<span class="token operator">=</span><span class="token string">"status"</span> items<span class="token operator">=</span><span class="token string">"${arr}"</span><span class="token operator">></span>
  $<span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>index<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">></span></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">"a"</span> items<span class="token operator">=</span><span class="token string">"${list}"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>out value<span class="token operator">=</span><span class="token string">"${a}"</span><span class="token operator">/</span><span class="token operator">></span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">></span></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">></span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">"b"</span> items<span class="token operator">=</span><span class="token string">"${map}"</span><span class="token operator">></span>
  $<span class="token punctuation">{</span>b<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>b<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">></span></span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>out value<span class="token operator">=</span><span class="token string">"${b}"</span><span class="token operator">/</span><span class="token operator">></span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">></span></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


