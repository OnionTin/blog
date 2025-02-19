<template><div><h2 id="redux-开发者工具" tabindex="-1"><a class="header-anchor" href="#redux-开发者工具"><span>redux 开发者工具</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入createStore，专门用于创建redux中最为核心的store对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux"</span><span class="token punctuation">;</span>

<span class="token comment">// 引入为Count组件服务的reducer</span>
<span class="token keyword">import</span> countReducer <span class="token keyword">from</span> <span class="token string">"./reducers/count"</span><span class="token punctuation">;</span>

<span class="token comment">// 引入为Person组件服务的reducer</span>
<span class="token keyword">import</span> personReducer <span class="token keyword">from</span> <span class="token string">"./reducers/person"</span><span class="token punctuation">;</span>

<span class="token comment">// 引入redux-thunk，用于支持异步action</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">"redux-thunk"</span><span class="token punctuation">;</span>

<span class="token comment">// 引入redux-devtools-extension</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> composeWithDevTools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux-devtools-extension"</span><span class="token punctuation">;</span>

<span class="token comment">// 汇总所有的reducer变为一个总的reducer</span>
<span class="token keyword">const</span> allReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">he</span><span class="token operator">:</span> countReducer<span class="token punctuation">,</span>
  <span class="token literal-property property">rens</span><span class="token operator">:</span> personReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  allReducer<span class="token punctuation">,</span>
  <span class="token function">composeWithDevTools</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


