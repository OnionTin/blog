import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/官网创建-g2rs2duN.jpg";
const _imports_1 = "/blog/assets/Idea创建-1-DIbi-3SW.jpg";
const _imports_2 = "/blog/assets/Idea创建-2-CrOr2WZ0.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="spring-boot-介绍-md" tabindex="-1"><a class="header-anchor" href="#spring-boot-介绍-md"><span>Spring-boot 介绍.md</span></a></h2><h3 id="spring-boot-简介" tabindex="-1"><a class="header-anchor" href="#spring-boot-简介"><span>Spring Boot 简介</span></a></h3><blockquote><p>Spring Boot 是由 Pivotal 团队提供的框架，旨在简化 Spring 应用的创建和开发过程。它通过提供一系列的“starter”依赖和自动配置功能，使得开发者可以快速构建和运行 Spring 应用，而无需进行繁琐的配置。Spring Boot 的核心理念是“约定优于配置”，它遵循“开箱即用”的原则，使得开发者可以更加专注于业务逻辑的实现，而不是配置文件的编写。</p></blockquote><h3 id="spring-boot-快速创建" tabindex="-1"><a class="header-anchor" href="#spring-boot-快速创建"><span>Spring Boot 快速创建</span></a></h3><ol><li><p><a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">官网创建`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><img${ssrRenderAttr("src", _imports_0)} alt="官网创建"></p></li><li><p>IDEA 创建 <img${ssrRenderAttr("src", _imports_1)} alt="IDEA 创建"><img${ssrRenderAttr("src", _imports_2)} alt="IDEA 创建"></p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/快速创建.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "快速创建.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Spring-boot 介绍.md","slug":"spring-boot-介绍-md","link":"#spring-boot-介绍-md","children":[{"level":3,"title":"Spring Boot 简介","slug":"spring-boot-简介","link":"#spring-boot-简介","children":[]},{"level":3,"title":"Spring Boot 快速创建","slug":"spring-boot-快速创建","link":"#spring-boot-快速创建","children":[]}]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/快速创建.md","excerpt":"<h2>Spring-boot 介绍.md</h2>\\n<h3>Spring Boot 简介</h3>\\n<blockquote>\\n<p>Spring Boot 是由 Pivotal 团队提供的框架，旨在简化 Spring 应用的创建和开发过程。它通过提供一系列的“starter”依赖和自动配置功能，使得开发者可以快速构建和运行 Spring 应用，而无需进行繁琐的配置。Spring Boot 的核心理念是“约定优于配置”，它遵循“开箱即用”的原则，使得开发者可以更加专注于业务逻辑的实现，而不是配置文件的编写。</p>\\n</blockquote>\\n<h3>Spring Boot 快速创建</h3>"}');
export {
  _____html as comp,
  data
};
