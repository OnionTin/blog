import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/哈希1.7-j6F-EdfW.jpg";
const _imports_1 = "/blog/assets/哈希1.8-BalpY1hJ.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表"><span>哈希表</span></a></h2><p>哈希值：是 jdk 通过对象的<code>地址值</code>和一些算法计算出来的一个 <code>int</code> 类型的整数值， 可以通过 <code>Object</code> 类中的 <code>hashCode()</code>方法获取。</p><p>jdk1.8 之前：数组 + 链表(即，元素为链表的数组) <img${ssrRenderAttr("src", _imports_0)} alt="哈希1.7"></p><p>jdk1.8 开始：数组 + 链表 + 红黑树 <img${ssrRenderAttr("src", _imports_1)} alt="哈希1.8"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/数据结构/哈希表.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "哈希表.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%93%88%E5%B8%8C%E8%A1%A8.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/数据结构/哈希表.md","excerpt":"<h2>哈希表</h2>\\n<p>哈希值：是 jdk 通过对象的<code>地址值</code>和一些算法计算出来的一个 <code>int</code> 类型的整数值，\\n可以通过 <code>Object</code> 类中的 <code>hashCode()</code>方法获取。</p>\\n<p>jdk1.8 之前：数组 + 链表(即，元素为链表的数组)\\n</p>\\n<p>jdk1.8 开始：数组 + 链表 + 红黑树\\n</p>\\n"}');
export {
  ____html as comp,
  data
};
