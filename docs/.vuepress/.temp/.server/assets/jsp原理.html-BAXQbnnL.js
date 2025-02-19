import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/jsp原理-Ccmk3OWj.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="jsp-原理" tabindex="-1"><a class="header-anchor" href="#jsp-原理"><span>jsp 原理</span></a></h2><blockquote><p>jsp(Java Server Pages)：表面看就是一个能写 java 代码的 html 动态资源，即 java +html；但是本质上就是一个 Servlet。</p></blockquote><p>jsp 原理： <img${ssrRenderAttr("src", _imports_0)} alt="jsp原理"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/jsp/jsp原理.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jsp___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "jsp原理.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/jsp/jsp%E5%8E%9F%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"jsp 原理","slug":"jsp-原理","link":"#jsp-原理","children":[]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/jsp/jsp原理.md","excerpt":"<h2>jsp 原理</h2>\\n<blockquote>\\n<p>jsp(Java Server Pages)：表面看就是一个能写 java 代码的 html 动态资源，即 java +html；但是本质上就是一个 Servlet。</p>\\n</blockquote>\\n<p>jsp 原理：\\n</p>\\n"}');
export {
  jsp___html as comp,
  data
};
