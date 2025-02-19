import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/自动装配-EV5zIJME.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="自动装配原理" tabindex="-1"><a class="header-anchor" href="#自动装配原理"><span>自动装配原理</span></a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="自动装配.png"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/自动装配/自动装配原理.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "自动装配原理.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D/%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D%E5%8E%9F%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"自动装配原理","slug":"自动装配原理","link":"#自动装配原理","children":[]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/自动装配/自动装配原理.md","excerpt":"<h2>自动装配原理</h2>\\n<p></p>\\n"}');
export {
  _______html as comp,
  data
};
