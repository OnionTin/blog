import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="void" tabindex="-1"><a class="header-anchor" href="#void"><span>void</span></a></h2><blockquote><p>函数没有返回值的时候用</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token comment">// 或者</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token comment">// 或者</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/关于函数/void.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const void_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "void.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/void.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"void","slug":"void","link":"#void","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/void.md","excerpt":"<h2>void</h2>\\n<blockquote>\\n<p>函数没有返回值的时候用</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">a</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">void</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 或者</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">undefined</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 或者</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  void_html as comp,
  data
};
