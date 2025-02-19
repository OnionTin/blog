import{_ as n,o as s,c as a,e as t}from"./app-CvP7wor-.js";const e={},p=t(`<h2 id="注解概述" tabindex="-1"><a class="header-anchor" href="#注解概述"><span>注解概述</span></a></h2><blockquote><p>用来解释说明的，注解也叫元数据。</p><p>注释是给人看的，注解是给程序看的。</p></blockquote><h3 id="注解的作用" tabindex="-1"><a class="header-anchor" href="#注解的作用"><span>注解的作用</span></a></h3><ol><li>生成文档：可以使用 javadoc 工具编译 java 文件，使其根据注解生成 java 参考帮助文档。</li><li>编译检查：通过代码里标识的元数据让编译器能够实现基本的编译检查【Override】</li><li>代码分析：通过代码里标识的元数据对代码进行分析【使用反射】</li><li>实现配置文件功能：相当于配置文件</li></ol><h3 id="注解分类" tabindex="-1"><a class="header-anchor" href="#注解分类"><span>注解分类</span></a></h3><p>预定义注解：给的注解</p><table><thead><tr><th>注解</th><th>作用</th></tr></thead><tbody><tr><td>@Override</td><td>继承自类或接口中的方法重写</td></tr><tr><td>@Deprecated</td><td>表示该方法已经过时</td></tr><tr><td>@SuppressWarnings(&quot;all&quot;)</td><td>压制警告(黄线)；一般都会设置参数为 &quot;all&quot;</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Fu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Zi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token annotation punctuation">@Deprecated</span>
  <span class="token function">print1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这个方法仍然可以使用，只是过时了，不建议使用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// @SuppressWarnings(&quot;all&quot;);</span>
    <span class="token comment">// 可以在此处压制警告，但是在类上更好一些</span>
    <span class="token comment">// 为何警告？：因为定义了没有被使用</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token class-name">ArrayList</span> al <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Zi</span> z <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    z<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    z<span class="token punctuation">.</span><span class="token function">print1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义注解：自己定义的注解</p><h3 id="注解使用时的位置" tabindex="-1"><a class="header-anchor" href="#注解使用时的位置"><span>注解使用时的位置</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 类：</span>
@注解名字
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tools</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 成员方法：</span>
@注解名字
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>


<span class="token comment">// 成员变量：</span>
@注解名字
<span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

<span class="token comment">// 参数：</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span>@注解名字 <span class="token keyword">int</span> i<span class="token punctuation">,</span> @注解名字 <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 构造方法：</span>
@注解名字
<span class="token keyword">public</span> <span class="token class-name">Tools</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
等等等<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[p];function c(i,o){return s(),a("div",null,l)}const d=n(e,[["render",c],["__file","注解概述.html.vue"]]),r=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E6%B3%A8%E8%A7%A3%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"注解概述","slug":"注解概述","link":"#注解概述","children":[{"level":3,"title":"注解的作用","slug":"注解的作用","link":"#注解的作用","children":[]},{"level":3,"title":"注解分类","slug":"注解分类","link":"#注解分类","children":[]},{"level":3,"title":"注解使用时的位置","slug":"注解使用时的位置","link":"#注解使用时的位置","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/注解/注解概述.md","excerpt":"<h2>注解概述</h2>\\n<blockquote>\\n<p>用来解释说明的，注解也叫元数据。</p>\\n<p>注释是给人看的，注解是给程序看的。</p>\\n</blockquote>\\n<h3>注解的作用</h3>\\n<ol>\\n<li>生成文档：可以使用 javadoc 工具编译 java 文件，使其根据注解生成 java 参考帮助文档。</li>\\n<li>编译检查：通过代码里标识的元数据让编译器能够实现基本的编译检查【Override】</li>\\n<li>代码分析：通过代码里标识的元数据对代码进行分析【使用反射】</li>\\n<li>实现配置文件功能：相当于配置文件</li>\\n</ol>\\n<h3>注解分类</h3>"}');export{d as comp,r as data};
