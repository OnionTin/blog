import{_ as n,o as s,c as a,e as p}from"./app-CnclWRTO.js";const t={},o=p(`<h2 id="comparable-自然排序" tabindex="-1"><a class="header-anchor" href="#comparable-自然排序"><span>Comparable 自然排序</span></a></h2><blockquote><p>一堆学生，只有姓名和年龄，</p><p>先根据年龄从小到大排序，</p><p>如果年龄相同，则按照字典顺序从小到大排序，</p><p>同龄的学生中没有同名的。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Set</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TreeSet</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoComparable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> ts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Rose&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Tina&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Rose&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Person</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">-</span> o<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
        <span class="token keyword">return</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 输出结果：
 * [Person<span class="token punctuation">{</span>name=&#39;Tina&#39;, age=18<span class="token punctuation">}</span>, Person<span class="token punctuation">{</span>name=&#39;Jack&#39;, age=19<span class="token punctuation">}</span>,
 * Person<span class="token punctuation">{</span>name=&#39;Rose&#39;, age=19<span class="token punctuation">}</span>, *Person<span class="token punctuation">{</span>name=&#39;Jerry&#39;, age=20<span class="token punctuation">}</span>,
 * Person<span class="token punctuation">{</span>name=&#39;Tom&#39;, age=20<span class="token punctuation">}</span>]
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","Comparable自然排序.html.vue"]]),r=JSON.parse(`{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/Comparable%E8%87%AA%E7%84%B6%E6%8E%92%E5%BA%8F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Comparable 自然排序","slug":"comparable-自然排序","link":"#comparable-自然排序","children":[]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/Set/Comparable自然排序.md","excerpt":"<h2>Comparable 自然排序</h2>\\n<blockquote>\\n<p>一堆学生，只有姓名和年龄，</p>\\n<p>先根据年龄从小到大排序，</p>\\n<p>如果年龄相同，则按照字典顺序从小到大排序，</p>\\n<p>同龄的学生中没有同名的。</p>\\n</blockquote>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">com<span class=\\"token punctuation\\">.</span>wuziqi<span class=\\"token punctuation\\">.</span>gobang<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">Set</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>util<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">TreeSet</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">DemoComparable</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">TreeSet</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">&gt;</span></span> ts <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">TreeSet</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        ts<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Tom\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        ts<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Rose\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">19</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        ts<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Jerry\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        ts<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Jack\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">19</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        ts<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Tina\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        ts<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Rose\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">19</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>ts<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Person</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Comparable</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> age<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> age<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age <span class=\\"token operator\\">=</span> age<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"Person{\\"</span> <span class=\\"token operator\\">+</span>\\n                <span class=\\"token string\\">\\"name='\\"</span> <span class=\\"token operator\\">+</span> name <span class=\\"token operator\\">+</span> <span class=\\"token char\\">'\\\\''</span> <span class=\\"token operator\\">+</span>\\n                <span class=\\"token string\\">\\", age=\\"</span> <span class=\\"token operator\\">+</span> age <span class=\\"token operator\\">+</span>\\n                <span class=\\"token char\\">'}'</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">compareTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Person</span> o<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age <span class=\\"token operator\\">-</span> o<span class=\\"token punctuation\\">.</span>age<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> i <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">?</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">compareTo</span><span class=\\"token punctuation\\">(</span>o<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">:</span> i<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token doc-comment comment\\">/**\\n * 输出结果：\\n * [Person<span class=\\"token punctuation\\">{</span>name='Tina', age=18<span class=\\"token punctuation\\">}</span>, Person<span class=\\"token punctuation\\">{</span>name='Jack', age=19<span class=\\"token punctuation\\">}</span>,\\n * Person<span class=\\"token punctuation\\">{</span>name='Rose', age=19<span class=\\"token punctuation\\">}</span>, *Person<span class=\\"token punctuation\\">{</span>name='Jerry', age=20<span class=\\"token punctuation\\">}</span>,\\n * Person<span class=\\"token punctuation\\">{</span>name='Tom', age=20<span class=\\"token punctuation\\">}</span>]\\n */</span>\\n</code></pre></div>"}`);export{k as comp,r as data};
