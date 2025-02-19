<template><div><h2 id="c3p0" tabindex="-1"><a class="header-anchor" href="#c3p0"><span>C3P0</span></a></h2>
<h3 id="使用配置文件的方式" tabindex="-1"><a class="header-anchor" href="#使用配置文件的方式"><span>使用配置文件的方式</span></a></h3>
<ol>
<li>导入 jar 包</li>
<li>导入配置文件</li>
<li>创建数据库连接池对象</li>
<li>获取数据库连接对象</li>
<li>归还连接对象</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">SqlPool</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mchange<span class="token punctuation">.</span>v2<span class="token punctuation">.</span>c3p0<span class="token punctuation">.</span></span><span class="token class-name">ComboPooledDataSource</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">C3p0</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">/*使用官方配置文件的方式
        1. 导入 jar 包
        2. 导入配置文件
        3. 创建数据库连接池对象
        4. 获取数据库连接对象
        5. 归还连接对象
        */</span>

        <span class="token comment">// 导入配置文件</span>
        <span class="token comment">// 创建数据库连接池对象</span>
        <span class="token comment">// 参数：configName</span>
        <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboPooledDataSource</span><span class="token punctuation">(</span><span class="token string">"c3p0.config"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取数据库连接对象</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"成功获取连接"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 归还连接对象</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- c3p0.config.xml --></span>
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c3p0-config</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--默认配置--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>default-config</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--数据库连接参数--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driverClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>com.mysql.cj.jdbc.Driver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbcUrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sap@1q2w3e4r<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--数据库连接池参数--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkoutTimeout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>maxPoolSize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>initialPoolSize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>default-config</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>named-config</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>another<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--数据库连接参数--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driverClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>com.mysql.cj.jdbc.Driver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbcUrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sap@1q2w3e4r<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--数据库连接池参数--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkoutTimeout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>maxPoolSize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>initialPoolSize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>named-config</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c3p0-config</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不使用配置文件方式" tabindex="-1"><a class="header-anchor" href="#不使用配置文件方式"><span>不使用配置文件方式</span></a></h3>
<ol>
<li>导入 jar 包</li>
<li>获取数据库连接池对象</li>
<li>配置参数</li>
<li>获取数据库连接对象</li>
<li>归还连接对象</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">SqlPool</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mchange<span class="token punctuation">.</span>v2<span class="token punctuation">.</span>c3p0<span class="token punctuation">.</span></span><span class="token class-name">ComboPooledDataSource</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">C3p0</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">/*不使用官方配置文件方式
        1. 导入 jar 包
        2. 获取数据库连接池对象
        3. 配置参数
        4. 获取数据库连接对象
        5. 归还连接对象
        */</span>

        <span class="token comment">// 获取数据库连接池对象（DataSource是父类，不能创建实例）</span>
        <span class="token comment">// DataSource dataSource = new ComboPooledDataSource();</span>
        <span class="token class-name">ComboPooledDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboPooledDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 配置参数</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"Sap@1q2w3e4r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span>
          <span class="token string">"jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setDriverClass</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取数据库连接对象</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 归还连接对象</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


