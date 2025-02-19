<template><div><h2 id="自定义指令与自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义指令与自定义插件"><span>自定义指令与自定义插件</span></a></h2>
<blockquote>
<p>在 Vue 3 中，自定义指令和插件是两种强大的功能，它们可以扩展 Vue 的核心功能，以适应更复杂的场景。自定义指令和插件是 Vue 3 中强大的工具，它们可以帮你构建更加动态和可扩展的应用程序。通过自定义指令，你可以控制 DOM 元素的低级操作；而插件则可以提供全局级别的功能增强。</p>
</blockquote>
<h3 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令"><span>自定义指令</span></a></h3>
<blockquote>
<p>自定义指令允许你直接对 DOM 元素进行底层操作，比如监听键盘事件或者控制 DOM 元素的显示/隐藏。</p>
</blockquote>
<h4 id="如何定义" tabindex="-1"><a class="header-anchor" href="#如何定义"><span>如何定义</span></a></h4>
<p>在 Vue 3 中，自定义指令应该提供几个生命周期钩子，例如：</p>
<ul>
<li><code v-pre>created</code>：绑定元素的 attribute 或事件监听器被应用之前调用。</li>
<li><code v-pre>beforeMount</code>：在元素被插入到 DOM 之前调用。</li>
<li><code v-pre>mounted</code>：在绑定元素的父组件和所有子节点都挂载完成后调用。</li>
<li><code v-pre>beforeUpdate</code>：在包含组件的 VNode 更新之前调用。</li>
<li><code v-pre>updated</code>：在包含组件的 VNode 及其子组件的 VNode 更新后调用。</li>
<li><code v-pre>beforeUnmount</code>：在卸载绑定元素的父组件之前调用。</li>
<li><code v-pre>unmounted</code>：当指令与元素解除绑定且父组件已卸载时调用。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">"focus"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 使用 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-focus</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件"><span>自定义插件</span></a></h3>
<blockquote>
<p>自定义插件是 Vue 应用的扩展，它们可以添加全局方法或属性，注册组件，甚至添加全新的指令。</p>
</blockquote>
<h4 id="如何定义-1" tabindex="-1"><a class="header-anchor" href="#如何定义-1"><span>如何定义</span></a></h4>
<blockquote>
<p>自定义插件应该有一个 install 方法，这个方法的第一个参数是 Vue 应用实例，第二个参数是一个可选的选项对象。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function-variable function">$myGlobalMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello from my plugin!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>myPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="提供-注入-provide-inject" tabindex="-1"><a class="header-anchor" href="#提供-注入-provide-inject"><span>提供/注入 (Provide/Inject)</span></a></h4>
<blockquote>
<p>插件也可以使用 provide 和 inject 来向应用提供数据或功能。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">"theme"</span><span class="token punctuation">,</span> <span class="token string">"dark"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">"theme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


