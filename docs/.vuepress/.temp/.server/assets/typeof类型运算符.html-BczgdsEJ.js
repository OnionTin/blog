import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="typeof-类型运算符" tabindex="-1"><a class="header-anchor" href="#typeof-类型运算符"><span>typeof 类型运算符</span></a></h2><blockquote><p>typeof 类型运算符用于获取一个变量或对象属性的类型。这种类型运算符对于创建与现有数据结构相同类型的新类型非常有用。</p></blockquote><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3><blockquote><p>TypeOfX 是一个类型，它与变量 x 的类型相同，即 number。TypeOfPerson 是一个类型，它与 person 对象的类型相同。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">TypeOfX</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> x<span class="token punctuation">;</span>
<span class="token comment">// TypeOfX 类型为 number</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TypeOfPerson</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> person<span class="token punctuation">;</span>
<span class="token comment">// TypeOfPerson 类型为 { name: string; age: number; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在函数中使用" tabindex="-1"><a class="header-anchor" href="#在函数中使用"><span>在函数中使用</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createPoint</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeOfCreatePoint</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> createPoint<span class="token punctuation">;</span>
<span class="token comment">// TypeOfCreatePoint 类型为 (x: number, y: number) =&gt; { x: number; y: number; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取对象属性的类型" tabindex="-1"><a class="header-anchor" href="#获取对象属性的类型"><span>获取对象属性的类型</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TypeOfPort</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> config<span class="token punctuation">.</span>port<span class="token punctuation">;</span>
<span class="token comment">// TypeOfPort 类型为 number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取类实例的类型" tabindex="-1"><a class="header-anchor" href="#获取类实例的类型"><span>获取类实例的类型</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&quot;Buddy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TypeOfDog</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> dog<span class="token punctuation">;</span>
<span class="token comment">// TypeOfDog 类型为 Animal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取类静态属性的类型" tabindex="-1"><a class="header-anchor" href="#获取类静态属性的类型"><span>获取类静态属性的类型</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> version<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">;</span>

  <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeOfVersion</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> Calculator<span class="token punctuation">.</span>version<span class="token punctuation">;</span>
<span class="token comment">// TypeOfVersion 类型为 string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ol><li>typeof 类型运算符只能用于变量、对象属性、函数返回值、类实例和类静态属性。</li><li>typeof 不能用于接口或类型别名本身，因为它们是抽象的，没有具体的运行时表示。</li><li>当使用 typeof 运算符时，如果操作数是一个联合类型，那么结果也将是一个联合类型。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/类型操作/typeof类型运算符.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const typeof______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "typeof类型运算符.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/typeof%E7%B1%BB%E5%9E%8B%E8%BF%90%E7%AE%97%E7%AC%A6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"typeof 类型运算符","slug":"typeof-类型运算符","link":"#typeof-类型运算符","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"在函数中使用","slug":"在函数中使用","link":"#在函数中使用","children":[]},{"level":3,"title":"获取对象属性的类型","slug":"获取对象属性的类型","link":"#获取对象属性的类型","children":[]},{"level":3,"title":"获取类实例的类型","slug":"获取类实例的类型","link":"#获取类实例的类型","children":[]},{"level":3,"title":"获取类静态属性的类型","slug":"获取类静态属性的类型","link":"#获取类静态属性的类型","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Ts/类型操作/typeof类型运算符.md","excerpt":"<h2>typeof 类型运算符</h2>\\n<blockquote>\\n<p>typeof 类型运算符用于获取一个变量或对象属性的类型。这种类型运算符对于创建与现有数据结构相同类型的新类型非常有用。</p>\\n</blockquote>\\n<h3>基本用法</h3>\\n<blockquote>\\n<p>TypeOfX 是一个类型，它与变量 x 的类型相同，即 number。TypeOfPerson 是一个类型，它与 person 对象的类型相同。</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">let</span> x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">TypeOfX</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">typeof</span> x<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// TypeOfX 类型为 number</span>\\n\\n<span class=\\"token keyword\\">const</span> person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Alice\\"</span><span class=\\"token punctuation\\">,</span>\\n  age<span class=\\"token operator\\">:</span> <span class=\\"token number\\">30</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">TypeOfPerson</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">typeof</span> person<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// TypeOfPerson 类型为 { name: string; age: number; }</span>\\n</code></pre></div>"}');
export {
  typeof______html as comp,
  data
};
