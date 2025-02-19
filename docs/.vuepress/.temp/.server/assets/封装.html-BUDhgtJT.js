import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/封装-yDaBXirQ.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h2><blockquote><p>封装是指隐藏对象的属性和实现细节，仅对外提供公共的访问方式。</p><p>隐藏对象的属性，只需要在属性定义的前面加上一个关键字 super 即可。</p><p>对外提供公共的访问方式，就是在类中写上几个 setXXX(...)和 getXXX()即可。</p></blockquote><h3 id="private-关键字" tabindex="-1"><a class="header-anchor" href="#private-关键字"><span>private 关键字</span></a></h3><ul><li>什么是 private 关键字 private 是一个修饰符，代表私有的意思，可以修饰成员变量和成员方法以及构造函数</li><li>private 关键字的特点 被 private 关键字修饰的成员变量和成员方法不能在本类中使用，不能在其他类中使用</li><li>private 关键字怎么用</li></ul><h3 id="举例" tabindex="-1"><a class="header-anchor" href="#举例"><span>举例</span></a></h3><blockquote><p><code>this</code>代表对象的引用，哪个对象调用 this 所在的方法，this 就代表哪个对象</p><p><code>this</code>可以解决局部变量隐藏成员变量的问题</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name  <span class="token operator">=</span> n<span class="token punctuation">;</span> <span class="token comment">// this可以解决局部变量隐藏成员变量的问题</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age  <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">String</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex  <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="图解"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java基础/封装.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "封装.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%B0%81%E8%A3%85.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"封装","slug":"封装","link":"#封装","children":[{"level":3,"title":"private 关键字","slug":"private-关键字","link":"#private-关键字","children":[]},{"level":3,"title":"举例","slug":"举例","link":"#举例","children":[]}]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/封装.md","excerpt":"<h2>封装</h2>\\n<blockquote>\\n<p>封装是指隐藏对象的属性和实现细节，仅对外提供公共的访问方式。</p>\\n<p>隐藏对象的属性，只需要在属性定义的前面加上一个关键字 super 即可。</p>\\n<p>对外提供公共的访问方式，就是在类中写上几个 setXXX(...)和 getXXX()即可。</p>\\n</blockquote>\\n<h3>private 关键字</h3>\\n<ul>\\n<li>什么是 private 关键字\\nprivate 是一个修饰符，代表私有的意思，可以修饰成员变量和成员方法以及构造函数</li>\\n<li>private 关键字的特点\\n被 private 关键字修饰的成员变量和成员方法不能在本类中使用，不能在其他类中使用</li>\\n<li>private 关键字怎么用</li>\\n</ul>"}');
export {
  ___html as comp,
  data
};
