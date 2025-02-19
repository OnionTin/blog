import{_ as n,o as s,c as a,e as t}from"./app-CilA4iky.js";const e={},c=t(`<h2 id="static" tabindex="-1"><a class="header-anchor" href="#static"><span>static</span></a></h2><p><code>共享成员、只能访问静态变量和方法、与实例对象无关、优先对象加载等问题</code></p><blockquote><p>static 是一个修饰符，代表静态的意思，用来修饰成员变量和成员方法的，不能修饰构造方法。</p></blockquote><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ol><li><p>被 static 修饰的成员变量和成员方法在内存中只有一个副本，被所有对象<code>共享</code>。</p></li><li><p>被 static 修饰的成员变量和成员方法<code>独立于该类的任何对象。也就是说，这些成员变量和成员方法与类的任何对象实例无关</code>，它们属于类本身，因此通过类名就可以访问它们。</p><p>类名.成员变量</p><p>类名.成员方法()</p></li><li><p>被 static 修饰的成员变量和成员方法随着字节码文件对象的加载而加载，所以是<code>优先于对象存在于内存中</code>。</p></li></ol><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3><ol><li><code>静态方法只能访问类的静态成员变量和静态方法，不能访问非静态成员变量和非静态方法</code></li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有问题</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有问题</span>
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[c];function o(i,l){return s(),a("div",null,p)}const d=n(e,[["render",o],["__file","static.html.vue"]]),k=JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/static.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"static","slug":"static","link":"#static","children":[{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"案例","slug":"案例","link":"#案例","children":[]}]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/static.md","excerpt":"<h2>static</h2>\\n<p><code>共享成员、只能访问静态变量和方法、与实例对象无关、优先对象加载等问题</code></p>\\n<blockquote>\\n<p>static 是一个修饰符，代表静态的意思，用来修饰成员变量和成员方法的，不能修饰构造方法。</p>\\n</blockquote>\\n<h3>特点</h3>\\n<ol>\\n<li>\\n<p>被 static 修饰的成员变量和成员方法在内存中只有一个副本，被所有对象<code>共享</code>。</p>\\n</li>\\n<li>\\n<p>被 static 修饰的成员变量和成员方法<code>独立于该类的任何对象。也就是说，这些成员变量和成员方法与类的任何对象实例无关</code>，它们属于类本身，因此通过类名就可以访问它们。</p>\\n<p>类名.成员变量</p>\\n<p>类名.成员方法()</p>\\n</li>\\n<li>\\n<p>被 static 修饰的成员变量和成员方法随着字节码文件对象的加载而加载，所以是<code>优先于对象存在于内存中</code>。</p>\\n</li>\\n</ol>"}');export{d as comp,k as data};
