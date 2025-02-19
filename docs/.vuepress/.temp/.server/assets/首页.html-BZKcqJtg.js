import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页"><span>首页</span></a></h2><h3 id="跳转到首页" tabindex="-1"><a class="header-anchor" href="#跳转到首页"><span>跳转到首页</span></a></h3><p>方式一： 只需要在静态资源存放目录下，新建一个 index.html 即可，访问 http://localhost:8080/ 即可访问到 index.html</p><p>方式二： 在 template 目录下新建 index.html，引入 thymeleaf 相关 依赖，并通过 Controller 访问</p><h3 id="方式二实现" tabindex="-1"><a class="header-anchor" href="#方式二实现"><span>方式二实现</span></a></h3><p>首先在 resources/templates 下新建一个 index.html</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>

<span class="token comment">// 在templates目录下的页面只能通过controller来跳转</span>
<span class="token comment">// 需要thymeleaf模板引擎的支持</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexController</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/a&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 源码(WebMvcAutoConfiguration.java 截取)</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">WelcomePageHandlerMapping</span> <span class="token function">welcomePageHandlerMapping</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">,</span>
    <span class="token class-name">FormattingConversionService</span> mvcConversionService<span class="token punctuation">,</span> <span class="token class-name">ResourceUrlProvider</span> mvcResourceUrlProvider<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">WelcomePageHandlerMapping</span> welcomePageHandlerMapping <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WelcomePageHandlerMapping</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">TemplateAvailabilityProviders</span><span class="token punctuation">(</span>applicationContext<span class="token punctuation">)</span><span class="token punctuation">,</span> applicationContext<span class="token punctuation">,</span> <span class="token function">getWelcomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>mvcProperties<span class="token punctuation">.</span><span class="token function">getStaticPathPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  welcomePageHandlerMapping<span class="token punctuation">.</span><span class="token function">setInterceptors</span><span class="token punctuation">(</span><span class="token function">getInterceptors</span><span class="token punctuation">(</span>mvcConversionService<span class="token punctuation">,</span> mvcResourceUrlProvider<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> welcomePageHandlerMapping<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Resource</span><span class="token punctuation">&gt;</span></span> <span class="token function">getWelcomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> locations <span class="token operator">=</span> <span class="token function">getResourceLocations</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceProperties<span class="token punctuation">.</span><span class="token function">getStaticLocations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>locations<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">getIndexHtml</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">isReadable</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token class-name">Resource</span> <span class="token function">getIndexHtml</span><span class="token punctuation">(</span><span class="token class-name">String</span> location<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span>location <span class="token operator">+</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/web集成/首页.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "首页.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/%E9%A6%96%E9%A1%B5.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"首页","slug":"首页","link":"#首页","children":[{"level":3,"title":"跳转到首页","slug":"跳转到首页","link":"#跳转到首页","children":[]},{"level":3,"title":"方式二实现","slug":"方式二实现","link":"#方式二实现","children":[]},{"level":3,"title":"源码","slug":"源码","link":"#源码","children":[]}]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/web集成/首页.md","excerpt":"<h2>首页</h2>\\n<h3>跳转到首页</h3>\\n<p>方式一： 只需要在静态资源存放目录下，新建一个 index.html 即可，访问 http://localhost:8080/ 即可访问到 index.html</p>\\n<p>方式二： 在 template 目录下新建 index.html，引入 thymeleaf 相关 依赖，并通过 Controller 访问</p>\\n<h3>方式二实现</h3>\\n<p>首先在 resources/templates 下新建一个 index.html</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">com<span class=\\"token punctuation\\">.</span>ths<span class=\\"token punctuation\\">.</span>controller</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>stereotype<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">Controller</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>web<span class=\\"token punctuation\\">.</span>bind<span class=\\"token punctuation\\">.</span>annotation<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">GetMapping</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 在templates目录下的页面只能通过controller来跳转</span>\\n<span class=\\"token comment\\">// 需要thymeleaf模板引擎的支持</span>\\n<span class=\\"token annotation punctuation\\">@Controller</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">IndexController</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token annotation punctuation\\">@GetMapping</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/a\\"</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">index</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"index\\"</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  ___html as comp,
  data
};
