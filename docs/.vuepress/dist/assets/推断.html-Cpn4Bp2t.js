import{_ as n,o as s,c as a,e as t}from"./app-CilA4iky.js";const e={},p=t(`<h2 id="推断" tabindex="-1"><a class="header-anchor" href="#推断"><span>推断</span></a></h2><blockquote><p>泛型推断是指编译器根据上下文环境自动确定泛型参数类型的过程。这使得开发者在调用泛型函数或构造泛型类型时，不必显式指定泛型参数，从而简化了代码。</p></blockquote><h3 id="泛型推断的基本例子" tabindex="-1"><a class="header-anchor" href="#泛型推断的基本例子"><span>泛型推断的基本例子</span></a></h3><blockquote><p>在这个例子中，即使没有显式指定泛型参数，TypeScript 编译器也能够根据传递给 identity 函数的参数类型，推断出 T 应该是 number 类型或 string 类型。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeScript 推断 T 为 number</span>
<span class="token keyword">const</span> strResult <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeScript 推断 T 为 string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型推断在对象中的应用" tabindex="-1"><a class="header-anchor" href="#泛型推断在对象中的应用"><span>泛型推断在对象中的应用</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createObject</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeScript 推断 T 为 string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类中的推断" tabindex="-1"><a class="header-anchor" href="#泛型类中的推断"><span>泛型类中的推断</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericClass<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> genericObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericClass</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeScript 推断 T 为 number</span>
<span class="token keyword">const</span> genericStrObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericClass</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeScript 推断 T 为 string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束与推断" tabindex="-1"><a class="header-anchor" href="#泛型约束与推断"><span>泛型约束与推断</span></a></h3><blockquote><p>泛型约束可以用来限制泛型参数的类型，同时也可以影响泛型推断</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// Now we know it has a .length property, no more error</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// TypeScript 推断 T 为 string</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Error: number does not satisfy the &#39;Lengthwise&#39; constraint</span>
<span class="token keyword">const</span> noResult <span class="token operator">=</span> <span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","推断.html.vue"]]),k=JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0/%E6%8E%A8%E6%96%AD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"推断","slug":"推断","link":"#推断","children":[{"level":3,"title":"泛型推断的基本例子","slug":"泛型推断的基本例子","link":"#泛型推断的基本例子","children":[]},{"level":3,"title":"泛型推断在对象中的应用","slug":"泛型推断在对象中的应用","link":"#泛型推断在对象中的应用","children":[]},{"level":3,"title":"泛型类中的推断","slug":"泛型类中的推断","link":"#泛型类中的推断","children":[]},{"level":3,"title":"泛型约束与推断","slug":"泛型约束与推断","link":"#泛型约束与推断","children":[]}]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/泛型函数/推断.md","excerpt":"<h2>推断</h2>\\n<blockquote>\\n<p>泛型推断是指编译器根据上下文环境自动确定泛型参数类型的过程。这使得开发者在调用泛型函数或构造泛型类型时，不必显式指定泛型参数，从而简化了代码。</p>\\n</blockquote>\\n<h3>泛型推断的基本例子</h3>\\n<blockquote>\\n<p>在这个例子中，即使没有显式指定泛型参数，TypeScript 编译器也能够根据传递给 identity 函数的参数类型，推断出 T 应该是 number 类型或 string 类型。</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">identity</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>arg<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> arg<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> result <span class=\\"token operator\\">=</span> <span class=\\"token function\\">identity</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">42</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// TypeScript 推断 T 为 number</span>\\n<span class=\\"token keyword\\">const</span> strResult <span class=\\"token operator\\">=</span> <span class=\\"token function\\">identity</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Hello, World!\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// TypeScript 推断 T 为 string</span>\\n</code></pre></div>"}');export{r as comp,k as data};
