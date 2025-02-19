import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript</span></a></h2><blockquote><p>ts 是 js 的超级，在满足所有的 js 语法基础上，又增加了类型判断等特性，通过 tsc 编译成我们想要的 js 版本</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/TypeScript.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TypeScript_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "TypeScript.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/TypeScript.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]}],"git":{"updatedTime":1727164099000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/TypeScript.md","excerpt":"<h2>TypeScript</h2>\\n<blockquote>\\n<p>ts 是 js 的超级，在满足所有的 js 语法基础上，又增加了类型判断等特性，通过 tsc 编译成我们想要的 js 版本</p>\\n</blockquote>\\n"}');
export {
  TypeScript_html as comp,
  data
};
