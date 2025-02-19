import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="ascii-编码" tabindex="-1"><a class="header-anchor" href="#ascii-编码"><span>ASCII 编码</span></a></h2><p>谨记以下 <code>前 3 个编码</code>,相对应的英文字母的编码就相对应的往上加</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&#39;a&#39; -&gt; 97

&#39;A&#39; -&gt; 65

&#39;0&#39; -&gt; 48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>0 -&gt; 0</p><p>1 -&gt; 1</p><p>2 -&gt; 2</p><p>...</p><p>9 -&gt; 9</p><p>&#39;A&#39; -&gt; 65</p><p>&#39;B&#39; -&gt; 66</p><p>...</p><p>&#39;Z&#39; -&gt; 90</p><p>&#39;a&#39; -&gt; 97</p><p>&#39;b&#39; -&gt; 98</p><p>...</p><p>&#39;z&#39; -&gt; 122</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java基础/ASCII编码.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ASCII___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ASCII编码.html.vue"]]);
const data = JSON.parse(`{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/ASCII%E7%BC%96%E7%A0%81.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ASCII 编码","slug":"ascii-编码","link":"#ascii-编码","children":[]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/ASCII编码.md","excerpt":"<h2>ASCII 编码</h2>\\n<p>谨记以下 <code>前 3 个编码</code>,相对应的英文字母的编码就相对应的往上加</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>'a' -&gt; 97\\n\\n'A' -&gt; 65\\n\\n'0' -&gt; 48\\n</code></pre></div><p>0 -&gt; 0</p>\\n<p>1 -&gt; 1</p>\\n<p>2 -&gt; 2</p>\\n<p>...</p>\\n<p>9 -&gt; 9</p>"}`);
export {
  ASCII___html as comp,
  data
};
