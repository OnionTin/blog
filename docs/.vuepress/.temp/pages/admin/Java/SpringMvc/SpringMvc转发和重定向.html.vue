<template><div><!-- @format -->
<h2 id="springmvc-转发和重定向" tabindex="-1"><a class="header-anchor" href="#springmvc-转发和重定向"><span>SpringMvc 转发和重定向</span></a></h2>
<blockquote>
<p>有没有视图解析器，都可以实现转发和重定向</p>
</blockquote>
<h3 id="转发和重定向的区别" tabindex="-1"><a class="header-anchor" href="#转发和重定向的区别"><span>转发和重定向的区别</span></a></h3>
<ul>
<li>转发：url 不会改变，服务器端行为</li>
<li>重定向：url 会改变，客户端行为</li>
</ul>
<h3 id="转发" tabindex="-1"><a class="header-anchor" href="#转发"><span>转发</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">"success"</span><span class="token punctuation">;</span>
<span class="token comment">// 没有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">"/success.jsp"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向"><span>重定向</span></a></h3>
<blockquote>
<font color=red>注意是 redirect:/，不是 redirect:</font></blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">"redirect:/success"</span><span class="token punctuation">;</span>
<span class="token comment">// 没有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">"redirect:/success.jsp"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/Java/SpringMvc/imgs/转发和重定向.png" alt="转发和重定向"></p>
</div></template>


