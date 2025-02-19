import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="outputstreamwriter-类" tabindex="-1"><a class="header-anchor" href="#outputstreamwriter-类"><span>OutputStreamWriter 类</span></a></h2><blockquote><p>转换流可以将字节流转换成字符流</p></blockquote><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public OutputStreamWriter(OutputStream out)</td><td>创建一个使用默认字符编码的 OutputStreamWriter</td></tr><tr><td>public OutputStreamWriter(OutputStream out, String charsetName)</td><td>创建一个使用命名字符编码的 OutputStreamWriter</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>方法</td><td>`);
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
  _push(`</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZhuanhuanOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStreamWriter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OutputStreamWriter01</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
    <span class="token comment">// public OutputStreamWriter(OutputStream out)</span>
    <span class="token comment">/*
    FileOutputStream fos = new FileOutputStream(&quot;aaa/111.txt&quot;);
    OutputStreamWriter osw = new OutputStreamWriter(fos);
    */</span>
    <span class="token class-name">OutputStreamWriter</span> osw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;aaa/111.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/IO流/转换流/输出/OutputStreamWriter类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OutputStreamWriter__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "OutputStreamWriter类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E8%BD%AC%E6%8D%A2%E6%B5%81/%E8%BE%93%E5%87%BA/OutputStreamWriter%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"OutputStreamWriter 类","slug":"outputstreamwriter-类","link":"#outputstreamwriter-类","children":[{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/IO流/转换流/输出/OutputStreamWriter类.md","excerpt":"<h2>OutputStreamWriter 类</h2>\\n<blockquote>\\n<p>转换流可以将字节流转换成字符流</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public OutputStreamWriter(OutputStream out)</td>\\n<td>创建一个使用默认字符编码的 OutputStreamWriter</td>\\n</tr>\\n<tr>\\n<td>public OutputStreamWriter(OutputStream out, String charsetName)</td>\\n<td>创建一个使用命名字符编码的 OutputStreamWriter</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  OutputStreamWriter__html as comp,
  data
};
