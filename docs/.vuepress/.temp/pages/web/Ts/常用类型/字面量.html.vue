<template><div><h2 id="字面量" tabindex="-1"><a class="header-anchor" href="#字面量"><span>字面量</span></a></h2>
<blockquote>
<p>字面量类型是指直接给出具体值的类型。它们通常用于那些只能有有限个具体值的变量。字面量类型可以是字符串字面量类型、数字字面量类型或者其他原始数据类型的字面量。</p>
</blockquote>
<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3>
<blockquote>
<p>字面量类型在以下场景中非常有用：</p>
<ol>
<li>限制变量的值：确保变量只能是某些特定的值。</li>
<li>类型守卫：与类型谓词结合使用，进行类型检查。</li>
<li>函数重载：用于区分函数的重载版本。</li>
<li>枚举类型的替代：在某些情况下，字面量类型可以作为枚举类型的替代。</li>
</ol>
</blockquote>
<h3 id="字符串字面量类型" tabindex="-1"><a class="header-anchor" href="#字符串字面量类型"><span>字符串字面量类型</span></a></h3>
<blockquote>
<p>Easing 是一个字符串字面量类型，它只能取 &quot;ease-in&quot;、&quot;ease-out&quot; 或 &quot;ease-in-out&quot; 这三个值。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Easing</span> <span class="token operator">=</span> <span class="token string">"ease-in"</span> <span class="token operator">|</span> <span class="token string">"ease-out"</span> <span class="token operator">|</span> <span class="token string">"ease-in-out"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span>element<span class="token operator">:</span> Element<span class="token punctuation">,</span> easing<span class="token operator">:</span> Easing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>easing <span class="token operator">===</span> <span class="token string">"ease-in"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>easing <span class="token operator">===</span> <span class="token string">"ease-out"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>easing <span class="token operator">===</span> <span class="token string">"ease-in-out"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Error: Type 'never' is not assignable to type 'Easing'</span>
    <span class="token keyword">const</span> error<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> easing<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字数面量类型" tabindex="-1"><a class="header-anchor" href="#数字数面量类型"><span>数字数面量类型</span></a></h3>
<blockquote>
<p>StatusCode 是一个数字字面量类型，它只能取 200、301、404 或 500 这几个值。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StatusCode</span> <span class="token operator">=</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">301</span> <span class="token operator">|</span> <span class="token number">404</span> <span class="token operator">|</span> <span class="token number">500</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleResponse</span><span class="token punctuation">(</span>status<span class="token operator">:</span> StatusCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"OK"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">301</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Moved Permanently"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">404</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Not Found"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Internal Server Error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Error: Type 'never' is not assignable to type 'StatusCode'</span>
    <span class="token keyword">const</span> error<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> status<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔字面量类型-通常用于类型守卫" tabindex="-1"><a class="header-anchor" href="#布尔字面量类型-通常用于类型守卫"><span>布尔字面量类型(通常用于类型守卫)</span></a></h3>
<blockquote>
<p>isStringOrNumber 是一个类型谓词函数，它返回一个布尔值来告诉 TypeScript value 是一个字符串或数字。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isStringOrNumber</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> value <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isStringOrNumber</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"It's a string!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字面量类型" tabindex="-1"><a class="header-anchor" href="#模板字面量类型"><span>模板字面量类型</span></a></h3>
<blockquote>
<p>模板字面量类型用于指定字符串必须是特定的格式</p>
<p>Name 是一个模板字面量类型，它只能是 &quot;Hello, ${string}!&quot; 或 &quot;Goodbye, ${string}!&quot; 格式的字符串。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Goodbye, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> Name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, Alice!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Goodbye, Bob!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hi, Charlie!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


