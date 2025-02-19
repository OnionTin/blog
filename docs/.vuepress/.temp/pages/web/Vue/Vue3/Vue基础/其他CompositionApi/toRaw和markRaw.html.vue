<template><div><h2 id="toraw-与-markraw" tabindex="-1"><a class="header-anchor" href="#toraw-与-markraw"><span>toRaw 与 markRaw</span></a></h2>
<h3 id="toraw" tabindex="-1"><a class="header-anchor" href="#toraw"><span>toRaw</span></a></h3>
<ul>
<li><strong>作用</strong>: 将一个由<code v-pre>reactive</code>生成的响应式对象转为普通对象。</li>
<li><strong>使用场景</strong>: 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li>
</ul>
<h3 id="markraw" tabindex="-1"><a class="header-anchor" href="#markraw"><span>markRaw</span></a></h3>
<ul>
<li><strong>作用</strong>: 标记一个对象，使其永远不会再成为响应式对象。</li>
<li><strong>应用场景</strong>:
<ol>
<li>有些值不应被设置为响应式的，例如复杂的第三方类库等。</li>
<li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</li>
</ol>
</li>
</ul>
<h3 id="toraw-示例" tabindex="-1"><a class="header-anchor" href="#toraw-示例"><span>toRaw 示例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">showRawPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
  p<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 直接读取p的age属性</span>
  <span class="token comment">// p变了，但是person没变</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="markraw-示例" tabindex="-1"><a class="header-anchor" href="#markraw-示例"><span>markRaw 示例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"奔驰"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  person<span class="token punctuation">.</span>car <span class="token operator">=</span> <span class="token function">markRaw</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// person 是响应式的，但是 car 是不变的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


