import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/todo-Ct5MX6vP.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="todolist-小案例总结" tabindex="-1"><a class="header-anchor" href="#todolist-小案例总结"><span>todoList 小案例总结</span></a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="todoList"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/todoList小案例总结.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const todoList______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "todoList小案例总结.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/todoList%E5%B0%8F%E6%A1%88%E4%BE%8B%E6%80%BB%E7%BB%93.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"todoList 小案例总结","slug":"todolist-小案例总结","link":"#todolist-小案例总结","children":[]}],"git":{"updatedTime":1727684271000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/todoList小案例总结.md","excerpt":"<h2>todoList 小案例总结</h2>\\n<p></p>\\n"}');
export {
  todoList______html as comp,
  data
};
