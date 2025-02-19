import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="purecomponent" tabindex="-1"><a class="header-anchor" href="#purecomponent"><span>pureComponent</span></a></h2><h3 id="component-的-2-个问题" tabindex="-1"><a class="header-anchor" href="#component-的-2-个问题"><span>Component 的 2 个问题</span></a></h3><blockquote><ol><li>只要执行<code>setState()</code>，即使不改变状态数据，组件也会重新 render（效率低）</li><li>只当前组件重新 render，就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据（效率低）</li></ol></blockquote><h3 id="效率高的做法" tabindex="-1"><a class="header-anchor" href="#效率高的做法"><span>效率高的做法</span></a></h3><blockquote><p>只有当组件的 state 或 props 数据发生改变时才重新 render()</p></blockquote><h3 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h3><blockquote><p>Component 中的<code>shouldComponentUpdate()</code>总是返回 true</p></blockquote><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h3><h4 id="_1-重写shouldcomponentupdate-方法" tabindex="-1"><a class="header-anchor" href="#_1-重写shouldcomponentupdate-方法"><span>1. 重写<code>shouldComponentUpdate()</code>方法</span></a></h4><blockquote><p>比较新旧 state 或 props 数据，如果有变化才返回 true，如果没有返回 false</p></blockquote><h4 id="_2-使用purecomponent" tabindex="-1"><a class="header-anchor" href="#_2-使用purecomponent"><span>2. 使用<code>PureComponent</code></span></a></h4><blockquote><p><code>PureComponent</code>重写了<code>shouldComponentUpdate()</code>，只有 state 或 props 数据有变化才返回 true</p></blockquote><p><strong>注意:</strong></p><ul><li>只是进行 state 和 props 数据的浅比较，如果只是数据对象内部数据变了，返回 false</li><li>不要直接修改 state 数据，而是要产生新数据</li><li>项目中一般使用<code>PureComponent</code>来优化</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/pureComponent.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pureComponent_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "pureComponent.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/pureComponent.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"pureComponent","slug":"purecomponent","link":"#purecomponent","children":[{"level":3,"title":"Component 的 2 个问题","slug":"component-的-2-个问题","link":"#component-的-2-个问题","children":[]},{"level":3,"title":"效率高的做法","slug":"效率高的做法","link":"#效率高的做法","children":[]},{"level":3,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":3,"title":"解决","slug":"解决","link":"#解决","children":[]}]}],"git":{"updatedTime":1727972098000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/pureComponent.md","excerpt":"<!-- @format -->\\n<h2>pureComponent</h2>\\n<h3>Component 的 2 个问题</h3>\\n<blockquote>\\n<ol>\\n<li>只要执行<code>setState()</code>，即使不改变状态数据，组件也会重新 render（效率低）</li>\\n<li>只当前组件重新 render，就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据（效率低）</li>\\n</ol>\\n</blockquote>\\n<h3>效率高的做法</h3>\\n<blockquote>\\n<p>只有当组件的 state 或 props 数据发生改变时才重新 render()</p>\\n</blockquote>"}');
export {
  pureComponent_html as comp,
  data
};
