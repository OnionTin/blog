import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别"><span>隔离级别</span></a></h2><h3 id="事务的四大特性" tabindex="-1"><a class="header-anchor" href="#事务的四大特性"><span>事务的四大特性</span></a></h3><p>原子性(最小的单位，不能再往下分)、持久性、一致性(操作前后是一致的)、隔离性(事务间没有关系，互不影响)</p><p>当多个事务，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`并发`);
      } else {
        return [
          createTextVNode("并发")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`操作同一张表时，会打破隔离性，以此产生新的问题(脏读、不可重复读、幻读，幻读也是虚读)</p><ol><li><p>脏读：事务 A 读到了事务 B 未提交的数据</p></li><li><p>不可重复读：事务 A 读到了事务 B 提交后 修改(update)的 数据</p></li><li><p>幻读：事务 A 读到了事务 B 提交后 新增(insert)的或减少的 数据</p></li><li><p>丢失更新：事务 A 更新了事务 B 未提交的数据</p></li></ol><h3 id="事务的隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的隔离级别"><span>事务的隔离级别</span></a></h3><p>串行化：事务 A 执行时，事务 B 必须等待事务 A 执行完毕后才能执行；这就比较卡。</p><table><thead><tr><th>隔离级别</th><th>是否会脏读</th><th>不可重复读</th><th>幻读</th><th>丢失更新</th><th>默认级别</th></tr></thead><tbody><tr><td>读未提交(read uncommitted)</td><td>是</td><td>是</td><td>是</td><td>是</td><td>---</td></tr><tr><td>读已提交(read committed)</td><td>否</td><td>是</td><td>是</td><td>是</td><td>Oracle</td></tr><tr><td>可重复读(repeatable read)</td><td>否</td><td>否</td><td>是</td><td>是</td><td>MySQL</td></tr><tr><td>串行化(serializable)</td><td>否</td><td>否</td><td>否</td><td>否</td><td>---</td></tr></tbody></table><h3 id="设置隔离级别" tabindex="-1"><a class="header-anchor" href="#设置隔离级别"><span>设置隔离级别</span></a></h3><table><thead><tr><th>隔离级别相关命令</th><th>作用</th></tr></thead><tbody><tr><td>select @@tx_isolation</td><td>查看当前隔离级别</td></tr><tr><td>set global transaction isolation level 隔离级别</td><td>设置全局的隔离级别</td></tr><tr><td>set session transaction isolation level 隔离级别</td><td>设置当前会话的隔离级别</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/事务/隔离级别.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "隔离级别.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/%E4%BA%8B%E5%8A%A1/%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"隔离级别","slug":"隔离级别","link":"#隔离级别","children":[{"level":3,"title":"事务的四大特性","slug":"事务的四大特性","link":"#事务的四大特性","children":[]},{"level":3,"title":"事务的隔离级别","slug":"事务的隔离级别","link":"#事务的隔离级别","children":[]},{"level":3,"title":"设置隔离级别","slug":"设置隔离级别","link":"#设置隔离级别","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/事务/隔离级别.md","excerpt":"<h2>隔离级别</h2>\\n<h3>事务的四大特性</h3>\\n<p>原子性(最小的单位，不能再往下分)、持久性、一致性(操作前后是一致的)、隔离性(事务间没有关系，互不影响)</p>\\n<p>当多个事务，操作同一张表时，会打破隔离性，以此产生新的问题(脏读、不可重复读、幻读，幻读也是虚读)</p>\\n<ol>\\n<li>\\n<p>脏读：事务 A 读到了事务 B 未提交的数据</p>\\n</li>\\n<li>\\n<p>不可重复读：事务 A 读到了事务 B 提交后 修改(update)的 数据</p>\\n</li>\\n<li>\\n<p>幻读：事务 A 读到了事务 B 提交后 新增(insert)的或减少的 数据</p>\\n</li>\\n<li>\\n<p>丢失更新：事务 A 更新了事务 B 未提交的数据</p>\\n</li>\\n</ol>"}');
export {
  _____html as comp,
  data
};
