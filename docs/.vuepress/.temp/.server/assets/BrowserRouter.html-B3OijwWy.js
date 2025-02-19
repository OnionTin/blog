import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="browserrouter-利用-h5-api-实现路由切换" tabindex="-1"><a class="header-anchor" href="#browserrouter-利用-h5-api-实现路由切换"><span>BrowserRouter(利用 h5 Api 实现路由切换)</span></a></h2><blockquote><p><code>BrowserRouter</code> 是 React Router 库中的一个组件，用于在 React 应用程序中创建单页面应用程序（SPA）的路由。它使用 HTML5 的 <code>history</code> API 来实现页面的导航，不会触发页面的重新加载。</p></blockquote><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ul><li><strong>无需刷新</strong>：利用 <code>history</code> API 的 <code>pushState</code> 和 <code>replaceState</code> 方法，实现无刷新的路由切换。</li><li><strong>动态路由匹配</strong>：可以动态地匹配 URL 路径，并渲染对应的组件。</li><li><strong>嵌套路由</strong>：支持嵌套路由，方便创建复杂的页面结构。</li><li><strong>链接（Link）组件</strong>：提供了 <code>&lt;Link&gt;</code> 组件，用于创建可导航的链接，与普通 <code>&lt;a&gt;</code> 标签不同，它不会重新加载页面。</li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><blockquote><p>使用 npm 或 yarn 安装 React Router：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> react-router-dom
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> <span class="token function">add</span> react-router-dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><blockquote><p>在应用程序中，BrowserRouter 通常包裹在根组件之外，作为应用的顶层路由</p></blockquote><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Contact <span class="token keyword">from</span> <span class="token string">&quot;./Contact&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BrowserRouter</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> |</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">About</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> |
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/contact<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Contact</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Routes</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Contact</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Routes</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BrowserRouter</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h3><ol><li>BrowserRouter：用于创建一个单页面应用程序的路由。</li><li>Routes：一个容器组件，用于包裹多个 Route 组件。</li><li>Route：定义路由规则，当路径匹配时，渲染对应的组件。</li><li>Link：用于创建导航链接，点击时不会重新加载页面。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/BrowserRouter.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BrowserRouter_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "BrowserRouter.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/BrowserRouter.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"BrowserRouter(利用 h5 Api 实现路由切换)","slug":"browserrouter-利用-h5-api-实现路由切换","link":"#browserrouter-利用-h5-api-实现路由切换","children":[{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"组件","slug":"组件","link":"#组件","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/BrowserRouter.md","excerpt":"<h2>BrowserRouter(利用 h5 Api 实现路由切换)</h2>\\n<blockquote>\\n<p><code>BrowserRouter</code> 是 React Router 库中的一个组件，用于在 React 应用程序中创建单页面应用程序（SPA）的路由。它使用 HTML5 的 <code>history</code> API 来实现页面的导航，不会触发页面的重新加载。</p>\\n</blockquote>\\n<h3>特点</h3>\\n<ul>\\n<li><strong>无需刷新</strong>：利用 <code>history</code> API 的 <code>pushState</code> 和 <code>replaceState</code> 方法，实现无刷新的路由切换。</li>\\n<li><strong>动态路由匹配</strong>：可以动态地匹配 URL 路径，并渲染对应的组件。</li>\\n<li><strong>嵌套路由</strong>：支持嵌套路由，方便创建复杂的页面结构。</li>\\n<li><strong>链接（Link）组件</strong>：提供了 <code>&lt;Link&gt;</code> 组件，用于创建可导航的链接，与普通 <code>&lt;a&gt;</code> 标签不同，它不会重新加载页面。</li>\\n</ul>"}');
export {
  BrowserRouter_html as comp,
  data
};
