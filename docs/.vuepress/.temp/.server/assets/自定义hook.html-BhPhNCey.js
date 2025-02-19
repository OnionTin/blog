import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="自定义-hook" tabindex="-1"><a class="header-anchor" href="#自定义-hook"><span>自定义 Hook</span></a></h2><blockquote><p>本质上是一个函数，把<code>setup</code>函数中使用的 Composition API 进行了封装。 类似于 Vue 2.x 中的 mixin。</p></blockquote><h3 id="自定义-hook-的优势" tabindex="-1"><a class="header-anchor" href="#自定义-hook-的优势"><span>自定义 Hook 的优势</span></a></h3><ul><li><strong>复用代码</strong>：可以在多个组件之间复用状态逻辑。</li><li><strong>让<code>setup</code>中的逻辑更清楚易懂</strong>：通过将相关逻辑组织在自定义 Hook 中，使得<code>setup</code>函数更加简洁和可读。</li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- Demo.vue 组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>当前求和为: {{ sum }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>当前点击时鼠标的坐标为: x: {{ point.x }}, y: {{ point.y }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sum++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> usePoint <span class="token keyword">from</span> <span class="token string">&quot;../hooks/usePoint&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token function">usePoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> sum<span class="token punctuation">,</span> point <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// usePoint.js 钩子函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实现鼠标“打点”相关的数据</span>
  <span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 实现鼠标“打点”相关的方法</span>
  <span class="token keyword">function</span> <span class="token function">savePoint</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    point<span class="token punctuation">.</span>x <span class="token operator">=</span> event<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
    point<span class="token punctuation">.</span>y <span class="token operator">=</span> event<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>pageX<span class="token punctuation">,</span> event<span class="token punctuation">.</span>pageY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 实现鼠标“打点”相关的生命周期钩子</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> savePoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> savePoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// return point;</span>
  <span class="token keyword">return</span> point<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/常用CompositionApi/自定义hook.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___hook_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "自定义hook.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E8%87%AA%E5%AE%9A%E4%B9%89hook.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"自定义 Hook","slug":"自定义-hook","link":"#自定义-hook","children":[{"level":3,"title":"自定义 Hook 的优势","slug":"自定义-hook-的优势","link":"#自定义-hook-的优势","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/自定义hook.md","excerpt":"<h2>自定义 Hook</h2>\\n<blockquote>\\n<p>本质上是一个函数，把<code>setup</code>函数中使用的 Composition API 进行了封装。 类似于 Vue 2.x 中的 mixin。</p>\\n</blockquote>\\n<h3>自定义 Hook 的优势</h3>\\n<ul>\\n<li><strong>复用代码</strong>：可以在多个组件之间复用状态逻辑。</li>\\n<li><strong>让<code>setup</code>中的逻辑更清楚易懂</strong>：通过将相关逻辑组织在自定义 Hook 中，使得<code>setup</code>函数更加简洁和可读。</li>\\n</ul>"}');
export {
  ___hook_html as comp,
  data
};
