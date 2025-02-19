import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/Iterator-gB6-DyE7.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="iterator-迭代器" tabindex="-1"><a class="header-anchor" href="#iterator-迭代器"><span>Iterator 迭代器</span></a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="Iterator"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/单列集合Collection/Iterator迭代器.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Iterator____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Iterator迭代器.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Iterator%E8%BF%AD%E4%BB%A3%E5%99%A8.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Iterator 迭代器","slug":"iterator-迭代器","link":"#iterator-迭代器","children":[]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/Iterator迭代器.md","excerpt":"<h2>Iterator 迭代器</h2>\\n<p></p>\\n"}');
export {
  Iterator____html as comp,
  data
};
