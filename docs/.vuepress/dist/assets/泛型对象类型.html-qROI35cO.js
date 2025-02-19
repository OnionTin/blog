import{_ as n,o as s,c as a,e as t}from"./app-CvP7wor-.js";const p={},e=t(`<h2 id="泛型对象类型" tabindex="-1"><a class="header-anchor" href="#泛型对象类型"><span>泛型对象类型</span></a></h2><blockquote><p>泛型允许你创建可重用的组件，这意味着你可以为函数、接口和类创建通用的定义，然后在使用时指定具体的类型。泛型在定义对象类型时非常有用，因为它们允许你定义具有一个或多个任意类型属性的对象。</p></blockquote><h3 id="定义泛型接口" tabindex="-1"><a class="header-anchor" href="#定义泛型接口"><span>定义泛型接口</span></a></h3><blockquote><p>可以使用泛型来定义接口，这样可以确保对象的类型在编译时就是正确的。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericObject<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> product<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;P123&quot;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Laptop&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类型别名" tabindex="-1"><a class="header-anchor" href="#泛型类型别名"><span>泛型类型别名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GenericObject<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> product<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;P123&quot;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Laptop&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用泛型类" tabindex="-1"><a class="header-anchor" href="#使用泛型类"><span>使用泛型类</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ItemStorage<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> items<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">addItem</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ItemStorage<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> strings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ItemStorage<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
strings<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token string">&quot;typescript&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束"><span>泛型约束</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">HasName</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">printName</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> HasName<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Book&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","泛型对象类型.html.vue"]]),k=JSON.parse('{"path":"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"泛型对象类型","slug":"泛型对象类型","link":"#泛型对象类型","children":[{"level":3,"title":"定义泛型接口","slug":"定义泛型接口","link":"#定义泛型接口","children":[]},{"level":3,"title":"泛型类型别名","slug":"泛型类型别名","link":"#泛型类型别名","children":[]},{"level":3,"title":"使用泛型类","slug":"使用泛型类","link":"#使用泛型类","children":[]},{"level":3,"title":"泛型约束","slug":"泛型约束","link":"#泛型约束","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Ts/对象类型/泛型对象类型/泛型对象类型.md","excerpt":"<h2>泛型对象类型</h2>\\n<blockquote>\\n<p>泛型允许你创建可重用的组件，这意味着你可以为函数、接口和类创建通用的定义，然后在使用时指定具体的类型。泛型在定义对象类型时非常有用，因为它们允许你定义具有一个或多个任意类型属性的对象。</p>\\n</blockquote>\\n<h3>定义泛型接口</h3>\\n<blockquote>\\n<p>可以使用泛型来定义接口，这样可以确保对象的类型在编译时就是正确的。</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">GenericObject<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n  id<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">;</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> user<span class=\\"token operator\\">:</span> GenericObject<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">number</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  id<span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Alice\\"</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> product<span class=\\"token operator\\">:</span> GenericObject<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">string</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  id<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"P123\\"</span><span class=\\"token punctuation\\">,</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Laptop\\"</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{r as comp,k as data};
