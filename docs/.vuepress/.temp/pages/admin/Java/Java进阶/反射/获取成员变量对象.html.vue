<template><div><h2 id="获取成员变量对象" tabindex="-1"><a class="header-anchor" href="#获取成员变量对象"><span>获取成员变量对象</span></a></h2>
<p>成员变量对象的访问权限相关的要求，与<RouteLink to="/admin/Java/Java进阶/反射/获取构造方法.md">构造方法对象</RouteLink>的访问权限相关的要求相同，都涉及到<font color=red>暴力反射</font>相关内容。</p>
<h3 id="如何成员变量的对象" tabindex="-1"><a class="header-anchor" href="#如何成员变量的对象"><span>如何成员变量的对象</span></a></h3>
<p>获取<font color=red>public</font> 修饰的成员变量对象</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public Field getField(String name)</td>
<td>获取单个成员变量对象</td>
</tr>
<tr>
<td>public Field[] getFields()</td>
<td>获取所有公共的成员变量对象</td>
</tr>
</tbody>
</table>
<p>获取<font color=red>忽略修饰符</font>的成员变量对象</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public Field getDeclaredField(String name)</td>
<td>获取单个成员变量对象</td>
</tr>
<tr>
<td>public Field[] getDeclaredFields()</td>
<td>获取所有的成员变量对象</td>
</tr>
</tbody>
</table>
<h3 id="field-类中的方法" tabindex="-1"><a class="header-anchor" href="#field-类中的方法"><span>Field 类中的方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public void set(Object obj, Object value)</td>
<td>给某个具体的的实例对象，设置其具体的某个成员变量的值</td>
</tr>
<tr>
<td>public Object get(Object obj)</td>
<td>获取具体的实例对象的成员变量的值</td>
</tr>
<tr>
<td>public void setAccessible(boolean flag)</td>
<td>设置成员变量是否可以访问(true：不校验，false：校验)</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo05</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.api.Reflex.Dog"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取 name 的成员变量对象</span>
        <span class="token class-name">Field</span> f_name <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取 age 的成员变量对象</span>
        <span class="token class-name">Field</span> f_age <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取 color 的成员变量对象 color不是public修饰的</span>
        <span class="token class-name">Field</span> f_color <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f_age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// public java.lang.String com.api.Reflex.Dog.name</span>
        <span class="token comment">// public int com.api.Reflex.Dog.age</span>
        <span class="token comment">// private java.lang.String com.api.Reflex.Dog.color</span>

        <span class="token class-name">Object</span> obj1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        f_color<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 给 name 的成员变量对象赋值</span>
        f_name<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span><span class="token string">"淘宝"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 给 age 的成员变量对象赋值</span>
        f_age<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 给 color 的成员变量对象赋值</span>
        f_color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span><span class="token string">"黑色"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        f_name<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">"京东"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f_age<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f_color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">"红色"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// Dog{name='淘宝', age=3, color='黑色'}</span>
        <span class="token comment">// Dog{name='京东', age=2, color='红色'}</span>

        <span class="token class-name">Object</span> dog1_name <span class="token operator">=</span> f_name<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> dog1_age <span class="token operator">=</span> f_age<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> dog1_color <span class="token operator">=</span> f_color<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dog1_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dog1_age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dog1_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 淘宝</span>
        <span class="token comment">// 3</span>
        <span class="token comment">// 黑色</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> color<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"空参构造"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Dog{"</span> <span class="token operator">+</span>
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">", color='"</span> <span class="token operator">+</span> color <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


