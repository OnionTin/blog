import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/转发和重定向-BGjDWWb-.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="springmvc-转发和重定向" tabindex="-1"><a class="header-anchor" href="#springmvc-转发和重定向"><span>SpringMvc 转发和重定向</span></a></h2><blockquote><p>有没有视图解析器，都可以实现转发和重定向</p></blockquote><h3 id="转发和重定向的区别" tabindex="-1"><a class="header-anchor" href="#转发和重定向的区别"><span>转发和重定向的区别</span></a></h3><ul><li>转发：url 不会改变，服务器端行为</li><li>重定向：url 会改变，客户端行为</li></ul><h3 id="转发" tabindex="-1"><a class="header-anchor" href="#转发"><span>转发</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 没有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">&quot;/success.jsp&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向"><span>重定向</span></a></h3><blockquote>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`注意是 redirect:/，不是 redirect:`);
      } else {
        return [
          createTextVNode("注意是 redirect:/，不是 redirect:")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">&quot;redirect:/success&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 没有视图解析器</span>
<span class="token keyword">return</span> <span class="token string">&quot;redirect:/success.jsp&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="转发和重定向"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringMvc/SpringMvc转发和重定向.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SpringMvc_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "SpringMvc转发和重定向.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringMvc/SpringMvc%E8%BD%AC%E5%8F%91%E5%92%8C%E9%87%8D%E5%AE%9A%E5%90%91.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"SpringMvc 转发和重定向","slug":"springmvc-转发和重定向","link":"#springmvc-转发和重定向","children":[{"level":3,"title":"转发和重定向的区别","slug":"转发和重定向的区别","link":"#转发和重定向的区别","children":[]},{"level":3,"title":"转发","slug":"转发","link":"#转发","children":[]},{"level":3,"title":"重定向","slug":"重定向","link":"#重定向","children":[]}]}],"git":{"updatedTime":1723909671000,"contributors":[{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringMvc/SpringMvc转发和重定向.md","excerpt":"<!-- @format -->\\n<h2>SpringMvc 转发和重定向</h2>\\n<blockquote>\\n<p>有没有视图解析器，都可以实现转发和重定向</p>\\n</blockquote>\\n<h3>转发和重定向的区别</h3>\\n<ul>\\n<li>转发：url 不会改变，服务器端行为</li>\\n<li>重定向：url 会改变，客户端行为</li>\\n</ul>\\n<h3>转发</h3>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 有视图解析器</span>\\n<span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"success\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 没有视图解析器</span>\\n<span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"/success.jsp\\"</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  SpringMvc_______html as comp,
  data
};
