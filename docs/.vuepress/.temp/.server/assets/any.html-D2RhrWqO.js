import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="any-建议尽量避免" tabindex="-1"><a class="header-anchor" href="#any-建议尽量避免"><span>any(建议尽量避免)</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 隐式的any类型</span>
<span class="token keyword">let</span> a<span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// 隐式的定义变量并声明类型</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/常用类型/any.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const any_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "any.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/any.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"any(建议尽量避免)","slug":"any-建议尽量避免","link":"#any-建议尽量避免","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/常用类型/any.md","excerpt":"<h2>any(建议尽量避免)</h2>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// 隐式的any类型</span>\\n<span class=\\"token keyword\\">let</span> a<span class=\\"token punctuation\\">;</span>\\na <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\na <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"str\\"</span><span class=\\"token punctuation\\">;</span>\\na <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 隐式的定义变量并声明类型</span>\\n<span class=\\"token keyword\\">let</span> b <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  any_html as comp,
  data
};
