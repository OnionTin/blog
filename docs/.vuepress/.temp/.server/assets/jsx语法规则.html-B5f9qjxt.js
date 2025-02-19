import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="jsx-语法规则" tabindex="-1"><a class="header-anchor" href="#jsx-语法规则"><span>jsx 语法规则</span></a></h2><ol><li><p>定义虚拟 DOM 时，不要写引号。</p></li><li><p>标签中混入 JS 表达式时要用{}。</p></li><li><p>样式的类名指定不要用 class，要用 className。</p></li><li><p>内联样式，要用 <code>style={{key:value}}</code>的形式去写。</p></li><li><p>只有一个根标签</p></li><li><p>标签必须闭合</p></li><li><p>标签首字母</p><ul><li>若小写字母开头，则将该标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，</li><li>若大写字母开头,react 就去渲染对应的组件,若组件没有定义</li></ul></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/jsx语法规则.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jsx_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "jsx语法规则.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/jsx%E8%AF%AD%E6%B3%95%E8%A7%84%E5%88%99.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"jsx 语法规则","slug":"jsx-语法规则","link":"#jsx-语法规则","children":[]}],"git":{"updatedTime":1727684271000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/jsx语法规则.md","excerpt":"<h2>jsx 语法规则</h2>\\n<ol>\\n<li>\\n<p>定义虚拟 DOM 时，不要写引号。</p>\\n</li>\\n<li>\\n<p>标签中混入 JS 表达式时要用{}。</p>\\n</li>\\n<li>\\n<p>样式的类名指定不要用 class，要用 className。</p>\\n</li>\\n<li>\\n<p>内联样式，要用 <code>style={{key:value}}</code>的形式去写。</p>\\n</li>\\n<li>\\n<p>只有一个根标签</p>\\n</li>\\n<li>\\n<p>标签必须闭合</p>\\n</li>\\n<li>\\n<p>标签首字母</p>\\n<ul>\\n<li>若小写字母开头，则将该标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，</li>\\n<li>若大写字母开头,react 就去渲染对应的组件,若组件没有定义</li>\\n</ul>\\n</li>\\n</ol>"}');
export {
  jsx_____html as comp,
  data
};
