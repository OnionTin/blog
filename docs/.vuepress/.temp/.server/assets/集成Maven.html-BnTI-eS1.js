import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/Maven-1-aVojFiqA.jpg";
const _imports_1 = "/blog/assets/Maven-2-SwO0QWfl.jpg";
const _imports_2 = "/blog/assets/Maven-3-BPzV385r.jpg";
const _imports_3 = "/blog/assets/Maven-4-c_ZfpG6w.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="集成-maven" tabindex="-1"><a class="header-anchor" href="#集成-maven"><span>集成 Maven</span></a></h2><blockquote><p>在 Eclipse 中集成和使用 Maven 创建项目已经被弃用</p></blockquote><h3 id="idea-中配置-maven-和-tomcat" tabindex="-1"><a class="header-anchor" href="#idea-中配置-maven-和-tomcat"><span>Idea 中配置 Maven 和 Tomcat</span></a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="Mavenue-1">; <img${ssrRenderAttr("src", _imports_1)} alt="Mavenue-2">; <img${ssrRenderAttr("src", _imports_2)} alt="Mavenue-3">; <img${ssrRenderAttr("src", _imports_3)} alt="Mavenue-4">;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/Maven/集成Maven.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __Maven_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "集成Maven.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Maven/%E9%9B%86%E6%88%90Maven.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"集成 Maven","slug":"集成-maven","link":"#集成-maven","children":[{"level":3,"title":"Idea 中配置 Maven 和 Tomcat","slug":"idea-中配置-maven-和-tomcat","link":"#idea-中配置-maven-和-tomcat","children":[]}]}],"git":{"updatedTime":1723195339000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Maven/集成Maven.md","excerpt":"<h2>集成 Maven</h2>\\n<blockquote>\\n<p>在 Eclipse 中集成和使用 Maven 创建项目已经被弃用</p>\\n</blockquote>\\n<h3>Idea 中配置 Maven 和 Tomcat</h3>\\n<p>;\\n;\\n;\\n;</p>\\n"}');
export {
  __Maven_html as comp,
  data
};
