import{_ as n,o as s,c as a,e}from"./app-CilA4iky.js";const t={},c=e(`<h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect"><span>useEffect</span></a></h2><blockquote><p>Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）</p></blockquote><h3 id="react-中的副作用操作" tabindex="-1"><a class="header-anchor" href="#react-中的副作用操作"><span>React 中的副作用操作:</span></a></h3><ul><li>发 ajax 请求数据获取</li><li>设置订阅/启动定时器</li><li>手动更改真实 DOM</li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在此可以执行任何带副作用操作</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在组件卸载前执行</span>
    <span class="token comment">// 在此做一些收尾工作，比如清除定时器/取消订阅等</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>stateValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果指定的是[],回调函数只会在第一次render()后执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可以把-useeffect-hook-看做如下三个函数的组合" tabindex="-1"><a class="header-anchor" href="#可以把-useeffect-hook-看做如下三个函数的组合"><span>可以把 useEffect Hook 看做如下三个函数的组合</span></a></h3><p>componentDidMount()</p><p>componentDidUpdate()</p><p>componentWillUnmount()</p>`,10),o=[c];function p(l,i){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","useEffect.html.vue"]]),k=JSON.parse('{"path":"/web/React/useEffect.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[{"level":3,"title":"React 中的副作用操作:","slug":"react-中的副作用操作","link":"#react-中的副作用操作","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"可以把 useEffect Hook 看做如下三个函数的组合","slug":"可以把-useeffect-hook-看做如下三个函数的组合","link":"#可以把-useeffect-hook-看做如下三个函数的组合","children":[]}]}],"git":{"updatedTime":1727972098000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/useEffect.md","excerpt":"<!-- @format -->\\n<h2>useEffect</h2>\\n<blockquote>\\n<p>Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）</p>\\n</blockquote>\\n<h3>React 中的副作用操作:</h3>\\n<ul>\\n<li>发 ajax 请求数据获取</li>\\n<li>设置订阅/启动定时器</li>\\n<li>手动更改真实 DOM</li>\\n</ul>\\n<h3>语法</h3>\\n<div class=\\"language-jsx\\" data-ext=\\"jsx\\" data-title=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token function\\">useEffect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 在此可以执行任何带副作用操作</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 在组件卸载前执行</span>\\n    <span class=\\"token comment\\">// 在此做一些收尾工作，比如清除定时器/取消订阅等</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span>stateValue<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 如果指定的是[],回调函数只会在第一次render()后执行</span>\\n</code></pre></div>"}');export{r as comp,k as data};
