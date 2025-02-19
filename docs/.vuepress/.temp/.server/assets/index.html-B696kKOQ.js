import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"首页","lang":"zh-CN","frontmatter":{"home":true,"title":"首页","heroImage":"https://vuejs.press/images/hero.png","tagline":"分享我的积累，祝你学习进步","features":[{"title":"前端","details":"Vue2、Vue3、React等相关技术分享，包括各语法的通信方式和常用Api详解。"},{"title":"后端","details":"目前只有Java部分，包括SpringBoot、SpringCloud等相关技术分享，后期视情况可能增加有关Node或Python相关内容。"},{"title":"Ui相关","details":"涵盖了各类UI设计相关的网站的一些网站，适用于查找素材或者设计模板。"}],"footer":"MIT Licensed | Copyright © 2024-present VuePress Community"},"headers":[],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"README.md"}');
export {
  index_html as comp,
  data
};
