<template><div><h2 id="response-对象" tabindex="-1"><a class="header-anchor" href="#response-对象"><span>Response 对象</span></a></h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>void setStatus(int sc)</td>
<td>设置响应状态码</td>
</tr>
<tr>
<td>void setHeader(String name, String value)</td>
<td>设置响应头</td>
</tr>
<tr>
<td>void sendRedirect(String location)</td>
<td>重定向</td>
</tr>
<tr>
<td>PrintWriter getWriter()</td>
<td>获取字符输出流响应体</td>
</tr>
<tr>
<td>ServletOutputStream getOutputStream()</td>
<td>获取字节输出流响应体</td>
</tr>
</tbody>
</table>
<h3 id="设置响应状态码" tabindex="-1"><a class="header-anchor" href="#设置响应状态码"><span>设置响应状态码</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不能瞎乱设置，否则不出错了嘛</span>
response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置响应头" tabindex="-1"><a class="header-anchor" href="#设置响应头"><span>设置响应头</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 设置响应头</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/html;charset=utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Location"</span><span class="token punctuation">,</span> <span class="token string">"/MyWebApp_war/ReqDemo01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向"><span>重定向</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 方式一(比较原始)</span>
<span class="token comment">// 设置状态码302</span>
response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置Location路径</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Location"</span><span class="token punctuation">,</span> <span class="token string">"/MyWebApp_war/ReqDemo01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式二</span>
response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">"/MyWebApp_war/ReqDemo01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重定向流程图：
<img src="@source/admin/Java/Java进阶/images/重定向.jpg" alt="重定向"></p>
<h4 id="redirect-和-forward-转发和重定向" tabindex="-1"><a class="header-anchor" href="#redirect-和-forward-转发和重定向"><span>redirect 和 forward (转发和重定向)</span></a></h4>
<p>转发：</p>
<ol>
<li>浏览器地址栏不变</li>
<li>转发只能进行内部跳转</li>
<li>转发是一次请求，一次响应，也是地址栏不能改变的原因</li>
<li>转发可以实现数据的共享(设置和获取)</li>
<li>转发可以实现 WEB-INF 目录下的资源访问</li>
<li>Tomcat 会自动添加项目的虚拟路径</li>
</ol>
<p>重定向：</p>
<ol>
<li>重定向是两次请求，两次响应</li>
<li>重定向可以访问其他站点</li>
<li>重定向地址栏会改变</li>
<li>正常情况下，重定向不能实现数据的共享，因为第二次请求是外部进来的</li>
<li>重定向不能实现 WEB-INF 目录下的资源访问， 因为第二次请求是外部进来的</li>
<li>需要手动设置项目的虚拟路径了，因为可以访问外部了</li>
</ol>
<p>Http 请求和响应流程：
<img src="@source/admin/Java/Java进阶/images/web核心.jpg" alt="web核心"></p>
</div></template>


