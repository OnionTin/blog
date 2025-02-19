<template><div><h2 id="全局-api-的转移-具体参考-vue-迁移指南" tabindex="-1"><a class="header-anchor" href="#全局-api-的转移-具体参考-vue-迁移指南"><span>全局 API 的转移(具体参考 vue 迁移指南)</span></a></h2>
<blockquote>
<p>Vue3.0 对 Vue2.x 中的 API 进行了一些调整，主要包括将全局 API 从<code v-pre>Vue.xxx</code>调整到应用实例<code v-pre>app</code>上。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Vue2.x中的写法</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"MyButton"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;button @click="count++">Clicked {{ count }} times.&lt;/button>'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注册全局指令</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">"focus"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Vue3.0 中对全局 API 进行了调整，将全局 API 从 Vue.xxx 调整到应用实例 app 上。</p>
</blockquote>
<table>
<thead>
<tr>
<th>2.x 全局 API(Vue)</th>
<th>3.x 实例 API(app)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vue.config.xxxx</td>
<td>app.config.xxxx</td>
</tr>
<tr>
<td>Vue.config.productionTip</td>
<td>移除</td>
</tr>
<tr>
<td>Vue.component</td>
<td>app.component</td>
</tr>
<tr>
<td>Vue.directive</td>
<td>app.directive</td>
</tr>
<tr>
<td>Vue.mixin</td>
<td>app.mixin</td>
</tr>
<tr>
<td>Vue.use</td>
<td>app.use</td>
</tr>
<tr>
<td>Vue.prototype</td>
<td>app.config.globalProperties</td>
</tr>
</tbody>
</table>
</div></template>


