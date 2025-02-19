import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="integer-包装类" tabindex="-1"><a class="header-anchor" href="#integer-包装类"><span>Integer 包装类</span></a></h2><blockquote><p>包装类: 就是把基本数据类型包装成引用类型</p></blockquote><table><thead><tr><th>基本数据类型</th><th>对应的包装类（位于 java.lang 包中）</th></tr></thead><tbody><tr><td>byte</td><td>Byte</td></tr><tr><td>short</td><td>Short</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`int`);
      } else {
        return [
          createTextVNode("int")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Integer`);
      } else {
        return [
          createTextVNode("Integer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>long</td><td>Long</td></tr><tr><td>float</td><td>Float</td></tr><tr><td>double</td><td>Double</td></tr><tr><td><code>char</code></td><td><code>Character</code></td></tr><tr><td>boolean</td><td>Boolean</td></tr></tbody></table><h3 id="integer-int-类型包装类" tabindex="-1"><a class="header-anchor" href="#integer-int-类型包装类"><span>Integer(int 类型包装类)</span></a></h3><h4 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h4><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public Integer(int value)</td><td>创建 Integer 对象;int -&gt; Integer</td></tr><tr><td>public Integer(String s)</td><td>创建 Integer 对象;String 类型的<code>数字</code> -&gt; Integer</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// public Integer(int value):</span>
<span class="token class-name">Integer</span> in1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>

<span class="token comment">// public Integer(String s)</span>
<span class="token class-name">Integer</span> in2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>

<span class="token comment">// 只能是\`数字\`类型的String</span>
<span class="token class-name">Integer</span> in3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 运行报错</span>

<span class="token comment">// 超出Integer范围(就是int的范围)</span>
<span class="token class-name">Integer</span> in4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">11111111111111111</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这是17位，int最大16位</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 运行报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h4><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public int intValue()</td><td>将 Integer 类型的数字转换为 int 类型的数字</td></tr><tr><td>public boolean equals(Object obj)</td><td>比较两个 Integer 类型的数字是否相等</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`public static int parseInt(String s)`);
      } else {
        return [
          createTextVNode("public static int parseInt(String s)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`将字符串类型的数字转换为 int 类型的数字`);
      } else {
        return [
          createTextVNode("将字符串类型的数字转换为 int 类型的数字")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>public String toString()</td><td>将 Integer 类型的数字转换为字符串类型的数字</td></tr><tr><td>public static String toString(int i)</td><td>将 int 类型的数字转换为字符串类型的数字</td></tr><tr><td>public static Integer valueOf(int i)</td><td>将 int 类型的数字转换为 Integer 类型的数字</td></tr><tr><td>public static Integer valueOf(String s)</td><td>将字符串类型的数字转换为 Integer 类型的数字</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 最重要的使用方法案例：</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动装箱和自动拆箱" tabindex="-1"><a class="header-anchor" href="#自动装箱和自动拆箱"><span>自动装箱和自动拆箱</span></a></h3><blockquote><p>自动装箱: int -&gt; Integer</p><p>自动拆箱: Integer -&gt; int</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 自动装箱 =&gt; 手动装箱: Integer i = Integer.valueOf(10);</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 自动拆箱 =&gt; 手动拆箱: int n = i.intValue() + 2;</span>

<span class="token class-name">Integer</span> in <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
in <span class="token operator">=</span> in <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// in = Integer.valueOf(in.intValue() + 20);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本数据类型和包装类之间的转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型和包装类之间的转换"><span>基本数据类型和包装类之间的转换</span></a></h3><blockquote><p>基本数据类型转换为包装类: 使用包装类的构造器</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>包装类转换为基本数据类型: 使用包装类中的方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>自动转换: 直接将包装类赋值给基本数据类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> i<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意: 自动转换是编译器自动进行的, 不是我们手动进行的</p></blockquote><h3 id="常见的问题" tabindex="-1"><a class="header-anchor" href="#常见的问题"><span>常见的问题</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token class-name">Integer</span> in1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Integer</span> in2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in1 <span class="token operator">==</span> in2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false: 因为new出来的对象在内存中是不同的</span>

  <span class="token class-name">Integer</span> in3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Integer</span> in4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in3 <span class="token operator">==</span> in4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false: 因为new出来的对象在内存中是不同的</span>

  <span class="token class-name">Integer</span> in5 <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
  <span class="token class-name">Integer</span> in6 <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in5 <span class="token operator">==</span> in6<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true: 因为自动装箱, 会将127自动装箱成Integer对象</span>

  <span class="token class-name">Integer</span> in7 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
  <span class="token class-name">Integer</span> in8 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in7 <span class="token operator">==</span> in8<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false: Integer范围: -128 - 127，范围内比较数值</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in7<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>in8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true: equals比较的是数值</span>

  <span class="token class-name">Integer</span> in9 <span class="token operator">=</span> <span class="token number">126</span><span class="token punctuation">;</span>
  <span class="token class-name">Integer</span> in10 <span class="token operator">=</span> in9 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token class-name">Integer</span> in11 <span class="token operator">=</span> in9 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// in11 是Integer类型；Integer对象的比较要用equals</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in10 <span class="token operator">==</span> in11<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in5 <span class="token operator">==</span> in10<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in5 <span class="token operator">==</span> in2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in2 <span class="token operator">==</span> in10<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/Integer包装类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Integer____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Integer包装类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Integer%E5%8C%85%E8%A3%85%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Integer 包装类","slug":"integer-包装类","link":"#integer-包装类","children":[{"level":3,"title":"Integer(int 类型包装类)","slug":"integer-int-类型包装类","link":"#integer-int-类型包装类","children":[]},{"level":3,"title":"自动装箱和自动拆箱","slug":"自动装箱和自动拆箱","link":"#自动装箱和自动拆箱","children":[]},{"level":3,"title":"基本数据类型和包装类之间的转换","slug":"基本数据类型和包装类之间的转换","link":"#基本数据类型和包装类之间的转换","children":[]},{"level":3,"title":"常见的问题","slug":"常见的问题","link":"#常见的问题","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/Integer包装类.md","excerpt":"<h2>Integer 包装类</h2>\\n<blockquote>\\n<p>包装类: 就是把基本数据类型包装成引用类型</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>基本数据类型</th>\\n<th>对应的包装类（位于 java.lang 包中）</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>byte</td>\\n<td>Byte</td>\\n</tr>\\n<tr>\\n<td>short</td>\\n<td>Short</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>long</td>\\n<td>Long</td>\\n</tr>\\n<tr>\\n<td>float</td>\\n<td>Float</td>\\n</tr>\\n<tr>\\n<td>double</td>\\n<td>Double</td>\\n</tr>\\n<tr>\\n<td><code>char</code></td>\\n<td><code>Character</code></td>\\n</tr>\\n<tr>\\n<td>boolean</td>\\n<td>Boolean</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  Integer____html as comp,
  data
};
