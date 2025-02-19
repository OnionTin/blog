import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="fileoutputstream-类-md" tabindex="-1"><a class="header-anchor" href="#fileoutputstream-类-md"><span>FileOutputStream 类.md</span></a></h2><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public FileOutputStream(File file)</td><td>将输出流写到给定 File 对象的文件中</td></tr><tr><td>public FileOutputStream(String name)</td><td>作用同上，区别先去创建一个文件对象</td></tr><tr><td>public FileOutputStream(String name, Boolean append)</td><td>目的同上，但是与上边两个不同点是可以控制是否`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`追加`);
      } else {
        return [
          createTextVNode("追加")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public void write(int b)</td><td>在文件中写<code>一个字节大小</code>的数据</td></tr><tr><td>public void write(byte[] b)</td><td>将一个字节数组写到文件中</td></tr><tr><td>public void write(byte[] b,int off,int len)</td><td>将字节数组的一部分写到文件中，从 off 位置开始，写入 len 个</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZiJieOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoFileOutputStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// aaa目录对象</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建aaa目录对象</span>
        <span class="token keyword">boolean</span> isFolderAaa <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// aaa.txt文件对象</span>
        <span class="token class-name">File</span> file1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;aaa.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建aaa.txt文件</span>
        <span class="token keyword">boolean</span> isTxtAaa <span class="token operator">=</span> file1<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// bbb.txt文件对象</span>
        <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token string">&quot;bbb.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 在aaa目录下创建bbb.txt文件</span>
        <span class="token keyword">boolean</span> isTxtBbb <span class="token operator">=</span> file2<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 在aaa.txt文件中写入一个字节长度的内容</span>
        <span class="token comment">// public FileOutputStream(File file)</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// public void write(int b)</span>
        fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在文件中是一个字符长度的二进制乱码 </span>
        fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在文件中表现为a</span>
        <span class="token comment">// 两个添加执行完成后文件中内容为a</span>
        <span class="token comment">// 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容</span>

        <span class="token comment">// 在bbb.txt文件中写入一个字节数组，或者说多个字节的内容</span>
        <span class="token comment">// public void write(byte[] b)</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fosb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        fosb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 文件中内容为 abcdefghi</span>
        fosb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 文件中内容为 cde</span>
        <span class="token comment">// 两个方法执行完成后文件中内容为abcdefghcde</span>
        <span class="token comment">// 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两个小问题" tabindex="-1"><a class="header-anchor" href="#两个小问题"><span>两个小问题</span></a></h3><ol><li>如何换行？</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>换行符：
windows：\\r\\n
linux：\\n
mac：\\r

FileOutputStream fosb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;aaa.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
 * write(byte[] b)
 * getBytes: 将字符串转换为字节数组
*/</span>
fosb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>如何追加？</p><p>正常情况下每次运行程序，文件都会被清空，如果想要追加，需要使用第三个构造方法，并且需要传入一个布尔值，传入 true 表示追加，传入 false 表示覆盖；默认是 false。</p></li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// public FileOutputStream(String name, Boolean append)</span>
<span class="token class-name">FileOutputStream</span> fosb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file2<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/IO流/字节流/输出/FileOutputStream类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FileOutputStream__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "FileOutputStream类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E8%BE%93%E5%87%BA/FileOutputStream%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"FileOutputStream 类.md","slug":"fileoutputstream-类-md","link":"#fileoutputstream-类-md","children":[{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]},{"level":3,"title":"两个小问题","slug":"两个小问题","link":"#两个小问题","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/IO流/字节流/输出/FileOutputStream类.md","excerpt":"<h2>FileOutputStream 类.md</h2>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public FileOutputStream(File file)</td>\\n<td>将输出流写到给定 File 对象的文件中</td>\\n</tr>\\n<tr>\\n<td>public FileOutputStream(String name)</td>\\n<td>作用同上，区别先去创建一个文件对象</td>\\n</tr>\\n<tr>\\n<td>public FileOutputStream(String name, Boolean append)</td>\\n<td>目的同上，但是与上边两个不同点是可以控制是否</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  FileOutputStream__html as comp,
  data
};
