import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/流程1-8CJzaTOe.jpg";
const _imports_1 = "/blog/assets/流程2-C1dX56AS.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_url_pattern = resolveComponent("url-pattern");
  const _component_welcome_file_list = resolveComponent("welcome-file-list");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="servlet-执行流程" tabindex="-1"><a class="header-anchor" href="#servlet-执行流程"><span>Servlet 执行流程</span></a></h2><blockquote><p>浏览器发出请求后，Tomcat 接收到请求，去项目中的 web.xml 文件中找 Servlet 对象，没有再去 Tomcat 的 web.xml 中找 Servlet 对象，找到并开始 Servlet 的创建流程。`);
  _push(ssrRenderComponent(_component_url_pattern, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`/`);
      } else {
        return [
          createTextVNode("/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，代表匹配所有的资源。</p></blockquote><p><img${ssrRenderAttr("src", _imports_0)} alt="流程1"></p><blockquote><p>当在 Tomcat 的 web.xml 中，都找不到我们想要的资源，默认会设置`);
  _push(ssrRenderComponent(_component_welcome_file_list, null, null, _parent));
  _push(`，所以会去寻找 index.jsp 等设置的 文件，找到并开始 Servlet 的创建流程。</p></blockquote><p><img${ssrRenderAttr("src", _imports_1)} alt="流程2"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/Servlet/Servlet执行流程.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Servlet_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Servlet执行流程.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Servlet 执行流程","slug":"servlet-执行流程","link":"#servlet-执行流程","children":[]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Servlet/Servlet执行流程.md","excerpt":"<h2>Servlet 执行流程</h2>\\n<blockquote>\\n<p>浏览器发出请求后，Tomcat 接收到请求，去项目中的 web.xml 文件中找 Servlet 对象，没有再去 Tomcat 的 web.xml 中找 Servlet 对象，找到并开始 Servlet 的创建流程。，代表匹配所有的资源。</p>\\n</blockquote>\\n<p></p>\\n<blockquote>\\n<p>当在 Tomcat 的 web.xml 中，都找不到我们想要的资源，默认会设置，所以会去寻找 index.jsp 等设置的 文件，找到并开始 Servlet 的创建流程。</p>\\n</blockquote>"}');
export {
  Servlet_____html as comp,
  data
};
