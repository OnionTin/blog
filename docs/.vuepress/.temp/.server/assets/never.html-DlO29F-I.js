import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="never" tabindex="-1"><a class="header-anchor" href="#never"><span>never</span></a></h2><blockquote><p>永远不会有返回值, 空是有值的, 值为空, 所以不能用 never</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">error</span><span class="token punctuation">(</span><span class="token string">&quot;这种是没有返回值...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/关于函数/never.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const never_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "never.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/never.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"never","slug":"never","link":"#never","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/never.md","excerpt":"<h2>never</h2>\\n<blockquote>\\n<p>永远不会有返回值, 空是有值的, 值为空, 所以不能用 never</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">a</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">never</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"这种是没有返回值...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  never_html as comp,
  data
};
