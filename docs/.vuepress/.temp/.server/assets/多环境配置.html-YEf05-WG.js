import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/8082-CUN_ULIO.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="多环境配置" tabindex="-1"><a class="header-anchor" href="#多环境配置"><span>多环境配置</span></a></h2><blockquote><p>开发环境、测试环境、生产环境等</p></blockquote><h3 id="配置文件的位置优先级" tabindex="-1"><a class="header-anchor" href="#配置文件的位置优先级"><span>配置文件的位置优先级</span></a></h3><blockquote><p>下边四个位置，配置文件的优先级由高到低，优先级高的会覆盖优先级低的</p></blockquote><ol><li>在项目根目录下的 config 文件夹下</li><li>在项目根目录下</li><li>在 src/main/resources/config 文件夹下</li><li>在 src/main/resources 文件夹下</li></ol><h3 id="多环境配置-1" tabindex="-1"><a class="header-anchor" href="#多环境配置-1"><span>多环境配置</span></a></h3><blockquote><p>下面只以 yaml 为例，也可以采用多个 properties 实现(application-dev.properties、application-test.properties、application-prod.properties) 然后在 application.properties 中，给 profiles.active 赋值，例如：spring.profiles.active=dev</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 多环境配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8082</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> test
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">19200</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 8082 端口运行： <img${ssrRenderAttr("src", _imports_0)} alt="8082运行"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/yaml/多环境配置.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "多环境配置.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/yaml/%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"多环境配置","slug":"多环境配置","link":"#多环境配置","children":[{"level":3,"title":"配置文件的位置优先级","slug":"配置文件的位置优先级","link":"#配置文件的位置优先级","children":[]},{"level":3,"title":"多环境配置","slug":"多环境配置-1","link":"#多环境配置-1","children":[]}]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/yaml/多环境配置.md","excerpt":"<h2>多环境配置</h2>\\n<blockquote>\\n<p>开发环境、测试环境、生产环境等</p>\\n</blockquote>\\n<h3>配置文件的位置优先级</h3>\\n<blockquote>\\n<p>下边四个位置，配置文件的优先级由高到低，优先级高的会覆盖优先级低的</p>\\n</blockquote>\\n<ol>\\n<li>在项目根目录下的 config 文件夹下</li>\\n<li>在项目根目录下</li>\\n<li>在 src/main/resources/config 文件夹下</li>\\n<li>在 src/main/resources 文件夹下</li>\\n</ol>\\n<h3>多环境配置</h3>"}');
export {
  ______html as comp,
  data
};
