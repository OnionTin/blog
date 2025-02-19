<template><div><h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源"><span>静态资源</span></a></h2>
<h3 id="静态资源引入" tabindex="-1"><a class="header-anchor" href="#静态资源引入"><span>静态资源引入</span></a></h3>
<table>
<thead>
<tr>
<th>方式</th>
<th>文件所在路径</th>
<th>优先级</th>
<th>一般如何使用</th>
</tr>
</thead>
<tbody>
<tr>
<td>resources</td>
<td>classpath:/resources</td>
<td>1</td>
<td>上传的文件</td>
</tr>
<tr>
<td>static</td>
<td>classpath:/static</td>
<td>2</td>
<td>静态的图片等</td>
</tr>
<tr>
<td>public</td>
<td>classpath:/public</td>
<td>3</td>
<td>公共的 js</td>
</tr>
<tr>
<td>/</td>
<td>项目根目录</td>
<td>4</td>
<td>一般不使用</td>
</tr>
</tbody>
</table>
<h3 id="webjars-引入" tabindex="-1"><a class="header-anchor" href="#webjars-引入"><span>webjars 引入</span></a></h3>
<p><a href="https://www.webjars.org/" target="_blank" rel="noopener noreferrer">webjars 官网<ExternalLinkIcon/></a>以依赖的方式引入外部资源，引入的资源在 jar 包内的 classpath:/META-INF/resources 路径下，但是这种方式很少使用</p>
<h3 id="修改静态资源路径" tabindex="-1"><a class="header-anchor" href="#修改静态资源路径"><span>修改静态资源路径</span></a></h3>
<p>因为是自动装配，所以可以修改配置方式修改静态资源的路径，自己来配。</p>
<h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 源码(WebMvcAutoConfiguration.java)截取</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceProperties<span class="token punctuation">.</span><span class="token function">isAddMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"Default resource handling disabled"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>registry<span class="token punctuation">.</span><span class="token function">hasMappingForPattern</span><span class="token punctuation">(</span><span class="token string">"/webjars/**"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">ResourceHandlerRegistration</span> registration <span class="token operator">=</span> registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/webjars/**"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"classpath:/META-INF/resources/webjars/"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">configureResourceCaching</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">customizeResourceHandlerRegistration</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> staticPathPattern <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>webFluxProperties<span class="token punctuation">.</span><span class="token function">getStaticPathPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>registry<span class="token punctuation">.</span><span class="token function">hasMappingForPattern</span><span class="token punctuation">(</span>staticPathPattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">ResourceHandlerRegistration</span> registration <span class="token operator">=</span> registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>staticPathPattern<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceProperties<span class="token punctuation">.</span><span class="token function">getStaticLocations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">configureResourceCaching</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">customizeResourceHandlerRegistration</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 源码(WebMvcProperties.java)截取</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebMvcProperties</span> <span class="token punctuation">{</span>
  	<span class="token doc-comment comment">/**
	 * Path pattern used for static resources.
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> staticPathPattern <span class="token operator">=</span> <span class="token string">"/**"</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Async</span> async <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Servlet</span> servlet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Servlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">View</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Contentnegotiation</span> contentnegotiation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Contentnegotiation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Pathmatch</span> pathmatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pathmatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 源码(ResourceProperties.java)截取</span>
<span class="token doc-comment comment">/**
 * Properties used to configure resource handling.
 *
 * <span class="token keyword">@author</span> Phillip Webb
 * <span class="token keyword">@author</span> Brian Clozel
 * <span class="token keyword">@author</span> Dave Syer
 * <span class="token keyword">@author</span> Venil Noronha
 * <span class="token keyword">@author</span> Kristine Jetzke
 * <span class="token keyword">@since</span> 1.1.0
 */</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"spring.resources"</span><span class="token punctuation">,</span> ignoreUnknownFields <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResourceProperties</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">CLASSPATH_RESOURCE_LOCATIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"classpath:/META-INF/resources/"</span><span class="token punctuation">,</span>
			<span class="token string">"classpath:/resources/"</span><span class="token punctuation">,</span> <span class="token string">"classpath:/static/"</span><span class="token punctuation">,</span> <span class="token string">"classpath:/public/"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	 * Locations of static resources. Defaults to classpath:[/META-INF/resources/,
	 * /resources/, /static/, /public/].
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> staticLocations <span class="token operator">=</span> <span class="token constant">CLASSPATH_RESOURCE_LOCATIONS</span><span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	 * Whether to enable default resource handling.
	 */</span>
	<span class="token keyword">private</span> <span class="token keyword">boolean</span> addMappings <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Chain</span> chain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Cache</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getStaticLocations</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>staticLocations<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


