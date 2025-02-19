<template><div><h2 id="vue3-中的-watch-和-watcheffect" tabindex="-1"><a class="header-anchor" href="#vue3-中的-watch-和-watcheffect"><span>Vue3 中的 watch 和 watchEffect</span></a></h2>
<h3 id="watch-和-watcheffect-的区别" tabindex="-1"><a class="header-anchor" href="#watch-和-watcheffect-的区别"><span>watch 和 watchEffect 的区别</span></a></h3>
<ul>
<li>watch：既要指明监视的属性，也要指明监视的回调。</li>
<li>watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。</li>
</ul>
<h3 id="watcheffect-与-computed-的对比" tabindex="-1"><a class="header-anchor" href="#watcheffect-与-computed-的对比"><span>watchEffect 与 computed 的对比</span></a></h3>
<ul>
<li><strong>watchEffect</strong> 有点像 <code v-pre>computed</code>：
<ul>
<li>但 <code v-pre>computed</code> 注重的是计算出来的值（回调函数的返回值），所以必须要写返回值。</li>
<li>而 <code v-pre>watchEffect</code> 更注重的是过程（回调函数的函数体），所以不用写返回值。</li>
<li><code v-pre>watchEffect</code> 所指定的回调中用到的数据只要发生变化，则直接重新执行回调。</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x1 <span class="token operator">=</span> sum<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token keyword">const</span> x2 <span class="token operator">=</span> person<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"watchEffect配置的回调执行了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// setup函数和监视</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数据</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'你好啊'</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 监视</span>
  <span class="token comment">// watch(sum, (newValue, oldValue) => {</span>
  <span class="token comment">//   console.log('sum的值变化了', newValue, oldValue)</span>
  <span class="token comment">// }, { immediate: true })</span>

  <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> x1 <span class="token operator">=</span> sum<span class="token punctuation">.</span>value
    <span class="token keyword">const</span> x2 <span class="token operator">=</span> person<span class="token punctuation">.</span>job<span class="token punctuation">.</span>j1<span class="token punctuation">.</span>salary
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'watchEffect所指定的回调执行了'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


