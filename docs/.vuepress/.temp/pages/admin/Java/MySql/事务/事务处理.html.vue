<template><div><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h2>
<p>事务？
大事：比如转账操作，至少需要 2 条及以上语句才能完成；小事：比如新增操作，只需要 1 条语句即可完成。</p>
<h3 id="事务处理" tabindex="-1"><a class="header-anchor" href="#事务处理"><span>事务处理</span></a></h3>
<p>处理什么问题？</p>
<p>从 A 的卡里扣 100，转到 B 的卡里；由于网络故障，从 A 的卡里扣了 100，但是 B 的卡里钱不能到账。</p>
<p>方案一：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span> <span class="token comment">-- 手动开启事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span> <span class="token comment">-- 提交事务(提交后数据才会修改)</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span> <span class="token comment">-- 回滚事务(如果不提交的话会自动回滚)</span>

<span class="token comment">-- 常见的组合：</span>

<span class="token comment">-- start transaction;</span>
<span class="token comment">-- commit;</span>

<span class="token comment">-- start transaction;</span>
<span class="token comment">-- rollback;</span>

<span class="token comment">-- 开始事务后，要么 commit 提交，要么 rollback 回滚</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 具体案例：</span>

<span class="token comment">-- 开启事务</span>
<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>

<span class="token comment">-- 转账操作</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">-</span> <span class="token number">100</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'A'</span><span class="token punctuation">;</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">+</span> <span class="token number">100</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'B'</span><span class="token punctuation">;</span>

<span class="token comment">-- 提交事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">-- 回滚事务</span>
<span class="token comment">-- rollback;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二：</p>
<table>
<thead>
<tr>
<th>事务相关命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>select @@autocommit</td>
<td>查看自动提交还是手动提交</td>
</tr>
<tr>
<td>set @@autocommit = 0</td>
<td>禁止自动提交</td>
</tr>
<tr>
<td>set @@autocommit = 1</td>
<td>开启自动提交</td>
</tr>
</tbody>
</table>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 开启自动提交</span>
<span class="token keyword">set</span> @<span class="token variable">@autocommit</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">-- 转账操作</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">-</span> <span class="token number">100</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'A'</span><span class="token punctuation">;</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">+</span> <span class="token number">100</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'B'</span><span class="token punctuation">;</span>

<span class="token comment">-- 提交事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">-- 回滚事务</span>
<span class="token comment">-- rollback;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/Java/MySql/images/事务处理.png" alt="事务处理">;</p>
</div></template>


