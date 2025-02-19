<template><div><h2 id="maven" tabindex="-1"><a class="header-anchor" href="#maven"><span>Maven</span></a></h2>
<h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token constant">MAVEN_HOME</span><span class="token operator">=</span><span class="token class-name">D</span><span class="token operator">:</span>\<span class="token class-name">Program</span> <span class="token class-name">Files</span>\apache<span class="token operator">-</span>maven<span class="token operator">-</span><span class="token number">3.6</span><span class="token number">.3</span>

<span class="token class-name">Path</span><span class="token operator">=</span><span class="token operator">%</span><span class="token constant">MAVEN_HOME</span><span class="token operator">%</span>\bin

mvn <span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置本地仓库" tabindex="-1"><a class="header-anchor" href="#配置本地仓库"><span>配置本地仓库</span></a></h3>
<ol>
<li>找到 maven 下的 conf 文件夹</li>
<li>找到 settings.xml 进行修改</li>
<li>修改 localRepository 属性值</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--settings.xml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localRepository</span><span class="token punctuation">></span></span>D:/JavaPackage/repository<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localRepository</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置阿里云镜像" tabindex="-1"><a class="header-anchor" href="#配置阿里云镜像"><span>配置阿里云镜像</span></a></h3>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">></span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载基本的-jar-包" tabindex="-1"><a class="header-anchor" href="#下载基本的-jar-包"><span>下载基本的 jar 包</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>mvn help<span class="token operator">:</span>system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3>
<blockquote>
<p>进入到项目的根目录下执行，即 pom.xml 所在的目录下，cmd 执行</p>
</blockquote>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>mvn clean</td>
<td>清理</td>
</tr>
<tr>
<td>mvn compile</td>
<td>编译</td>
</tr>
<tr>
<td>mvn test</td>
<td>测试</td>
</tr>
<tr>
<td>mvn package</td>
<td>打包</td>
</tr>
<tr>
<td>mvn install</td>
<td>安装</td>
</tr>
<tr>
<td>mvn deploy</td>
<td>部署</td>
</tr>
</tbody>
</table>
</div></template>


