import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="properties-实现类" tabindex="-1"><a class="header-anchor" href="#properties-实现类"><span>Properties 实现类</span></a></h2><blockquote><p>是 `);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/双列集合Map/HashTable实现类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`HashTable 实现类`);
      } else {
        return [
          createTextVNode("HashTable 实现类")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的子类；</p><p>表示一个持久的属性集；</p><p>可以保存在流中或从流中加载；属性列表中的每个键及其对应的值都是一个字符串。</p></blockquote><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public Properties()</td><td>创建一个无默认值的空属性列表</td></tr><tr><td>public Properties(Properties defaults)</td><td>创建一个空属性列表，使用默认属性列表初始化</td></tr></tbody></table><h3 id="常用的方法" tabindex="-1"><a class="header-anchor" href="#常用的方法"><span>常用的方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>put (Object key, Object value)</td><td>添加键值对</td></tr><tr><td>get (Object key)</td><td>获取键值对</td></tr><tr><td>keySet ()</td><td>获取所有键</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoProperties</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// public Properties()</span>
        <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        p<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {王五=20, 张三=18, 李四=19}</span>

        <span class="token comment">// 遍历</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> key <span class="token operator">:</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> value <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//王五=20</span>
            <span class="token comment">//张三=18</span>
            <span class="token comment">//李四=19</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特有的方法" tabindex="-1"><a class="header-anchor" href="#特有的方法"><span>特有的方法</span></a></h3><blockquote><p>主要的用途是用来`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`加载配置文件(.properties)`);
      } else {
        return [
          createTextVNode("加载配置文件(.properties)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的</p><p>特定的文件，必须是键值对的形式；其中符号可以是等于号或者是冒号</p></blockquote><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public String getProperty(String key)</td><td>返回指定键的值，等于之前的 get</td></tr><tr><td>public Object setProperty(String key, String value)</td><td>设置指定键的值，等同于之前的 put</td></tr><tr><td>public <code>Set&lt;String&gt;</code> stringPropertyNames()</td><td>获取所有键的集合，等同于之前的 keySet</td></tr><tr><td>public void store(OutputStream out, String comments)</td><td>将字节集合写入文件中(comments：文件注释)</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`public void load(InputStream in)`);
      } else {
        return [
          createTextVNode("public void load(InputStream in)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`将特定文件中的数据读取出来`);
      } else {
        return [
          createTextVNode("将特定文件中的数据读取出来")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>public void store(Writer w, String comments)</td><td>将字符集合写入文件中(comments：文件注释)</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`public void load(Reader r) `);
      } else {
        return [
          createTextVNode("public void load(Reader r) ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`将特定文件中的数据读取出来 `);
      } else {
        return [
          createTextVNode("将特定文件中的数据读取出来 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr></tbody></table><h3 id="方法的使用-1" tabindex="-1"><a class="header-anchor" href="#方法的使用-1"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoProperties2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public Object setProperty(String key, String value)</span>
        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name=王五}</span>

        <span class="token comment">// 遍历：public \`Set&lt;String&gt;\` stringPropertyNames()</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">stringPropertyNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// public String getProperty(String key)</span>
            p<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>omg<span class="token punctuation">.</span></span><span class="token constant">CORBA</span><span class="token punctuation">.</span>portable<span class="token punctuation">.</span>OutputStream<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoProperties3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;jerry&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;19&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;rose&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;jerry&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;rose&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public void store(OutputStream out, String comments)</span>
        p<span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;aaa/p.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;加一个注释&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public void load(InputStream in)</span>
        p<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;aaa/p.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/双列集合Map/Properties实现类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Properties____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Properties实现类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/Properties%E5%AE%9E%E7%8E%B0%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Properties 实现类","slug":"properties-实现类","link":"#properties-实现类","children":[{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常用的方法","slug":"常用的方法","link":"#常用的方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]},{"level":3,"title":"特有的方法","slug":"特有的方法","link":"#特有的方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用-1","link":"#方法的使用-1","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/双列集合Map/Properties实现类.md","excerpt":"<h2>Properties 实现类</h2>\\n<blockquote>\\n<p>是 <a href=\\"/blog/admin/Java/Java常用Api/双列集合Map/HashTable实现类.md\\" target=\\"_blank\\">HashTable 实现类</a>的子类；</p>\\n<p>表示一个持久的属性集；</p>\\n<p>可以保存在流中或从流中加载；属性列表中的每个键及其对应的值都是一个字符串。</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public Properties()</td>\\n<td>创建一个无默认值的空属性列表</td>\\n</tr>\\n<tr>\\n<td>public Properties(Properties defaults)</td>\\n<td>创建一个空属性列表，使用默认属性列表初始化</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  Properties____html as comp,
  data
};
