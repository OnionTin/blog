import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="unknown-未知类型-类型安全的-any" tabindex="-1"><a class="header-anchor" href="#unknown-未知类型-类型安全的-any"><span>unknown(未知类型, 类型安全的 any)</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// any类型可以赋值给任意变量</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> a<span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// 所以不建议使用any, 而是用unknown;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// unknown类型不可以赋值给任意变量</span>
<span class="token comment">// 解决办法:</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
c <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
d <span class="token operator">=</span> c <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 类型断言</span>
<span class="token comment">// 或者</span>
d <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>c<span class="token punctuation">;</span> <span class="token comment">// 类型断言</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/关于函数/unknown.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unknown_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "unknown.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/unknown.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"unknown(未知类型, 类型安全的 any)","slug":"unknown-未知类型-类型安全的-any","link":"#unknown-未知类型-类型安全的-any","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/unknown.md","excerpt":"<h2>unknown(未知类型, 类型安全的 any)</h2>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// any类型可以赋值给任意变量</span>\\n<span class=\\"token keyword\\">let</span> a<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> b <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"string\\"</span><span class=\\"token punctuation\\">;</span>\\nb <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">;</span>\\nb <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 所以不建议使用any, 而是用unknown;</span>\\n</code></pre></div>"}');
export {
  unknown_html as comp,
  data
};
