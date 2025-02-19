import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/dubbo-生产者-Bs05bqmI.png";
const _imports_1 = "/blog/assets/dubbo-消费者-DBAqkhac.png";
const _imports_2 = "/blog/assets/spring-cloud-api模块-DDKztuK4.png";
const _imports_3 = "/blog/assets/spring-cloud-生产者1-CT7h8jwa.png";
const _imports_4 = "/blog/assets/spring-cloud-生产者2-Dap0sBs8.png";
const _imports_5 = "/blog/assets/spring-cloud-消费者-Ds2qaS44.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="dubbo-和-cloud-代码对比" tabindex="-1"><a class="header-anchor" href="#dubbo-和-cloud-代码对比"><span>Dubbo 和 Cloud 代码对比</span></a></h2><h3 id="dubbo-实现流程" tabindex="-1"><a class="header-anchor" href="#dubbo-实现流程"><span>Dubbo 实现流程</span></a></h3><ol><li>安装并启动 zookpeer，作为注册中心</li><li>在生产者项目中发布一个接口(@Service)到注册中心</li><li>在消费者中也要创建一个同生产者中相同接口</li><li>在消费者项目中引用(@Reference)注册中心的接口并调用</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="dubbo-生产者.png"><img${ssrRenderAttr("src", _imports_1)} alt="dubbo-消费者.png"></p><h3 id="springcloud-实现流程" tabindex="-1"><a class="header-anchor" href="#springcloud-实现流程"><span>SpringCloud 实现流程</span></a></h3><blockquote><p>简单来说，就是 api 模块提供实体类，生产者模块提供接口实现，消费者模块通过 RestTemplate 调用接口</p></blockquote><p><img${ssrRenderAttr("src", _imports_2)} alt="api服务"><img${ssrRenderAttr("src", _imports_3)} alt="生产者服务"><img${ssrRenderAttr("src", _imports_4)} alt="生产者服务"><img${ssrRenderAttr("src", _imports_5)} alt="消费者服务"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/SpringCloud基础项目/Dubbo和Cloud代码对比.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dubbo_Cloud_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Dubbo和Cloud代码对比.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/SpringCloud%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/Dubbo%E5%92%8CCloud%E4%BB%A3%E7%A0%81%E5%AF%B9%E6%AF%94.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Dubbo 和 Cloud 代码对比","slug":"dubbo-和-cloud-代码对比","link":"#dubbo-和-cloud-代码对比","children":[{"level":3,"title":"Dubbo 实现流程","slug":"dubbo-实现流程","link":"#dubbo-实现流程","children":[]},{"level":3,"title":"SpringCloud 实现流程","slug":"springcloud-实现流程","link":"#springcloud-实现流程","children":[]}]}],"git":{"updatedTime":1726736496000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/SpringCloud/SpringCloud基础项目/Dubbo和Cloud代码对比.md","excerpt":"<h2>Dubbo 和 Cloud 代码对比</h2>\\n<h3>Dubbo 实现流程</h3>\\n<ol>\\n<li>安装并启动 zookpeer，作为注册中心</li>\\n<li>在生产者项目中发布一个接口(@Service)到注册中心</li>\\n<li>在消费者中也要创建一个同生产者中相同接口</li>\\n<li>在消费者项目中引用(@Reference)注册中心的接口并调用</li>\\n</ol>\\n<p>\\n</p>\\n<h3>SpringCloud 实现流程</h3>\\n<blockquote>\\n<p>简单来说，就是 api 模块提供实体类，生产者模块提供接口实现，消费者模块通过 RestTemplate 调用接口</p>\\n</blockquote>"}');
export {
  Dubbo_Cloud_____html as comp,
  data
};
