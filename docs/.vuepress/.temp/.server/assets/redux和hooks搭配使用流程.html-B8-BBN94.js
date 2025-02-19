import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="redux-和-hooks-搭配使用流程" tabindex="-1"><a class="header-anchor" href="#redux-和-hooks-搭配使用流程"><span>redux 和 hooks 搭配使用流程</span></a></h2><blockquote><p>【useState】-&gt; 【useReducer】-&gt; 【useSelector、useDispatch】</p></blockquote><p>通过 useSelector、useDispatch 等方法,我们可以用 Hooks 方法完成 Redux 的功能,Hooks 和 Redux 之间没有替代关系,应该更好地共存和融合。 React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/redux和hooks搭配使用流程.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const redux_hooks_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "redux和hooks搭配使用流程.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/redux%E5%92%8Chooks%E6%90%AD%E9%85%8D%E4%BD%BF%E7%94%A8%E6%B5%81%E7%A8%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"redux 和 hooks 搭配使用流程","slug":"redux-和-hooks-搭配使用流程","link":"#redux-和-hooks-搭配使用流程","children":[]}],"git":{"updatedTime":1727679545000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/redux和hooks搭配使用流程.md","excerpt":"<h2>redux 和 hooks 搭配使用流程</h2>\\n<blockquote>\\n<p>【useState】-&gt; 【useReducer】-&gt; 【useSelector、useDispatch】</p>\\n</blockquote>\\n<p>通过 useSelector、useDispatch 等方法,我们可以用 Hooks 方法完成 Redux 的功能,Hooks 和 Redux 之间没有替代关系,应该更好地共存和融合。\\nReact.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。</p>\\n"}');
export {
  redux_hooks_______html as comp,
  data
};
