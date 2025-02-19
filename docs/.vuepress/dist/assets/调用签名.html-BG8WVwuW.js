import{_ as n,o as s,c as a,e as t}from"./app-CvP7wor-.js";const p={},e=t(`<h2 id="调用签名" tabindex="-1"><a class="header-anchor" href="#调用签名"><span>调用签名</span></a></h2><blockquote><p>调用签名（Call Signatures）是接口中用于描述函数类型的一种方式。它们定义了函数的参数列表和返回类型。调用签名使得接口可以作为一种通用的函数类型，用于任何符合调用签名描述的函数。</p></blockquote><h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3><blockquote><p>接口可以包含一个或多个调用签名。GreetFunction 接口定义了一个调用签名，它指定了函数必须接受一个 string 类型的参数并且没有返回值（void）。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GreetFunction</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现这个接口的任何函数都必须接受一个 string 参数并返回 void</span>
<span class="token keyword">const</span> greet<span class="token operator">:</span> <span class="token function-variable function">GreetFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有可选参数的调用签名" tabindex="-1"><a class="header-anchor" href="#带有可选参数的调用签名"><span>带有可选参数的调用签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GreetFunction</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> optionalGreeting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> greet<span class="token operator">:</span> <span class="token function-variable function">GreetFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  optionalGreeting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> greeting <span class="token operator">=</span> optionalGreeting <span class="token operator">||</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>greeting<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有剩余参数的调用签名" tabindex="-1"><a class="header-anchor" href="#带有剩余参数的调用签名"><span>带有剩余参数的调用签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GreetFunction</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>greetings<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> greet<span class="token operator">:</span> <span class="token function-variable function">GreetFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>greetings<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  greetings<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有-this-类型的调用签名" tabindex="-1"><a class="header-anchor" href="#带有-this-类型的调用签名"><span>带有 this 类型的调用签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GreetThis</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> greet<span class="token operator">:</span> <span class="token function-variable function">GreetThis</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
  greet<span class="token operator">:</span> greet<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Hello, Alice!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型调用签名" tabindex="-1"><a class="header-anchor" href="#泛型调用签名"><span>泛型调用签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericGreet</span> <span class="token punctuation">{</span>
  <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> genericGreet<span class="token operator">:</span> <span class="token function-variable function">GenericGreet</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个调用签名" tabindex="-1"><a class="header-anchor" href="#多个调用签名"><span>多个调用签名</span></a></h3><blockquote><p>接口可以有多个调用签名，但它们必须有不同的参数列表。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GreetFunction</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> greet<span class="token operator">:</span> <span class="token function-variable function">GreetFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  greeting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>greeting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>greeting<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ol><li>调用签名不能有同名参数。</li><li>调用签名的参数类型和返回类型必须完全匹配。</li><li>调用签名可以与其他属性或方法共存于同一个接口中。</li></ol>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","调用签名.html.vue"]]),k=JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E8%B0%83%E7%94%A8%E7%AD%BE%E5%90%8D.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"调用签名","slug":"调用签名","link":"#调用签名","children":[{"level":3,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]},{"level":3,"title":"带有可选参数的调用签名","slug":"带有可选参数的调用签名","link":"#带有可选参数的调用签名","children":[]},{"level":3,"title":"带有剩余参数的调用签名","slug":"带有剩余参数的调用签名","link":"#带有剩余参数的调用签名","children":[]},{"level":3,"title":"带有 this 类型的调用签名","slug":"带有-this-类型的调用签名","link":"#带有-this-类型的调用签名","children":[]},{"level":3,"title":"泛型调用签名","slug":"泛型调用签名","link":"#泛型调用签名","children":[]},{"level":3,"title":"多个调用签名","slug":"多个调用签名","link":"#多个调用签名","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/调用签名.md","excerpt":"<h2>调用签名</h2>\\n<blockquote>\\n<p>调用签名（Call Signatures）是接口中用于描述函数类型的一种方式。它们定义了函数的参数列表和返回类型。调用签名使得接口可以作为一种通用的函数类型，用于任何符合调用签名描述的函数。</p>\\n</blockquote>\\n<h3>基本语法</h3>\\n<blockquote>\\n<p>接口可以包含一个或多个调用签名。GreetFunction 接口定义了一个调用签名，它指定了函数必须接受一个 string 类型的参数并且没有返回值（void）。</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">GreetFunction</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token punctuation\\">(</span>name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 实现这个接口的任何函数都必须接受一个 string 参数并返回 void</span>\\n<span class=\\"token keyword\\">const</span> greet<span class=\\"token operator\\">:</span> <span class=\\"token function-variable function\\">GreetFunction</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span>name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">void</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">Hello, </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>name<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">!</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{r as comp,k as data};
