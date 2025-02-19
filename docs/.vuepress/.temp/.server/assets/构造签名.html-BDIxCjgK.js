import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="构造签名" tabindex="-1"><a class="header-anchor" href="#构造签名"><span>构造签名</span></a></h2><blockquote><p>构造签名（Construct Signatures）是接口的一部分，用于描述一个构造函数的参数列表和返回类型。这允许接口能够描述一个类或者一个函数构造器的形态。</p></blockquote><h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3><blockquote><p>构造签名通常与 new 关键字一起使用，表示创建一个新对象的构造函数。这个接口 Constructable 描述了一个构造函数，它接受一个 string 参数，并返回一个 Object 类型的新实例。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现构造签名" tabindex="-1"><a class="header-anchor" href="#实现构造签名"><span>实现构造签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">implements</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有多个参数的构造签名" tabindex="-1"><a class="header-anchor" href="#带有多个参数的构造签名"><span>带有多个参数的构造签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有可选参数的构造签名" tabindex="-1"><a class="header-anchor" href="#带有可选参数的构造签名"><span>带有可选参数的构造签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> arg2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有剩余参数的构造签名" tabindex="-1"><a class="header-anchor" href="#带有剩余参数的构造签名"><span>带有剩余参数的构造签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型构造签名" tabindex="-1"><a class="header-anchor" href="#泛型构造签名"><span>泛型构造签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个构造签名" tabindex="-1"><a class="header-anchor" href="#多个构造签名"><span>多个构造签名</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/关于函数/构造签名.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "构造签名.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%9E%84%E9%80%A0%E7%AD%BE%E5%90%8D.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"构造签名","slug":"构造签名","link":"#构造签名","children":[{"level":3,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]},{"level":3,"title":"实现构造签名","slug":"实现构造签名","link":"#实现构造签名","children":[]},{"level":3,"title":"带有多个参数的构造签名","slug":"带有多个参数的构造签名","link":"#带有多个参数的构造签名","children":[]},{"level":3,"title":"带有可选参数的构造签名","slug":"带有可选参数的构造签名","link":"#带有可选参数的构造签名","children":[]},{"level":3,"title":"带有剩余参数的构造签名","slug":"带有剩余参数的构造签名","link":"#带有剩余参数的构造签名","children":[]},{"level":3,"title":"泛型构造签名","slug":"泛型构造签名","link":"#泛型构造签名","children":[]},{"level":3,"title":"多个构造签名","slug":"多个构造签名","link":"#多个构造签名","children":[]}]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/关于函数/构造签名.md","excerpt":"<h2>构造签名</h2>\\n<blockquote>\\n<p>构造签名（Construct Signatures）是接口的一部分，用于描述一个构造函数的参数列表和返回类型。这允许接口能够描述一个类或者一个函数构造器的形态。</p>\\n</blockquote>\\n<h3>基本语法</h3>\\n<blockquote>\\n<p>构造签名通常与 new 关键字一起使用，表示创建一个新对象的构造函数。这个接口 Constructable 描述了一个构造函数，它接受一个 string 参数，并返回一个 Object 类型的新实例。</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Constructable</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">new</span> <span class=\\"token punctuation\\">(</span>arg<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> Object<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  _____html as comp,
  data
};
