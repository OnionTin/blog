import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="数据库常识" tabindex="-1"><a class="header-anchor" href="#数据库常识"><span>数据库常识</span></a></h2><p>关系型数据库：</p><ul><li>Oracle 大型 收费</li><li>Mysql：中小型</li><li>DB2：IBM 公司 银行用的多</li><li>SQL Server：微软</li></ul><p>非关系型数据库：</p><ul><li>Redis</li><li>HBase</li><li>MongoDB 大数据库</li><li>Neo4J</li></ul><p>启动 mysql：cmd 下 net start mysql</p><p>关闭 mysql：cmd 下 net stop mysql</p><p>登录：mysql -uuserName -ppassword</p><p>退出：exit</p><p>SQL 语句分类：</p><ul><li><p>DDL（Data Definition Language）数据定义语言：库和表的管理</p></li><li><p>DML（Data Manipulation Language）数据操作语言：插入、删除、更新、查询</p></li><li><p>DQL（Data Query Language）数据查询语言：查询</p></li><li><p>DCL（Data Control Language）数据控制语言：授权、角色、级别、权限等</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/数据库常识.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "数据库常识.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B8%B8%E8%AF%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"数据库常识","slug":"数据库常识","link":"#数据库常识","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/数据库常识.md","excerpt":"<h2>数据库常识</h2>\\n<p>关系型数据库：</p>\\n<ul>\\n<li>Oracle 大型 收费</li>\\n<li>Mysql：中小型</li>\\n<li>DB2：IBM 公司 银行用的多</li>\\n<li>SQL Server：微软</li>\\n</ul>\\n<p>非关系型数据库：</p>\\n<ul>\\n<li>Redis</li>\\n<li>HBase</li>\\n<li>MongoDB 大数据库</li>\\n<li>Neo4J</li>\\n</ul>\\n<p>启动 mysql：cmd 下 net start mysql</p>\\n<p>关闭 mysql：cmd 下 net stop mysql</p>\\n"}');
export {
  ______html as comp,
  data
};
