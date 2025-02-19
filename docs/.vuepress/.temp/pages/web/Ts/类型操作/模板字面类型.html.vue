<template><div><h2 id="模板字面类型" tabindex="-1"><a class="header-anchor" href="#模板字面类型"><span>模板字面类型</span></a></h2>
<blockquote>
<p>模板字面类型（Template Literal Types）是从字符串字面类型构建的，并且可以通过联合类型扩展成多个字符串。它们与 JavaScript 中的模板字面字符串具有相同的语法，但用于类型位置。当与具体的字面类型一起使用时，模板字面通过连接内容生成新的字符串字面类型
。</p>
</blockquote>
<blockquote>
<p>定义一个类型，它通过连接一个已知的字符串和一个泛型参数来创建一个新的字符串字面类型:</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">World</span> <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Greeting</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>World<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token comment">// Greeting 类型为 "hello world"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>当在插值位置使用联合类型时，类型可以由每个联合成员表示的每个可能的字符串字面类型的集合:</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EmailLocaleIDs</span> <span class="token operator">=</span> <span class="token string">"welcome_email"</span> <span class="token operator">|</span> <span class="token string">"email_heading"</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">FooterLocaleIDs</span> <span class="token operator">=</span> <span class="token string">"footer_title"</span> <span class="token operator">|</span> <span class="token string">"footer_sendoff"</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">AllLocaleIDs</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>EmailLocaleIDs <span class="token operator">|</span> FooterLocaleIDs<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_id</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token comment">// AllLocaleIDs 类型为 "welcome_email_id" | "email_heading_id"</span>
<span class="token comment">// z| "footer_title_id" | "footer_sendoff_id"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板字面类型可以用于创建复杂的类型关系，通过内联字符串插值在类型中。它们与映射类型结合使用时尤其强大，可以基于现有类型定义新类型或接口的变换。</p>
<blockquote>
<p>可以使用模板字面类型来定义 API 端点的路径:</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Routes</span> <span class="token punctuation">{</span>
  home<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  about<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  contact<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">RouteNames</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Routes<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Path</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>RouteNames<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> homePath<span class="token operator">:</span> Path <span class="token operator">=</span> <span class="token string">"/home"</span><span class="token punctuation">;</span>
<span class="token comment">// 正确</span>
<span class="token keyword">const</span> loginPath<span class="token operator">:</span> Path <span class="token operator">=</span> <span class="token string">"/login"</span><span class="token punctuation">;</span>
<span class="token comment">// 错误：类型 '"/login"' 不能分配给类型 'Path'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板字面类型也可以用来确保函数参数之间的关系。</p>
<blockquote>
<p>创建一个函数，它根据事件名称推断出事件处理函数的参数类型：</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Event</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">"click"</span> <span class="token operator">|</span> <span class="token string">"mouseover"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  timestamp<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>
  eventType<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token string">"click"</span> <span class="token operator">|</span> <span class="token string">"mouseover"</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-event</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  handler<span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event <span class="token operator">&amp;</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"click"</span> <span class="token operator">|</span> <span class="token string">"mouseover"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实现</span>
<span class="token punctuation">}</span>

<span class="token function">handleEvent</span><span class="token punctuation">(</span><span class="token string">"click-event"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 正确</span>
<span class="token function">handleEvent</span><span class="token punctuation">(</span><span class="token string">"keypress-event"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 错误：参数 '"keypress-event"' 不能分配给参数 '"click-event" | "mouseover-event"'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


