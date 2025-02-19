import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="数据库连接池概述" tabindex="-1"><a class="header-anchor" href="#数据库连接池概述"><span>数据库连接池概述</span></a></h2><p>数据库连接池？</p><p>可以存储数据库连接对象的池子，需要的时候提取，用完了后放回去。池子思想，包括数据库连接池、线程池、对象池等。</p><p>数据库连接池的作用？</p><p>使用数据库连接池，避免了需要的时候需要创建连接，用完后需要关闭连接，下次再用再去创建，用完后再去关闭； 解决了这个问题，提前把一堆数据库连接对象，装进池子里，用完归还即可；节省时间，节约资源。</p><p>常用的第三方数据库连接池？</p><p>C3P0、Druid</p><p>C3P0：C3P0 是 Mchange 公司提供的一个开源的 JDBC 连接池，它实现了数据源和 JNDI 绑定，支持 JMX 监控，并且实现了 JDBC3 规范和 JDBC2 的标准扩展。但是，C3P0 在 Windows 操作系统下表现要好于 Linux 操作系统下；</p><p>Druid：Druid 是阿里巴巴开源平台上一个数据库连接池实现，结合了 C3P0 和 BoneCP 的优点，同时加入了日志监控。Druid 可以很好的监控 DB 池连接和 SQL 的执行情况，天生就是针对监控而生的 DB 连接池，在功能、性能、扩展性方面都超过其他 DB 连接池，包括 DBCP 和 C3P0。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/数据库连接池/数据库连接池概述.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "数据库连接池概述.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"数据库连接池概述","slug":"数据库连接池概述","link":"#数据库连接池概述","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/数据库连接池/数据库连接池概述.md","excerpt":"<h2>数据库连接池概述</h2>\\n<p>数据库连接池？</p>\\n<p>可以存储数据库连接对象的池子，需要的时候提取，用完了后放回去。池子思想，包括数据库连接池、线程池、对象池等。</p>\\n<p>数据库连接池的作用？</p>\\n<p>使用数据库连接池，避免了需要的时候需要创建连接，用完后需要关闭连接，下次再用再去创建，用完后再去关闭；\\n解决了这个问题，提前把一堆数据库连接对象，装进池子里，用完归还即可；节省时间，节约资源。</p>\\n<p>常用的第三方数据库连接池？</p>\\n<p>C3P0、Druid</p>\\n<p>C3P0：C3P0 是 Mchange 公司提供的一个开源的 JDBC 连接池，它实现了数据源和 JNDI 绑定，支持 JMX 监控，并且实现了 JDBC3 规范和 JDBC2 的标准扩展。但是，C3P0 在 Windows 操作系统下表现要好于 Linux 操作系统下；</p>"}');
export {
  _________html as comp,
  data
};
