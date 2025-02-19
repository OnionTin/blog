<template><div><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h2>
<p>什么是类加载器？
用来加载.class 文件到内存中，并生成对应的 Class 对象。</p>
<h3 id="类加载器的作用" tabindex="-1"><a class="header-anchor" href="#类加载器的作用"><span>类加载器的作用</span></a></h3>
<p>用来把本地磁盘中的类(class)装载进内存中，形成一个字节码对象。</p>
<h3 id="类加载器分类" tabindex="-1"><a class="header-anchor" href="#类加载器分类"><span>类加载器分类</span></a></h3>
<ul>
<li>
<p>引导类加载器(Bootstrap ClassLoader)</p>
<p>加载的是 jdk 中，jre 下的 lib 目录下的 rt.jar 中的文件</p>
</li>
<li>
<p>扩展类加载器(Extension ClassLoader)</p>
<p>加载的是 jdk 中，jre 下的 lib 目录下的 ext 中的 jar 文件 中的文件</p>
</li>
<li>
<p>系统类加载器(System ClassLoader)</p>
<p>加载的是用户类路径(classpath)下的类库</p>
<p>classpath：用来存放.class 文件的路径；这个路径可以变化；由我们创建项目的时候指定的，如果不做修改，默认就是 项目名/bin</p>
</li>
</ul>
<h3 id="类加载器的分层关系" tabindex="-1"><a class="header-anchor" href="#类加载器的分层关系"><span>类加载器的分层关系</span></a></h3>
<ul>
<li>
<p>最上层：引导类加载器</p>
</li>
<li>
<p>中间层：扩展类加载器</p>
</li>
<li>
<p>最下层：系统类加载器</p>
</li>
</ul>
<h3 id="类加载器的加载顺序" tabindex="-1"><a class="header-anchor" href="#类加载器的加载顺序"><span>类加载器的加载顺序</span></a></h3>
<p>Java 中有一个机制，叫做委托机制</p>
<ul>
<li>
<p>系统类加载器:</p>
<p>任何类都是由最下层的加载器来加载，既系统类加载器来加载的，由于 java 具有委托机制，所以系统类加载器它不会马上加载，而是先委托给它的上一层类加载器来加载，既扩展类加载器来加载，如果扩展类加载器没有加载到，它在自己去加载。如果它自己也没加载到，就会报类加载不到异常</p>
</li>
<li>
<p>扩展类加载器:</p>
<p>由于 Java 具有委托机制，扩展类加载器不会马上加载它所管辖的范围，它会先委托给上一层类加载器去加载，既引导类加载器来加载，如果引导类加载器没有加载成功，它在自己去加载，如果它也没有加载到，就去下一层继续加载</p>
</li>
<li>
<p>引导类加载器:</p>
<p>它会现在自己的片区去加载，如果没有加载到，去下一层继续加载</p>
</li>
</ul>
<p><img src="@source/admin/images/类加载器.jpg" alt="类加载器"></p>
<h3 id="如何获取类加载器对象" tabindex="-1"><a class="header-anchor" href="#如何获取类加载器对象"><span>如何获取类加载器对象</span></a></h3>
<ol>
<li>
<p>获取到字节码文件对象</p>
<p>Class clazz = Demo01.class;</p>
</li>
<li>
<p>获取到类加载器对象</p>
<p>ClassLoader classLoader = clazz.getClassLoader();</p>
</li>
</ol>
<h3 id="类加载的相关方法" tabindex="-1"><a class="header-anchor" href="#类加载的相关方法"><span>类加载的相关方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>public ClassLoader getClassLoader()</td>
<td>获取类加载器</td>
</tr>
<tr>
<td>public final ClassLoader getParent()</td>
<td>获取上一层类加载器</td>
</tr>
<tr>
<td>public URL getResource(String name)</td>
<td>获取类加载器加载的资源</td>
</tr>
<tr>
<td>public InputStream getResourceAsStream(String name)</td>
<td>获取类加载器加载的资源，并转换成流</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 获取当前项目下src/main/resources/c.properties配置文件中的内容</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span></span><span class="token class-name">ClassLoader</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URL</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前项目下src/main/resources/c.properties配置文件的内容</span>

        <span class="token comment">// 1. 按步骤走（1）</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取类加载器对象</span>
        <span class="token class-name">ClassLoader</span> cl <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取资源文件路径</span>
        <span class="token class-name">URL</span> url <span class="token operator">=</span> cl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"c.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// file:/D:/Programs/gobang/target/classes/c.properties</span>
        <span class="token comment">// 获取资源文件，并转换成流</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> cl<span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"c.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建流对象</span>
        <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 加载流</span>
        p<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {password=123456, userName="admin"}</span>

        <span class="token comment">// 2. 按步骤走（2）</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取类加载器对象</span>
        <span class="token class-name">ClassLoader</span> cl <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取资源文件路径</span>
        <span class="token class-name">String</span> path <span class="token operator">=</span> cl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"c.properties"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// /D:/Programs/gobang/target/classes/c.properties</span>
        <span class="token comment">// 根据路径创建字节流</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建流对象</span>
        <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 加载流</span>
        p<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {password=123456, userName="admin"}</span>

        <span class="token comment">// 3. 简写版（1）</span>
        <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"c.properties"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// // {password=123456, userName="admin"}</span>

        <span class="token comment">// 4. 简写版（2）</span>
        <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
          <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>
            <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"c.properties"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// // {password=123456, userName="admin"}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * String：系统类加载器
         * Person：扩展类加载器
         * Test：系统类加载器
        */</span>

       <span class="token comment">// 获取类对象的字节码对象</span>
        <span class="token class-name">Class</span> clazzs <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> clazzp <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> clazzt <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取类加载器</span>
        <span class="token class-name">ClassLoader</span> scl <span class="token operator">=</span> clazzs<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ClassLoader</span> pcl <span class="token operator">=</span> clazzp<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ClassLoader</span> tcl <span class="token operator">=</span> clazzt<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取类加载器加载的资源路径</span>
        <span class="token class-name">URL</span> sUrl <span class="token operator">=</span> scl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">URL</span> pUrl <span class="token operator">=</span> pcl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">URL</span> tUrl <span class="token operator">=</span> tcl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取类加载器加载的资源路径</span>
        <span class="token class-name">String</span> spath <span class="token operator">=</span> scl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> ppath <span class="token operator">=</span> pcl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> tpath <span class="token operator">=</span> tcl<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取类加载器加载的资源，并转换成流</span>
        <span class="token class-name">InputStream</span> sInputStream <span class="token operator">=</span> scl<span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> pInputStream <span class="token operator">=</span> pcl<span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> tInputStream <span class="token operator">=</span> tcl<span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


