<template><div><h2 id="dashboard-流监控" tabindex="-1"><a class="header-anchor" href="#dashboard-流监控"><span>Dashboard 流监控</span></a></h2>
<blockquote>
<p>首先，服务端需要有 Hystrix 对熔断的支持，有 actuator 监控信息配置，同时还需要添加一个 Servlet 容器，用于监控；其次，客户端需要有 Hystrix-Dashboard 支持</p>
</blockquote>
<h3 id="服务端-project-hystrix-provider-8004" tabindex="-1"><a class="header-anchor" href="#服务端-project-hystrix-provider-8004"><span>服务端(project-hystrix-provider-8004)</span></a></h3>
<blockquote>
<p>已经有了熔断机制和监控信息配置，只需要添加一个 Servlet 容器，用于监控</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>hystrix</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>eventstream<span class="token punctuation">.</span></span><span class="token class-name">HystrixMetricsStreamServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>discovery<span class="token punctuation">.</span></span><span class="token class-name">EnableDiscoveryClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 启用Eureka客户端,自动将本服务注册到Eureka中</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token comment">// 服务注册与发现(让其他的微服务发现自己,并得到自己的服务信息)</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token comment">// 添加Hystrix对熔断的支持</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hystrix_8001</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Hystrix_8001</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 增加一个Servlet容器，用于监控</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">hystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ServletRegistrationBean</span> rB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">HystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 访问地址 localhost://8004/actuator/hystrix.stream</span>
    rB<span class="token punctuation">.</span><span class="token function">addUrlMappings</span><span class="token punctuation">(</span><span class="token string">"/actuator/hystrix.stream"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置名称</span>
    rB<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"HystrixMetricsStreamServlet"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置优先级(启动后就开启)</span>
    rB<span class="token punctuation">.</span><span class="token function">setLoadOnStartup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> rB<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端"><span>客户端</span></a></h3>
<blockquote>
<p>在父项目下新建项目(project-hystrix-dashboard-consumer-8088)</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 依赖项 --></span>
<span class="token comment">&lt;!--Hystrix--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-hystrix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--Hystrix-Dashboard--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-hystrix-dashboard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 启动类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>dashboard<span class="token punctuation">.</span></span><span class="token class-name">EnableHystrixDashboard</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">//@EnableEurekaClient</span>
<span class="token comment">// 开启Dashboard监控页面</span>
<span class="token comment">// 注意，服务端需要配置监控信息(actuator)，否则的话，查不到</span>
<span class="token comment">// 启动后访问页面: http://localhost:8088/hystrix</span>
<span class="token annotation punctuation">@EnableHystrixDashboard</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HystrixDashboard_8088</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">HystrixDashboard_8088</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图例" tabindex="-1"><a class="header-anchor" href="#图例"><span>图例</span></a></h3>
<p>Dashboard 首页：
<img src="@source/admin/Java/SpringCloud/images/Dashboard.jpg" alt="Dashboard"></p>
<p>Dashboard 监控页面：
<img src="@source/admin/Java/SpringCloud/images/Dashboard监控页面.jpg" alt="Dashboard监控页面"></p>
<p>查看监控数据流：
<img src="@source/admin/Java/SpringCloud/images/数据.jpg" alt="监控数据流"></p>
<p>监控页面中的圆圈详解：
<img src="@source/admin/Java/SpringCloud/images/圆圈.jpg" alt="圆圈"></p>
<p>监控页面中的线(心跳)详解：
<img src="@source/admin/Java/SpringCloud/images/一线.jpg" alt="一线"></p>
<p>监控页面详解：
<img src="@source/admin/Java/SpringCloud/images/标注.jpg" alt="整体"></p>
</div></template>


