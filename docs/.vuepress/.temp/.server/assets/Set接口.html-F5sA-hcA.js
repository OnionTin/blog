import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="set-子接口" tabindex="-1"><a class="header-anchor" href="#set-子接口"><span>Set 子接口</span></a></h2><p>需要导包，在 java.util 下；Set 也是接口，是 Collection 的子接口。</p><h3 id="set-集合的特点" tabindex="-1"><a class="header-anchor" href="#set-集合的特点"><span>Set 集合的特点</span></a></h3><ol><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`无序性`);
      } else {
        return [
          createTextVNode("无序性")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`（即：存进去的顺序和取出来的顺序不一定一致）</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`无索引`);
      } else {
        return [
          createTextVNode("无索引")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`唯一性`);
      } else {
        return [
          createTextVNode("唯一性")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，Set 集合中的元素的不能重复</li></ol><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Collection接口.md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`与 Collection 集合`);
            } else {
              return [
                createTextVNode("与 Collection 集合")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`一致`);
      } else {
        return [
          createVNode(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Collection接口.md" }, {
            default: withCtx(() => [
              createTextVNode("与 Collection 集合")
            ]),
            _: 1
          }),
          createTextVNode("一致")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="set-集合遍历" tabindex="-1"><a class="header-anchor" href="#set-集合遍历"><span>Set 集合遍历</span></a></h3><ol><li><p>转数组循环遍历</p></li><li><p>迭代器遍历</p></li><li><p>增强 for 循环遍历(for each)</p></li></ol><h3 id="方法的使用案例" tabindex="-1"><a class="header-anchor" href="#方法的使用案例"><span>方法的使用案例</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Set</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// set.add(111);// 由于泛型，编译报错</span>
        <span class="token class-name">Boolean</span> b <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 唯一性：false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 无序性：[aaa, ccc, bbb]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/单列集合Collection/Set/Set接口.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Set___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Set接口.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/Set%E6%8E%A5%E5%8F%A3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Set 子接口","slug":"set-子接口","link":"#set-子接口","children":[{"level":3,"title":"Set 集合的特点","slug":"set-集合的特点","link":"#set-集合的特点","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"Set 集合遍历","slug":"set-集合遍历","link":"#set-集合遍历","children":[]},{"level":3,"title":"方法的使用案例","slug":"方法的使用案例","link":"#方法的使用案例","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/Set/Set接口.md","excerpt":"<h2>Set 子接口</h2>\\n<p>需要导包，在 java.util 下；Set 也是接口，是 Collection 的子接口。</p>\\n<h3>Set 集合的特点</h3>\\n<ol>\\n<li>\\n（即：存进去的顺序和取出来的顺序不一定一致）</li>\\n<li>\\n</li>\\n<li>\\n，Set 集合中的元素的不能重复</li>\\n</ol>\\n<h3>常见的成员方法</h3>\\n<h3>Set 集合遍历</h3>\\n<ol>\\n<li>\\n<p>转数组循环遍历</p>\\n</li>\\n<li>\\n<p>迭代器遍历</p>\\n</li>\\n<li>\\n<p>增强 for 循环遍历(for each)</p>\\n</li>\\n</ol>"}');
export {
  Set___html as comp,
  data
};
