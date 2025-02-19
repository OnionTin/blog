import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/Ribbon-Bm_YJxxc.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="ribbon-负载均衡" tabindex="-1"><a class="header-anchor" href="#ribbon-负载均衡"><span>Ribbon 负载均衡</span></a></h2><blockquote><p>是基于 Netflix Ribbon 实现的`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`客户端`);
      } else {
        return [
          createTextVNode("客户端")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`负载均衡工具</p></blockquote><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h3><blockquote><p>将用户的请求分摊到多个服务上，从而达到系统的 HA(高可用性)，负载均衡有很多方式，包括`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`轮询、随机、加权(权重)、IP 哈希等，也可以自定义`);
      } else {
        return [
          createTextVNode("轮询、随机、加权(权重)、IP 哈希等，也可以自定义")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`。常见的负载均衡方式有：Nginx、LVS 等。</p></blockquote><h3 id="负载均衡的好处" tabindex="-1"><a class="header-anchor" href="#负载均衡的好处"><span>负载均衡的好处</span></a></h3><blockquote><p>举例：A 早上用网，100M 的网速，100 元/月；B 和 C 也类似，B 中午，C 晚上；负载均衡可以将 A、B、C 的网速叠加，达到 300M，节省了成本。然后在用户使用的时候，让用户每个月还是 100 元，但是可以享受 300M 的网速。</p></blockquote><p><img${ssrRenderAttr("src", _imports_0)} alt="Ribbon"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/Ribbon负载均衡.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Ribbon_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Ribbon负载均衡.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/Ribbon%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Ribbon 负载均衡","slug":"ribbon-负载均衡","link":"#ribbon-负载均衡","children":[{"level":3,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":3,"title":"负载均衡的好处","slug":"负载均衡的好处","link":"#负载均衡的好处","children":[]}]}],"git":{"updatedTime":1726648298000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/Ribbon负载均衡.md","excerpt":"<h2>Ribbon 负载均衡</h2>\\n<blockquote>\\n<p>是基于 Netflix Ribbon 实现的负载均衡工具</p>\\n</blockquote>\\n<h3>负载均衡</h3>\\n<blockquote>\\n<p>将用户的请求分摊到多个服务上，从而达到系统的 HA(高可用性)，负载均衡有很多方式，包括。常见的负载均衡方式有：Nginx、LVS 等。</p>\\n</blockquote>\\n<h3>负载均衡的好处</h3>\\n<blockquote>\\n<p>举例：A 早上用网，100M 的网速，100 元/月；B 和 C 也类似，B 中午，C 晚上；负载均衡可以将 A、B、C 的网速叠加，达到 300M，节省了成本。然后在用户使用的时候，让用户每个月还是 100 元，但是可以享受 300M 的网速。</p>\\n</blockquote>"}');
export {
  Ribbon_____html as comp,
  data
};
