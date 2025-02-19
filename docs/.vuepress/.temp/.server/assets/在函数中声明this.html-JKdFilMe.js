import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="在函数中声明-this" tabindex="-1"><a class="header-anchor" href="#在函数中声明-this"><span>在函数中声明 this</span></a></h2><blockquote><p>可以在函数中声明 this 参数，以指定调用该函数时上下文对象的类型。这通常在对象的方法或回调函数中使用，以确保函数调用时 this 的类型正确。通过在函数中声明 this 参数，你可以提高代码的类型安全性，并减少因 this 引起的错误。</p></blockquote><h3 id="在对象方法中声明-this" tabindex="-1"><a class="header-anchor" href="#在对象方法中声明-this"><span>在对象方法中声明 this</span></a></h3><blockquote><p>在对象的方法中使用 this 时，你可以声明 this 参数来指定对象本身的类型。greet 方法声明了 this: User，这告诉 TypeScript this 指的是 User 类型的对象。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is Alice and I am 30 years old.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在回调函数中声明-this" tabindex="-1"><a class="header-anchor" href="#在回调函数中声明-this"><span>在回调函数中声明 this</span></a></h3><blockquote><p>可以声明 this 参数，以确保回调函数中的 this 与期望的类型一致。setupPrinter 函数中的回调函数声明了 this: Printer，确保在回调函数中 this 指向 Printer 类型的对象。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Printer</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setupPrinter</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Printer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> printer<span class="token operator">:</span> Printer <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">print</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;The page has finished loading.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>printer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myPrinter<span class="token operator">:</span> Printer <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">print</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Printing: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">setupPrinter</span><span class="token punctuation">(</span>myPrinter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用箭头函数和-this-参数" tabindex="-1"><a class="header-anchor" href="#使用箭头函数和-this-参数"><span>使用箭头函数和 this 参数</span></a></h3><blockquote><p>箭头函数不绑定自己的 this，它继承了父执行上下文的 this。因此，当你在类的方法中使用箭头函数时，this 可能不会指向你期望的对象。greet 方法是一个箭头函数，它不绑定自己的 this，因此 this.name 在执行时是 undefined。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`注意事项`);
      } else {
        return [
          createTextVNode("注意事项")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></a></h3><ol><li>声明 this 参数不会改变函数的行为，它只是为编译器提供了类型信息。</li><li>在箭头函数中，this 是在函数创建时绑定的，而不是在调用时绑定的，因此箭头函数中通常不需要声明 this 参数。</li><li>在使用 bind 或其他函数调用方法（如 call 或 apply）时，需要确保 this 参数的类型正确。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/关于函数/在函数中声明this.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______this_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "在函数中声明this.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%9C%A8%E5%87%BD%E6%95%B0%E4%B8%AD%E5%A3%B0%E6%98%8Ethis.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"在函数中声明 this","slug":"在函数中声明-this","link":"#在函数中声明-this","children":[{"level":3,"title":"在对象方法中声明 this","slug":"在对象方法中声明-this","link":"#在对象方法中声明-this","children":[]},{"level":3,"title":"在回调函数中声明 this","slug":"在回调函数中声明-this","link":"#在回调函数中声明-this","children":[]},{"level":3,"title":"使用箭头函数和 this 参数","slug":"使用箭头函数和-this-参数","link":"#使用箭头函数和-this-参数","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/在函数中声明this.md","excerpt":"<h2>在函数中声明 this</h2>\\n<blockquote>\\n<p>可以在函数中声明 this 参数，以指定调用该函数时上下文对象的类型。这通常在对象的方法或回调函数中使用，以确保函数调用时 this 的类型正确。通过在函数中声明 this 参数，你可以提高代码的类型安全性，并减少因 this 引起的错误。</p>\\n</blockquote>\\n<h3>在对象方法中声明 this</h3>\\n<blockquote>\\n<p>在对象的方法中使用 this 时，你可以声明 this 参数来指定对象本身的类型。greet 方法声明了 this: User，这告诉 TypeScript this 指的是 User 类型的对象。</p>\\n</blockquote>"}');
export {
  ______this_html as comp,
  data
};
