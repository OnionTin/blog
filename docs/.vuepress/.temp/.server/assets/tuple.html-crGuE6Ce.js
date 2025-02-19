import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="tuple" tabindex="-1"><a class="header-anchor" href="#tuple"><span>tuple</span></a></h2><blockquote><p>元组, 元组就是长度固定的数组, 最好不要太长, 太长不如用数组了</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tarr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tarr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/常用类型/tuple.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tuple_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "tuple.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/tuple.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"tuple","slug":"tuple","link":"#tuple","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/常用类型/tuple.md","excerpt":"<h2>tuple</h2>\\n<blockquote>\\n<p>元组, 元组就是长度固定的数组, 最好不要太长, 太长不如用数组了</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">let</span> tarr<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\ntarr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"str\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">123</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  tuple_html as comp,
  data
};
