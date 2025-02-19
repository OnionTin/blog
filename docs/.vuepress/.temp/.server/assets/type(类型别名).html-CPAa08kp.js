import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="type-类型别名" tabindex="-1"><a class="header-anchor" href="#type-类型别名"><span>type(类型别名)</span></a></h2><blockquote><p>类型别名允许你为复杂的类型定义创建简洁的名称，从而简化代码</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UserID</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 类型别名</span>
<span class="token keyword">function</span> <span class="token function">getUserByID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> UserID<span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
  <span class="token comment">// 实现根据 ID 获取用户</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Fetching user with ID:&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> User<span class="token punctuation">;</span> <span class="token comment">// 模拟返回用户</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  roles<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  isActive<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  metadata<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    createdAt<span class="token operator">:</span> Date<span class="token punctuation">;</span>
    updatedAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
  roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  isActive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  metadata<span class="token operator">:</span> <span class="token punctuation">{</span>
    createdAt<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/常用类型/type(类型别名).html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const type_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "type(类型别名).html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/type(%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D).html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"type(类型别名)","slug":"type-类型别名","link":"#type-类型别名","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/常用类型/type(类型别名).md","excerpt":"<h2>type(类型别名)</h2>\\n<blockquote>\\n<p>类型别名允许你为复杂的类型定义创建简洁的名称，从而简化代码</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">UserID</span> <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 类型别名</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">getUserByID</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token operator\\">:</span> UserID<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> User <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 实现根据 ID 获取用户</span>\\n  <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Fetching user with ID:\\"</span><span class=\\"token punctuation\\">,</span> id<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">as</span> User<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 模拟返回用户</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  type_______html as comp,
  data
};
