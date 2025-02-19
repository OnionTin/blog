import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="readonly-元组类型" tabindex="-1"><a class="header-anchor" href="#readonly-元组类型"><span>Readonly 元组类型</span></a></h2><h3 id="定义-readonly-元组类型" tabindex="-1"><a class="header-anchor" href="#定义-readonly-元组类型"><span>定义 Readonly 元组类型</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个只读元组类型</span>
<span class="token keyword">type</span> <span class="token class-name">ReadonlyTuple</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> readonlyTuple<span class="token operator">:</span> ReadonlyTuple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// readonlyTuple[0] = 1;</span>
<span class="token comment">// readonlyTuple.push(5);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型-readonly-元组类型" tabindex="-1"><a class="header-anchor" href="#泛型-readonly-元组类型"><span>泛型 Readonly 元组类型</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个泛型只读元组类型</span>
<span class="token keyword">type</span> <span class="token class-name">GenericReadonlyTuple<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// 使用泛型只读元组类型</span>
<span class="token keyword">const</span> genericReadonlyTuple<span class="token operator">:</span> GenericReadonlyTuple<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">42</span><span class="token punctuation">,</span>
  <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// genericReadonlyTuple[0] = 1;</span>
<span class="token comment">// genericReadonlyTuple.push(&quot;world&quot;);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在对象类型中使用-readonly-元组类型" tabindex="-1"><a class="header-anchor" href="#在对象类型中使用-readonly-元组类型"><span>在对象类型中使用 Readonly 元组类型</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个包含只读元组属性的对象类型</span>
<span class="token keyword">type</span> <span class="token class-name">ObjectWithReadonlyTuple</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> ObjectWithReadonlyTuple <span class="token operator">=</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// obj.data = [2, &quot;another example&quot;];</span>
<span class="token comment">// obj.data[0] = 2;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/对象类型/泛型对象类型/readonly元组类型.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const readonly_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "readonly元组类型.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/readonly%E5%85%83%E7%BB%84%E7%B1%BB%E5%9E%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Readonly 元组类型","slug":"readonly-元组类型","link":"#readonly-元组类型","children":[{"level":3,"title":"定义 Readonly 元组类型","slug":"定义-readonly-元组类型","link":"#定义-readonly-元组类型","children":[]},{"level":3,"title":"泛型 Readonly 元组类型","slug":"泛型-readonly-元组类型","link":"#泛型-readonly-元组类型","children":[]},{"level":3,"title":"在对象类型中使用 Readonly 元组类型","slug":"在对象类型中使用-readonly-元组类型","link":"#在对象类型中使用-readonly-元组类型","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Ts/对象类型/泛型对象类型/readonly元组类型.md","excerpt":"<h2>Readonly 元组类型</h2>\\n<h3>定义 Readonly 元组类型</h3>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// 定义一个只读元组类型</span>\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">ReadonlyTuple</span> <span class=\\"token operator\\">=</span> Readonly<span class=\\"token operator\\">&lt;</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">boolean</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> readonlyTuple<span class=\\"token operator\\">:</span> ReadonlyTuple <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">42</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 以下操作都是不允许的，会导致编译错误</span>\\n<span class=\\"token comment\\">// readonlyTuple[0] = 1;</span>\\n<span class=\\"token comment\\">// readonlyTuple.push(5);</span>\\n</code></pre></div>"}');
export {
  readonly_____html as comp,
  data
};
