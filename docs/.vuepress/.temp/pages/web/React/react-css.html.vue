<template><div><h2 id="react-css" tabindex="-1"><a class="header-anchor" href="#react-css"><span>react-css</span></a></h2>
<blockquote>
<p>styled-components: css in js 方式的一种;</p>
<p>antd 按需引入: 参照 antd 官网,3.xxx 版本的详细文档去一步步走即可;</p>
</blockquote>
<h3 id="antd-样式自定义主题" tabindex="-1"><a class="header-anchor" href="#antd-样式自定义主题"><span>antd 样式自定义主题</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 在根目录下创建config-overrides.js</span>

<span class="token comment">// 配置具体的修改规则</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> override<span class="token punctuation">,</span> fixBabelImports<span class="token punctuation">,</span> addLessLoader <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"customize-cra"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span>
  <span class="token function">fixBabelImports</span><span class="token punctuation">(</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">libraryDirectory</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">addLessLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"@primary-color"</span><span class="token operator">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


