<template><div><h2 id="customref-自定义-ref" tabindex="-1"><a class="header-anchor" href="#customref-自定义-ref"><span>customRef(自定义 ref)</span></a></h2>
<blockquote>
<p>创建一个自定义的<code v-pre>ref</code>，并对其依赖项跟踪和更新触发进行显式控制。</p>
</blockquote>
<h3 id="自定义-ref-函数示例-实现防抖效果" tabindex="-1"><a class="header-anchor" href="#自定义-ref-函数示例-实现防抖效果"><span>自定义 ref 函数示例(实现防抖效果)</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 自定义一个ref，名为:myRef</span>
  <span class="token keyword">function</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer
    <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人从myRef这个容器中读取数据了，我把</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">给他了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token comment">// 通知Vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的)</span>
          <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人把myRef这个容器中数据改为了:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
          timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            value <span class="token operator">=</span> newValue
            <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 通知Vue去重新解析模板</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// let keyword = ref('hello') // 使用Vue提供的ref</span>
  <span class="token keyword">let</span> keyword <span class="token operator">=</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token comment">// 使用自定义的ref</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


