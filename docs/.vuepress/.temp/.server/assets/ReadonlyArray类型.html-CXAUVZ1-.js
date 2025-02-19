import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="readonlyarray-类型" tabindex="-1"><a class="header-anchor" href="#readonlyarray-类型"><span>ReadonlyArray 类型</span></a></h2><blockquote><p>ReadonlyArray 是一种内置的泛型类型，它表示一个只读的数组。这意味着数组的元素可以被读取，但不能被修改（即不能添加、删除或修改元素）。这与 JavaScript 中的 Object.freeze() 方法类似，但专门用于数组。</p></blockquote><h3 id="使用-readonlyarray" tabindex="-1"><a class="header-anchor" href="#使用-readonlyarray"><span>使用 ReadonlyArray</span></a></h3><blockquote><p>ReadonlyArray 可以用于确保数组不会被修改。这对于防止数据被意外改变非常有用，特别是在函数式编程中。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> readOnlyArray<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// readOnlyArray[0] = 10;</span>
<span class="token comment">// readOnlyArray.push(4);</span>
<span class="token comment">// readOnlyArray.pop();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义泛型对象类型时使用-readonlyarray" tabindex="-1"><a class="header-anchor" href="#定义泛型对象类型时使用-readonlyarray"><span>定义泛型对象类型时使用 ReadonlyArray</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">UserArray</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  users<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> users<span class="token operator">:</span> UserArray <span class="token operator">=</span> <span class="token punctuation">{</span>
  users<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// users.users.push({ id: 3, name: &#39;Carol&#39; });</span>
<span class="token comment">// users.users[0] = { id: 1, name: &#39;Alice Updated&#39; };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用泛型与-readonlyarray" tabindex="-1"><a class="header-anchor" href="#使用泛型与-readonlyarray"><span>使用泛型与 ReadonlyArray</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReadOnlyArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> readOnlyNumbers<span class="token operator">:</span> ReadOnlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> readOnlyUsers<span class="token operator">:</span> ReadOnlyArray<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// readOnlyNumbers.push(4);</span>
<span class="token comment">// readOnlyUsers[0] = { id: 1, name: &#39;Alice Updated&#39; };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/对象类型/泛型对象类型/ReadonlyArray类型.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReadonlyArray___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ReadonlyArray类型.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/ReadonlyArray%E7%B1%BB%E5%9E%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ReadonlyArray 类型","slug":"readonlyarray-类型","link":"#readonlyarray-类型","children":[{"level":3,"title":"使用 ReadonlyArray","slug":"使用-readonlyarray","link":"#使用-readonlyarray","children":[]},{"level":3,"title":"定义泛型对象类型时使用 ReadonlyArray","slug":"定义泛型对象类型时使用-readonlyarray","link":"#定义泛型对象类型时使用-readonlyarray","children":[]},{"level":3,"title":"使用泛型与 ReadonlyArray","slug":"使用泛型与-readonlyarray","link":"#使用泛型与-readonlyarray","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Ts/对象类型/泛型对象类型/ReadonlyArray类型.md","excerpt":"<h2>ReadonlyArray 类型</h2>\\n<blockquote>\\n<p>ReadonlyArray 是一种内置的泛型类型，它表示一个只读的数组。这意味着数组的元素可以被读取，但不能被修改（即不能添加、删除或修改元素）。这与 JavaScript 中的 Object.freeze() 方法类似，但专门用于数组。</p>\\n</blockquote>\\n<h3>使用 ReadonlyArray</h3>\\n<blockquote>\\n<p>ReadonlyArray 可以用于确保数组不会被修改。这对于防止数据被意外改变非常有用，特别是在函数式编程中。</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">let</span> readOnlyArray<span class=\\"token operator\\">:</span> ReadonlyArray<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">number</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 以下操作都是不允许的，会导致编译错误</span>\\n<span class=\\"token comment\\">// readOnlyArray[0] = 10;</span>\\n<span class=\\"token comment\\">// readOnlyArray.push(4);</span>\\n<span class=\\"token comment\\">// readOnlyArray.pop();</span>\\n</code></pre></div>"}');
export {
  ReadonlyArray___html as comp,
  data
};
