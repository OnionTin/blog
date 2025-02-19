import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="objectinputstream-类" tabindex="-1"><a class="header-anchor" href="#objectinputstream-类"><span>ObjectInputStream 类</span></a></h2><p>反序列化流</p><blockquote><p>反序列化：将本地磁盘中的对象，以流的形式，还原成内存中的对象。</p></blockquote><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public ObjectInputStream(InputStream in)</td><td>创建一个指定 InputStream 的 ObjectInputStream 对象，该 InputStream 对象用于读取流中的数据</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public final Object readObject()</td><td>从流中读取一个对象</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ObjectInput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ObjectInputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectInputStream01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// public ObjectInputStream(InputStream in)</span>
        <span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>
          <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;aaa/o.txt&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public final Object readObject()</span>
        <span class="token class-name">Object</span> p <span class="token operator">=</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Person{name=&#39;张三&#39;, age=18}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/IO流/对象操作流/反序列化/ObjectInputStream类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ObjectInputStream__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ObjectInputStream类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9C%E6%B5%81/%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96/ObjectInputStream%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ObjectInputStream 类","slug":"objectinputstream-类","link":"#objectinputstream-类","children":[{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/IO流/对象操作流/反序列化/ObjectInputStream类.md","excerpt":"<h2>ObjectInputStream 类</h2>\\n<p>反序列化流</p>\\n<blockquote>\\n<p>反序列化：将本地磁盘中的对象，以流的形式，还原成内存中的对象。</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public ObjectInputStream(InputStream in)</td>\\n<td>创建一个指定 InputStream 的 ObjectInputStream 对象，该 InputStream 对象用于读取流中的数据</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  ObjectInputStream__html as comp,
  data
};
