import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="toraw-与-markraw" tabindex="-1"><a class="header-anchor" href="#toraw-与-markraw"><span>toRaw 与 markRaw</span></a></h2><h3 id="toraw" tabindex="-1"><a class="header-anchor" href="#toraw"><span>toRaw</span></a></h3><ul><li><strong>作用</strong>: 将一个由<code>reactive</code>生成的响应式对象转为普通对象。</li><li><strong>使用场景</strong>: 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li></ul><h3 id="markraw" tabindex="-1"><a class="header-anchor" href="#markraw"><span>markRaw</span></a></h3><ul><li><strong>作用</strong>: 标记一个对象，使其永远不会再成为响应式对象。</li><li><strong>应用场景</strong>: <ol><li>有些值不应被设置为响应式的，例如复杂的第三方类库等。</li><li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</li></ol></li></ul><h3 id="toraw-示例" tabindex="-1"><a class="header-anchor" href="#toraw-示例"><span>toRaw 示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">showRawPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
  p<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 直接读取p的age属性</span>
  <span class="token comment">// p变了，但是person没变</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="markraw-示例" tabindex="-1"><a class="header-anchor" href="#markraw-示例"><span>markRaw 示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;奔驰&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  person<span class="token punctuation">.</span>car <span class="token operator">=</span> <span class="token function">markRaw</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// person 是响应式的，但是 car 是不变的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/其他CompositionApi/toRaw和markRaw.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toRaw_markRaw_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "toRaw和markRaw.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/toRaw%E5%92%8CmarkRaw.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"toRaw 与 markRaw","slug":"toraw-与-markraw","link":"#toraw-与-markraw","children":[{"level":3,"title":"toRaw","slug":"toraw","link":"#toraw","children":[]},{"level":3,"title":"markRaw","slug":"markraw","link":"#markraw","children":[]},{"level":3,"title":"toRaw 示例","slug":"toraw-示例","link":"#toraw-示例","children":[]},{"level":3,"title":"markRaw 示例","slug":"markraw-示例","link":"#markraw-示例","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/其他CompositionApi/toRaw和markRaw.md","excerpt":"<h2>toRaw 与 markRaw</h2>\\n<h3>toRaw</h3>\\n<ul>\\n<li><strong>作用</strong>: 将一个由<code>reactive</code>生成的响应式对象转为普通对象。</li>\\n<li><strong>使用场景</strong>: 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li>\\n</ul>\\n<h3>markRaw</h3>\\n<ul>\\n<li><strong>作用</strong>: 标记一个对象，使其永远不会再成为响应式对象。</li>\\n<li><strong>应用场景</strong>:\\n<ol>\\n<li>有些值不应被设置为响应式的，例如复杂的第三方类库等。</li>\\n<li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</li>\\n</ol>\\n</li>\\n</ul>"}');
export {
  toRaw_markRaw_html as comp,
  data
};
