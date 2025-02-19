import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/队列-tDBe8qCW.jpg";
const _imports_1 = "/blog/assets/栈-Ch-22acI.jpg";
const _imports_2 = "/blog/assets/数组数据结构-CRyL_K__.jpg";
const _imports_3 = "/blog/assets/单向链表-D9GBv4uj.jpg";
const _imports_4 = "/blog/assets/单项链表修改-DqyvU8y0.jpg";
const _imports_5 = "/blog/assets/双向链表-DsZfNT26.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><h3 id="队列-先进先出" tabindex="-1"><a class="header-anchor" href="#队列-先进先出"><span>队列：先进先出</span></a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="队列"></p><h3 id="栈-先进后出" tabindex="-1"><a class="header-anchor" href="#栈-先进后出"><span>栈：先进后出</span></a></h3><p><img${ssrRenderAttr("src", _imports_1)} alt="栈"></p><h3 id="数组-查询快-增删慢" tabindex="-1"><a class="header-anchor" href="#数组-查询快-增删慢"><span>数组：查询快，增删慢</span></a></h3><p><img${ssrRenderAttr("src", _imports_2)} alt="数组数据结构"></p><h3 id="链表-查询慢-增删快" tabindex="-1"><a class="header-anchor" href="#链表-查询慢-增删快"><span>链表：查询慢，增删快</span></a></h3><p>单向链表： <img${ssrRenderAttr("src", _imports_3)} alt="单向链表"> 单向链表修改： <img${ssrRenderAttr("src", _imports_4)} alt="单向链表修改"> 双向链表： <img${ssrRenderAttr("src", _imports_5)} alt="双向链表"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/数据结构/数据结构.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "数据结构.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[{"level":3,"title":"队列：先进先出","slug":"队列-先进先出","link":"#队列-先进先出","children":[]},{"level":3,"title":"栈：先进后出","slug":"栈-先进后出","link":"#栈-先进后出","children":[]},{"level":3,"title":"数组：查询快，增删慢","slug":"数组-查询快-增删慢","link":"#数组-查询快-增删慢","children":[]},{"level":3,"title":"链表：查询慢，增删快","slug":"链表-查询慢-增删快","link":"#链表-查询慢-增删快","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/数据结构/数据结构.md","excerpt":"<h2>数据结构</h2>\\n<h3>队列：先进先出</h3>\\n<p></p>\\n<h3>栈：先进后出</h3>\\n<p></p>\\n<h3>数组：查询快，增删慢</h3>\\n<p></p>\\n<h3>链表：查询慢，增删快</h3>\\n<p>单向链表：\\n\\n单向链表修改：\\n\\n双向链表：\\n</p>\\n"}');
export {
  _____html as comp,
  data
};
