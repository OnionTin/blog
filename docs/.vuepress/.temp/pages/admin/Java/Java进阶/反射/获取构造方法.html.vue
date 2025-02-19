<template><div><h2 id="获取构造方法" tabindex="-1"><a class="header-anchor" href="#获取构造方法"><span>获取构造方法</span></a></h2>
<h3 id="如何获取构造方法的对象" tabindex="-1"><a class="header-anchor" href="#如何获取构造方法的对象"><span>如何获取构造方法的对象</span></a></h3>
<p>获取<font color=red>public</font> 修饰的构造方法对象</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes)</td>
<td>获取单个 public 修饰的构造方法对象</td>
</tr>
<tr>
<td>public Constructor&lt;T&gt;[] getConstructors()</td>
<td>获取所有 public 修饰的构造方法对象</td>
</tr>
</tbody>
</table>
<p>获取<font color=red>忽略修饰符</font>的构造方法对象</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public Constructor&lt;T&gt; getDeclaredConstructor(Class&lt;?&gt;... parameterTypes)</td>
<td>获取单个构造方法对象</td>
</tr>
<tr>
<td>public Constructor&lt;T&gt;[] getDeclaredConstructors()</td>
<td>获取所有构造方法对象</td>
</tr>
</tbody>
</table>
<h3 id="构造方法类对象中的方法" tabindex="-1"><a class="header-anchor" href="#构造方法类对象中的方法"><span>构造方法类对象中的方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public T newInstance(Object... initargs)</td>
<td>创建一个类的实例</td>
</tr>
<tr>
<td>public void setAccessible(boolean flag)</td>
<td>取消 java 语言的访问检查；暴力反射；(true：不校验，false：校验)</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// public 修饰符的案例</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo03</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.api.Reflex.Student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1. public Constructor&lt;T> getConstructor(Class&lt;?>... parameterTypes)</span>

        <span class="token comment">// 获取空参构造方法对象</span>
        <span class="token class-name">Constructor</span> c1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例对象</span>
        <span class="token class-name">Object</span> obj1 <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例对象并向下转型</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> c1<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取有一个String类型的参数的构造方法对象</span>
        <span class="token class-name">Constructor</span> c2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj2 <span class="token operator">=</span> c2<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> c2<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取有一个int类型的参数的构造方法对象</span>
        <span class="token class-name">Constructor</span> c3 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj3 <span class="token operator">=</span> c3<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> c3<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取有2个参数的构造方法对象</span>
        <span class="token class-name">Constructor</span> c4<span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj4 <span class="token operator">=</span> c4<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s4 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> c4<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. public Constructor&lt;T>[] getDeclaredConstructors()</span>
        <span class="token comment">// 获取所有的公共的构造方法对象(只有公共的，public)</span>
        <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Constructor</span> c<span class="token operator">:</span> constructors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// public com.api.Reflex.Student(java.lang.String,int)</span>
            <span class="token comment">// public com.api.Reflex.Student(int)</span>
            <span class="token comment">// public com.api.Reflex.Student(java.lang.String)</span>
            <span class="token comment">// public com.api.Reflex.Student()</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 忽略修饰符的案例(暴力反射)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo04</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.api.Reflex.Teacher"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1. public Constructor&lt;T> getDeclaredConstructor(Class&lt;?>... parameterTypes)</span>

        <span class="token comment">// 获取空参构造方法对象</span>
        <span class="token class-name">Constructor</span> c1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
         * setAccessible: true
         * 私有构造不能创建实例，加上setAccessible就可以了
         * 解除了java语言的访问权限检查
         * 暴力反射
         */</span>
        c1<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例对象</span>
        <span class="token class-name">Object</span> obj1 <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例对象并向下转型</span>
        <span class="token class-name">Teacher</span> s1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Teacher</span><span class="token punctuation">)</span> c1<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取有一个String类型的参数的构造方法对象</span>
        <span class="token class-name">Constructor</span> c2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj2 <span class="token operator">=</span> c2<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Teacher</span> s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Teacher</span><span class="token punctuation">)</span> c2<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取有一个int类型的参数的构造方法对象</span>
        <span class="token class-name">Constructor</span> c3 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj3 <span class="token operator">=</span> c3<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Teacher</span> s3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Teacher</span><span class="token punctuation">)</span> c3<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取有2个参数的构造方法对象</span>
        <span class="token class-name">Constructor</span> c4<span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj4 <span class="token operator">=</span> c4<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Teacher</span> s4 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Teacher</span><span class="token punctuation">)</span> c4<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. public Constructor&lt;T>[] getDeclaredConstructors()</span>
        <span class="token comment">// 获取所有的构造方法对象(所有的，包括私有的等)</span>
        <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Constructor</span> c<span class="token operator">:</span> constructors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// public com.api.Reflex.Teacher(java.lang.String,int)</span>
            <span class="token comment">// protected com.api.Reflex.Teacher(int)</span>
            <span class="token comment">// com.api.Reflex.Teacher(java.lang.String)</span>
            <span class="token comment">// private com.api.Reflex.Teacher()</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Teacher</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Teacher{"</span> <span class="token operator">+</span>
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


