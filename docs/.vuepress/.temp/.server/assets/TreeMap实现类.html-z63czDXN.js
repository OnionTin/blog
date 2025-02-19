import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./Map特性-C-cbns8w.js";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="treemap-实现类" tabindex="-1"><a class="header-anchor" href="#treemap-实现类"><span>TreeMap 实现类</span></a></h2><p>和`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/admin/Java/Java常用Api/双列集合Map/Map接口.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Map`);
      } else {
        return [
          createTextVNode("Map")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`很相似，除了`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`可以排序`);
      } else {
        return [
          createTextVNode("可以排序")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，其他基本一样； 双列集合；需要导包，在 java.util 下； TreeMap 是实现类。</p><h3 id="treemap-集合的特性" tabindex="-1"><a class="header-anchor" href="#treemap-集合的特性"><span>TreeMap 集合的特性</span></a></h3><ol><li>`);
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
  _push(`</li><li>`);
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
        _push2(`元素唯一(键唯一，值不唯一)`);
      } else {
        return [
          createTextVNode("元素唯一(键唯一，值不唯一)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`双列的`);
      } else {
        return [
          createTextVNode("双列的")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`可以排序的(根据键来排序)`);
      } else {
        return [
          createTextVNode("可以排序的(根据键来排序)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="Map特性"></p><h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h3><p>红黑树，`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/admin/Java/Java常用Api/单例集合Collection/Set/TreeSet实现类.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TreeSet`);
      } else {
        return [
          createTextVNode("TreeSet")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 的底层就是 TreeMap。</p><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>V put(K key, V value)</td><td>添加元素，返回添加之前的值；修改元素，返回被修改之前的值</td></tr><tr><td>V remove(Object key)</td><td>根据键来删除元素，返回被删除的元素的值</td></tr><tr><td>int size()</td><td>获取长度</td></tr><tr><td>void clear()</td><td>清空</td></tr><tr><td>V get(Object key)</td><td>根据键来获取值</td></tr><tr><td>boolean containsKey(Object key)</td><td>判断是否包含，键为给定的内容，的元素</td></tr><tr><td>boolean containsValue(Object value)</td><td>判断是否包含，值为给定的内容，的元素</td></tr><tr><td><code>Set&lt;K&gt; keySet()</code></td><td>获取所有的键，并用 Set 集合接收</td></tr><tr><td><code>Collection&lt;V&gt; values()</code></td><td>获取所有的值，并用 Collection(或其他结合) 集合接收</td></tr><tr><td><code>Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()</code></td><td>获取所有的键值对，并用 Set 结合接收</td></tr></tbody></table><h3 id="treemap-集合的遍历" tabindex="-1"><a class="header-anchor" href="#treemap-集合的遍历"><span>TreeMap 集合的遍历</span></a></h3><ol><li>键找值遍历</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Set</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keys <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> keys<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 李四:20</span>
        <span class="token comment">// 张三:18</span>
        <span class="token comment">// 王五:22</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>键值对获取键合值</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> entrySet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> entrySet<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 李四:20</span>
        <span class="token comment">// 张三:18</span>
        <span class="token comment">// 王五:22</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token class-name">Entry</span></span><span class="token punctuation">;</span> <span class="token comment">// 内部类的用法，需要导包</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> entrySet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> entrySet<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 李四:20</span>
        <span class="token comment">// 张三:18</span>
        <span class="token comment">// 王五:22</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序-和treeset一样-自然排序、比较器" tabindex="-1"><a class="header-anchor" href="#排序-和treeset一样-自然排序、比较器"><span>排序(和`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/admin/Java/Java常用Api/单例集合Collection/Set/TreeSet实现类.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TreeSet`);
      } else {
        return [
          createTextVNode("TreeSet")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`一样，自然排序、比较器)</span></a></h3><h3 id="方法的应用" tabindex="-1"><a class="header-anchor" href="#方法的应用"><span>方法的应用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TreeMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token class-name">Entry</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoTreeMap</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> tm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;9527&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;9530&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;9526&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Rose&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;9531&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Nose&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;9525&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Fore&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keys <span class="token operator">=</span> tm<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> tm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：根据键值，进行了排序</span>
            <span class="token comment">// 9525:Student{name=&#39;Fore&#39;, age=18}</span>
            <span class="token comment">// 9526:Student{name=&#39;Rose&#39;, age=18}</span>
            <span class="token comment">// 9527:Student{name=&#39;Tom&#39;, age=18}</span>
            <span class="token comment">// 9530:Student{name=&#39;Jerry&#39;, age=18}</span>
            <span class="token comment">// 9531:Student{name=&#39;Nose&#39;, age=18}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tm2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>
          <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o1<span class="token punctuation">,</span> <span class="token class-name">Student</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> o1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> o2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> ii <span class="token operator">=</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> o1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
                <span class="token keyword">return</span> ii<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;9527&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;9530&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Rose&quot;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;9526&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Nose&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;9531&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;9525&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> sets <span class="token operator">=</span> tm2<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> sets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// Student{name=&#39;Rose&#39;, age=16}:9526</span>
            <span class="token comment">// Student{name=&#39;Jerry&#39;, age=17}:9530</span>
            <span class="token comment">// Student{name=&#39;Tom&#39;, age=18}:9525</span>
            <span class="token comment">// Student{name=&#39;Nose&#39;, age=20}:9531</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
        <span class="token keyword">return</span> <span class="token string">&quot;Student{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//class Student implements Comparable&lt;Student&gt;{</span>
<span class="token comment">//    private String name;</span>
<span class="token comment">//    private int age;</span>
<span class="token comment">//</span>
<span class="token comment">//    public Student(String name, int age) {</span>
<span class="token comment">//        this.name = name;</span>
<span class="token comment">//        this.age = age;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public String getName() {</span>
<span class="token comment">//        return name;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public void setName(String name) {</span>
<span class="token comment">//        this.name = name;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public int getAge() {</span>
<span class="token comment">//        return age;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public void setAge(int age) {</span>
<span class="token comment">//        this.age = age;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    @Override</span>
<span class="token comment">//    public String toString() {</span>
<span class="token comment">//        return &quot;Student{&quot; +</span>
<span class="token comment">//                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span>
<span class="token comment">//                &quot;, age=&quot; + age +</span>
<span class="token comment">//                &#39;}&#39;;</span>
<span class="token comment">//    }</span>
<span class="token comment">//    @Override</span>
<span class="token comment">//    public int compareTo(Student o) {</span>
<span class="token comment">//        int i = this.age - o.age;</span>
<span class="token comment">//        int ii = i == 0 ? this.name.compareTo(o.name) : i;</span>
<span class="token comment">//        return ii;</span>
<span class="token comment">//    }</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/双列集合Map/TreeMap实现类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TreeMap____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "TreeMap实现类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/TreeMap%E5%AE%9E%E7%8E%B0%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"TreeMap 实现类","slug":"treemap-实现类","link":"#treemap-实现类","children":[{"level":3,"title":"TreeMap 集合的特性","slug":"treemap-集合的特性","link":"#treemap-集合的特性","children":[]},{"level":3,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"TreeMap 集合的遍历","slug":"treemap-集合的遍历","link":"#treemap-集合的遍历","children":[]},{"level":3,"title":"排序(和TreeSet一样，自然排序、比较器)","slug":"排序-和treeset一样-自然排序、比较器","link":"#排序-和treeset一样-自然排序、比较器","children":[]},{"level":3,"title":"方法的应用","slug":"方法的应用","link":"#方法的应用","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/双列集合Map/TreeMap实现类.md","excerpt":"<h2>TreeMap 实现类</h2>\\n<p>和<a active=\\"\\" href=\\"/blog/admin/Java/Java常用Api/双列集合Map/Map接口.md\\" target=\\"_blank\\">Map</a>很相似，除了，其他基本一样；\\n双列集合；需要导包，在 java.util 下； TreeMap 是实现类。</p>\\n<h3>TreeMap 集合的特性</h3>\\n<ol>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ol>\\n<p></p>\\n<h3>数据结构</h3>\\n<p>红黑树，<a active=\\"\\" href=\\"/blog/admin/Java/Java常用Api/单例集合Collection/Set/TreeSet实现类.md\\" target=\\"_blank\\">TreeSet</a> 的底层就是 TreeMap。</p>"}');
export {
  TreeMap____html as comp,
  data
};
