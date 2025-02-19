import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="多线程概述" tabindex="-1"><a class="header-anchor" href="#多线程概述"><span>多线程概述</span></a></h2><h3 id="多线程中的概念" tabindex="-1"><a class="header-anchor" href="#多线程中的概念"><span>多线程中的概念</span></a></h3><table><thead><tr><th>术语</th><th>解释</th></tr></thead><tbody><tr><td>进程</td><td>正在执行的应用程序，看作为开启了一个进程。</td></tr><tr><td>线程</td><td>一个进程可以开启多个线程，一个线程可以执行多个任务。</td></tr><tr><td>多线程</td><td>一个进程中可以开启多个线程，多个线程可以同时执行多个任务。</td></tr><tr><td>并发</td><td>在同一时刻，多个任务在`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`多个 CPU 上交替执行`);
      } else {
        return [
          createTextVNode("多个 CPU 上交替执行")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，宏观上，这些任务是同时执行的。</td></tr><tr><td>并行</td><td>在同一时刻，多个任务在`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`同一 CPU 上同时执行`);
      } else {
        return [
          createTextVNode("同一 CPU 上同时执行")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，微观上，这些任务是同时执行的。</td></tr></tbody></table><h3 id="杀进程" tabindex="-1"><a class="header-anchor" href="#杀进程"><span>杀进程</span></a></h3><p>一、使用命令提示符</p><ol><li>首先打开命令提示符，输入 netstat -nao，找到对应的端口号</li><li>输入 tasklist | findstr 端口号，找到对应的进程号</li><li>输入 taskkill /pid 进程号 /f，杀掉进程</li></ol><p>二、使用任务管理器</p><ol><li>首先打开命令提示符，输入 netstat -nao，找到对应的端口号</li><li>Ctrl + Alt + Del，打开任务管理器</li><li>选择“详细信息”选项卡，根据端口号找到对应的进程，右键选择“结束进程树”</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/多线程/多线程概述.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "多线程概述.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"多线程概述","slug":"多线程概述","link":"#多线程概述","children":[{"level":3,"title":"多线程中的概念","slug":"多线程中的概念","link":"#多线程中的概念","children":[]},{"level":3,"title":"杀进程","slug":"杀进程","link":"#杀进程","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/多线程/多线程概述.md","excerpt":"<h2>多线程概述</h2>\\n<h3>多线程中的概念</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>术语</th>\\n<th>解释</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>进程</td>\\n<td>正在执行的应用程序，看作为开启了一个进程。</td>\\n</tr>\\n<tr>\\n<td>线程</td>\\n<td>一个进程可以开启多个线程，一个线程可以执行多个任务。</td>\\n</tr>\\n<tr>\\n<td>多线程</td>\\n<td>一个进程中可以开启多个线程，多个线程可以同时执行多个任务。</td>\\n</tr>\\n<tr>\\n<td>并发</td>\\n<td>在同一时刻，多个任务在，宏观上，这些任务是同时执行的。</td>\\n</tr>\\n<tr>\\n<td>并行</td>\\n<td>在同一时刻，多个任务在，微观上，这些任务是同时执行的。</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  ______html as comp,
  data
};
