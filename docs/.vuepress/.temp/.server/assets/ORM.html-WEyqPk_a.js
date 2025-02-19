import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/ORM-DbGzzQ59.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="orm" tabindex="-1"><a class="header-anchor" href="#orm"><span>ORM</span></a></h2><blockquote><p>JdbcTemplate 是 Spring 框架中针对 JDBC 的封装，是 JDBC 的工具类，简化代码的书写。</p><p>基于 ORM 思想的一个小框架。</p></blockquote>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ORM (Object Relational Mapping)思想：对象关系映射，将对象和数据库表进行映射，操作对象就可以操作数据库表`);
      } else {
        return [
          createTextVNode("ORM (Object Relational Mapping)思想：对象关系映射，将对象和数据库表进行映射，操作对象就可以操作数据库表")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`。<blockquote><ol><li><p>在实际开发中，往往是数据库中的一张表，会对应 Java 中的一个类；其中，类名和表名一般是一致的，表中的字段和类中的属性名也一般是一致的。</p></li><li><p>因为涉及到关系了，所以底层用的都是反射</p></li></ol></blockquote><p><img${ssrRenderAttr("src", _imports_0)} alt="ORM"></p><h3 id="jdbctemplate-的基本使用步骤" tabindex="-1"><a class="header-anchor" href="#jdbctemplate-的基本使用步骤"><span>JdbcTemplate 的基本使用步骤</span></a></h3><ol><li>导入 jar 包(很多，可能由 5/6 个 jar 包组成，都放在 lib 下)</li><li>创建 JdbcTemplate 对象，依赖于数据源</li><li>将数据库连接池对象，封装到 JdbcTemplate 对象中</li><li>执行数据库 CRUD 操作</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/JdbcTemplate/ORM.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ORM_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ORM.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/JdbcTemplate/ORM.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ORM","slug":"orm","link":"#orm","children":[{"level":3,"title":"JdbcTemplate 的基本使用步骤","slug":"jdbctemplate-的基本使用步骤","link":"#jdbctemplate-的基本使用步骤","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/JdbcTemplate/ORM.md","excerpt":"<h2>ORM</h2>\\n<blockquote>\\n<p>JdbcTemplate 是 Spring 框架中针对 JDBC 的封装，是 JDBC 的工具类，简化代码的书写。</p>\\n<p>基于 ORM 思想的一个小框架。</p>\\n</blockquote>\\n。<blockquote>\\n<ol>\\n<li>\\n<p>在实际开发中，往往是数据库中的一张表，会对应 Java 中的一个类；其中，类名和表名一般是一致的，表中的字段和类中的属性名也一般是一致的。</p>\\n</li>\\n<li>\\n<p>因为涉及到关系了，所以底层用的都是反射</p>\\n</li>\\n</ol>\\n</blockquote>\\n<p></p>"}');
export {
  ORM_html as comp,
  data
};
