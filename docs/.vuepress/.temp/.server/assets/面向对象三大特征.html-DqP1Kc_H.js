import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征"><span>面向对象三大特征</span></a></h2><ol><li><p>封装</p><blockquote><p>提高了代码的安全性，把属性私有化，提供公共的访问方式</p></blockquote></li><li><p>继承</p><blockquote><p>提高代码的复用性，一般是将公共的属性和方法放在父类中，子类中保留其特有的内容</p></blockquote></li><li><p>多态</p><blockquote><p>提高代码的扩展性，父类引用或者父接口指向子类对象，不同类型的子对象对父类中相同的方法，产生了不同的执行结果，多态属于编译时行为</p></blockquote></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java基础/面向对象三大特征.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "面向对象三大特征.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E5%BE%81.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"面向对象三大特征","slug":"面向对象三大特征","link":"#面向对象三大特征","children":[]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/面向对象三大特征.md","excerpt":"<h2>面向对象三大特征</h2>\\n<ol>\\n<li>\\n<p>封装</p>\\n<blockquote>\\n<p>提高了代码的安全性，把属性私有化，提供公共的访问方式</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>继承</p>\\n<blockquote>\\n<p>提高代码的复用性，一般是将公共的属性和方法放在父类中，子类中保留其特有的内容</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>多态</p>\\n<blockquote>\\n<p>提高代码的扩展性，父类引用或者父接口指向子类对象，不同类型的子对象对父类中相同的方法，产生了不同的执行结果，多态属于编译时行为</p>\\n</blockquote>\\n</li>\\n</ol>"}');
export {
  _________html as comp,
  data
};
