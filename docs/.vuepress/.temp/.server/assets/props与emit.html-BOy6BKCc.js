import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="props-与-emit" tabindex="-1"><a class="header-anchor" href="#props-与-emit"><span>props 与 emit</span></a></h2><blockquote><p>在 Vue 3 中，组件之间的通信是非常重要的，尤其是父子组件之间的数据传递。<code>props</code> 和 <code>emit</code> 是实现这种通信的两个核心机制。</p></blockquote><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>## Props</span></a></h3><blockquote><p><code>props</code> 是父组件向子组件传递数据的一种方式。在 Vue 3 中，你可以使用 <code>defineProps</code> 来定义组件接收的 <code>props</code>。</p></blockquote><h4 id="定义-props" tabindex="-1"><a class="header-anchor" href="#定义-props"><span>定义 Props</span></a></h4><blockquote><p>在 Vue 3 中，你可以通过 <code>defineProps</code> 辅助函数来定义组件接收的 Props。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传递-props" tabindex="-1"><a class="header-anchor" href="#传递-props"><span>传递 Props</span></a></h4><blockquote><p>在父组件中，你可以通过在子组件标签上使用 <code>v-bind</code> 或简写为 <code>:</code> 来传递 Props。</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">:message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>greeting<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>times<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userObj<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">&quot;./ChildComponent.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ChildComponent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">greeting</span><span class="token operator">:</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">times</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">userObj</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit"><span>Emit</span></a></h3><blockquote><p>emit 是子组件向父组件发送消息的一种方式。</p></blockquote><h4 id="使用-defineemits" tabindex="-1"><a class="header-anchor" href="#使用-defineemits"><span>使用 defineEmits</span></a></h4><blockquote><p>在 Vue 3 的 setup() 函数中，你可以使用 defineEmits 函数来定义要发出的自定义事件。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> defineEmits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;customEvent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;customEvent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello from child!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      handleClick<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;button @click=&quot;handleClick&quot;&gt;Click me&lt;/button&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在父组件中监听事件" tabindex="-1"><a class="header-anchor" href="#在父组件中监听事件"><span>在父组件中监听事件</span></a></h4><blockquote><p>你可以使用 v-on 指令（或简写为 @）来监听子组件发出的自定义事件。</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">@customEvent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCustomEvent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">&quot;./ChildComponent.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ChildComponent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleCustomEvent</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello from child!</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ol><li>不要直接修改 Props：虽然 Vue 允许在子组件内部访问到 Props 的原始引用，但是按照 Vue 的最佳实践，你应该避免直接修改 Props。</li><li>动态 Props：如果需要根据条件传递不同的 Props，可以使用计算属性来动态地决定传递的值。</li><li>Prop 的类型和验证：尽量使用类型注解来提高代码的可读性和可维护性，并且通过验证器来确保 Props 的合法性。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/技术点/props与emit.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const props_emit_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "props与emit.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/props%E4%B8%8Eemit.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"props 与 emit","slug":"props-与-emit","link":"#props-与-emit","children":[{"level":3,"title":"## Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Emit","slug":"emit","link":"#emit","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/技术点/props与emit.md","excerpt":"<h2>props 与 emit</h2>\\n<blockquote>\\n<p>在 Vue 3 中，组件之间的通信是非常重要的，尤其是父子组件之间的数据传递。<code>props</code> 和 <code>emit</code> 是实现这种通信的两个核心机制。</p>\\n</blockquote>\\n<h3>## Props</h3>\\n<blockquote>\\n<p><code>props</code> 是父组件向子组件传递数据的一种方式。在 Vue 3 中，你可以使用 <code>defineProps</code> 来定义组件接收的 <code>props</code>。</p>\\n</blockquote>"}');
export {
  props_emit_html as comp,
  data
};
