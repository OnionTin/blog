import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="react-组件通信" tabindex="-1"><a class="header-anchor" href="#react-组件通信"><span>React 组件通信</span></a></h2><h3 id="组件间的关系" tabindex="-1"><a class="header-anchor" href="#组件间的关系"><span>组件间的关系:</span></a></h3><ul><li>父子组件</li><li>兄弟组件(非嵌套组件)</li><li>祖孙组件(跨级组件)</li></ul><h3 id="几种通信方式" tabindex="-1"><a class="header-anchor" href="#几种通信方式"><span>几种通信方式:</span></a></h3><ol><li><p>props:</p><ul><li>children props</li><li>render props</li></ul></li><li><p>消息订阅-发布:</p><ul><li>pubs-sub</li><li>event 等等</li></ul></li><li><p>集中式管理:</p><ul><li>redux</li><li>dva 等等</li></ul></li><li><p>conText:</p><ul><li>生产者-消费者模式</li></ul></li></ol><h3 id="比较好的搭配方式" tabindex="-1"><a class="header-anchor" href="#比较好的搭配方式"><span>比较好的搭配方式:</span></a></h3><ul><li>父子组件: props</li><li>兄弟组件: 消息订阅-发布、集中式管理</li><li>祖孙组件(跨级组件): 消息订阅-发布、集中式管理、conText(开发用的少,封装插件用的多)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/react组件通信.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const react_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "react组件通信.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/react%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"React 组件通信","slug":"react-组件通信","link":"#react-组件通信","children":[{"level":3,"title":"组件间的关系:","slug":"组件间的关系","link":"#组件间的关系","children":[]},{"level":3,"title":"几种通信方式:","slug":"几种通信方式","link":"#几种通信方式","children":[]},{"level":3,"title":"比较好的搭配方式:","slug":"比较好的搭配方式","link":"#比较好的搭配方式","children":[]}]}],"git":{"updatedTime":1727972098000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/react组件通信.md","excerpt":"<!-- @format -->\\n<h2>React 组件通信</h2>\\n<h3>组件间的关系:</h3>\\n<ul>\\n<li>父子组件</li>\\n<li>兄弟组件(非嵌套组件)</li>\\n<li>祖孙组件(跨级组件)</li>\\n</ul>\\n<h3>几种通信方式:</h3>\\n<ol>\\n<li>\\n<p>props:</p>\\n<ul>\\n<li>children props</li>\\n<li>render props</li>\\n</ul>\\n</li>\\n<li>\\n<p>消息订阅-发布:</p>\\n<ul>\\n<li>pubs-sub</li>\\n<li>event 等等</li>\\n</ul>\\n</li>\\n<li>\\n<p>集中式管理:</p>\\n<ul>\\n<li>redux</li>\\n<li>dva 等等</li>\\n</ul>\\n</li>\\n<li>\\n<p>conText:</p>\\n<ul>\\n<li>生产者-消费者模式</li>\\n</ul>\\n</li>\\n</ol>"}');
export {
  react_____html as comp,
  data
};
