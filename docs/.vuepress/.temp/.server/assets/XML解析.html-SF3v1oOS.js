import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="xml-解析" tabindex="-1"><a class="header-anchor" href="#xml-解析"><span>XML 解析</span></a></h2><blockquote><p>xml 当作配置文件使用时，所谓解析就是获取这些重要的数据；分 Dom 解析和 SAX 解析。</p><p>Dom 解析：一次性把整个 xml 文件加载到内存形成 DOM 树，通过 document 对象实现增删改查；但是树太大的话会比较占内存。</p><p>SAX 解析：逐行读取 xml 文件，边读边解析，占用内存少，适合于 xml 文件较大的情况；但是因为边解析同时边释放，所以只能查，不能增删改。</p></blockquote><h3 id="常见的解析器" tabindex="-1"><a class="header-anchor" href="#常见的解析器"><span>常见的解析器</span></a></h3><p>DOM4J：开源组织提供的，基于 DOM 和 SAX 综合方式的解析。</p><p>JAXP：支持 DOM 和 SAX 解析，但是不支持 DOM4J 和 Jsoup。</p><p>Jsoup：主要用来解析 HTML，用域进行爬虫。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/XML/XML解析.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const XML___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "XML解析.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E8%A7%A3%E6%9E%90.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"XML 解析","slug":"xml-解析","link":"#xml-解析","children":[{"level":3,"title":"常见的解析器","slug":"常见的解析器","link":"#常见的解析器","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/XML/XML解析.md","excerpt":"<h2>XML 解析</h2>\\n<blockquote>\\n<p>xml 当作配置文件使用时，所谓解析就是获取这些重要的数据；分 Dom 解析和 SAX 解析。</p>\\n<p>Dom 解析：一次性把整个 xml 文件加载到内存形成 DOM 树，通过 document 对象实现增删改查；但是树太大的话会比较占内存。</p>\\n<p>SAX 解析：逐行读取 xml 文件，边读边解析，占用内存少，适合于 xml 文件较大的情况；但是因为边解析同时边释放，所以只能查，不能增删改。</p>\\n</blockquote>\\n<h3>常见的解析器</h3>\\n<p>DOM4J：开源组织提供的，基于 DOM 和 SAX 综合方式的解析。</p>"}');
export {
  XML___html as comp,
  data
};
