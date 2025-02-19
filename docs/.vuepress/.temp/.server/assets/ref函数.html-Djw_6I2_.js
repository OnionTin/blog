import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ref-函数" tabindex="-1"><a class="header-anchor" href="#ref-函数"><span>ref 函数</span></a></h1><blockquote><p>定义一个响应式的数据。包含响应式数据的引用对象（reference 对象，简称 ref 对象）。</p></blockquote><ul><li><strong>备注</strong>: <ul><li>接收的数据可以是基本类型，也可以是对象类型。</li><li>基本类型的数据: 响应式依然是靠<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>完成的。</li><li>对象类型的数据: 内部“求助”了 Vue 3.0 中的一个新函数<code>reactive</code>函数。</li></ul></li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 不需要\`.value\`，直接使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ xxx }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> xxx <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
xxx<span class="token punctuation">.</span>value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/常用CompositionApi/ref函数.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ref___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ref函数.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/ref%E5%87%BD%E6%95%B0.html","title":"ref 函数","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/ref函数.md","excerpt":"\\n<blockquote>\\n<p>定义一个响应式的数据。包含响应式数据的引用对象（reference 对象，简称 ref 对象）。</p>\\n</blockquote>\\n<ul>\\n<li><strong>备注</strong>:\\n<ul>\\n<li>接收的数据可以是基本类型，也可以是对象类型。</li>\\n<li>基本类型的数据: 响应式依然是靠<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>完成的。</li>\\n<li>对象类型的数据: 内部“求助”了 Vue 3.0 中的一个新函数<code>reactive</code>函数。</li>\\n</ul>\\n</li>\\n</ul>"}');
export {
  ref___html as comp,
  data
};
