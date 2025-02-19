import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/request对象原理-Cp6txuta.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="request-对象" tabindex="-1"><a class="header-anchor" href="#request-对象"><span>Request 对象</span></a></h2><blockquote><p>Request 对象 就是请求对象，是 Tomcat 封装的一个对象，里面包含了所有的请求消息的格式</p></blockquote><h3 id="request-体系结构" tabindex="-1"><a class="header-anchor" href="#request-体系结构"><span>Request 体系结构</span></a></h3><blockquote><p>ServletRequest 接口： javax.servlet.ServletRequest 接口</p></blockquote><blockquote><p>HttpServletRequest 接口： javax.servlet.http.HttpServletRequest 接口</p></blockquote><blockquote><p>RequestFacade 类： org.apache.catalina.connector.RequestFacade 实现类</p></blockquote><h3 id="request-对象原理" tabindex="-1"><a class="header-anchor" href="#request-对象原理"><span>Request 对象原理</span></a></h3><blockquote><p>客户端发送请求，Tomcat 服务器接收到请求，Tomcat 服务器会创建 Request 对象，Request 对象会封装请求消息，然后将 Request 对象传递给 Servlet 程序供我们使用，我们能够通过 Request 对象获取到各种想要的数据了</p></blockquote><p><img${ssrRenderAttr("src", _imports_0)} alt="request对象原理"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/Http/Request对象/Request对象概述.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Request_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Request对象概述.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/Request%E5%AF%B9%E8%B1%A1%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Request 对象","slug":"request-对象","link":"#request-对象","children":[{"level":3,"title":"Request 体系结构","slug":"request-体系结构","link":"#request-体系结构","children":[]},{"level":3,"title":"Request 对象原理","slug":"request-对象原理","link":"#request-对象原理","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Http/Request对象/Request对象概述.md","excerpt":"<h2>Request 对象</h2>\\n<blockquote>\\n<p>Request 对象 就是请求对象，是 Tomcat 封装的一个对象，里面包含了所有的请求消息的格式</p>\\n</blockquote>\\n<h3>Request 体系结构</h3>\\n<blockquote>\\n<p>ServletRequest 接口：\\njavax.servlet.ServletRequest 接口</p>\\n</blockquote>\\n<blockquote>\\n<p>HttpServletRequest 接口：\\njavax.servlet.http.HttpServletRequest 接口</p>\\n</blockquote>"}');
export {
  Request_____html as comp,
  data
};
