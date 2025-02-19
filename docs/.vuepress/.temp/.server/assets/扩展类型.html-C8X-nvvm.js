import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="扩展类型" tabindex="-1"><a class="header-anchor" href="#扩展类型"><span>扩展类型</span></a></h2><blockquote><p>对象类型的扩展可以通过接口（interface）和类型别名（type）来实现。这两种方式都允许你基于现有的类型定义新的类型，从而增加新的属性或方法。</p></blockquote><h3 id="使用-interface-扩展类型" tabindex="-1"><a class="header-anchor" href="#使用-interface-扩展类型"><span>使用 interface 扩展类型</span></a></h3><blockquote><p>接口可以通过 extends 关键字来扩展一个或多个接口，从而继承它们的属性。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bear</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  honey<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bear<span class="token operator">:</span> Bear <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot; Winnie&quot;</span><span class="token punctuation">,</span>
  honey<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-type-扩展类型" tabindex="-1"><a class="header-anchor" href="#使用-type-扩展类型"><span>使用 type 扩展类型</span></a></h3><blockquote><p>类型别名 type 可以使用交叉类型（&amp;）来组合多个类型。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Bear</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  honey<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bear<span class="token operator">:</span> Bear <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot; Winnie&quot;</span><span class="token punctuation">,</span>
  honey<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展现有类型" tabindex="-1"><a class="header-anchor" href="#扩展现有类型"><span>扩展现有类型</span></a></h3><blockquote><p>如果你想为现有的类型（如数组）添加新的属性，可以使用声明合并。例如，为数组添加一个 last 属性。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  last<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/对象类型/扩展类型.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "扩展类型.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%89%A9%E5%B1%95%E7%B1%BB%E5%9E%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"扩展类型","slug":"扩展类型","link":"#扩展类型","children":[{"level":3,"title":"使用 interface 扩展类型","slug":"使用-interface-扩展类型","link":"#使用-interface-扩展类型","children":[]},{"level":3,"title":"使用 type 扩展类型","slug":"使用-type-扩展类型","link":"#使用-type-扩展类型","children":[]},{"level":3,"title":"扩展现有类型","slug":"扩展现有类型","link":"#扩展现有类型","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Ts/对象类型/扩展类型.md","excerpt":"<h2>扩展类型</h2>\\n<blockquote>\\n<p>对象类型的扩展可以通过接口（interface）和类型别名（type）来实现。这两种方式都允许你基于现有的类型定义新的类型，从而增加新的属性或方法。</p>\\n</blockquote>\\n<h3>使用 interface 扩展类型</h3>\\n<blockquote>\\n<p>接口可以通过 extends 关键字来扩展一个或多个接口，从而继承它们的属性。</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Animal</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Bear</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Animal</span> <span class=\\"token punctuation\\">{</span>\\n  honey<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">boolean</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> bear<span class=\\"token operator\\">:</span> Bear <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\" Winnie\\"</span><span class=\\"token punctuation\\">,</span>\\n  honey<span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  _____html as comp,
  data
};
