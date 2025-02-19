import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="servlet-参数配置" tabindex="-1"><a class="header-anchor" href="#servlet-参数配置"><span>Servlet 参数配置</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">ServletConfig</span> config<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取到xml中配置的参数数据</span>
  <span class="token class-name">String</span> value <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/Servlet/Servlet参数配置.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Servlet_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Servlet参数配置.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Servlet 参数配置","slug":"servlet-参数配置","link":"#servlet-参数配置","children":[]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Servlet/Servlet参数配置.md","excerpt":"<h2>Servlet 参数配置</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ServletConfig</span> config<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">ServletException</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 获取到xml中配置的参数数据</span>\\n  <span class=\\"token class-name\\">String</span> value <span class=\\"token operator\\">=</span> config<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getInitParameter</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"name\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"name:\\"</span> <span class=\\"token operator\\">+</span> value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  Servlet_____html as comp,
  data
};
