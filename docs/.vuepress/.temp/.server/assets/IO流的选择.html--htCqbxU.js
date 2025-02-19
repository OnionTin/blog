import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/IO流选择-CNql59T9.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="io-流的选择" tabindex="-1"><a class="header-anchor" href="#io-流的选择"><span>IO 流的选择</span></a></h2><blockquote><p>一般的 txt、java 等文件，内容能看得懂的可以使用字符流；如果看不懂，必须使用字节流； 字节流可以操作大多数文件，如 mp4、mp3、img 等； docx 和 excel 文件不能用字符流，即便是用的是字节流，也可能出现内容丢失的情况。</p></blockquote><h3 id="_1-字符流" tabindex="-1"><a class="header-anchor" href="#_1-字符流"><span>1. 字符流</span></a></h3><ul><li>字符流只能操作文本文件</li></ul><h3 id="_2-字节流" tabindex="-1"><a class="header-anchor" href="#_2-字节流"><span>2. 字节流</span></a></h3><ul><li>万能流，可以操作所有文件</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="IO流选择.jpg"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/IO流/IO流的选择.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IO_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "IO流的选择.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/IO%E6%B5%81%E7%9A%84%E9%80%89%E6%8B%A9.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"IO 流的选择","slug":"io-流的选择","link":"#io-流的选择","children":[{"level":3,"title":"1. 字符流","slug":"_1-字符流","link":"#_1-字符流","children":[]},{"level":3,"title":"2. 字节流","slug":"_2-字节流","link":"#_2-字节流","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/IO流/IO流的选择.md","excerpt":"<h2>IO 流的选择</h2>\\n<blockquote>\\n<p>一般的 txt、java 等文件，内容能看得懂的可以使用字符流；如果看不懂，必须使用字节流；\\n字节流可以操作大多数文件，如 mp4、mp3、img 等；\\ndocx 和 excel 文件不能用字符流，即便是用的是字节流，也可能出现内容丢失的情况。</p>\\n</blockquote>\\n<h3>1. 字符流</h3>\\n<ul>\\n<li>字符流只能操作文本文件</li>\\n</ul>\\n<h3>2. 字节流</h3>\\n<ul>\\n<li>万能流，可以操作所有文件</li>\\n</ul>\\n<h3>总结</h3>\\n<p></p>\\n"}');
export {
  IO_____html as comp,
  data
};
