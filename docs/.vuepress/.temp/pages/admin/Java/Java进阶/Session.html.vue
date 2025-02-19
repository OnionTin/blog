<template><div><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span>Session</span></a></h2>
<h3 id="_1-什么是-session" tabindex="-1"><a class="header-anchor" href="#_1-什么是-session"><span>1. 什么是 Session</span></a></h3>
<blockquote>
<p>Session 是域对象，范围在一次会话之间；Session 是服务器端的一种数据存储机制，用来跟踪用户的状态，这个机制是依赖于 Cookie 的。</p>
</blockquote>
<table>
<thead>
<tr>
<th>域对象三大方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>setAttribute(String name, Object value)</td>
<td>设置数据</td>
</tr>
<tr>
<td>getAttribute(String name)</td>
<td>获取数据</td>
</tr>
<tr>
<td>removeAttribute(String name)</td>
<td>移除数据</td>
</tr>
</tbody>
</table>
<h3 id="浏览器关闭服务端没有关闭会发生什么情况" tabindex="-1"><a class="header-anchor" href="#浏览器关闭服务端没有关闭会发生什么情况"><span>浏览器关闭服务端没有关闭会发生什么情况</span></a></h3>
<blockquote>
<p>浏览器关闭，缓存消失，缓存中的 JSESSIONID 也就消失了，再次访问是一次新的会话，不会携带 cookie，重新 set-cookie，当然也获取不到 session</p>
</blockquote>
<h3 id="重新打开浏览器依然能获取到-jsessionid" tabindex="-1"><a class="header-anchor" href="#重新打开浏览器依然能获取到-jsessionid"><span>重新打开浏览器依然能获取到 JSESSIONID</span></a></h3>
<blockquote>
<p>手动设置 cookie 并设置时常，将底层自己创建的 cookie 覆盖掉</p>
</blockquote>
<h3 id="服务器关闭浏览器没有关闭会发生什么情况" tabindex="-1"><a class="header-anchor" href="#服务器关闭浏览器没有关闭会发生什么情况"><span>服务器关闭浏览器没有关闭会发生什么情况</span></a></h3>
<blockquote>
<p>服务非正常关闭：session 会在内存中消失，浏览器访问服务器时，会携带 cookie 的请求头，但是服务器没有了 session 对象，会创建新的对象</p>
<p>服务正常关闭：session 会在内存消失，但是会先钝化(序列化)，将 session 存储到本地磁盘，浏览器访问服务器时，会活化(反序列化)到内存中</p>
</blockquote>
<h3 id="session-消毁的情况" tabindex="-1"><a class="header-anchor" href="#session-消毁的情况"><span>session 消毁的情况</span></a></h3>
<ol>
<li>服务器关闭</li>
<li>session 自杀</li>
<li>session 过期</li>
<li>手动删除</li>
<li>服务器重启</li>
</ol>
<h3 id="session-过期时间" tabindex="-1"><a class="header-anchor" href="#session-过期时间"><span>session 过期时间</span></a></h3>
<blockquote>
<p>在服务器，web.xml 中有 session 时常设置，默认 30 分钟</p>
<p>修改配置文件</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-config</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-timeout</span><span class="token punctuation">></span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-timeout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-config</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session-原理" tabindex="-1"><a class="header-anchor" href="#session-原理"><span>Session 原理</span></a></h3>
<p>Session 的实现主要是基于 Cookie 的。</p>
<p>当客户端请求服务器时，服务器会为这次请求创建一个 Session 对象，同时服务器会在响应请求时，在响应头中添加一个 Set-Cookie 的响应头信息。</p>
<p>Set-Cookie 的值就是 Session 的 ID，该 ID 由服务器端生成。</p>
<p>当客户端再次发送请求时，会将这个 Set-Cookie 的值自动添加到请求头中的 Cookie 中。</p>
<p>服务器端在接收到请求时，会检查请求头中是否有 Cookie 信息，如果有的话，会从 Cookie 中获取 Session 的 ID，然后根据该 ID 获取 Session 对象。
<img src="@source/admin/Java/Java进阶/images/Session原理.jpg" alt="Session原理"></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// SetSession.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Session</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/setSession"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SetSession</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">HttpSession</span> hs <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置session</span>
    hs<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
     * 实现浏览器关闭又重新开启后仍就能获取到JSESSIONID
     * 手动设置cookie，将底层自己创建的cookie覆盖掉
     */</span>
    <span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"JSESSIONID"</span><span class="token punctuation">,</span> hs<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// session 自杀</span>
    hs<span class="token punctuation">.</span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// GetSession.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Session</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/getSession"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetSession</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">HttpSession</span> hs <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    hs<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


