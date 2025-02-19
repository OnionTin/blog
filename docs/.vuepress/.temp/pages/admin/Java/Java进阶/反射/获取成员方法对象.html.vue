<template><div><h2 id="获取成员方法对象" tabindex="-1"><a class="header-anchor" href="#获取成员方法对象"><span>获取成员方法对象</span></a></h2>
<p>成员方法对象的访问权限相关的要求，与<RouteLink to="/admin/Java/Java进阶/反射/获取构造方法.md">构造方法对象</RouteLink>的访问权限相关的要求相同，都涉及到<font color=red>暴力反射</font>相关内容。</p>
<h3 id="如何获取普通的成员方法的对象" tabindex="-1"><a class="header-anchor" href="#如何获取普通的成员方法的对象"><span>如何获取普通的成员方法的对象</span></a></h3>
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
<td>public Method getMethod(String name, Class&lt;?&gt;... parameterTypes)</td>
<td>获取单个成员方法对象</td>
</tr>
<tr>
<td>public Method[] getMethods()</td>
<td>获取<font color=red>所有的(哪怕是继承的)公共的</font>成员方法对象</td>
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
<td>public Method getDeclaredMethod(String name, Class&lt;?%gt;... parameterTypes)</td>
<td>获取单个成员方法对象</td>
</tr>
<tr>
<td>public Method[] getDeclaredMethods()</td>
<td>获取<font color=red>本类中</font>的所有成员方法对象</td>
</tr>
</tbody>
</table>
<h3 id="method-类中的方法" tabindex="-1"><a class="header-anchor" href="#method-类中的方法"><span>Method 类中的方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public Object invoke(Object obj, Object... args)</td>
<td>执行方法</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo06</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 字节码文件</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.api.Reflex.Cat"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 构造方法对象</span>
        <span class="token class-name">Constructor</span> c <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例对象</span>
        <span class="token class-name">Object</span> o1 <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> o2 <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取公共的无参无返回值的方法对象</span>
        <span class="token class-name">Method</span> m_aaa <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> aaa_value <span class="token operator">=</span> m_aaa<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aaa_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 无参无返回值</span>
        <span class="token comment">// null</span>

        <span class="token comment">// 获取公共的有参无返回值的方法对象（需要传入参数的class类型）</span>
        <span class="token class-name">Method</span> m_bbb <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"bbb"</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> bbb_value <span class="token operator">=</span> m_bbb<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> <span class="token string">"bbb方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bbb_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// bbb方法</span>
        <span class="token comment">// null</span>

        <span class="token comment">// 获取私有的的无参有返回值的方法对象</span>
        <span class="token class-name">Method</span> m_ccc <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"ccc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        m_ccc<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> ccc_value <span class="token operator">=</span> m_ccc<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ccc_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 无参有返回值：10</span>

        <span class="token comment">// 获取没有修饰符的有参有返回值的方法对象（需要传入参数的class类型）</span>
        <span class="token class-name">Method</span> m_ddd <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"ddd"</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        m_ddd<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> ddd_value <span class="token operator">=</span> m_ddd<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">"我传了个："</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ddd_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 有参有返回值，我传了个：1000</span>

        <span class="token comment">// 向下转型</span>
        <span class="token class-name">Method</span> m_eee <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"eee"</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        m_eee<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Integer</span> eee_value <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> m_eee<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>eee_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 123</span>

        <span class="token comment">// 获取所有的(哪怕是继承的也包含)公共的的成员方法</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// public java.lang.String com.api.Reflex.Cat.toString()</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.aaa()</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.bbb(java.lang.String)</span>
            <span class="token comment">// public final void java.lang.Object.wait() ...</span>
            <span class="token comment">// public final void java.lang.Object.wait(long,int) ...</span>
            <span class="token comment">// public final native void java.lang.Object.wait(long) ...</span>
            <span class="token comment">// public boolean java.lang.Object.equals(java.lang.Object)</span>
            <span class="token comment">// public native int java.lang.Object.hashCode()</span>
            <span class="token comment">// public final native java.lang.Class java.lang.Object.getClass()</span>
            <span class="token comment">// public final native void java.lang.Object.notify()</span>
            <span class="token comment">// public final native void java.lang.Object.notifyAll()</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 获取本类的所有的成员方法</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// public java.lang.String com.api.Reflex.Cat.toString()</span>
            <span class="token comment">// private int com.api.Reflex.Cat.ccc()</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.bbb(java.lang.String)</span>
            <span class="token comment">// java.lang.String com.api.Reflex.Cat.ddd(int)</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.aaa()</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Cat{"</span> <span class="token operator">+</span>
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">", sex='"</span> <span class="token operator">+</span> sex <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 无参无返回值</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无参无返回值"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 有参无返回值</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 无参有返回值</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">ccc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"无参有返回值："</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 有参有返回值</span>
    <span class="token class-name">String</span> <span class="token function">ddd</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"有参有返回值，"</span> <span class="token operator">+</span> s <span class="token operator">+</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 向下转型</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> <span class="token function">eee</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


