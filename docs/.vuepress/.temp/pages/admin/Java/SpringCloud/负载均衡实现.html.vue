<template><div><h2 id="负载均衡实现" tabindex="-1"><a class="header-anchor" href="#负载均衡实现"><span>负载均衡实现</span></a></h2>
<h3 id="_1-创建模块" tabindex="-1"><a class="header-anchor" href="#_1-创建模块"><span>1. 创建模块</span></a></h3>
<blockquote>
<p>分别创建两个模块 project-provider_8002 和 8003，并修改这三个模块的配置文件(就是修改端口和注册中心地址以及名称还有数据库练级等配置信息)</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 8001项目</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8001</span>
<span class="token comment"># mybatis配置</span>
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token comment"># 配置别名：实体类包名路径(api模块)</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.ths.api.pojo
  <span class="token comment"># 配置mapper接口的位置(当前模块)</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mapper/<span class="token important">*.xml</span>
  <span class="token comment"># 配置全局配置文件(当前模块)</span>
  <span class="token key atrule">config-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mybatis<span class="token punctuation">-</span>config.xml
<span class="token comment"># spring配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token comment"># 因为配置负载均衡，所以多个服务的名字要一致</span>
    <span class="token comment"># name: project-provider-8001</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/db01<span class="token punctuation">?</span>useUnicode
      =true<span class="token important">&amp;characterEncoding=utf-8&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
<span class="token comment"># Eureka配置</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 将本服务注册到哪个注册中心(单机)</span>
      <span class="token comment"># defaultZone: http://localhost:7001/eureka/</span>
      <span class="token comment"># 集群</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
  <span class="token comment"># 修改服务在注册中心的名字</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span>8001<span class="token punctuation">-</span>id
<span class="token comment"># 配置监控信息(访问地址: http://localhost:8001/actuator/info)</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">app.name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span><span class="token number">8001</span>
  <span class="token key atrule">app.description</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span><span class="token number">8001</span>
  <span class="token key atrule">company.name</span><span class="token punctuation">:</span> th
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 8002项目</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8002</span>
<span class="token comment"># mybatis配置</span>
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token comment"># 配置别名：实体类包名路径(api模块)</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.ths.api.pojo
  <span class="token comment"># 配置mapper接口的位置(当前模块)</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mapper/<span class="token important">*.xml</span>
  <span class="token comment"># 配置全局配置文件(当前模块)</span>
  <span class="token key atrule">config-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mybatis<span class="token punctuation">-</span>config.xml
<span class="token comment"># spring配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token comment"># 因为配置负载均衡，所以多个服务的名字要一致</span>
    <span class="token comment"># name: project-provider-8002</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/db02<span class="token punctuation">?</span>
      useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
<span class="token comment"># Eureka配置</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 将本服务注册到哪个注册中心(单机)</span>
      <span class="token comment"># defaultZone: http://localhost:7001/eureka/</span>
      <span class="token comment"># 集群</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
  <span class="token comment"># 修改服务在注册中心的名字</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span>8002<span class="token punctuation">-</span>id
<span class="token comment"># 配置监控信息(访问地址: http://localhost:8001/actuator/info)</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">app.name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span><span class="token number">8002</span>
  <span class="token key atrule">app.description</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span><span class="token number">8002</span>
  <span class="token key atrule">company.name</span><span class="token punctuation">:</span> ths
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-配置负载均衡"><span>2. 配置负载均衡</span></a></h3>
<h4 id="_1-project-consumer-80-项目导入依赖" tabindex="-1"><a class="header-anchor" href="#_1-project-consumer-80-项目导入依赖"><span>1.project-consumer-80 项目导入依赖</span></a></h4>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--Ribbon：客户端实现负载均衡--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-ribbon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--Eureka：需要发现--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-修改配置文件"><span>2. 修改配置文件</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">808</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>consumer<span class="token punctuation">-</span><span class="token number">80</span>
<span class="token comment"># Eureka</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token comment"># 不注册自己</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># 从注册中心获取服务</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-配置实现负载均衡的-resttemplate" tabindex="-1"><a class="header-anchor" href="#_3-配置实现负载均衡的-resttemplate"><span>3. 配置实现负载均衡的 RestTemplate</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>consumer<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span><span class="token class-name">LoadBalanced</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RestTemplate</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span> <span class="token comment">// 将方法返回的RestTemplate注册到Spring中</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span> <span class="token comment">// 将RestTemplate交给Spring托管</span>
  <span class="token annotation punctuation">@LoadBalanced</span> <span class="token comment">// 配置实现负载均衡的RestTemplate</span>
  <span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">getRestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-修改调用服务的方法" tabindex="-1"><a class="header-anchor" href="#_4-修改调用服务的方法"><span>4. 修改调用服务的方法</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>consumer<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>api<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">Dept</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RestTemplate</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span> <span class="token comment">// 只能用@RestController，不能用@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/consumer/dept"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetDeptController</span> <span class="token punctuation">{</span>
  <span class="token comment">// 消费者不应该有service层了，而是负责获取数据并在页面上渲染即可</span>
  <span class="token comment">// xxxTemplate 是SpringCloud提供的一个模板，用来调用服务</span>
  <span class="token comment">// RestTemplate：Spring中默认没有注册，需要自己注册(BeanConfig)</span>

  <span class="token comment">// RestTemplate：Restful风格服务模板，从提供者模块中获取需要的内容</span>
  <span class="token comment">// RestTemplate：简单粗暴无脑，直接调用即可</span>

  <span class="token comment">// 服务端请求的url前缀(单机)</span>
  <span class="token comment">// private static final String REST_URL_PREFIX = "http://localhost:8001";</span>
  <span class="token comment">// 负载均衡：集群(通过服务名访问)</span>
  <span class="token comment">// 注意：多个服务的名称要统一为这个名称</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">REST_URL_PREFIX</span> <span class="token operator">=</span> <span class="token string">"http://PROJECT-PROVIDER"</span><span class="token punctuation">;</span>
  <span class="token comment">// 注册后就可以使用了</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">GetDeptController</span><span class="token punctuation">(</span><span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>restTemplate <span class="token operator">=</span> restTemplate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/list"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Dept</span><span class="token punctuation">></span></span> <span class="token function">queryAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token constant">REST_URL_PREFIX</span> <span class="token operator">+</span> <span class="token string">"/dept/list"</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-启动类" tabindex="-1"><a class="header-anchor" href="#_5-启动类"><span>5. 启动类</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 服务注册与发现</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer_80</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Consumer_80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://localhost:808/consumer/dept/list" target="_blank" rel="noopener noreferrer">运行后访问地址<ExternalLinkIcon/></a>，这个接口返回的数据每次都不一样，实现了 Ribbon 的轮询机制。</p>
<p><img src="@source/admin/Java/SpringCloud/images/负载均衡.jpg" alt="负载均衡"></p>
</div></template>


