import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="eureka-自我保护机制" tabindex="-1"><a class="header-anchor" href="#eureka-自我保护机制"><span>Eureka 自我保护机制</span></a></h2><blockquote><p>总结就是好死不如赖活着</p></blockquote><blockquote><p>比如某一个服务，因为断电等原因，导致服务下线，Eureka 接收不到心跳，但是服务并没有真正的下线，此时不该注销该服务，Eureka 会保存注册中心的服务信息，宁可错误保留，也不盲目注销或删除，这就是好死不如赖活着。</p></blockquote><blockquote><p>当 Eureka 再次收到心跳时，服务会被重新注册，这就是自我保护机制。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/Eureka自我保护机制.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Eureka_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Eureka自我保护机制.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/Eureka%E8%87%AA%E6%88%91%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Eureka 自我保护机制","slug":"eureka-自我保护机制","link":"#eureka-自我保护机制","children":[]}],"git":{"updatedTime":1726648298000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/Eureka自我保护机制.md","excerpt":"<h2>Eureka 自我保护机制</h2>\\n<blockquote>\\n<p>总结就是好死不如赖活着</p>\\n</blockquote>\\n<blockquote>\\n<p>比如某一个服务，因为断电等原因，导致服务下线，Eureka 接收不到心跳，但是服务并没有真正的下线，此时不该注销该服务，Eureka 会保存注册中心的服务信息，宁可错误保留，也不盲目注销或删除，这就是好死不如赖活着。</p>\\n</blockquote>\\n<blockquote>\\n<p>当 Eureka 再次收到心跳时，服务会被重新注册，这就是自我保护机制。</p>\\n</blockquote>\\n"}');
export {
  Eureka_______html as comp,
  data
};
