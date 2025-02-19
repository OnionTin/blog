<template><div><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举"><span>枚举</span></a></h2>
<blockquote>
<p>枚举就是特殊的单例，只不过单例只能有一个对象，但是枚举可以有几个对象，但是也不能创建无数多个对象。</p>
</blockquote>
<h3 id="自定义枚举" tabindex="-1"><a class="header-anchor" href="#自定义枚举"><span>自定义枚举</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Enum</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Week</span> mon <span class="token operator">=</span> <span class="token class-name">Week<span class="token punctuation">.</span>Mon</span><span class="token punctuation">;</span>
        <span class="token class-name">Week</span> tue <span class="token operator">=</span> <span class="token class-name">Week<span class="token punctuation">.</span>Mon</span><span class="token punctuation">;</span>
        <span class="token class-name">Week</span> mon1 <span class="token operator">=</span> <span class="token class-name">Week<span class="token punctuation">.</span>Mon</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon <span class="token operator">==</span> mon1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon <span class="token operator">==</span> tue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 因为是单例模式，所以是true</span>
        <span class="token comment">// com.api.Enum.Week@23fc625e</span>
        <span class="token comment">// com.api.Enum.Week@23fc625e</span>
        <span class="token comment">// com.api.Enum.Week@23fc625e</span>
        <span class="token comment">// true</span>
        <span class="token comment">// true</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 星期一</span>
        mon<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 我是星期一</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
// 自定义枚举类(一)
class Week {
    public static final Week Mon = new Week();
    public static final Week Tue = new Week();
    public static final Week Thi = new Week();

    private Week() {
    }
}
*/</span>

<span class="token comment">/*
// 自定义枚举类(二)
class Week {
    public static final Week Mon = new Week("星期一");
    public static final Week Tue = new Week("星期二");
    public static final Week Thi = new Week("星期三");

    private String name;

    private Week(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
*/</span>

<span class="token comment">// 自定义枚举类(三)</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Week</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Week</span> <span class="token class-name">Mon</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Week</span><span class="token punctuation">(</span><span class="token string">"星期一"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Week</span> <span class="token class-name">Tue</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Week</span><span class="token punctuation">(</span><span class="token string">"星期二"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Week</span> <span class="token class-name">Thi</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Week</span><span class="token punctuation">(</span><span class="token string">"星期三"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Week</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="真正的枚举类" tabindex="-1"><a class="header-anchor" href="#真正的枚举类"><span>真正的枚举类</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Enum</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Enum01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Enum</span> mon <span class="token operator">=</span> <span class="token class-name">Enum</span><span class="token punctuation">.</span><span class="token constant">MONDAY</span><span class="token punctuation">;</span>
        <span class="token class-name">Enum</span> tue <span class="token operator">=</span> <span class="token class-name">Enum</span><span class="token punctuation">.</span><span class="token constant">TUESDAY</span><span class="token punctuation">;</span>
        <span class="token class-name">Enum</span> mon1 <span class="token operator">=</span> <span class="token class-name">Enum</span><span class="token punctuation">.</span><span class="token constant">MONDAY</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon <span class="token operator">==</span> mon1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon <span class="token operator">==</span> tue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// MONDAY</span>
        <span class="token comment">// TUESDAY</span>
        <span class="token comment">// MONDAY</span>
        <span class="token comment">// true</span>
        <span class="token comment">// false</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 星期一</span>
        mon<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 我是星期一</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
// 格式一
enum Enum{
    MONDAY,TUESDAY,WEDNESDAY;
    private Enum() {
        System.out.println("构造方法");
    }
}
*/</span>

<span class="token comment">/*
// 格式二
enum Enum{
    MONDAY("星期一"),TUESDAY("星期二"),WEDNESDAY("星期三");
    private String name;
    private Enum(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}
*/</span>

<span class="token comment">// 格式三</span>
<span class="token keyword">enum</span> <span class="token class-name">Enum</span> <span class="token punctuation">{</span>
    <span class="token function">MONDAY</span><span class="token punctuation">(</span><span class="token string">"星期一"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">TUESDAY</span><span class="token punctuation">(</span><span class="token string">"星期二"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">WEDNESDAY</span><span class="token punctuation">(</span><span class="token string">"星期三"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Enum</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<ol>
<li>枚举类必须用 enum 关键字类修饰</li>
<li>任何枚举类默认都继承了 Enum 类</li>
<li>任何枚举类中都有默认的私有空参构造</li>
<li>枚举项必须放在第一行</li>
<li>枚举项与枚举项之间要用&quot;,&quot;隔开，最后一个枚举项后用&quot;;&quot;结束</li>
<li>枚举类中可以有抽象方法，但是一旦有抽象方法的话，枚举项就必须去实现它</li>
<li>枚举可以用在 switch 语句中</li>
</ol>
<h3 id="枚举的常见方法" tabindex="-1"><a class="header-anchor" href="#枚举的常见方法"><span>枚举的常见方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public String toString()</td>
<td>枚举常量名</td>
</tr>
<tr>
<td>public final String name()</td>
<td>枚举常量的名称</td>
</tr>
<tr>
<td>public final int ordinal()</td>
<td>枚举项的下标值，从 0 开始</td>
</tr>
<tr>
<td>public final int compareTo(E o)</td>
<td>两个枚举项的下标差</td>
</tr>
<tr>
<td>public static <code v-pre>&lt; T extends Enum &gt;</code> T valueOf(Class<code v-pre>&lt;T&gt;</code> enumType, String name)</td>
<td>获取字节码文件中，指定名称的枚举项</td>
</tr>
<tr>
<td>public static <code v-pre>&lt;T&gt;</code> T valueOf(String name)</td>
<td>获取指定名称的枚举项</td>
</tr>
<tr>
<td>public static T[] values()</td>
<td>所有枚举项组成的数组</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Enum</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Enum02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Enum1</span> mon <span class="token operator">=</span> <span class="token class-name">Enum1</span><span class="token punctuation">.</span><span class="token constant">MONDAY</span><span class="token punctuation">;</span>
        <span class="token class-name">Enum1</span> tue <span class="token operator">=</span> <span class="token class-name">Enum1</span><span class="token punctuation">.</span><span class="token constant">TUESDAY</span><span class="token punctuation">;</span>
        <span class="token class-name">Enum1</span> wed <span class="token operator">=</span> <span class="token class-name">Enum1</span><span class="token punctuation">.</span><span class="token constant">WEDNESDAY</span><span class="token punctuation">;</span>
        <span class="token comment">// public String toString()：返回枚举项名称</span>
        <span class="token comment">// public final String name()：返回枚举项名称</span>
        <span class="token comment">// public final int ordinal()：返回枚举项下标，从0开始</span>
        <span class="token comment">// public final int compareTo(E o)：前边的下表减去后边的下标值</span>
        <span class="token comment">// public static &lt; T extends Enum > T valueOf(Class&lt;T> enumType,</span>
        <span class="token comment">// String name)：获取字节码文件中，指定名称的枚举项</span>
        <span class="token comment">// public static T valueOf(String)：获取指定名称的枚举项</span>
        <span class="token comment">// public static T[] values()：所有枚举项组成的数组</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue<span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>wed<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>mon<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">Enum1</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">"TUESDAY"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">"TUESDAY"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Enum1</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Enum1</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">Enum1</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Enum1</span> e <span class="token operator">:</span> values<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// MONDAY</span>
            <span class="token comment">// TUESDAY</span>
            <span class="token comment">// WEDNESDAY</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// MONDAY</span>
        <span class="token comment">// MONDAY</span>
        <span class="token comment">// MONDAY</span>
        <span class="token comment">// 1</span>
        <span class="token comment">// -2</span>
        <span class="token comment">// 1</span>
        <span class="token comment">// TUESDAY</span>
        <span class="token comment">// TUESDAY</span>
        <span class="token comment">// [Lcom.api.Enum.Enum1;@3f99bd52</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">enum</span> <span class="token class-name">Enum1</span> <span class="token punctuation">{</span>
    <span class="token function">MONDAY</span><span class="token punctuation">(</span><span class="token string">"星期一"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">TUESDAY</span><span class="token punctuation">(</span><span class="token string">"星期二"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">WEDNESDAY</span><span class="token punctuation">(</span><span class="token string">"星期三"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是星期三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Enum1</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


