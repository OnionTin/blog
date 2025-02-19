<template><div><h2 id="string-字符串" tabindex="-1"><a class="header-anchor" href="#string-字符串"><span>String 字符串</span></a></h2>
<p>什么是 String？</p>
<ul>
<li>String 类用于表示和操作字符串。</li>
<li>String 类是 final 类型的，因此不能被继承。</li>
<li>字符串是常量，一旦被赋值，就不能被更改(长度不可以改变的字符序列)。</li>
</ul>
<p>String 是一个引用数据类型</p>
<p>是 jdk 给我们提供好的一个现成的 String 类</p>
<font color=red>"abc"既是一个字符串常量，又是一个字符串的对象(实例)</font><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>String()</td>
<td>初始化一个新创建的 String 对象，使其表示一个空字符序列。</td>
</tr>
<tr>
<td>public String(byte[] bytes)</td>
<td>将字节数组转成字符串</td>
</tr>
<tr>
<td>public String(byte[] bytes,int offset,int length)</td>
<td>将字节数的一部分组转成字符串</td>
</tr>
<tr>
<td>public String(char[] value)</td>
<td>分配一个新的 String，将字符数组转成字符串</td>
</tr>
<tr>
<td>public String(char[] value,int offset,int count)</td>
<td>将字符数组的一部分转成字符串</td>
</tr>
<tr>
<td>public String(String original)</td>
<td>初始化一个新的 String 对象，使其表示一个与参数相同的字符序列；换句话说，新创建的字符串是该参数字符串的副本。</td>
</tr>
<tr>
<td>String s = &quot;abc&quot;</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 需要注意长度的问题</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// public String(byte[] bytes)</span>
  <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bys1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bys1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: abcde</span>

  <span class="token comment">// public String(byte[] bytes,int offset,int length)</span>
  <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bys2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bys2<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: cde</span>

  <span class="token comment">// 报错 java.lang.StringIndexOutOfBoundsException: String index out of range: 5</span>
  <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bysError <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> strError <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bysError<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>strError<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>

  <span class="token comment">// public String(char[] value)</span>
  <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chs1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">'a'</span><span class="token punctuation">,</span> <span class="token char">'b'</span><span class="token punctuation">,</span> <span class="token char">'c'</span><span class="token punctuation">,</span> <span class="token char">'d'</span><span class="token punctuation">,</span> <span class="token char">'e'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chs1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: abcde</span>

  <span class="token comment">// public String(char[] value,int offset,int count)</span>
  <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chs2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">'a'</span><span class="token punctuation">,</span> <span class="token char">'b'</span><span class="token punctuation">,</span> <span class="token char">'c'</span><span class="token punctuation">,</span> <span class="token char">'d'</span><span class="token punctuation">,</span> <span class="token char">'e'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chs2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: abcd</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见的问题" tabindex="-1"><a class="header-anchor" href="#常见的问题"><span>常见的问题</span></a></h4>
<p>通过 new 出来的 String 对象和直接赋值出来的 String 对象有什么区别？</p>
<ul>
<li>new 出来的，在内存中有两个对象；new 出来的字符串对象是存放在堆中的。</li>
<li>直接赋值的对象在内存中只有一个对象；字符串是存在字符串常量池中的。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/images/String1.jpg" alt="String1"></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">"ab"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> s2 <span class="token operator">+</span> <span class="token string">"c"</span><span class="token punctuation">;</span> <span class="token comment">// 相当于s2 的副本再去加c，副本不是s2</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false 常量池是"ab "+ "c"；不是s2 + "c"</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/images/String2.jpg" alt="String2"></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">"ab"</span> <span class="token operator">+</span> <span class="token string">"c"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/images/String3.jpg" alt="String3"></p>
<h3 id="成员方法" tabindex="-1"><a class="header-anchor" href="#成员方法"><span>成员方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public char charAt(int index)</td>
<td>获取指定索引对应的字符</td>
</tr>
<tr>
<td>public int compareTo(String anotherString)</td>
<td>按字典顺序比较两个字符串</td>
</tr>
<tr>
<td>public String concat(String str)</td>
<td>字符串拼接</td>
</tr>
<tr>
<td>public String toLowerCase()</td>
<td>字符都转换为小写</td>
</tr>
<tr>
<td>public String toUpperCase</td>
<td>字符都转换为大写</td>
</tr>
<tr>
<td>public boolean equals(Object anObject)</td>
<td>比较两个字符串的内容是否一致</td>
</tr>
<tr>
<td>public boolean equalsIgnoreCase(String anotherString)</td>
<td>比较两个字符串的内容是否一致(不区分大小写)</td>
</tr>
<tr>
<td>public int lastIndexOf(int ch)</td>
<td>返回指定字符在此字符串中最后一次出现处的索引，找不到-1</td>
</tr>
<tr>
<td>public boolean isEmpty()</td>
<td>是否为空串</td>
</tr>
<tr>
<td>public int length()</td>
<td>返回此字符串的长度</td>
</tr>
<tr>
<td>public boolean startsWith(String prefix)</td>
<td>测试此字符串是否以指定的前缀开始</td>
</tr>
<tr>
<td>public boolean endsWith(String suffix)</td>
<td>测试此字符串是否以指定的后缀结束</td>
</tr>
<tr>
<td>public String replace(char oldChar,char newChar)</td>
<td>替换字符串，返回一个新的字符串</td>
</tr>
<tr>
<td>public byte[] getBytes()</td>
<td>将字符串转换成字节数组</td>
</tr>
<tr>
<td>public char[] toCharArray()</td>
<td>将此字符串转换为一个新的字符数组</td>
</tr>
<tr>
<td>public String trim()</td>
<td>去除空格，返回字符串的副本</td>
</tr>
<tr>
<td>public String substring(int beginIndex)</td>
<td>截取，从指定的索引到结尾</td>
</tr>
<tr>
<td>public String substring(int beginIndex,int endIndex)</td>
<td>截取，从指定的索引开始到指定的索引结束(包头不包尾)</td>
</tr>
<tr>
<td>public String[] split(String regex)</td>
<td>根据给定正则表达式的匹配拆分此字符串</td>
</tr>
<tr>
<td>public String replace(String target,String replacement)</td>
<td>替换子字符串</td>
</tr>
</tbody>
</table>
</div></template>


