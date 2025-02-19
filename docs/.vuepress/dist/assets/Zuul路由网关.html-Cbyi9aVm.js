import{_ as n,o as s,c as a,e as t}from"./app-CilA4iky.js";const e={},p=t(`<h2 id="zuul" tabindex="-1"><a class="header-anchor" href="#zuul"><span>Zuul</span></a></h2><blockquote><p>Zuul 包含了对请求的路由和过滤两个最主要的功能：</p><p>其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul 和 Eureka 进行整合，将 Zuul 自身注册为 Eureka 服务治理下的应用，同时从 Eureka 中获得其他微服务的消息，也即以后的访问微服务都是通过 Zuul 跳转后获得。</p></blockquote><blockquote><p>注意：Zuul 服务最终还是会注册进 Eureka</p><p>提供：代理+路由+过滤三大功能！</p></blockquote><h3 id="修改本地域名映射" tabindex="-1"><a class="header-anchor" href="#修改本地域名映射"><span>修改本地域名映射</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 修改 C:\\Windows\\System32\\drivers\\etc\\hosts</span>
<span class="token number">127.0</span>.0.1       www.thsstudy.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建"><span>项目搭建</span></a></h3><h4 id="_1-依赖" tabindex="-1"><a class="header-anchor" href="#_1-依赖"><span>1. 依赖</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--Eureka--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--Zuul--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zuul<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置"><span>2. 配置</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9527</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>zuul
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> zuul<span class="token punctuation">-</span><span class="token number">9527</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">app.name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>zuul
  <span class="token key atrule">app.description</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>zuul
  <span class="token key atrule">company.name</span><span class="token punctuation">:</span> ths
<span class="token comment"># 配置Zuul路由代理</span>
<span class="token key atrule">zuul</span><span class="token punctuation">:</span>
  <span class="token key atrule">routes</span><span class="token punctuation">:</span>
    <span class="token comment"># 配置路由(原来访问的路径的name)</span>
    <span class="token key atrule">myprovider.serviceId</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider
    <span class="token comment"># 配置路由(新路径，用provider来替代)</span>
    <span class="token key atrule">myprovider.path</span><span class="token punctuation">:</span> /provider/<span class="token important">**</span>
  <span class="token comment"># 控制走代理路径，原路径不能访问了，只能走路由网关</span>
  <span class="token comment"># ignored-services: project-provider</span>
  <span class="token comment"># *：通配符，所有的微服务都必须走代理</span>
  <span class="token key atrule">ignored-services</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
  <span class="token comment"># 统一前缀(/ths/provider，一般这要不要都行)</span>
  <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /ths
  <span class="token comment"># 如果把port改成80，访问时端口就可以不要了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-启动类" tabindex="-1"><a class="header-anchor" href="#_3-启动类"><span>3. 启动类</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>zuul</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>zuul<span class="token punctuation">.</span></span><span class="token class-name">EnableZuulProxy</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableZuulProxy</span> <span class="token comment">// 开启Zuul服务代理</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZuulApplication_9527</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ZuulApplication_9527</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[p];function c(o,u){return s(),a("div",null,l)}const r=n(e,[["render",c],["__file","Zuul路由网关.html.vue"]]),k=JSON.parse('{"path":"/admin/Java/SpringCloud/Zuul%E8%B7%AF%E7%94%B1%E7%BD%91%E5%85%B3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Zuul","slug":"zuul","link":"#zuul","children":[{"level":3,"title":"修改本地域名映射","slug":"修改本地域名映射","link":"#修改本地域名映射","children":[]},{"level":3,"title":"项目搭建","slug":"项目搭建","link":"#项目搭建","children":[]}]}],"git":{"updatedTime":1726824508000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/SpringCloud/Zuul路由网关.md","excerpt":"<h2>Zuul</h2>\\n<blockquote>\\n<p>Zuul 包含了对请求的路由和过滤两个最主要的功能：</p>\\n<p>其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul 和 Eureka 进行整合，将 Zuul 自身注册为 Eureka 服务治理下的应用，同时从 Eureka 中获得其他微服务的消息，也即以后的访问微服务都是通过 Zuul 跳转后获得。</p>\\n</blockquote>\\n<blockquote>\\n<p>注意：Zuul 服务最终还是会注册进 Eureka</p>\\n<p>提供：代理+路由+过滤三大功能！</p>\\n</blockquote>"}');export{r as comp,k as data};
