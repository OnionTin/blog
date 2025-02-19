import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/Zuul3-DDNoI977.jpg";
const _imports_1 = "/blog/assets/Zuul1-ChACDpAm.jpg";
const _imports_2 = "/blog/assets/Zuul2-Mi8vrwua.jpg";
const _imports_3 = "/blog/assets/Zuul4-C7AiKJLH.jpg";
const _imports_4 = "/blog/assets/Zuul5-DslQ9DE3.jpg";
const _imports_5 = "/blog/assets/Zuul6-BdiDqHjC.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="zuul-访问路径详解" tabindex="-1"><a class="header-anchor" href="#zuul-访问路径详解"><span>Zuul 访问路径详解</span></a></h2><blockquote><p>都是根据一步步的配置进行图例展示</p></blockquote><ol><li><p>Zuul 注册到 Eureka</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Zuul 注册到 Eureka"></p></li><li><p>服务端访问路径</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Zuul 注册到 Eureka"></p></li><li><p>走路由网关访问路径</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Zuul 注册到 Eureka"></p></li><li><p>走路由网关访问路径(代理路径，避免爆露微服务名)</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Zuul 注册到 Eureka"><img${ssrRenderAttr("src", _imports_4)} alt="Zuul 注册到 Eureka"></p></li><li><p>走路由网关访问路径(多服务统一前缀)</p><p><img${ssrRenderAttr("src", _imports_5)} alt="Zuul 注册到 Eureka"></p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/Zuul访问路径详解.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Zuul_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Zuul访问路径详解.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/Zuul%E8%AE%BF%E9%97%AE%E8%B7%AF%E5%BE%84%E8%AF%A6%E8%A7%A3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Zuul 访问路径详解","slug":"zuul-访问路径详解","link":"#zuul-访问路径详解","children":[]}],"git":{"updatedTime":1726824508000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/Zuul访问路径详解.md","excerpt":"<h2>Zuul 访问路径详解</h2>\\n<blockquote>\\n<p>都是根据一步步的配置进行图例展示</p>\\n</blockquote>\\n<ol>\\n<li>\\n<p>Zuul 注册到 Eureka</p>\\n<p></p>\\n</li>\\n<li>\\n<p>服务端访问路径</p>\\n<p></p>\\n</li>\\n<li>\\n<p>走路由网关访问路径</p>\\n<p></p>\\n</li>\\n<li>\\n<p>走路由网关访问路径(代理路径，避免爆露微服务名)</p>\\n<p>\\n</p>\\n</li>\\n<li>\\n<p>走路由网关访问路径(多服务统一前缀)</p>\\n<p></p>\\n</li>\\n</ol>\\n"}');
export {
  Zuul_______html as comp,
  data
};
