<template><div><h2 id="持久化-pinia" tabindex="-1"><a class="header-anchor" href="#持久化-pinia"><span>持久化 pinia</span></a></h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3>
<blockquote>
<p>Pinia 提供了插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。</p>
</blockquote>
<h3 id="持久化插件" tabindex="-1"><a class="header-anchor" href="#持久化插件"><span>持久化插件</span></a></h3>
<blockquote>
<p>Pinia 提供了一个插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。其中，持久化插件可以将 Pinia 的状态持久化到本地存储中，比如 localStorage 或者 sessionStorage，这样即使页面刷新或者关闭，状态也不会丢失。</p>
</blockquote>
<h3 id="pinia-plugin-persist" tabindex="-1"><a class="header-anchor" href="#pinia-plugin-persist"><span>pinia-plugin-persist</span></a></h3>
<blockquote>
<p>pinia-plugin-persist 是一个用于将 Pinia 状态持久化的插件，它可以将状态保存到 localStorage 或者 sessionStorage 中，并在页面刷新或者关闭后自动恢复状态。</p>
</blockquote>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pinia-plugin-persist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> piniaPluginPersist <span class="token keyword">from</span> <span class="token string">"pinia-plugin-persist"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersist<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> pinia<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> piniaPluginPersist <span class="token keyword">from</span> <span class="token string">"pinia-plugin-persist"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersist<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"my-app"</span><span class="token punctuation">,</span> <span class="token comment">// 本地存储的键名</span>
  <span class="token literal-property property">storage</span><span class="token operator">:</span> localStorage<span class="token punctuation">,</span> <span class="token comment">// 本地存储的方式，可以是 localStorage 或者 sessionStorage</span>
  <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"user.name"</span><span class="token punctuation">,</span> <span class="token string">"user.age"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 需要持久化的状态路径</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> pinia<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整体案例" tabindex="-1"><a class="header-anchor" href="#整体案例"><span>整体案例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/store/index.js</span>
<span class="token comment">// 开启缓存</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> piniaPluginPersist <span class="token keyword">from</span> <span class="token string">"pinia-plugin-persist"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersist<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/store/user.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>state<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>state<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接配置就行了，index.js中已经配置了</span>
    <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启持久化</span>
    <span class="token literal-property property">strategies</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token comment">// 本地存储的键名</span>
        <span class="token comment">// 本地存储的方式，可以是 localStorage 或者 sessionStorage</span>
        <span class="token literal-property property">storage</span><span class="token operator">:</span> localStorage<span class="token punctuation">,</span>
        <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 需要持久化的状态路径，不需要gender所以不缓存</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<blockquote>
<ol>
<li>持久化插件会将状态保存到本地存储中，如果状态中包含敏感信息，需要谨慎使用。</li>
<li>持久化插件会在页面刷新或者关闭后自动恢复状态，如果状态中包含动态生成的数据，需要小心处理。</li>
<li>持久化插件只支持简单的数据类型，如果状态中包含复杂的数据类型，需要手动处理。</li>
<li>持久化插件可能会影响性能，如果状态非常大，需要谨慎使用。</li>
<li>持久化插件可能会与其他插件冲突，需要小心处理。</li>
<li>持久化插件只支持持久化状态，如果需要持久化其他数据，需要手动处理。</li>
</ol>
</blockquote>
</div></template>


