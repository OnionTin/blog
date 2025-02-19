import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="spring-cloud-介绍" tabindex="-1"><a class="header-anchor" href="#spring-cloud-介绍"><span>Spring-cloud 介绍</span></a></h2><h3 id="什么是-spring-cloud" tabindex="-1"><a class="header-anchor" href="#什么是-spring-cloud"><span>什么是 Spring Cloud</span></a></h3><p>Spring Cloud 是一系列框架的有序集合。它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。Spring Cloud 并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。</p><h3 id="spring-cloud-的主要功能" tabindex="-1"><a class="header-anchor" href="#spring-cloud-的主要功能"><span>Spring Cloud 的主要功能</span></a></h3><ul><li>服务发现与注册</li><li>配置管理</li><li>消息管理</li><li>断路器</li><li>负载均衡</li><li>数据监控</li><li>分布式会话</li><li>分布式锁</li><li>分布式事务</li><li>分布式消息队列</li><li>分布式搜索引擎</li><li>分布式缓存</li><li>分布式文件系统</li><li>分布式任务调度</li><li>分布式服务网关</li><li>分布式服务跟踪</li><li>分布式服务监控</li><li>分布式服务治理</li><li>分布式服务安全</li><li>分布式服务日志</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/Spring-cloud介绍.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SpringCloud___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Spring-cloud介绍.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/Spring-cloud%E4%BB%8B%E7%BB%8D.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Spring-cloud 介绍","slug":"spring-cloud-介绍","link":"#spring-cloud-介绍","children":[{"level":3,"title":"什么是 Spring Cloud","slug":"什么是-spring-cloud","link":"#什么是-spring-cloud","children":[]},{"level":3,"title":"Spring Cloud 的主要功能","slug":"spring-cloud-的主要功能","link":"#spring-cloud-的主要功能","children":[]}]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/Spring-cloud介绍.md","excerpt":"<h2>Spring-cloud 介绍</h2>\\n<h3>什么是 Spring Cloud</h3>\\n<p>Spring Cloud 是一系列框架的有序集合。它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。Spring Cloud 并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。</p>"}');
export {
  SpringCloud___html as comp,
  data
};
