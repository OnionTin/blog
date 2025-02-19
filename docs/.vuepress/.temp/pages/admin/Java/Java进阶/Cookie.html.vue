<template><div><h2 id="会话" tabindex="-1"><a class="header-anchor" href="#会话"><span>会话</span></a></h2>
<blockquote>
<p>会话：一次会话就是一次对话，一次交谈，在这次交流中会有很多次请求和响应。只要其中一方断开不谈了，那么会话也就结束了。</p>
</blockquote>
<blockquote>
<p>Cookie: 客户端会话技术，数据存储到客户端浏览器中</p>
<p>Session: 服务器端会话技术，数据存储到服务器中</p>
</blockquote>
<h3 id="会话的作用" tabindex="-1"><a class="header-anchor" href="#会话的作用"><span>会话的作用</span></a></h3>
<p>在多次请求和多次响应中可以实现数据共享</p>
<h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>response.addCookie(Cookie c)</td>
<td>设置 cookie</td>
</tr>
<tr>
<td>response.setHeader(&quot;set-cookie&quot;, &quot;name=value&quot;)</td>
<td>设置 cookie</td>
</tr>
<tr>
<td>response.setHeader(&quot;set-cookie&quot;, &quot;name=value; maxAge=60&quot;)</td>
<td>设置 cookie</td>
</tr>
<tr>
<td>request.getCookies()</td>
<td>获取 cookie</td>
</tr>
</tbody>
</table>
<h3 id="cookie-能不能写多个-cookie" tabindex="-1"><a class="header-anchor" href="#cookie-能不能写多个-cookie"><span>Cookie 能不能写多个 Cookie</span></a></h3>
<blockquote>
<p>可以携带多个 Set-Cookie 请求头；如果多个 Cookie 的名称相同，
那么会出现：在设置 Cookie 的方法的响应头中有两个同名的响应结果，各自的值为我们设置的值，但是在获取 Cookie 的方法的请求头中，只会有一个该名称的 Cookie，其值为最后一次设置的值。</p>
</blockquote>
<h3 id="cookie-的-name-值能不能使用中文" tabindex="-1"><a class="header-anchor" href="#cookie-的-name-值能不能使用中文"><span>Cookie 的 name 值能不能使用中文</span></a></h3>
<p>不能，会报错</p>
<h3 id="cookie-的-value-值能不能存储中文" tabindex="-1"><a class="header-anchor" href="#cookie-的-value-值能不能存储中文"><span>Cookie 的 value 值能不能存储中文</span></a></h3>
<blockquote>
<p>不会乱码方式： 使用 new Cookie 方式设置请求头</p>
<p>会出现乱码的方式：使用 setHeader 方式设置请求头</p>
<p>乱码解决：在设置的时候，进行 URL 编码，在获取的时候，进行 URL 解码</p>
</blockquote>
<h3 id="cookie-的生命周期" tabindex="-1"><a class="header-anchor" href="#cookie-的生命周期"><span>Cookie 的生命周期</span></a></h3>
<blockquote>
<p>Cookie 默认的生命周期：浏览器关闭，缓存释放，Cookie 消失</p>
<p>可以通过 setMaxAge 方法设置缓存的时常，此时数据被存储到本地磁盘，时间一到，Cookie 消失，设置的值为正数，单位为秒</p>
<p>可以通过 setMaxAge 设置的值为负数，就是 Cookie 默认的</p>
<p>可以通过 setMaxAge 设置的值为 0，那就没有意义了，会立即消失</p>
</blockquote>
<h3 id="cookie-的携带范围" tabindex="-1"><a class="header-anchor" href="#cookie-的携带范围"><span>Cookie 的携带范围</span></a></h3>
<blockquote>
<p>默认情况下：当前的项目，即访问当前项目下的任意一个资源都会携带 Cookie 请求头</p>
<p>可以通过 setPath 方法设置携带范围，设置的值为当前项目的根目录，即 /</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// SetCookie.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Cookie</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">Cookie</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URLEncoder</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/setCookie"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SetCookie</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置cookie，并添加到请求头中</span>
    <span class="token comment">// 方式一：设置请求头、</span>
    <span class="token comment">// 设置Cookie的缓存时常60秒</span>
    resp<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Set-Cookie"</span><span class="token punctuation">,</span> <span class="token string">"username=zhangsan; Max-Age=60"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resp<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Set-Cookie"</span><span class="token punctuation">,</span> <span class="token string">"luanma=这会出现乱码"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> notLuan <span class="token operator">=</span> <span class="token string">"乱码的解决方式"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>notLuan<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// URL编码</span>
    resp<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Set-Cookie"</span><span class="token punctuation">,</span> <span class="token string">"notLuan="</span> <span class="token operator">+</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 方式二：创建对象并添加到响应头，设置多个Cookie</span>
    <span class="token class-name">Cookie</span> cookie0 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这种方式不会出现乱码，底层处理</span>
    <span class="token class-name">Cookie</span> cookie1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"passowrd"</span><span class="token punctuation">,</span> <span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cookie1<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置Cookie的缓存时常为300秒</span>
    <span class="token class-name">Cookie</span> cookie2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token string">"12"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// name和value都是String类型</span>
    <span class="token class-name">Cookie</span> cookie3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token string">"14"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 覆盖age</span>
    <span class="token comment">/*
     * 设置Cookie的携带范围，默认：/项目名，代表当前项目
     * /：当前服务器下部署的所有项目的所有资源都能获取
     * /项目名/资源名：当前项目的具体某个资源才能获取到这个Cookie
    */</span>
    cookie3<span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// GetCookie.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Cookie</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">Cookie</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/getCookie"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetCookie</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cookies<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cookie</span> c <span class="token operator">:</span> cookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 结果：</span>
      <span class="token comment">// username:zhangsan</span>
      <span class="token comment">// passowrd:123456</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/Java/Java进阶/images/Cookie原理.jpg" alt="Cookie原理"></p>
</div></template>


