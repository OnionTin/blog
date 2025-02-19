import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="thymeleaf" tabindex="-1"><a class="header-anchor" href="#thymeleaf"><span>thymeleaf</span></a></h2><h3 id="模板" tabindex="-1"><a class="header-anchor" href="#模板"><span>模板</span></a></h3><blockquote><p>需要在 html 标签上添加`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`thymeleaf 头部约束`);
      } else {
        return [
          createTextVNode("thymeleaf 头部约束")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.thymeleaf.org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// ThymeleafAutoConfiguration.java 截取</span>
<span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>proxyBeanMethods <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">ThymeleafProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">TemplateMode</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">SpringTemplateEngine</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@AutoConfigureAfter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">WebMvcAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">WebFluxAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThymeleafAutoConfiguration</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// ThymeleafProperties.java 截取</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.thymeleaf&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThymeleafProperties</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Charset</span> <span class="token constant">DEFAULT_ENCODING</span> <span class="token operator">=</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEFAULT_PREFIX</span> <span class="token operator">=</span> <span class="token string">&quot;classpath:/templates/&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEFAULT_SUFFIX</span> <span class="token operator">=</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/web集成/thymeleaf/thymeleaf.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thymeleaf_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "thymeleaf.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/thymeleaf/thymeleaf.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"thymeleaf","slug":"thymeleaf","link":"#thymeleaf","children":[{"level":3,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":3,"title":"源码","slug":"源码","link":"#源码","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/web集成/thymeleaf/thymeleaf.md","excerpt":"<h2>thymeleaf</h2>\\n<h3>模板</h3>\\n<blockquote>\\n<p>需要在 html 标签上添加</p>\\n</blockquote>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span> <span class=\\"token attr-name\\"><span class=\\"token namespace\\">xmlns:</span>th</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://www.thymeleaf.org<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');
export {
  thymeleaf_html as comp,
  data
};
