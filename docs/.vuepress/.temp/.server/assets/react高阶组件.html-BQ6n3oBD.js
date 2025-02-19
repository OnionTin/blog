import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="react-高阶组件" tabindex="-1"><a class="header-anchor" href="#react-高阶组件"><span>react 高阶组件</span></a></h2><ol><li><code>React.memo</code>: 适用于函数组件，但不适用于 class 组件 <blockquote><p><code>React.memo()使用场景就是纯函数组件频繁渲染props</code>; <code>React.memo 仅检查 props 变更</code>,且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍<code>会重新渲染</code>;其实就是在实现 shouldComponentUpdate 生命周期。</p></blockquote></li><li><code>React.PureComponent</code>: 在 class 组件中使用。 <blockquote><p>React.PureComponent 与 React.Component 唯一的区别在于 Rect.Component 没有实现 shouldComponentUpdate(), 而 React.PureComponent 中<code>以浅层对比 props 和state 的方式</code>来实现了该函数。</p></blockquote></li><li><code>withRouter</code>： <code>withRouter</code>的作用就是, 如果我们某个东西不是一个<code>Router</code>, 但是我们要依靠它去跳转一个页面。 <blockquote><p>比如点击页面的<code>logo</code>, <code>返回首页</code>。, 这时候就可以使用<code>withRouter</code>来做.<code>withRouter</code>, 作用是将一个组件包裹进<code>Route</code>里面, 然后<code>react-router</code>的三个对象<code>history, location, match</code>就会被放进这个组件的<code>props</code>属性中。被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作</p></blockquote></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/react高阶组件.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const react_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "react高阶组件.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/react%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"react 高阶组件","slug":"react-高阶组件","link":"#react-高阶组件","children":[]}],"git":{"updatedTime":1727679545000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/react高阶组件.md","excerpt":"<h2>react 高阶组件</h2>\\n<ol>\\n<li><code>React.memo</code>: 适用于函数组件，但不适用于 class 组件\\n<blockquote>\\n<p><code>React.memo()使用场景就是纯函数组件频繁渲染props</code>; <code>React.memo 仅检查 props 变更</code>,且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍<code>会重新渲染</code>;其实就是在实现 shouldComponentUpdate 生命周期。</p>\\n</blockquote>\\n</li>\\n<li><code>React.PureComponent</code>: 在 class 组件中使用。\\n<blockquote>\\n<p>React.PureComponent 与 React.Component 唯一的区别在于 Rect.Component 没有实现 shouldComponentUpdate(), 而 React.PureComponent 中<code>以浅层对比 props 和state 的方式</code>来实现了该函数。</p>\\n</blockquote>\\n</li>\\n<li><code>withRouter</code>： <code>withRouter</code>的作用就是, 如果我们某个东西不是一个<code>Router</code>, 但是我们要依靠它去跳转一个页面。\\n<blockquote>\\n<p>比如点击页面的<code>logo</code>, <code>返回首页</code>。, 这时候就可以使用<code>withRouter</code>来做.<code>withRouter</code>, 作用是将一个组件包裹进<code>Route</code>里面, 然后<code>react-router</code>的三个对象<code>history, location, match</code>就会被放进这个组件的<code>props</code>属性中。被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作</p>\\n</blockquote>\\n</li>\\n</ol>"}');
export {
  react_____html as comp,
  data
};
