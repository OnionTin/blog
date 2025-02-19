import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="store-onaction" tabindex="-1"><a class="header-anchor" href="#store-onaction"><span>store.$onAction</span></a></h2><blockquote><p>监听 action 的执行</p></blockquote><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">$onAction</span><span class="token punctuation">(</span>
  <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token literal-property property">action</span><span class="token operator">:</span> Action<span class="token operator">&lt;</span>Context<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> Error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  detached<span class="token operator">?</span><span class="token operator">:</span> boolean
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li><code>callback</code>：回调函数，当 action 执行时触发</li><li><code>detached</code>：是否在 store 被销毁时自动移除监听器</li></ul><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><ul><li><code>() =&gt; void</code>：取消监听器的函数</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> unwatch <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">$onAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">before</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">before </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>action<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with args </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">after</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> args<span class="token punctuation">,</span> returnedValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>action<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with args </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and returned </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>returnedValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">error in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>action<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with args </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">unwatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/pinia/store._onAction.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const store__onAction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "store._onAction.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._onAction.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"store.$onAction","slug":"store-onaction","link":"#store-onaction","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/pinia/store.$onAction.md","excerpt":"<h2>store.$onAction</h2>\\n<blockquote>\\n<p>监听 action 的执行</p>\\n</blockquote>\\n<h3>语法</h3>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>store<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">$onAction</span><span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token function-variable function\\">callback</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token literal-property property\\">action</span><span class=\\"token operator\\">:</span> Action<span class=\\"token operator\\">&lt;</span>Context<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function-variable function\\">onError</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">error</span><span class=\\"token operator\\">:</span> Error</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">void</span>\\n  <span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">void</span> <span class=\\"token operator\\">|</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  detached<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> boolean\\n<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">void</span>\\n</code></pre></div>"}');
export {
  store__onAction_html as comp,
  data
};
