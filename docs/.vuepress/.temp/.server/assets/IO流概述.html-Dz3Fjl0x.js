import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/IO-B76v-ZRe.svg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="io-流概述" tabindex="-1"><a class="header-anchor" href="#io-流概述"><span>IO 流概述</span></a></h2><p>所有相关的抽象类和实现类，都需要导包，且都在 java.io 包下。</p><p>什么是 IO 流？</p><p>I：Input，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`读、输入`);
      } else {
        return [
          createTextVNode("读、输入")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，将数据从本地磁盘中<code>读</code>出来，<code>输入</code>到内存中(大脑里)</p><p>O：Output，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`写、输出`);
      } else {
        return [
          createTextVNode("写、输出")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，将内存中的数据<code>写</code>下来，<code>输出</code>到本地磁盘中(写纸上)</p><h3 id="io-流的体系结构" tabindex="-1"><a class="header-anchor" href="#io-流的体系结构"><span>IO 流的体系结构</span></a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="IO流"></p><h3 id="io-流的分类" tabindex="-1"><a class="header-anchor" href="#io-流的分类"><span>IO 流的分类</span></a></h3><ul><li><p>按照流向分</p><ul><li>输入流</li><li>输出流</li></ul></li><li><p>按照类型分</p><ul><li>字节流</li><li>字符流</li></ul></li><li><p>按习惯分类</p><ul><li>字节输入流</li><li>字节输出流</li><li>字符输入流</li><li>字符输出流</li></ul></li></ul><h3 id="流的选择" tabindex="-1"><a class="header-anchor" href="#流的选择"><span>流的选择</span></a></h3><ul><li>字符流操作文本</li><li>字节流是万能流</li></ul><h3 id="流的转换" tabindex="-1"><a class="header-anchor" href="#流的转换"><span>流的转换</span></a></h3><p>转换流，可以将字节流转换成字符流。</p><h3 id="流的打印" tabindex="-1"><a class="header-anchor" href="#流的打印"><span>流的打印</span></a></h3><p>打印流，只能是输出流；既有字节打印流，又有字符打印流。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/IO流/IO流概述.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IO____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "IO流概述.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/IO%E6%B5%81%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"IO 流概述","slug":"io-流概述","link":"#io-流概述","children":[{"level":3,"title":"IO 流的体系结构","slug":"io-流的体系结构","link":"#io-流的体系结构","children":[]},{"level":3,"title":"IO 流的分类","slug":"io-流的分类","link":"#io-流的分类","children":[]},{"level":3,"title":"流的选择","slug":"流的选择","link":"#流的选择","children":[]},{"level":3,"title":"流的转换","slug":"流的转换","link":"#流的转换","children":[]},{"level":3,"title":"流的打印","slug":"流的打印","link":"#流的打印","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/IO流/IO流概述.md","excerpt":"<h2>IO 流概述</h2>\\n<p>所有相关的抽象类和实现类，都需要导包，且都在 java.io 包下。</p>\\n<p>什么是 IO 流？</p>\\n<p>I：Input，，将数据从本地磁盘中<code>读</code>出来，<code>输入</code>到内存中(大脑里)</p>\\n<p>O：Output，，将内存中的数据<code>写</code>下来，<code>输出</code>到本地磁盘中(写纸上)</p>\\n<h3>IO 流的体系结构</h3>\\n<p></p>\\n<h3>IO 流的分类</h3>\\n<ul>\\n<li>\\n<p>按照流向分</p>\\n<ul>\\n<li>输入流</li>\\n<li>输出流</li>\\n</ul>\\n</li>\\n<li>\\n<p>按照类型分</p>\\n<ul>\\n<li>字节流</li>\\n<li>字符流</li>\\n</ul>\\n</li>\\n<li>\\n<p>按习惯分类</p>\\n<ul>\\n<li>字节输入流</li>\\n<li>字节输出流</li>\\n<li>字符输入流</li>\\n<li>字符输出流</li>\\n</ul>\\n</li>\\n</ul>"}');
export {
  IO____html as comp,
  data
};
