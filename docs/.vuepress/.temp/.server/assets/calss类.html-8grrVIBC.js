import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="calss-类" tabindex="-1"><a class="header-anchor" href="#calss-类"><span>calss 类</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 只能创建对象在对象身上进行访问</span>
  <span class="token keyword">static</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 静态属性: 不用new对象就可以被类访问的属性 Person.age</span>
  <span class="token keyword">readonly</span> sex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// readonly: 只读属性</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/类/calss类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calss__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "calss类.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E7%B1%BB/calss%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"calss 类","slug":"calss-类","link":"#calss-类","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/类/calss类.md","excerpt":"<h2>calss 类</h2>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Person</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 只能创建对象在对象身上进行访问</span>\\n  <span class=\\"token keyword\\">static</span> age<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 静态属性: 不用new对象就可以被类访问的属性 Person.age</span>\\n  <span class=\\"token keyword\\">readonly</span> sex<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// readonly: 只读属性</span>\\n  <span class=\\"token function\\">say</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  calss__html as comp,
  data
};
