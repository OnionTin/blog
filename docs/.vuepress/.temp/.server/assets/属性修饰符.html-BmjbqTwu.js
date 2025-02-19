import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="属性修饰符" tabindex="-1"><a class="header-anchor" href="#属性修饰符"><span>属性修饰符</span></a></h2><blockquote><p>对象类型的属性可以被赋予不同的修饰符，以定义它们的特性，如是否可选、是否只读等。</p></blockquote><h3 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性"><span>可选属性</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 可选属性，不需要在所有对象中都提供</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// age 属性被省略，将被赋值为 undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person2<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// 提供了 age 属性</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="必需属性" tabindex="-1"><a class="header-anchor" href="#必需属性"><span>必需属性</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 必需属性</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 必需属性</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性"><span>只读属性</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> point<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Error: Cannot assign to &#39;x&#39; because it is a read-only property.</span>
<span class="token comment">// point.x = 5;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性修饰符的组合" tabindex="-1"><a class="header-anchor" href="#属性修饰符的组合"><span>属性修饰符的组合</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 可选属性</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 只读属性</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">// age 属性是可选的，可以省略</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Error: Cannot assign to &#39;id&#39; because it is a read-only property.</span>
<span class="token comment">// person.id = 2;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/对象类型/属性修饰符.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "属性修饰符.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E5%B1%9E%E6%80%A7%E4%BF%AE%E9%A5%B0%E7%AC%A6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"属性修饰符","slug":"属性修饰符","link":"#属性修饰符","children":[{"level":3,"title":"可选属性","slug":"可选属性","link":"#可选属性","children":[]},{"level":3,"title":"必需属性","slug":"必需属性","link":"#必需属性","children":[]},{"level":3,"title":"只读属性","slug":"只读属性","link":"#只读属性","children":[]},{"level":3,"title":"属性修饰符的组合","slug":"属性修饰符的组合","link":"#属性修饰符的组合","children":[]}]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/对象类型/属性修饰符.md","excerpt":"<h2>属性修饰符</h2>\\n<blockquote>\\n<p>对象类型的属性可以被赋予不同的修饰符，以定义它们的特性，如是否可选、是否只读等。</p>\\n</blockquote>\\n<h3>可选属性</h3>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Person</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  age<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 可选属性，不需要在所有对象中都提供</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> person1<span class=\\"token operator\\">:</span> Person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Alice\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token comment\\">// age 属性被省略，将被赋值为 undefined</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> person2<span class=\\"token operator\\">:</span> Person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Bob\\"</span><span class=\\"token punctuation\\">,</span>\\n  age<span class=\\"token operator\\">:</span> <span class=\\"token number\\">30</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 提供了 age 属性</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  ______html as comp,
  data
};
