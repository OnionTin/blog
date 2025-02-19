import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="库操作" tabindex="-1"><a class="header-anchor" href="#库操作"><span>库操作</span></a></h2><table><thead><tr><th>语法</th><th>作用</th></tr></thead><tbody><tr><td>net start mysql</td><td>启动 mysql 服务</td></tr><tr><td>net stop mysql</td><td>停止 mysql 服务</td></tr><tr><td>mysql -u root -p</td><td>连接(登录) mysql</td></tr><tr><td>exit</td><td>退出连接</td></tr><tr><td>show databases;</td><td>查看所有数据库</td></tr><tr><td>create database 数据库名;</td><td>创建数据库</td></tr><tr><td>show create database 数据库名;</td><td>查看创建数据库时的语句</td></tr><tr><td>drop database 数据库名;</td><td>删除数据库</td></tr><tr><td>use 数据库名;</td><td>选择数据库</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/库操作.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "库操作.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/%E5%BA%93%E6%93%8D%E4%BD%9C.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"库操作","slug":"库操作","link":"#库操作","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/库操作.md","excerpt":"<h2>库操作</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>语法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>net start mysql</td>\\n<td>启动 mysql 服务</td>\\n</tr>\\n<tr>\\n<td>net stop mysql</td>\\n<td>停止 mysql 服务</td>\\n</tr>\\n<tr>\\n<td>mysql -u root -p</td>\\n<td>连接(登录) mysql</td>\\n</tr>\\n<tr>\\n<td>exit</td>\\n<td>退出连接</td>\\n</tr>\\n<tr>\\n<td>show databases;</td>\\n<td>查看所有数据库</td>\\n</tr>\\n<tr>\\n<td>create database 数据库名;</td>\\n<td>创建数据库</td>\\n</tr>\\n<tr>\\n<td>show create database 数据库名;</td>\\n<td>查看创建数据库时的语句</td>\\n</tr>\\n<tr>\\n<td>drop database 数据库名;</td>\\n<td>删除数据库</td>\\n</tr>\\n<tr>\\n<td>use 数据库名;</td>\\n<td>选择数据库</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  ____html as comp,
  data
};
