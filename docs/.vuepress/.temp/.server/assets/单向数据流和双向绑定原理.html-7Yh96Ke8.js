import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="单向数据流和双向绑定原理" tabindex="-1"><a class="header-anchor" href="#单向数据流和双向绑定原理"><span>单向数据流和双向绑定原理</span></a></h2><blockquote><p>react 的<code>单向数据流</code>是指只允许父组件向子组件传递数据，子组件绝对不能修改父组件传的数据，如果想要修改数据，则要在子组件中执行父组件传递过来的回调函数，提醒父组件对数据进行修改。数据单向流让所有的状态改变可以追溯，有利于应用的可维护性；angular 中实现了双向数据绑定，代码编写方便，但是不利于维护</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/单向数据流和双向绑定原理.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "单向数据流和双向绑定原理.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81%E5%92%8C%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"单向数据流和双向绑定原理","slug":"单向数据流和双向绑定原理","link":"#单向数据流和双向绑定原理","children":[]}],"git":{"updatedTime":1727684271000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/单向数据流和双向绑定原理.md","excerpt":"<h2>单向数据流和双向绑定原理</h2>\\n<blockquote>\\n<p>react 的<code>单向数据流</code>是指只允许父组件向子组件传递数据，子组件绝对不能修改父组件传的数据，如果想要修改数据，则要在子组件中执行父组件传递过来的回调函数，提醒父组件对数据进行修改。数据单向流让所有的状态改变可以追溯，有利于应用的可维护性；angular 中实现了双向数据绑定，代码编写方便，但是不利于维护</p>\\n</blockquote>\\n"}');
export {
  _____________html as comp,
  data
};
