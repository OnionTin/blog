<template><div><!-- @format -->
<h2 id="springcloudconfig-服务端配置" tabindex="-1"><a class="header-anchor" href="#springcloudconfig-服务端配置"><span>SpringCloudConfig-服务端配置</span></a></h2>
<blockquote>
<p>什么是 SpringCloudConfig：SpringCloudConfig 是 SpringCloud 中的一个组件，它主要用于实现分布式配置中心，将各个服务的配置文件集中管理，实现配置的动态刷新。当然将他放到 gitee 上也是可以的，所以这里我们使用 SpringCloudConfig+gitee 实现配置的动态刷新。</p>
</blockquote>
<h2 id="springcloudconfig-gitee-实现服务端-project-config-server-3344" tabindex="-1"><a class="header-anchor" href="#springcloudconfig-gitee-实现服务端-project-config-server-3344"><span>SpringCloudConfig + gitee 实现服务端(project-config-server-3344)</span></a></h2>
<h3 id="_1-依赖" tabindex="-1"><a class="header-anchor" href="#_1-依赖"><span>1. 依赖</span></a></h3>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--springboot--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--Config-Server--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-config-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件"><span>2. 配置文件</span></a></h3>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3344</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>config<span class="token punctuation">-</span><span class="token number">3344</span>
  <span class="token comment"># 连接远程仓库</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">server</span><span class="token punctuation">:</span>
        <span class="token comment"># git仓库地址(也可以连svn)</span>
        <span class="token key atrule">git</span><span class="token punctuation">:</span>
          <span class="token key atrule">uri</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//gitee.com/OnionTin/springcloud<span class="token punctuation">-</span>config.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-启动类" tabindex="-1"><a class="header-anchor" href="#_3-启动类"><span>3. 启动类</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>config<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableConfigServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 开启配置服务</span>
<span class="token annotation punctuation">@EnableConfigServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigServer_3344</span> <span class="token punctuation">{</span>
  <span class="token comment">// 启动后访问地址:</span>
  <span class="token comment">// 1.http://localhost:3344/application-dev.yaml</span>
  <span class="token comment">// 2.http://localhost:3344/application/dev/master</span>
  <span class="token comment">// 3.http://localhost:3344/master/application-dev.yaml</span>
  <span class="token comment">// 当然也可以是yml或properties配置文件</span>
  <span class="token comment">// client.yml文件:</span>
  <span class="token comment">// http://localhost:3344/master/client-dev.yml</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConfigServer_3344</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图例" tabindex="-1"><a class="header-anchor" href="#图例"><span>图例</span></a></h3>
<p><img src="@source/admin/Java/SpringCloud/images/config-server-1.png" alt="config-server-1">
<img src="@source/admin/Java/SpringCloud/images/config-server-2.png" alt="config-server-2">
<img src="@source/admin/Java/SpringCloud/images/config-server-3.png" alt="config-server-3"></p>
</div></template>


