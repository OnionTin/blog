import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/CAP-C6myZ1F9.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="cap-原则" tabindex="-1"><a class="header-anchor" href="#cap-原则"><span>CAP 原则</span></a></h2><h3 id="acid" tabindex="-1"><a class="header-anchor" href="#acid"><span>ACID</span></a></h3><blockquote><p>ACID 是指数据库事务正确执行的四个基本要素的缩写。包含：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。像 MySql、Oracle、SqlSever 等关系型数据库遵循。</p></blockquote><h3 id="cap" tabindex="-1"><a class="header-anchor" href="#cap"><span>CAP</span></a></h3><blockquote><p>Consistency（一致性）、Availability（可用性）、Partition tolerance（分区容错性），NoSql(redis、mongodb) 等非关系型数据库遵循。CAP 是指在一个分布式系统中，，三者不可同时获得，要么 AC、要么 AP、要么 CP。 <img${ssrRenderAttr("src", _imports_0)} alt="CAP"></p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/CAP原则.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CAP___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "CAP原则.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/CAP%E5%8E%9F%E5%88%99.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"CAP 原则","slug":"cap-原则","link":"#cap-原则","children":[{"level":3,"title":"ACID","slug":"acid","link":"#acid","children":[]},{"level":3,"title":"CAP","slug":"cap","link":"#cap","children":[]}]}],"git":{"updatedTime":1726648298000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/CAP原则.md","excerpt":"<h2>CAP 原则</h2>\\n<h3>ACID</h3>\\n<blockquote>\\n<p>ACID 是指数据库事务正确执行的四个基本要素的缩写。包含：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。像 MySql、Oracle、SqlSever 等关系型数据库遵循。</p>\\n</blockquote>\\n<h3>CAP</h3>\\n<blockquote>\\n<p>Consistency（一致性）、Availability（可用性）、Partition tolerance（分区容错性），NoSql(redis、mongodb) 等非关系型数据库遵循。CAP 是指在一个分布式系统中，，三者不可同时获得，要么 AC、要么 AP、要么 CP。\\n</p>\\n</blockquote>"}');
export {
  CAP___html as comp,
  data
};
