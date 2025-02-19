import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="溢出属性检查" tabindex="-1"><a class="header-anchor" href="#溢出属性检查"><span>溢出属性检查</span></a></h2><blockquote><p>对象类型的溢出属性检查（Excess Property Checks）是一种类型安全特性，它会在对象字面量被赋值给变量或者作为参数传递给函数时，检查对象字面量是否包含目标类型未定义的属性。如果对象字面量有目标类型中不存在的属性，编译器将会报错。</p></blockquote><blockquote><p>例如，如果有一个接口 SquareConfig，它定义了 color 和 width 属性，然后你尝试创建一个对象字面量并将其赋值给一个 SquareConfig 类型的变量，但对象字面量中包含了一个 SquareConfig 未定义的属性，如下所示：</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createSquare</span><span class="token punctuation">(</span>config<span class="token operator">:</span> SquareConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> area<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> config<span class="token punctuation">.</span>color <span class="token operator">||</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
    area<span class="token operator">:</span> config<span class="token punctuation">.</span>width <span class="token operator">?</span> config<span class="token punctuation">.</span>width <span class="token operator">*</span> config<span class="token punctuation">.</span>width <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 错误：属性 &#39;colour&#39; 不存在于类型 &#39;SquareConfig&#39;。</span>
<span class="token keyword">let</span> mySquare <span class="token operator">=</span> <span class="token function">createSquare</span><span class="token punctuation">(</span><span class="token punctuation">{</span> colour<span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在这个例子中，对象字面量 { colour: &quot;red&quot;, width: 100 } 包含了一个 SquareConfig 接口中未定义的属性 colour，所以 TypeScript 编译器会报错，指出 &#39;colour&#39; does not exist in type &#39;SquareConfig&#39; 。</p></blockquote><h3 id="要解决这个问题-你可以做以下几件事情之一" tabindex="-1"><a class="header-anchor" href="#要解决这个问题-你可以做以下几件事情之一"><span>要解决这个问题，你可以做以下几件事情之一：</span></a></h3><ol><li>修正属性名，确保对象字面量中的属性名称与目标类型中的属性名称相匹配。</li><li>如果确实需要传递额外的属性，可以修改目标类型的定义，以包含这些额外的属性。</li><li>使用类型断言，将对象字面量断言为任意类型，来绕过溢出属性检查（但这种做法会失去类型安全）。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/对象类型/溢出属性检查.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "溢出属性检查.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%BA%A2%E5%87%BA%E5%B1%9E%E6%80%A7%E6%A3%80%E6%9F%A5.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"溢出属性检查","slug":"溢出属性检查","link":"#溢出属性检查","children":[{"level":3,"title":"要解决这个问题，你可以做以下几件事情之一：","slug":"要解决这个问题-你可以做以下几件事情之一","link":"#要解决这个问题-你可以做以下几件事情之一","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Ts/对象类型/溢出属性检查.md","excerpt":"<h2>溢出属性检查</h2>\\n<blockquote>\\n<p>对象类型的溢出属性检查（Excess Property Checks）是一种类型安全特性，它会在对象字面量被赋值给变量或者作为参数传递给函数时，检查对象字面量是否包含目标类型未定义的属性。如果对象字面量有目标类型中不存在的属性，编译器将会报错。</p>\\n</blockquote>\\n<blockquote>\\n<p>例如，如果有一个接口 SquareConfig，它定义了 color 和 width 属性，然后你尝试创建一个对象字面量并将其赋值给一个 SquareConfig 类型的变量，但对象字面量中包含了一个 SquareConfig 未定义的属性，如下所示：</p>\\n</blockquote>"}');
export {
  _______html as comp,
  data
};
