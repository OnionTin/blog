<template><div><h2 id="readonly-与-shallowreadonly" tabindex="-1"><a class="header-anchor" href="#readonly-与-shallowreadonly"><span>readonly 与 shallowReadonly</span></a></h2>
<blockquote>
<p>也可以是 ref 定义的;一般用于引用了别人的数据,并且在当前页面内不允许改。
readonly 和 shallowReadonly 的区别在于 readonly 是深度只读,而 shallowReadonly 是浅度只读,只对第一层属性进行只读处理,不会对嵌套的属性进行只读处理</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> readonly<span class="token punctuation">,</span> shallowReadonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.88</span><span class="token punctuation">,</span>
    <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// readonly:深度只读</span>
<span class="token keyword">const</span> state2 <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// shallowReadonly:浅度只读</span>
<span class="token keyword">const</span> state3 <span class="token operator">=</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>

state2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"李四"</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
state3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"李四"</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
state3<span class="token punctuation">.</span>info<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">1.88</span><span class="token punctuation">;</span> <span class="token comment">// 不报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


