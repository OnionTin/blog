<template><div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2>
<h3 id="unplugin-auto-import-d" tabindex="-1"><a class="header-anchor" href="#unplugin-auto-import-d"><span>unplugin-auto-import -D</span></a></h3>
<blockquote>
<p>解决问题: 在组件开发中无需每次都引入 import {ref, reactive ...} from，尤其是特别多的时候；但是 ts 的话还有一些配置需要去配，具体需要百度了。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">"unplugin-auto-import/vite"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"vue-router"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pinia-plugin-persist-save" tabindex="-1"><a class="header-anchor" href="#pinia-plugin-persist-save"><span>pinia-plugin-persist --save</span></a></h3>
<p>解决问题: 持久化 pinia</p>
</div></template>


