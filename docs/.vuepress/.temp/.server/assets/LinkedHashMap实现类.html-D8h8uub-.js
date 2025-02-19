import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="linkedhashmap-实现类" tabindex="-1"><a class="header-anchor" href="#linkedhashmap-实现类"><span>LinkedHashMap 实现类</span></a></h2><p>根`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Set/LinkedHashSet实现类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`LinkedHashSet`);
      } else {
        return [
          createTextVNode("LinkedHashSet")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`和`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Set/HashSet实现类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`HashSet`);
      } else {
        return [
          createTextVNode("HashSet")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`一样；LinkedHashMap 实现类比`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/双列集合Map/HashMap实现类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`HashMap`);
      } else {
        return [
          createTextVNode("HashMap")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`多了一个`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`有序`);
      } else {
        return [
          createTextVNode("有序")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的特性。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">LinkedHashMap</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoLinkedHashMap</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：有序的，怎么存怎么返</span>
            <span class="token comment">// bbb=18</span>
            <span class="token comment">// aaa=16</span>
            <span class="token comment">// ccc=22</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/双列集合Map/LinkedHashMap实现类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkedHashMap____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "LinkedHashMap实现类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/LinkedHashMap%E5%AE%9E%E7%8E%B0%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"LinkedHashMap 实现类","slug":"linkedhashmap-实现类","link":"#linkedhashmap-实现类","children":[]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/双列集合Map/LinkedHashMap实现类.md","excerpt":"<h2>LinkedHashMap 实现类</h2>\\n<p>根<a href=\\"/blog/admin/Java/Java常用Api/单列集合Collection/Set/LinkedHashSet实现类.md\\" target=\\"_blank\\">LinkedHashSet</a>和<a href=\\"/blog/admin/Java/Java常用Api/单列集合Collection/Set/HashSet实现类.md\\" target=\\"_blank\\">HashSet</a>一样；LinkedHashMap 实现类比<a href=\\"/blog/admin/Java/Java常用Api/双列集合Map/HashMap实现类.md\\" target=\\"_blank\\">HashMap</a>多了一个的特性。</p>"}');
export {
  LinkedHashMap____html as comp,
  data
};
