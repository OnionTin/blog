import{_ as n,o as a,c as s,e}from"./app-C_RrakEG.js";const l={},t=e(`<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h3><ol><li>提高了代码的复用性</li><li>提高了代码的可读性和可维护性</li></ol><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h3><p>修饰符 返回值类型 方法名(数据类型 变量名, 数据类型 变量名, ...){ 执行的代码 return 返回值; }</p><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符"><span>修饰符</span></a></h3><ol><li>public 公共的，任何类都可以访问</li><li>private 私有的，只能在本类中访问</li><li>protected 受保护的，在本类，子类中可以访问</li><li>static 静态的，可以被类名调用，也可以被对象调用</li><li>abstract 抽象的，不能被实例化，只能被继承</li><li>final 最终的，不能被继承</li></ol><h3 id="返回值类型" tabindex="-1"><a class="header-anchor" href="#返回值类型"><span>返回值类型</span></a></h3><ol><li>void 没有返回值</li><li>基本数据类型 返回基本数据类型</li><li>引用数据类型 返回引用数据类型</li><li>返回自定义的数据类型</li></ol><h3 id="方法名" tabindex="-1"><a class="header-anchor" href="#方法名"><span>方法名</span></a></h3><ol><li>见名知意</li><li>驼峰命名法(首字母小写，后面每个单词首字母大写)</li></ol><h3 id="如何写一个方法" tabindex="-1"><a class="header-anchor" href="#如何写一个方法"><span>如何写一个方法</span></a></h3><ol><li>明确参数</li><li>明确返回值</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code> <span class="token comment">// 需求: 定义一个方法，能够计算两个数字的和</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方法时需要注意的问题" tabindex="-1"><a class="header-anchor" href="#使用方法时需要注意的问题"><span>使用方法时需要注意的问题</span></a></h3><ol><li>方法与方法之间是平级关系，不能嵌套定义</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 错误案例:</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> add <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>方法的返回值类型和返回值要匹配</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">double</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">10.0</span><span class="token punctuation">;</span>
  <span class="token comment">// return 10; 也可以</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 错误案例,编译报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>当没有返回值类型时，返回值类型为 void</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>void：没有什么特殊含义，只能写在返回值类型的位置上，表示没有返回值 返回值类型为 void，不要写 return 语句， 写了也不会报错但是可以省略且顺应 Java 语法规范</p></blockquote>`,22),i=[t];function p(c,o){return a(),s("div",null,i)}const r=n(l,[["render",p],["__file","方法.html.vue"]]),u=JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%96%B9%E6%B3%95.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":3,"title":"格式","slug":"格式","link":"#格式","children":[]},{"level":3,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[]},{"level":3,"title":"返回值类型","slug":"返回值类型","link":"#返回值类型","children":[]},{"level":3,"title":"方法名","slug":"方法名","link":"#方法名","children":[]},{"level":3,"title":"如何写一个方法","slug":"如何写一个方法","link":"#如何写一个方法","children":[]},{"level":3,"title":"使用方法时需要注意的问题","slug":"使用方法时需要注意的问题","link":"#使用方法时需要注意的问题","children":[]}]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/方法.md","excerpt":"<h2>方法</h2>\\n<h3>作用</h3>\\n<ol>\\n<li>提高了代码的复用性</li>\\n<li>提高了代码的可读性和可维护性</li>\\n</ol>\\n<h3>格式</h3>\\n<p>修饰符 返回值类型 方法名(数据类型 变量名, 数据类型 变量名, ...){\\n执行的代码\\nreturn 返回值;\\n}</p>\\n<h3>修饰符</h3>\\n<ol>\\n<li>public 公共的，任何类都可以访问</li>\\n<li>private 私有的，只能在本类中访问</li>\\n<li>protected 受保护的，在本类，子类中可以访问</li>\\n<li>static 静态的，可以被类名调用，也可以被对象调用</li>\\n<li>abstract 抽象的，不能被实例化，只能被继承</li>\\n<li>final 最终的，不能被继承</li>\\n</ol>"}');export{r as comp,u as data};
