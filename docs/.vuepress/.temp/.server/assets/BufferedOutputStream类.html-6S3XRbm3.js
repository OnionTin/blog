import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="bufferedoutputstream-类" tabindex="-1"><a class="header-anchor" href="#bufferedoutputstream-类"><span>BufferedOutputStream 类</span></a></h2><blockquote><p>缓冲字节输出流、有缓冲区、高效</p></blockquote><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public BufferedInputStream(OutputStream out)</td><td>将输出流写到给定 File 对象的文件</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public void flush</td><td>刷新缓冲区</td></tr><tr><td>public void close</td><td>释放资源，同时自带刷新缓冲区的功能</td></tr><tr><td>其他方法</td><td>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/IO流/字节流/写入/FileOutputStream类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`同 FileOutputStream`);
      } else {
        return [
          createTextVNode("同 FileOutputStream")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZiJieOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoBufferedIOutputStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// public BufferedOutputStream(FileOutputStream out)</span>
        <span class="token comment">// 有参构造的原因是因为底层，使用的是装饰设计模式</span>

        <span class="token comment">// FileOutputStream fos = new FileOutputStream(&quot;aaa/bbb.txt&quot;);</span>
        <span class="token comment">// BufferedOutputStream bos = new BufferedOutputStream(fos);</span>

        <span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span>
        <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;aaa/bbb.txt&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 写出数据</span>
        <span class="token comment">// 一次写出一个字节</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">98</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 刷新缓冲区，否则数组一直在缓冲区，没有写入，导致文件一直是空白的</span>
        bos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 一次写出一个数组长度的字节</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 换行</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 缓冲</span>
        bos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/IO流/字节流/输出/BufferedOutputStream类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BufferedOutputStream__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "BufferedOutputStream类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E8%BE%93%E5%87%BA/BufferedOutputStream%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"BufferedOutputStream 类","slug":"bufferedoutputstream-类","link":"#bufferedoutputstream-类","children":[{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/IO流/字节流/输出/BufferedOutputStream类.md","excerpt":"<h2>BufferedOutputStream 类</h2>\\n<blockquote>\\n<p>缓冲字节输出流、有缓冲区、高效</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public BufferedInputStream(OutputStream out)</td>\\n<td>将输出流写到给定 File 对象的文件</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public void flush</td>\\n<td>刷新缓冲区</td>\\n</tr>\\n<tr>\\n<td>public void close</td>\\n<td>释放资源，同时自带刷新缓冲区的功能</td>\\n</tr>\\n<tr>\\n<td>其他方法</td>\\n<td><a href=\\"/blog/admin/Java/Java常用Api/IO流/字节流/写入/FileOutputStream类.md\\" target=\\"_blank\\">同 FileOutputStream</a></td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  BufferedOutputStream__html as comp,
  data
};
