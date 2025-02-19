import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/Exception-D-IsnfW9.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h2><p>需要导包，在 java.lang 下</p><p>异常的体系结构? <img${ssrRenderAttr("src", _imports_0)} alt="异常体系结构"></p><h3 id="处理异常" tabindex="-1"><a class="header-anchor" href="#处理异常"><span>处理异常</span></a></h3><blockquote><p>主要针对编译时期异常(非 RuntimeException，即 Exception)的处理，就是明明代码和格式都没问题， 但是编译时还是有异常警告</p></blockquote><p>捕获：一般都不用写，可以快速生成</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 出现红线的代码</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>异常类名 对象名<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 处理方案</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
  <span class="token comment">// 释放资源</span>
  <span class="token comment">// 无论是否出现异常，都会执行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抛：throws</p><ul><li><p>被动抛出：throws</p><blockquote><p>格式：throws 异常类名</p><p>写在什么位置：方法声明上</p><p>抛的是编译时期(Exception)异常，哪里调用跑哪里，调用方继续处理</p><p>抛的是运行时期(RuntimeException)异常，哪里调用抛哪里，调用方不需处理</p><p>在子父类中，如果父类没有抛，子类重写方法也不能抛，而且，就算父类抛异常了，</p><p>子类抛的异常的类也只能是父类异常的子类或者本身</p></blockquote></li><li><p>主动抛出：throw</p><blockquote><p>格式：throw 异常对象</p><p>写在什么位置：方法体中</p><p>抛的是编译时期(Exception)异常，哪里调用跑哪里，调用方不需处理</p><p>抛的是运行时期(RuntimeException)异常，哪里调用跑哪里，调用方不需处理</p></blockquote></li></ul><p>自定义异常类：需要去继承你想继承的异常(Exception、RuntimeException)</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 捕获一(多个ctach)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">ParseException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoYiChang</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;2024-02-13&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 符合格式走try</span>
            <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;2024/02/13&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 不符合格式，出现异常，走catch</span>
            <span class="token class-name">Date</span> date1 <span class="token operator">=</span> sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不处理异常时，parse会有红线</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Tue Feb 13 00:00:00 CST 2024</span>
            <span class="token doc-comment comment">/**
             * 1/0会出现异常
             * 出现异常就终止，不再往下执行
             * 同时底层创建对象，new ArithmeticException()
            */</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token doc-comment comment">/**
             * 上一步已经异常，所以不会走到这一步了
             * 如果走到这一步，出现异常，底层创建对象，new ParseException()
            */</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token doc-comment comment">/**
           * ParseException e：形参
           * 捕获的异常类型，可以根据报错后的提示来添加
           * 实参：ParseException e = new ParseException()
          */</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;捕获了s2的异常为&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;异常可以连续捕获!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * 与异常无关，外部逻辑，必然会执行
        */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这块必定会执行!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 常用</span>
<span class="token comment">// 捕获二(利用多态，形参为父类，实参为子类)</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;2024/02/13&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// Exception e = new 异常对象(): 多态的妙用(Fu fu = new Zi())</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;异常类是父类，传入父类当然就不用管是哪种异常对象了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这块必定会执行!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 抛(被动抛)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">ParseException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoYiChang</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 被动接收异常方可以捕获也可以继续抛出
    main方法调用了aaa方法，aaa方法中抛出了异常，main方法捕获了异常
    异常一旦抛出，就会执行catch代码块
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这块必定会执行!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ParseException</span> <span class="token punctuation">{</span> <span class="token comment">// 被动抛出去</span>
        <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ParseException</span> <span class="token punctuation">{</span> <span class="token comment">// 被动抛出去</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;2024/02/13&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 抛(主动抛，编译时期异常)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoYiChang</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;苹果&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>food<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;肉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我喜欢吃肉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">// 主动抛出异常</span>
            <span class="token class-name">Exception</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;我只喜欢吃肉，没有肉就异常了!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
            <span class="token comment">// throw new Exception(&quot;我只喜欢吃肉，没有肉就异常了!&quot;);</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 抛(主动抛，运行时期异常)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoYiChang</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;大白菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>food<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;肉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我喜欢吃&quot;</span><span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;我只喜欢吃肉，没有肉会异常啊！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 自定义异常类(运行时期异常)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoYiChang</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;大白菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>food<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;肉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我喜欢吃&quot;</span><span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotEatMeetException</span><span class="token punctuation">(</span><span class="token string">&quot;我只喜欢吃肉，没有肉会异常啊！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">NotEatMeetException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">NotEatMeetException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">NotEatMeetException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例-runtimeexception-处理异常链" tabindex="-1"><a class="header-anchor" href="#案例-runtimeexception-处理异常链"><span>案例(`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RuntimeException 处理异常链`);
      } else {
        return [
          createTextVNode("RuntimeException 处理异常链")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`)</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 1.将编译时期异常转化为运行时期异常
 * 2.使用 RuntimeException 处理异常链，不用挨个抛或者捕获
*/</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoYiChang</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">ccc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">ccc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span><span class="token punctuation">{</span>
          <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;2024/02/13&quot;</span><span class="token punctuation">;</span>
          <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">Date</span> date <span class="token operator">=</span> sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 编译时期异常</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 运行时期异常</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/异常.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "异常.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%BC%82%E5%B8%B8.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[{"level":3,"title":"处理异常","slug":"处理异常","link":"#处理异常","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/异常.md","excerpt":"<h2>异常</h2>\\n<p>需要导包，在 java.lang 下</p>\\n<p>异常的体系结构?\\n</p>\\n<h3>处理异常</h3>\\n<blockquote>\\n<p>主要针对编译时期异常(非 RuntimeException，即 Exception)的处理，就是明明代码和格式都没问题，\\n但是编译时还是有异常警告</p>\\n</blockquote>\\n<p>捕获：一般都不用写，可以快速生成</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 出现红线的代码</span>\\n<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span><span class=\\"token punctuation\\">(</span>异常类名 对象名<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 处理方案</span>\\n<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">finally</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 释放资源</span>\\n  <span class=\\"token comment\\">// 无论是否出现异常，都会执行</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  ___html as comp,
  data
};
