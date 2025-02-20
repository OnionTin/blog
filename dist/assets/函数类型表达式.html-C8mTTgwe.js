import{_ as t,r as p,o as e,c as o,a as n,d as c,w as l,e as s,b as i}from"./app-C_RrakEG.js";const u={},r=s(`<h2 id="函数类型表达式" tabindex="-1"><a class="header-anchor" href="#函数类型表达式"><span>函数类型表达式</span></a></h2><blockquote><p>函数类型表达式用于定义函数的类型。这包括函数的参数类型、返回值类型以及可选的 this 上下文类型。函数类型表达式可以是匿名的，也可以是具名的（类型别名）。</p></blockquote><h3 id="基本函数类型表达式" tabindex="-1"><a class="header-anchor" href="#基本函数类型表达式"><span>基本函数类型表达式</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 匿名函数类型表达式</span>
<span class="token keyword">let</span> <span class="token function-variable function">myFunction</span><span class="token operator">:</span> <span class="token punctuation">(</span>param<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token comment">// 具名函数类型表达式</span>
<span class="token keyword">type</span> <span class="token class-name">MyFunctionType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>param<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={id:"函数类型的组成部分",tabindex:"-1"},d={class:"header-anchor",href:"#函数类型的组成部分"},m=s(`<ol><li>参数类型：函数的每个参数都需要一个类型注解。</li><li>返回类型：使用 =&gt; 后面跟着返回值类型来指定函数的返回类型。</li><li>可选参数：使用 ? 指定可选参数。</li><li>剩余参数：使用 ... 定义剩余参数。</li><li>this 类型：使用 this 参数来定义函数调用时上下文的类型。</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 带参数和返回类型的函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 带可选参数的函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">log</span><span class="token operator">:</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> important<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> important<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>important<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 带剩余参数的函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">sum</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> curr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> curr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 带 \`this\` 类型的函数</span>
<span class="token keyword">type</span> <span class="token class-name">StringArray</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">join</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> StringArray<span class="token punctuation">,</span> separator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token function-variable function">join</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> StringArray<span class="token punctuation">,</span> separator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(v,g){const a=p("font");return e(),o("div",null,[r,n("h3",k,[n("a",d,[n("span",null,[c(a,{color:"red"},{default:l(()=>[i("函数类型的组成部分")]),_:1})])])]),m])}const h=t(u,[["render",b],["__file","函数类型表达式.html.vue"]]),y=JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E8%A1%A8%E8%BE%BE%E5%BC%8F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"函数类型表达式","slug":"函数类型表达式","link":"#函数类型表达式","children":[{"level":3,"title":"基本函数类型表达式","slug":"基本函数类型表达式","link":"#基本函数类型表达式","children":[]},{"level":3,"title":"函数类型的组成部分","slug":"函数类型的组成部分","link":"#函数类型的组成部分","children":[]}]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/函数类型表达式.md","excerpt":"<h2>函数类型表达式</h2>\\n<blockquote>\\n<p>函数类型表达式用于定义函数的类型。这包括函数的参数类型、返回值类型以及可选的 this 上下文类型。函数类型表达式可以是匿名的，也可以是具名的（类型别名）。</p>\\n</blockquote>\\n<h3>基本函数类型表达式</h3>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// 匿名函数类型表达式</span>\\n<span class=\\"token keyword\\">let</span> <span class=\\"token function-variable function\\">myFunction</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span>param<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 具名函数类型表达式</span>\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">MyFunctionType</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>param<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{h as comp,y as data};
