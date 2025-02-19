<template><div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h2>
<blockquote>
<p>在 Vue 3 中，组件的生命周期钩子用于在不同阶段执行代码，例如创建、更新、渲染和销毁组件。以下是 Vue 3 中组件生命周期的主要钩子：</p>
</blockquote>
<h3 id="setup-阶段" tabindex="-1"><a class="header-anchor" href="#setup-阶段"><span>Setup 阶段</span></a></h3>
<ul>
<li><code v-pre>setup()</code>：在组件实例创建之前执行，用于声明响应式数据和计算属性。</li>
</ul>
<h3 id="创建阶段" tabindex="-1"><a class="header-anchor" href="#创建阶段"><span>创建阶段</span></a></h3>
<ul>
<li><code v-pre>beforeCreate()</code>：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。</li>
<li><code v-pre>created()</code>：在实例创建完成后被调用，此时实例已完成数据观测、属性和方法的运算，但挂载阶段还未开始，<code v-pre>$el</code> 属性还未显示出来。</li>
</ul>
<h3 id="装载阶段" tabindex="-1"><a class="header-anchor" href="#装载阶段"><span>装载阶段</span></a></h3>
<ul>
<li><code v-pre>beforeMount()</code>：在挂载开始之前被调用：相关的<code v-pre>render</code>函数首次被调用。</li>
<li><code v-pre>onBeforeMount()</code>：一个<code v-pre>onMounted</code>的别名，在挂载开始之前被调用。</li>
<li><code v-pre>mounted()</code>：在<code v-pre>el</code>被新创建的<code v-pre>vm.$el</code>替换后调用，可以执行 DOM 操作。</li>
</ul>
<h3 id="更新阶段" tabindex="-1"><a class="header-anchor" href="#更新阶段"><span>更新阶段</span></a></h3>
<ul>
<li><code v-pre>beforeUpdate()</code>：在数据变化之后，DOM 被重新渲染之前调用，此时可以在这个钩子中进一步地更改状态。</li>
<li><code v-pre>updated()</code>：在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后被调用。</li>
</ul>
<h3 id="渲染阶段" tabindex="-1"><a class="header-anchor" href="#渲染阶段"><span>渲染阶段</span></a></h3>
<ul>
<li><code v-pre>render()</code>：Vue 3 中的渲染函数，用于手动编写模板渲染逻辑。</li>
</ul>
<h3 id="销毁阶段" tabindex="-1"><a class="header-anchor" href="#销毁阶段"><span>销毁阶段</span></a></h3>
<ul>
<li><code v-pre>beforeUnmount()</code>：在卸载开始之前被调用。</li>
<li><code v-pre>unmounted()</code>：在组件卸载之后调用。</li>
</ul>
<h3 id="异步操作" tabindex="-1"><a class="header-anchor" href="#异步操作"><span>异步操作</span></a></h3>
<ul>
<li><code v-pre>onBeforeUnmount()</code>：在组件卸载之前被调用。</li>
<li><code v-pre>onUnmounted()</code>：在组件卸载之后被调用。</li>
</ul>
<h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h3>
<ul>
<li><code v-pre>onErrorCaptured()</code>：当捕获一个来自子孙组件的错误时被调用。</li>
<li><code v-pre>onRenderTracked()</code>：当依赖项被追踪时触发。</li>
<li><code v-pre>onRenderTriggered()</code>：当依赖项触发重新渲染时触发。</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"组件已挂载"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"组件已卸载"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<ol>
<li>生命周期钩子在 setup() 函数中通过 onXXX 的形式注册。</li>
<li>setup() 阶段是 Composition API 的入口，它在组件实例创建之前执行。</li>
<li>created 和 mounted 钩子在服务器端渲染 (SSR) 时只调用一次。</li>
</ol>
</div></template>


