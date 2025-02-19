<template><div><h2 id="servlet-生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-生命周期"><span>Servlet 生命周期</span></a></h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>init</td>
<td>初始化</td>
</tr>
<tr>
<td>service</td>
<td>执行方法</td>
</tr>
<tr>
<td>destory</td>
<td>销毁方法</td>
</tr>
</tbody>
</table>
<h3 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h3>
<ul>
<li>初始化方法，在 servlet 被创建时执行，只会执行一次</li>
<li>用于加载资源，初始化 servlet 对象</li>
</ul>
<h3 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>service</span></a></h3>
<ul>
<li>服务方法，每次请求都会执行</li>
<li>用于处理请求，响应数据</li>
</ul>
<h3 id="destory" tabindex="-1"><a class="header-anchor" href="#destory"><span>destory</span></a></h3>
<ul>
<li>销毁方法，在 服务被正常关闭时，只会执行一次</li>
</ul>
<h3 id="如何将-servlet-对象的创建提前" tabindex="-1"><a class="header-anchor" href="#如何将-servlet-对象的创建提前"><span>如何将 Servlet 对象的创建提前</span></a></h3>
<blockquote>
<p>load-on-startup：用来表示创建 Servlet 对象的时机，默认值为-1，设置的值越小(正整数)，优先级越高；相同优先级，按照 servlet-name 的字典顺序执行</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>ServletDemo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>com.atguigu.servlet.ServletDemo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 创建 Servlet 对象的时机 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


