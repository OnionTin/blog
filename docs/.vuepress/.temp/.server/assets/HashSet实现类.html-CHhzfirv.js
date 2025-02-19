import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/HashSet去重-BAPj3Zyr.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="hashset-实现类" tabindex="-1"><a class="header-anchor" href="#hashset-实现类"><span>HashSet 实现类</span></a></h2><h3 id="hashset-集合的特点" tabindex="-1"><a class="header-anchor" href="#hashset-集合的特点"><span>HashSet 集合的特点</span></a></h3><ol><li>`);
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
  _push(`，HashSet 类中的元素的不能重复</li></ol><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Set/Set接口.md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`与 Set 集合`);
            } else {
              return [
                createTextVNode("与 Set 集合")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`一致`);
      } else {
        return [
          createVNode(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Set/Set接口.md" }, {
            default: withCtx(() => [
              createTextVNode("与 Set 集合")
            ]),
            _: 1
          }),
          createTextVNode("一致")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="hashset-集合遍历" tabindex="-1"><a class="header-anchor" href="#hashset-集合遍历"><span>HashSet 集合遍历</span></a></h3><ol><li><p>转数组循环遍历</p></li><li><p>迭代器遍历</p></li><li><p>增强 for 循环遍历(for each)</p></li></ol><h3 id="hashset-存储字符串类型的数据" tabindex="-1"><a class="header-anchor" href="#hashset-存储字符串类型的数据"><span>HashSet 存储字符串类型的数据</span></a></h3><h3 id="hashset-存储-integer-类型的数据" tabindex="-1"><a class="header-anchor" href="#hashset-存储-integer-类型的数据"><span>HashSet 存储 Integer 类型的数据</span></a></h3><h3 id="hashset-存储的数据类型可以不一致" tabindex="-1"><a class="header-anchor" href="#hashset-存储的数据类型可以不一致"><span>HashSet 存储的数据类型可以不一致</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Set</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashSets</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> hs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 唯一性：去重</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hs<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, ccc, bbb]</span>

        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> hs1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 唯一性：去重</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hs1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3, 4]</span>

        <span class="token class-name">HashSet</span> ts2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ts2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3, true]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashset-存储自定义的类默认不去重的问题" tabindex="-1"><a class="header-anchor" href="#hashset-存储自定义的类默认不去重的问题"><span>HashSet 存储自定义的类默认不去重的问题</span></a></h3>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`去重：重写 hashCode()和 equals()方法`);
      } else {
        return [
          createTextVNode("去重：重写 hashCode()和 equals()方法")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Set</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Objects</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashSets</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> hs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hs<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, ccc, bbb]</span>

        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> hs1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hs1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3, 4]</span>

        <span class="token class-name">HashSet</span> ts2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ts2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3, true]</span>

        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cat</span><span class="token punctuation">&gt;</span></span> ts3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cat</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Tony&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Tony&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Jessy&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ts3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// [Cat{name=&#39;Tony&#39;, age=21}, Cat{name=&#39;Tom&#39;, age=18},</span>
        <span class="token comment">// Cat{name=&#39;Jessy&#39;, age=18}, Cat{name=&#39;Jerry&#39;, age=18},</span>
        <span class="token comment">// Cat{name=&#39;Tony&#39;, age=20}, Cat{name=&#39;Tom&#39;, age=18}]</span>

        <span class="token comment">// 去重：重写hashCode和equals方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Cat{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 去重的最终方案</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// return true; ：写死了 equals</span>
        <span class="token class-name">Cat</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Cat</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span> <span class="token comment">// 向下转型，获取到成员属性</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">==</span> c<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// return 1; ：写死了 hashCode</span>
        <span class="token comment">// *12：为了避免出现 18 +12 = 12 + 18 这样的问题发生</span>
        <span class="token comment">// 还有比如 &quot;Aa&quot;.hashCode() = &quot;BB&quot;.hashCode() 这样的问题</span>
        <span class="token comment">// 这种问题出现了也没事，因为在equals方法中，会判断 name是否一致</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">*</span> <span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="HashSet去重"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/单列集合Collection/Set/HashSet实现类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HashSet____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "HashSet实现类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/HashSet%E5%AE%9E%E7%8E%B0%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"HashSet 实现类","slug":"hashset-实现类","link":"#hashset-实现类","children":[{"level":3,"title":"HashSet 集合的特点","slug":"hashset-集合的特点","link":"#hashset-集合的特点","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"HashSet 集合遍历","slug":"hashset-集合遍历","link":"#hashset-集合遍历","children":[]},{"level":3,"title":"HashSet 存储字符串类型的数据","slug":"hashset-存储字符串类型的数据","link":"#hashset-存储字符串类型的数据","children":[]},{"level":3,"title":"HashSet 存储 Integer 类型的数据","slug":"hashset-存储-integer-类型的数据","link":"#hashset-存储-integer-类型的数据","children":[]},{"level":3,"title":"HashSet 存储的数据类型可以不一致","slug":"hashset-存储的数据类型可以不一致","link":"#hashset-存储的数据类型可以不一致","children":[]},{"level":3,"title":"HashSet 存储自定义的类默认不去重的问题","slug":"hashset-存储自定义的类默认不去重的问题","link":"#hashset-存储自定义的类默认不去重的问题","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/Set/HashSet实现类.md","excerpt":"<h2>HashSet 实现类</h2>\\n<h3>HashSet 集合的特点</h3>\\n<ol>\\n<li>\\n（即：存进去的顺序和取出来的顺序不一定一致）</li>\\n<li>\\n</li>\\n<li>\\n，HashSet 类中的元素的不能重复</li>\\n</ol>\\n<h3>常见的成员方法</h3>\\n<h3>HashSet 集合遍历</h3>\\n<ol>\\n<li>\\n<p>转数组循环遍历</p>\\n</li>\\n<li>\\n<p>迭代器遍历</p>\\n</li>\\n<li>\\n<p>增强 for 循环遍历(for each)</p>\\n</li>\\n</ol>\\n<h3>HashSet 存储字符串类型的数据</h3>\\n<h3>HashSet 存储 Integer 类型的数据</h3>"}');
export {
  HashSet____html as comp,
  data
};
