import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/二叉树01-Dp0fnA1U.jpg";
const _imports_1 = "/blog/assets/二叉树02-B5i3UY_L.jpg";
const _imports_2 = "/blog/assets/二叉树03-yhX7TuUY.jpg";
const _imports_3 = "/blog/assets/二叉树04-DNk-yWPa.jpg";
const _imports_4 = "/blog/assets/二叉树05-BhFZK4W9.jpg";
const _imports_5 = "/blog/assets/二叉树06-DdM_Li1I.jpg";
const _imports_6 = "/blog/assets/二叉树07-va9hV1Nz.jpg";
const _imports_7 = "/blog/assets/二叉树08-DEPPhO-K.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="普通二叉树" tabindex="-1"><a class="header-anchor" href="#普通二叉树"><span>普通二叉树</span></a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="二叉树01"><img${ssrRenderAttr("src", _imports_1)} alt="二叉树02"> 普通二叉树： <img${ssrRenderAttr("src", _imports_2)} alt="二叉树03"> 二叉查找树： <img${ssrRenderAttr("src", _imports_3)} alt="二叉树04"> 平衡二叉树： <img${ssrRenderAttr("src", _imports_4)} alt="二叉树05"><img${ssrRenderAttr("src", _imports_5)} alt="二叉树06"> 红黑树： <img${ssrRenderAttr("src", _imports_6)} alt="二叉树07"><img${ssrRenderAttr("src", _imports_7)} alt="二叉树08"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/数据结构/二叉树.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "二叉树.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E4%BA%8C%E5%8F%89%E6%A0%91.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"普通二叉树","slug":"普通二叉树","link":"#普通二叉树","children":[]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/数据结构/二叉树.md","excerpt":"<h2>普通二叉树</h2>\\n<p>\\n\\n普通二叉树：\\n\\n二叉查找树：\\n\\n平衡二叉树：\\n\\n\\n红黑树：\\n\\n</p>\\n"}');
export {
  ____html as comp,
  data
};
