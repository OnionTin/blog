<template><div><h2 id="注解的解析" tabindex="-1"><a class="header-anchor" href="#注解的解析"><span>注解的解析</span></a></h2>
<p>需要通过反射技术来获取注解中的属性的值</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>Annotation getAnnotation(注解的字节码文件对象)</td>
<td>获取注解对象</td>
</tr>
</tbody>
</table>
<ol>
<li>获取类上面的注解的属性值</li>
<li>获取方法上面的注解的属性值</li>
<li>获取字段上面的注解的属性值</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">ZhuJie</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetAnnoValue1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.api.ZhuJie.Aa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1. 使用反射技术获取类上面的注解的属性值： 张三、18</span>
        <span class="token comment">// 获取类上面的注解对象</span>
        <span class="token comment">// Annotation anno = clazz.getAnnotation(Anno.class);</span>
        <span class="token comment">// Annotation 是 Anno 注解的父类，所以可以向下转型</span>
        <span class="token class-name">Anno</span> anno1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Anno</span><span class="token punctuation">)</span> clazz<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Anno</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取属性值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>anno1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"没有注解"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> anno1<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> age <span class="token operator">=</span> anno1<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">"..."</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// 张三...18</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 2. 使用反射技术获取方法上面的注解的属性值： 李四、19</span>
        <span class="token comment">// 获取方法对象</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取方法上的注解对象</span>
        <span class="token class-name">Anno</span> anno2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Anno</span><span class="token punctuation">)</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Anno</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取属性值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>anno2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"没有注解"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> anno2<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> age <span class="token operator">=</span> anno2<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">"..."</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// 李四...18</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 3. 使用反射技术获取属性上面的注解的属性值： 王五、20</span>
        <span class="token comment">// 获取属性对象</span>
        <span class="token class-name">Field</span> field <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"haha"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取方法上的注解对象</span>
        <span class="token class-name">Anno</span> anno3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Anno</span><span class="token punctuation">)</span> field<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Anno</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取属性值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>anno3 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"没有注解"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> anno3<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> age <span class="token operator">=</span> anno3<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">"..."</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// 王五...20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Anno</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Aa</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Anno</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"王五"</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> haha<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Anno</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">Anno</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


