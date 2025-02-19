<template><div><h2 id="treemap-实现类" tabindex="-1"><a class="header-anchor" href="#treemap-实现类"><span>TreeMap 实现类</span></a></h2>
<p>和<RouteLink active to="/admin/Java/Java常用Api/双列集合Map/Map接口.md">Map</RouteLink>很相似，除了<font color=red>可以排序</font>，其他基本一样；
双列集合；需要导包，在 java.util 下； TreeMap 是实现类。</p>
<h3 id="treemap-集合的特性" tabindex="-1"><a class="header-anchor" href="#treemap-集合的特性"><span>TreeMap 集合的特性</span></a></h3>
<ol>
<li>
<font color = red>无序性</font></li>
<li>
<font color = red>无索引</font></li>
<li>
<font color = red>元素唯一(键唯一，值不唯一)</font></li>
<li>
<font color = red>双列的</font></li>
<li>
<font color = red>可以排序的(根据键来排序)</font></li>
</ol>
<p><img src="@source/admin/images/Map特性.jpg" alt="Map特性"></p>
<h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h3>
<p>红黑树，<RouteLink active to="/admin/Java/Java常用Api/单例集合Collection/Set/TreeSet实现类.md">TreeSet</RouteLink> 的底层就是 TreeMap。</p>
<h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>V put(K key, V value)</td>
<td>添加元素，返回添加之前的值；修改元素，返回被修改之前的值</td>
</tr>
<tr>
<td>V remove(Object key)</td>
<td>根据键来删除元素，返回被删除的元素的值</td>
</tr>
<tr>
<td>int size()</td>
<td>获取长度</td>
</tr>
<tr>
<td>void clear()</td>
<td>清空</td>
</tr>
<tr>
<td>V get(Object key)</td>
<td>根据键来获取值</td>
</tr>
<tr>
<td>boolean containsKey(Object key)</td>
<td>判断是否包含，键为给定的内容，的元素</td>
</tr>
<tr>
<td>boolean containsValue(Object value)</td>
<td>判断是否包含，值为给定的内容，的元素</td>
</tr>
<tr>
<td><code v-pre>Set&lt;K&gt; keySet()</code></td>
<td>获取所有的键，并用 Set 集合接收</td>
</tr>
<tr>
<td><code v-pre>Collection&lt;V&gt; values()</code></td>
<td>获取所有的值，并用 Collection(或其他结合) 集合接收</td>
</tr>
<tr>
<td><code v-pre>Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()</code></td>
<td>获取所有的键值对，并用 Set 结合接收</td>
</tr>
</tbody>
</table>
<h3 id="treemap-集合的遍历" tabindex="-1"><a class="header-anchor" href="#treemap-集合的遍历"><span>TreeMap 集合的遍历</span></a></h3>
<ol>
<li>键找值遍历</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Set</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> keys <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> keys<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 李四:20</span>
        <span class="token comment">// 张三:18</span>
        <span class="token comment">// 王五:22</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>键值对获取键合值</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span><span class="token punctuation">></span></span> entrySet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> entry <span class="token operator">:</span> entrySet<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 李四:20</span>
        <span class="token comment">// 张三:18</span>
        <span class="token comment">// 王五:22</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token class-name">Entry</span></span><span class="token punctuation">;</span> <span class="token comment">// 内部类的用法，需要导包</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span><span class="token punctuation">></span></span> entrySet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> entry <span class="token operator">:</span> entrySet<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 李四:20</span>
        <span class="token comment">// 张三:18</span>
        <span class="token comment">// 王五:22</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序-和treeset一样-自然排序、比较器" tabindex="-1"><a class="header-anchor" href="#排序-和treeset一样-自然排序、比较器"><span>排序(和<RouteLink active to="/admin/Java/Java常用Api/单例集合Collection/Set/TreeSet实现类.md">TreeSet</RouteLink>一样，自然排序、比较器)</span></a></h3>
<h3 id="方法的应用" tabindex="-1"><a class="header-anchor" href="#方法的应用"><span>方法的应用</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TreeMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token class-name">Entry</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoTreeMap</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Student</span><span class="token punctuation">></span></span> tm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Student</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"9527"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"9530"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Jerry"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"9526"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Rose"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"9531"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Nose"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"9525"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Fore"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> keys <span class="token operator">=</span> tm<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> tm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：根据键值，进行了排序</span>
            <span class="token comment">// 9525:Student{name='Fore', age=18}</span>
            <span class="token comment">// 9526:Student{name='Rose', age=18}</span>
            <span class="token comment">// 9527:Student{name='Tom', age=18}</span>
            <span class="token comment">// 9530:Student{name='Jerry', age=18}</span>
            <span class="token comment">// 9531:Student{name='Nose', age=18}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> tm2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
          <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o1<span class="token punctuation">,</span> <span class="token class-name">Student</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> o1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> o2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> ii <span class="token operator">=</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> o1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
                <span class="token keyword">return</span> ii<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"9527"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Jerry"</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"9530"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Rose"</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"9526"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Nose"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"9531"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tm2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"9525"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> sets <span class="token operator">=</span> tm2<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> entry <span class="token operator">:</span> sets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// Student{name='Rose', age=16}:9526</span>
            <span class="token comment">// Student{name='Jerry', age=17}:9530</span>
            <span class="token comment">// Student{name='Tom', age=18}:9525</span>
            <span class="token comment">// Student{name='Nose', age=20}:9531</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Student{"</span> <span class="token operator">+</span>
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//class Student implements Comparable&lt;Student>{</span>
<span class="token comment">//    private String name;</span>
<span class="token comment">//    private int age;</span>
<span class="token comment">//</span>
<span class="token comment">//    public Student(String name, int age) {</span>
<span class="token comment">//        this.name = name;</span>
<span class="token comment">//        this.age = age;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public String getName() {</span>
<span class="token comment">//        return name;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public void setName(String name) {</span>
<span class="token comment">//        this.name = name;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public int getAge() {</span>
<span class="token comment">//        return age;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    public void setAge(int age) {</span>
<span class="token comment">//        this.age = age;</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    @Override</span>
<span class="token comment">//    public String toString() {</span>
<span class="token comment">//        return "Student{" +</span>
<span class="token comment">//                "name='" + name + '\'' +</span>
<span class="token comment">//                ", age=" + age +</span>
<span class="token comment">//                '}';</span>
<span class="token comment">//    }</span>
<span class="token comment">//    @Override</span>
<span class="token comment">//    public int compareTo(Student o) {</span>
<span class="token comment">//        int i = this.age - o.age;</span>
<span class="token comment">//        int ii = i == 0 ? this.name.compareTo(o.name) : i;</span>
<span class="token comment">//        return ii;</span>
<span class="token comment">//    }</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


