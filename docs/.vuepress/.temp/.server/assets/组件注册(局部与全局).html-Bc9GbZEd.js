import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="组件注册-局部与全局" tabindex="-1"><a class="header-anchor" href="#组件注册-局部与全局"><span>组件注册(局部与全局)</span></a></h2><blockquote><p>组件可以全局注册，使得它们可以在应用的任何地方使用；也可以局部注册，使得它们只在一个组件的模板中可用。</p></blockquote><h3 id="全局注册" tabindex="-1"><a class="header-anchor" href="#全局注册"><span>全局注册</span></a></h3><blockquote><p>全局注册的组件可以在应用的任何组件模板中使用。在 Vue 3 中，全局注册可以通过应用实例的<code>.component()</code>方法实现。</p></blockquote><h4 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h4><blockquote><p>MyComponent 将全局注册，可以在任何组件的模板中通过&lt;my-component-name&gt;使用。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/MyComponent.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;my-component-name&quot;</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部注册" tabindex="-1"><a class="header-anchor" href="#局部注册"><span>局部注册</span></a></h3><blockquote><p>局部注册的组件只在定义它们的组件模板中可用。MyComponent 将在当前组件的模板中局部注册，并可以通过&lt;my-component-name&gt;使用。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/MyComponent.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;my-component-name&quot;</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h4><ol><li>依赖明确：局部注册使得组件之间的依赖关系更加明确。</li><li>Tree-shaking：未被使用的组件不会包含在最终的构建结果中。</li></ol><h3 id="自动化全局注册" tabindex="-1"><a class="header-anchor" href="#自动化全局注册"><span>自动化全局注册</span></a></h3><blockquote><p>对于需要全局注册多个组件的情况，可以创建一个插件来自动化这个过程。</p></blockquote><h4 id="使用插件自动化注册" tabindex="-1"><a class="header-anchor" href="#使用插件自动化注册"><span>使用插件自动化注册</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// register.js</span>
<span class="token keyword">import</span> ImageView <span class="token keyword">from</span> <span class="token string">&quot;./ImageView.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Sku <span class="token keyword">from</span> <span class="token string">&quot;./Sku.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;XtxImageView&quot;</span><span class="token punctuation">,</span> ImageView<span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;XtxSku&quot;</span><span class="token punctuation">,</span> Sku<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> componentPlugin <span class="token keyword">from</span> <span class="token string">&quot;./register.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>componentPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h4><ol><li>批量注册：通过一个插件文件可以注册多个组件，简化代码。</li><li>集中管理：所有的全局组件都在一个地方进行注册，方便管理。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/技术点/组件注册(局部与全局).html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "组件注册(局部与全局).html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E7%BB%84%E4%BB%B6%E6%B3%A8%E5%86%8C(%E5%B1%80%E9%83%A8%E4%B8%8E%E5%85%A8%E5%B1%80).html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"组件注册(局部与全局)","slug":"组件注册-局部与全局","link":"#组件注册-局部与全局","children":[{"level":3,"title":"全局注册","slug":"全局注册","link":"#全局注册","children":[]},{"level":3,"title":"局部注册","slug":"局部注册","link":"#局部注册","children":[]},{"level":3,"title":"自动化全局注册","slug":"自动化全局注册","link":"#自动化全局注册","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/技术点/组件注册(局部与全局).md","excerpt":"<h2>组件注册(局部与全局)</h2>\\n<blockquote>\\n<p>组件可以全局注册，使得它们可以在应用的任何地方使用；也可以局部注册，使得它们只在一个组件的模板中可用。</p>\\n</blockquote>\\n<h3>全局注册</h3>\\n<blockquote>\\n<p>全局注册的组件可以在应用的任何组件模板中使用。在 Vue 3 中，全局注册可以通过应用实例的<code>.component()</code>方法实现。</p>\\n</blockquote>\\n<h4>使用方法</h4>\\n<blockquote>\\n<p>MyComponent 将全局注册，可以在任何组件的模板中通过&lt;my-component-name&gt;使用。</p>\\n</blockquote>"}');
export {
  ____________html as comp,
  data
};
