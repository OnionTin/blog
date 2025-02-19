import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/单列集合-YcIO2HkX.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_Mermaid = resolveComponent("Mermaid");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合"><span>集合</span></a></h2><p>什么是集合？</p><p>集合是一个容器，由一组`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`无序且唯一`);
      } else {
        return [
          createTextVNode("无序且唯一")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`（即不能重复）的项组成的。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ol><li><p>长度是可以变化的</p></li><li><p>集合容器只能存储引用数据类型(如果装载的是基本数据类型，则底层会默认调用其包装类的方法)</p></li><li><p>一个集合容器中，可以存储不同引用数据类型的数据</p></li></ol><h3 id="集合与数组的区别" tabindex="-1"><a class="header-anchor" href="#集合与数组的区别"><span>`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/admin/Java/Java常用Api/集合.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`集合`);
      } else {
        return [
          createTextVNode("集合")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`与`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/admin/Java/Java基础/数组.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`数组`);
      } else {
        return [
          createTextVNode("数组")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的区别</span></a></h3><ol><li><p>集合长度可变，数组一旦初始化长度就固定了</p></li><li><p>集合只能存储引用数据类型，数组可以存储任意数据类型</p></li><li><p>集合中存储的数据类型可以不同，数组中存储的数据类型必须相同</p></li></ol>`);
  _push(ssrRenderComponent(_component_Mermaid, {
    id: "mermaid-50",
    code: "eJy91M9KwzAcB/C7T1F233L3IAy34Wbn/hUvYYdsC1tY15Y2CL6A7KDbDooHwYsIXhS9DXyeOnwL02x0a5rWgamFlpKm/X76y68dusgZaXr7QGNbEX4/XPmLaVfL54+0Ejy2TRP3KbEt7Wv27M+funxa3yT9sVbSciNKHe8QANtiUyixCkNCMS4QG/RMewjQYEIsUEMXiB/85XJ1+1J0CPBv7vzp/TprmwG2p+u0wmSQ44EyCSeWoU486r8u4ryycl4QxQ9h3u/ACuxgua+i3MeSgl2giSXirCosui665FfeHlez99XH5y6umk3x4qHpzBobtMZ48N9OSWo69BSes/ttV0AKq8+n6vAEeaNgXPZCeiZdISaGLyMD1qHhYpwErGcCFBNTgWebrkirYzZMeW6Ijf4+G7COHMl/s/EH2vw6pLGHA7YLX3sklDOavN+CUWmhmuo0m5x4XeKoFu+xRFRLHWqTsw+qvdNXibS2OlokbR9ghy+lgXomluM6aheTJ8VhcgYXGrDp2g52KcGenGioI26josYfNWjLgQ=="
  }, null, _parent));
  _push(`<p>Collection 单列集合： <img${ssrRenderAttr("src", _imports_0)} alt="单列集合"> Map 双列集合：</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/集合.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "集合.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E9%9B%86%E5%90%88.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"集合","slug":"集合","link":"#集合","children":[{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"集合与数组的区别","slug":"集合与数组的区别","link":"#集合与数组的区别","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":3}]},"filePathRelative":"admin/Java/Java常用Api/集合.md","excerpt":"<h2>集合</h2>\\n<p>什么是集合？</p>\\n<p>集合是一个容器，由一组（即不能重复）的项组成的。</p>\\n<h3>特点</h3>\\n<ol>\\n<li>\\n<p>长度是可以变化的</p>\\n</li>\\n<li>\\n<p>集合容器只能存储引用数据类型(如果装载的是基本数据类型，则底层会默认调用其包装类的方法)</p>\\n</li>\\n<li>\\n<p>一个集合容器中，可以存储不同引用数据类型的数据</p>\\n</li>\\n</ol>\\n<h3><a active=\\"\\" href=\\"/blog/admin/Java/Java常用Api/集合.md\\" target=\\"_blank\\">集合</a>与<a active=\\"\\" href=\\"/blog/admin/Java/Java基础/数组.md\\" target=\\"_blank\\">数组</a>的区别</h3>"}');
export {
  ___html as comp,
  data
};
