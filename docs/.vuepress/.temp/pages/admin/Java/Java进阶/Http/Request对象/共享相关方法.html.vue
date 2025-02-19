<template><div><h2 id="共享相关方法" tabindex="-1"><a class="header-anchor" href="#共享相关方法"><span>共享相关方法</span></a></h2>
<blockquote>
<p>在 web 核心中有 4 大域对象(ServletContext、HttpSession、ServletRequest、HttpServletResponse)，
每个域对象负责管理自己所在的范围，Request 域对象负责管理的就是一次请求和一次响应之间的范围。根据域对象所具备的方法可以判断出，域对象就是一个容器，容器在一次请求时生成，在一次请求后就销毁了。注意，是一次请求和一次响应之间。</p>
</blockquote>
<p>域对象的产生和销毁
<img src="@source/admin/Java/Java进阶/images/域对象的产生和销毁.jpg" alt="域对象的产生和销毁"></p>
<table>
<thead>
<tr>
<th>域对象方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>void setAttribute(String name, Object value)</td>
<td>存储数据</td>
</tr>
<tr>
<td>Object getAttribute(String name)</td>
<td>获取数据</td>
</tr>
<tr>
<td>void removeAttribute(String name)</td>
<td>移除数据</td>
</tr>
</tbody>
</table>
<h3 id="转发请求实现共享数据" tabindex="-1"><a class="header-anchor" href="#转发请求实现共享数据"><span>转发请求实现共享数据</span></a></h3>
<blockquote>
<p>因为域对象的销毁是在一次请求和一次相应之间的，第二次请求时已经销毁，获取到的是 null，目前可以通过请求转发来实现共享数据。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// Servlet1</span>
<span class="token comment">// 存储数据</span>
request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 请求转发</span>
request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"/Servlet2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Servlet2</span>
<span class="token comment">// 获取数据</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> request<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求转发实现数据共享
<img src="@source/admin/Java/Java进阶/images/请求转发实现数据共享.jpg" alt="请求转发实现数据共享"></p>
</div></template>


