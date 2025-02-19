<template><div><h2 id="组件注册-局部与全局" tabindex="-1"><a class="header-anchor" href="#组件注册-局部与全局"><span>组件注册(局部与全局)</span></a></h2>
<blockquote>
<p>组件可以全局注册，使得它们可以在应用的任何地方使用；也可以局部注册，使得它们只在一个组件的模板中可用。</p>
</blockquote>
<h3 id="全局注册" tabindex="-1"><a class="header-anchor" href="#全局注册"><span>全局注册</span></a></h3>
<blockquote>
<p>全局注册的组件可以在应用的任何组件模板中使用。在 Vue 3 中，全局注册可以通过应用实例的<code v-pre>.component()</code>方法实现。</p>
</blockquote>
<h4 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h4>
<blockquote>
<p>MyComponent 将全局注册，可以在任何组件的模板中通过&lt;my-component-name&gt;使用。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">"./components/MyComponent.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"my-component-name"</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部注册" tabindex="-1"><a class="header-anchor" href="#局部注册"><span>局部注册</span></a></h3>
<blockquote>
<p>局部注册的组件只在定义它们的组件模板中可用。MyComponent 将在当前组件的模板中局部注册，并可以通过&lt;my-component-name&gt;使用。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">"./components/MyComponent.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"my-component-name"</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h4>
<ol>
<li>依赖明确：局部注册使得组件之间的依赖关系更加明确。</li>
<li>Tree-shaking：未被使用的组件不会包含在最终的构建结果中。</li>
</ol>
<h3 id="自动化全局注册" tabindex="-1"><a class="header-anchor" href="#自动化全局注册"><span>自动化全局注册</span></a></h3>
<blockquote>
<p>对于需要全局注册多个组件的情况，可以创建一个插件来自动化这个过程。</p>
</blockquote>
<h4 id="使用插件自动化注册" tabindex="-1"><a class="header-anchor" href="#使用插件自动化注册"><span>使用插件自动化注册</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// register.js</span>
<span class="token keyword">import</span> ImageView <span class="token keyword">from</span> <span class="token string">"./ImageView.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Sku <span class="token keyword">from</span> <span class="token string">"./Sku.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"XtxImageView"</span><span class="token punctuation">,</span> ImageView<span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"XtxSku"</span><span class="token punctuation">,</span> Sku<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> componentPlugin <span class="token keyword">from</span> <span class="token string">"./register.js"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>componentPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h4>
<ol>
<li>批量注册：通过一个插件文件可以注册多个组件，简化代码。</li>
<li>集中管理：所有的全局组件都在一个地方进行注册，方便管理。</li>
</ol>
</div></template>


