import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./Map特性-C-cbns8w.js";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_1 = "/blog/assets/Map键值对遍历-D72kn_8A.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="map-接口" tabindex="-1"><a class="header-anchor" href="#map-接口"><span>Map 接口</span></a></h2><p>双列集合；需要导包，在 java.util 下；Map 接口，不是类，是双列集合的顶层。</p><h3 id="map-集合的特性" tabindex="-1"><a class="header-anchor" href="#map-集合的特性"><span>Map 集合的特性</span></a></h3><ol><li>`);
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
  _push(`</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="Map特性"></p><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>V put(K key, V value)</td><td>添加元素，返回添加之前的值；修改元素，返回被修改之前的值</td></tr><tr><td>V remove(Object key)</td><td>根据键来删除元素，返回被删除的元素的值</td></tr><tr><td>int size()</td><td>获取长度</td></tr><tr><td>void clear()</td><td>清空</td></tr><tr><td>V get(Object key)</td><td>根据键来获取值</td></tr><tr><td>boolean containsKey(Object key)</td><td>判断是否包含，键为给定的内容，的元素</td></tr><tr><td>boolean containsValue(Object value)</td><td>判断是否包含，值为给定的内容，的元素</td></tr><tr><td><code>Set&lt;K&gt; keySet()</code></td><td>获取所有的键，并用 Set 集合接收</td></tr><tr><td><code>Collection&lt;V&gt; values()</code></td><td>获取所有的值，并用 Collection(或其他结合) 集合接收</td></tr><tr><td><code>Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()</code></td><td>获取所有的键值对，并用 Set 结合接收</td></tr></tbody></table><h3 id="map-集合的遍历" tabindex="-1"><a class="header-anchor" href="#map-集合的遍历"><span>Map 集合的遍历</span></a></h3><ol><li>键找值遍历</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Set</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keys <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法的应用" tabindex="-1"><a class="header-anchor" href="#方法的应用"><span>方法的应用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token class-name">Entry</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMap</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Map是接口，需要创建实现类对象</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {}</span>

        <span class="token comment">// V put(K key, V value)</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最后输出18，不是添加，是替换</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {李四=18, 张三=18, 王五=22}</span>

        <span class="token comment">// V remove(Object key)</span>
        map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {李四=18, 张三=18}</span>

        <span class="token comment">// int size()</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

        <span class="token comment">// void clear()</span>
        map<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{}</span>

        <span class="token comment">// V get(Object key)</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>

        <span class="token comment">// boolean containsKey(Object key)</span>
        <span class="token comment">// boolean containsValue(Object value)</span>
        <span class="token class-name">Boolean</span> isWang <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Boolean</span> isHou <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">&quot;后端&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Boolean</span> wangWu <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">containsValue</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Boolean</span> hou <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">containsValue</span><span class="token punctuation">(</span><span class="token string">&quot;后端&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isWang<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isHou<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wangWu<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hou<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

        <span class="token comment">// Set&lt;K&gt; keySet()</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> set<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 李四 张三 王五</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Collection&lt;V&gt; values()</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> values <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> i <span class="token operator">:</span> values<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20 18 22</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 遍历一（键找值遍历）</span>
        <span class="token class-name">Set</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keys <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> keys<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// 李四:20</span>
            <span class="token comment">// 张三:18</span>
            <span class="token comment">// 王五:22</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * 遍历二
         * 键值对
         * Set&lt;Map.Entry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>K,V</span><span class="token punctuation">&gt;</span></span>&gt; entrySet()
         * Map.Entry：是内部类的用法，和Outer.Inner用法一样
         * 可以省略Map，但是Entry需要导包
         * entry有两个方法：getKey()和getValue()
         * getKey()：获取键
         * getValue()：获取值
         * */</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> set1<span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> set1<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// 李四:20</span>
            <span class="token comment">// 张三:18</span>
            <span class="token comment">// 王五:22</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> set2<span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> set2<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// 李四:20</span>
            <span class="token comment">// 张三:18</span>
            <span class="token comment">// 王五:22</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Map键值对遍历"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/双列集合Map/Map接口.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Map___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Map接口.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/Map%E6%8E%A5%E5%8F%A3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Map 接口","slug":"map-接口","link":"#map-接口","children":[{"level":3,"title":"Map 集合的特性","slug":"map-集合的特性","link":"#map-集合的特性","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"Map 集合的遍历","slug":"map-集合的遍历","link":"#map-集合的遍历","children":[]},{"level":3,"title":"方法的应用","slug":"方法的应用","link":"#方法的应用","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/双列集合Map/Map接口.md","excerpt":"<h2>Map 接口</h2>\\n<p>双列集合；需要导包，在 java.util 下；Map 接口，不是类，是双列集合的顶层。</p>\\n<h3>Map 集合的特性</h3>\\n<ol>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ol>\\n<p></p>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>V put(K key, V value)</td>\\n<td>添加元素，返回添加之前的值；修改元素，返回被修改之前的值</td>\\n</tr>\\n<tr>\\n<td>V remove(Object key)</td>\\n<td>根据键来删除元素，返回被删除的元素的值</td>\\n</tr>\\n<tr>\\n<td>int size()</td>\\n<td>获取长度</td>\\n</tr>\\n<tr>\\n<td>void clear()</td>\\n<td>清空</td>\\n</tr>\\n<tr>\\n<td>V get(Object key)</td>\\n<td>根据键来获取值</td>\\n</tr>\\n<tr>\\n<td>boolean containsKey(Object key)</td>\\n<td>判断是否包含，键为给定的内容，的元素</td>\\n</tr>\\n<tr>\\n<td>boolean containsValue(Object value)</td>\\n<td>判断是否包含，值为给定的内容，的元素</td>\\n</tr>\\n<tr>\\n<td><code>Set&lt;K&gt; keySet()</code></td>\\n<td>获取所有的键，并用 Set 集合接收</td>\\n</tr>\\n<tr>\\n<td><code>Collection&lt;V&gt; values()</code></td>\\n<td>获取所有的值，并用 Collection(或其他结合) 集合接收</td>\\n</tr>\\n<tr>\\n<td><code>Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()</code></td>\\n<td>获取所有的键值对，并用 Set 结合接收</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  Map___html as comp,
  data
};
