<template><div><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h2>
<p>什么是递归？</p>
<p>一个方法的的内部又调用了这个方法本身，这就是递归。</p>
<h3 id="递归的注意事项" tabindex="-1"><a class="header-anchor" href="#递归的注意事项"><span>递归的注意事项</span></a></h3>
<ol>
<li>
<p>递归的次数不能太多，否则会造成内存泄露，即内存溢出异常。</p>
</li>
<li>
<p>递归必须要有<font color=red>结束条件</font>，否则死循环还会内存溢出。</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token constant">IO</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoDiGui</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 求5的阶乘</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">getJieCheng</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 120</span>

        <span class="token comment">// i不能太大，太大超出返回值int的范围，因为是int，所以会返回0</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token function">getJieCheng</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0</span>

        <span class="token comment">// 求一个未知数N的阶乘</span>
        <span class="token keyword">int</span> num3 <span class="token operator">=</span> <span class="token function">getJieCheng2</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 24</span>

        <span class="token comment">// 1 1 2 3 5 8，根据规律，写出方法求第N个数是什么</span>
        <span class="token keyword">int</span> num4 <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 3</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getJieCheng</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> i<span class="token operator">*</span><span class="token function">getJieCheng</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getJieCheng2</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> n<span class="token operator">*</span><span class="token function">getJieCheng2</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/images/递归.jpg" alt="递归"></p>
</div></template>


