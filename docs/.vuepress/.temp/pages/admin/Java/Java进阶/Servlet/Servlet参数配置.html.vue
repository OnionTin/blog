<template><div><h2 id="servlet-参数配置" tabindex="-1"><a class="header-anchor" href="#servlet-参数配置"><span>Servlet 参数配置</span></a></h2>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">ServletConfig</span> config<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取到xml中配置的参数数据</span>
  <span class="token class-name">String</span> value <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"name:"</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


