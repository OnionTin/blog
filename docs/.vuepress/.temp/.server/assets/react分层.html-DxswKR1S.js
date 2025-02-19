import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="react-分层" tabindex="-1"><a class="header-anchor" href="#react-分层"><span>react 分层</span></a></h2><p><code>State</code>: 数据状态</p><p><code>Reducer</code>：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。</p><p><code>View</code>：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。</p><p><code>Action</code>：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/react分层.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const react___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "react分层.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/react%E5%88%86%E5%B1%82.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"react 分层","slug":"react-分层","link":"#react-分层","children":[]}],"git":{"updatedTime":1727684271000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/react分层.md","excerpt":"<h2>react 分层</h2>\\n<p><code>State</code>: 数据状态</p>\\n<p><code>Reducer</code>：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。</p>\\n<p><code>View</code>：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。</p>\\n<p><code>Action</code>：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。</p>\\n"}');
export {
  react___html as comp,
  data
};
