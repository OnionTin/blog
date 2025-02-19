import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="bufferedwriter-类" tabindex="-1"><a class="header-anchor" href="#bufferedwriter-类"><span>BufferedWriter 类</span></a></h2><blockquote><p>缓冲字符输出流、有缓冲区、高效</p></blockquote><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public BufferedWriter(Writer out)</td><td>将输出流写到给定 File 对象的文件</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public void close</td><td>释放资源，同时自带刷新缓冲区的功能</td></tr><tr><td>其他方法</td><td>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/IO流/字符流/输出/FileWriter类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`同 FileWriter`);
      } else {
        return [
          createTextVNode("同 FileWriter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZiFuOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileWriter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BufferedWriter01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">/*
        FileWriter fw = new FileWriter(&quot;aaa/222.txt&quot;);
        BufferedWriter bw = new BufferedWriter(fw);
        */</span>
        <span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;aaa/222.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特有的成员方法" tabindex="-1"><a class="header-anchor" href="#特有的成员方法"><span>特有的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public void newLine()</td><td>换行(不用考虑系统，自动切换；&quot;\\r\\n&quot;换行时要考虑系统)</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZiFuOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileWriter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BufferedNewLine</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// public void newLine()：相当于换行符</span>
        <span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;aaa/444.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;都到这行了!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bw<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/IO流/字符流/输出/BufferedWriter类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BufferedWriter__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "BufferedWriter类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E7%AC%A6%E6%B5%81/%E8%BE%93%E5%87%BA/BufferedWriter%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"BufferedWriter 类","slug":"bufferedwriter-类","link":"#bufferedwriter-类","children":[{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]},{"level":3,"title":"特有的成员方法","slug":"特有的成员方法","link":"#特有的成员方法","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/IO流/字符流/输出/BufferedWriter类.md","excerpt":"<h2>BufferedWriter 类</h2>\\n<blockquote>\\n<p>缓冲字符输出流、有缓冲区、高效</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public BufferedWriter(Writer out)</td>\\n<td>将输出流写到给定 File 对象的文件</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public void close</td>\\n<td>释放资源，同时自带刷新缓冲区的功能</td>\\n</tr>\\n<tr>\\n<td>其他方法</td>\\n<td><a href=\\"/blog/admin/Java/Java常用Api/IO流/字符流/输出/FileWriter类.md\\" target=\\"_blank\\">同 FileWriter</a></td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  BufferedWriter__html as comp,
  data
};
