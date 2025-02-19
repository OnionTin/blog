import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/Aop-Cc14HFOa.jpg";
const _imports_1 = "/blog/assets/Aop1-DdkiEQzt.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="aop-概述" tabindex="-1"><a class="header-anchor" href="#aop-概述"><span>Aop 概述</span></a></h2>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`在不影响原来业务的情况下，实现代码的增强`);
      } else {
        return [
          createTextVNode("在不影响原来业务的情况下，实现代码的增强")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<blockquote><p>AOP（Aspect Oriented Programming）是面向切面编程，旨在通过将横切关注点（如日志记录、事务管理等）与业务逻辑分离，提高代码的可维护性和可扩展性。</p><p>AOP 就是通过动态代理实现的。</p></blockquote><p><img${ssrRenderAttr("src", _imports_0)} alt="Aop"><img${ssrRenderAttr("src", _imports_1)} alt="Aop"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Spring/Aop/Aop概述.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Aop___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Aop概述.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Spring/Aop/Aop%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Aop 概述","slug":"aop-概述","link":"#aop-概述","children":[]}],"git":{"updatedTime":1723540272000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Spring/Aop/Aop概述.md","excerpt":"<h2>Aop 概述</h2>\\n<blockquote>\\n<p>AOP（Aspect Oriented Programming）是面向切面编程，旨在通过将横切关注点（如日志记录、事务管理等）与业务逻辑分离，提高代码的可维护性和可扩展性。</p>\\n<p>AOP 就是通过动态代理实现的。</p>\\n</blockquote>\\n<p>\\n</p>\\n"}');
export {
  Aop___html as comp,
  data
};
