import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="服务熔断和服务降级" tabindex="-1"><a class="header-anchor" href="#服务熔断和服务降级"><span>服务熔断和服务降级</span></a></h2><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3><table><thead><tr><th>服务熔断</th><th>服务降级</th></tr></thead><tbody><tr><td>服务端</td><td>客户端</td></tr><tr><td>针对具体服务</td><td>针对整体</td></tr></tbody></table><h3 id="服务熔断" tabindex="-1"><a class="header-anchor" href="#服务熔断"><span>服务熔断</span></a></h3><p>熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。当检测到该节点微服务调用响应正常后，恢复调用链路。在 SpringCloud 中熔断机制通过 Hystrix 实现，Hystrix 会监控微服务间调用的状况，当失败的调用到一定阈值，缺省是 5 秒内 20 次调用失败就会启动熔断机制。熔断机制的注解是@HystrixCommand。</p><h3 id="服务降级" tabindex="-1"><a class="header-anchor" href="#服务降级"><span>服务降级</span></a></h3><p>服务降级是从整个系统的负荷情况出发和考虑的，对某些负荷会比较高的情况，为了预防系统整体负荷过高，而提出的一种降低服务质量的策略，即通过提供一些降级服务从而保障核心服务正常运行。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/服务熔断和服务降级.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "服务熔断和服务降级.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/%E6%9C%8D%E5%8A%A1%E7%86%94%E6%96%AD%E5%92%8C%E6%9C%8D%E5%8A%A1%E9%99%8D%E7%BA%A7.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"服务熔断和服务降级","slug":"服务熔断和服务降级","link":"#服务熔断和服务降级","children":[{"level":3,"title":"区别","slug":"区别","link":"#区别","children":[]},{"level":3,"title":"服务熔断","slug":"服务熔断","link":"#服务熔断","children":[]},{"level":3,"title":"服务降级","slug":"服务降级","link":"#服务降级","children":[]}]}],"git":{"updatedTime":1726736496000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/服务熔断和服务降级.md","excerpt":"<h2>服务熔断和服务降级</h2>\\n<h3>区别</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>服务熔断</th>\\n<th>服务降级</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>服务端</td>\\n<td>客户端</td>\\n</tr>\\n<tr>\\n<td>针对具体服务</td>\\n<td>针对整体</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>服务熔断</h3>\\n<p>熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。当检测到该节点微服务调用响应正常后，恢复调用链路。在 SpringCloud 中熔断机制通过 Hystrix 实现，Hystrix 会监控微服务间调用的状况，当失败的调用到一定阈值，缺省是 5 秒内 20 次调用失败就会启动熔断机制。熔断机制的注解是@HystrixCommand。</p>"}');
export {
  __________html as comp,
  data
};
