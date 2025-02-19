import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="super" tabindex="-1"><a class="header-anchor" href="#super"><span>super</span></a></h2><p><code>super指向父类、this指向本类</code></p><p><code>构造方法中第一行要么this(参数)要么super(参数)，但不共存</code></p><p><code>至少有一个构造方法中调用super()</code></p><blockquote><p>super 是父类内存空间的标记，在用法上，我们可以当作父类对象的引用来使用，但是我们不能说</p><p>super 就是父类对象的引用</p></blockquote><h3 id="super-关键字和-this-关键字的区别" tabindex="-1"><a class="header-anchor" href="#super-关键字和-this-关键字的区别"><span>super 关键字和 this 关键字的区别</span></a></h3><ol><li><code>调用构造方法</code></li></ol><ul><li>super() <ul><li>调用父类的构造方法</li></ul></li><li>this() <ul><li>调用本类的构造方法</li></ul></li></ul><ol start="2"><li><code>调用成员方法</code></li></ol><ul><li>super.方法名() <ul><li>调用父类中的成员方法</li></ul></li><li>this.方法名() <ul><li>调用本类中的成员方法</li></ul></li></ul><ol start="3"><li><code>调用成员变量</code></li></ol><ul><li>super.变量名 <ul><li>调用父类中的成员变量</li></ul></li><li>this.变量名 <ul><li>调用本类中的成员变量</li></ul></li></ul><h3 id="具体说明-super-和-this" tabindex="-1"><a class="header-anchor" href="#具体说明-super-和-this"><span>具体说明 super 和 this</span></a></h3><ol><li>子类中的所有的构造方法的第一行，<code>默认</code>都有一个<code>super()</code>。</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 因为有继承，说明子类可以使用父类的成员变量，那也就意味着父类的成员变量一定要有一直</span>

<span class="token comment">// 才可以被使用，所以在创建类对象的时候，会调用子类的构造方法，而子类的构造方法中会先</span>

<span class="token comment">// 去调用父类的构造方法，目的就是给父类的额成员变量默认初始化</span>
<span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">Fu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 父类默认有一个无参构造</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Fu的无参构造&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认调用父类的无参构造</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认调用父类的无参构造</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认调用父类的无参构造</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认调用父类的无参构造</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Zi</span> zi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>zi<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>子类中的所有<code>构造方法</code>中， 第一行要么是 super(参数)，要么是 this(参数)，他们不能同时存在。</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">Fu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// this(); // 错误，super和this不能同时存在</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确的，因为调用了上面的有参构造</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>子类中的所有的构造方法中<code>至少有一个</code>构造方法里面调用的是 super(参数)，如果没有显式的调用 super(参数)，则默认调用 super()。</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// super();</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Zi</span> zi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java基础/super.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const super_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "super.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/super.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"super","slug":"super","link":"#super","children":[{"level":3,"title":"super 关键字和 this 关键字的区别","slug":"super-关键字和-this-关键字的区别","link":"#super-关键字和-this-关键字的区别","children":[]},{"level":3,"title":"具体说明 super 和 this","slug":"具体说明-super-和-this","link":"#具体说明-super-和-this","children":[]}]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/super.md","excerpt":"<h2>super</h2>\\n<p><code>super指向父类、this指向本类</code></p>\\n<p><code>构造方法中第一行要么this(参数)要么super(参数)，但不共存</code></p>\\n<p><code>至少有一个构造方法中调用super()</code></p>\\n<blockquote>\\n<p>super 是父类内存空间的标记，在用法上，我们可以当作父类对象的引用来使用，但是我们不能说</p>\\n<p>super 就是父类对象的引用</p>\\n</blockquote>\\n<h3>super 关键字和 this 关键字的区别</h3>\\n<ol>\\n<li><code>调用构造方法</code></li>\\n</ol>"}');
export {
  super_html as comp,
  data
};
