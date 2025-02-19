import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/反射-BvsD0Mvg.jpg";
const _imports_1 = "/blog/assets/反射图解-BUoG4FQ_.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="反射概述" tabindex="-1"><a class="header-anchor" href="#反射概述"><span>反射概述</span></a></h2><p>正射？</p><ol><li>先创建对象</li><li>调用对象的属性或方法</li></ol><p>反射？</p><ol><li>先创建属性或者方法对象</li><li>将属性或者方法对象赋值给某个对象</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="反射"></p><h3 id="class-对象加载过程-字节码文件加载过程" tabindex="-1"><a class="header-anchor" href="#class-对象加载过程-字节码文件加载过程"><span>Class 对象加载过程（字节码文件加载过程）</span></a></h3><p><img${ssrRenderAttr("src", _imports_1)} alt="反射过程"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/反射/反射概述.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "反射概述.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E5%8F%8D%E5%B0%84%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"反射概述","slug":"反射概述","link":"#反射概述","children":[{"level":3,"title":"Class 对象加载过程（字节码文件加载过程）","slug":"class-对象加载过程-字节码文件加载过程","link":"#class-对象加载过程-字节码文件加载过程","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/反射/反射概述.md","excerpt":"<h2>反射概述</h2>\\n<p>正射？</p>\\n<ol>\\n<li>先创建对象</li>\\n<li>调用对象的属性或方法</li>\\n</ol>\\n<p>反射？</p>\\n<ol>\\n<li>先创建属性或者方法对象</li>\\n<li>将属性或者方法对象赋值给某个对象</li>\\n</ol>\\n<p></p>\\n<h3>Class 对象加载过程（字节码文件加载过程）</h3>\\n<p></p>\\n"}');
export {
  _____html as comp,
  data
};
