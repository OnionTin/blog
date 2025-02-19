import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array"><span>array</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> arr1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr3<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/常用类型/array.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const array_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "array.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/array.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"array","slug":"array","link":"#array","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/常用类型/array.md","excerpt":"<h2>array</h2>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">let</span> arr1<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> arr2<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">Array</span><span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">number</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> arr3<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">Array</span><span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">any</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  array_html as comp,
  data
};
