<template><div><h2 id="mybatis-延迟加载" tabindex="-1"><a class="header-anchor" href="#mybatis-延迟加载"><span>MyBatis 延迟加载</span></a></h2>
<blockquote>
<p>在<font color=red>MyBatis 一堆多查询中</font>，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。</p>
</blockquote>
<h3 id="开启延迟加载" tabindex="-1"><a class="header-anchor" href="#开启延迟加载"><span>开启延迟加载</span></a></h3>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>SqlMapConfig.xml
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--全局开启延迟加载--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazyLoadingEnabled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aggressiveLazyLoading<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


