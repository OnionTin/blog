<template><div><h2 id="微服务架构介绍" tabindex="-1"><a class="header-anchor" href="#微服务架构介绍"><span>微服务架构介绍</span></a></h2>
<h3 id="微服务架构" tabindex="-1"><a class="header-anchor" href="#微服务架构"><span>微服务架构</span></a></h3>
<p><img src="@source/admin/Java/SpringCloud/images/微服务1.png" alt="微服务架构图">
<img src="@source/admin/Java/SpringCloud/images/微服务2.jpg" alt="微服务架构图">
<img src="@source/admin/Java/SpringCloud/images/SpringCloud生态.jpg" alt="微服务生态"></p>
<h3 id="微服务架构四大核心问题" tabindex="-1"><a class="header-anchor" href="#微服务架构四大核心问题"><span>微服务架构四大核心问题</span></a></h3>
<ol>
<li>服务如何拆分？(Api Gateway)</li>
<li>服务之间如何通信？(Http || RPC)</li>
<li>服务如何治理？(注册中心)</li>
<li>数据一致性如何保证？(熔断机制)</li>
</ol>
<h3 id="三大解决方案" tabindex="-1"><a class="header-anchor" href="#三大解决方案"><span>三大解决方案</span></a></h3>
<table>
<thead>
<tr>
<th>方案</th>
<th>路由网关</th>
<th>通信</th>
<th>服务中心</th>
<th>熔断机制</th>
<th>优缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>SpringCloud + NetFlix</td>
<td>Zuul</td>
<td>HTTP</td>
<td>Eureka</td>
<td>Hystrix</td>
<td>一站式解决，2018 年 12 月停更了</td>
</tr>
<tr>
<td>Dubbo + Zookeeper</td>
<td>本身没有，找第三方或自己实现</td>
<td>RPC</td>
<td>Zookeeper</td>
<td>常用第三方 Hystrix</td>
<td>PRC 很厉害，专门做这个的</td>
</tr>
<tr>
<td>SpringCloudAlibaba</td>
<td>Gateway</td>
<td>HTTP</td>
<td>Nacos</td>
<td>Sentinel</td>
<td>比方案 1 更简便</td>
</tr>
</tbody>
</table>
<h3 id="微服务架构技术栈" tabindex="-1"><a class="header-anchor" href="#微服务架构技术栈"><span>微服务架构技术栈</span></a></h3>
<table>
<thead>
<tr>
<th>微服务条目</th>
<th>落地技术</th>
</tr>
</thead>
<tbody>
<tr>
<td>服务开发</td>
<td>SpringBoot,Spring,SpringMVC</td>
</tr>
<tr>
<td>服务配置与管理</td>
<td>Netflix 公司的 Archaius、阿里的 Diamond 等</td>
</tr>
<tr>
<td>服务注册与发现</td>
<td>Eureka、Consul、Zookeeper 等</td>
</tr>
<tr>
<td>服务调用</td>
<td>Rest、RPC、gRPC</td>
</tr>
<tr>
<td>服务熔断器</td>
<td>Hystrix、Envoy 等</td>
</tr>
<tr>
<td>负载均衡</td>
<td>Ribbon、Nginx 等</td>
</tr>
<tr>
<td>服务接口调用(客户端调用服务的简化工具)</td>
<td>Feign 等</td>
</tr>
<tr>
<td>消息队列</td>
<td>Kafka、RabbitMQ、ActiveMQ 等</td>
</tr>
<tr>
<td>服务配置中心管理</td>
<td>SpringCloudConfig、Chef 等</td>
</tr>
<tr>
<td>服务路由(API 网关)</td>
<td>Zuul 等</td>
</tr>
<tr>
<td>服务监控</td>
<td>Zabbix、Nagios、Metrics、Specatator 等</td>
</tr>
<tr>
<td>全链路追踪</td>
<td>Zipkin、Brave、Dapper 等</td>
</tr>
<tr>
<td>服务部署</td>
<td>Docker、OpenStack、Kubernetes 等</td>
</tr>
<tr>
<td>数据流操作开发包</td>
<td>SpringCloud Stream(封装与 Redis,Rabbit,Kafka 等发送接收消息)</td>
</tr>
<tr>
<td>事件消息总线</td>
<td>SpringCloud Bus</td>
</tr>
</tbody>
</table>
<h3 id="spring-boot-和-spring-cloud-版本关系" tabindex="-1"><a class="header-anchor" href="#spring-boot-和-spring-cloud-版本关系"><span>Spring Boot 和 Spring Cloud 版本关系</span></a></h3>
<table>
<thead>
<tr>
<th>Spring Boot</th>
<th>Spring Cloud</th>
<th>关系</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.2.x</td>
<td>Angel</td>
<td>兼容 Spring Boot 1.2.x</td>
</tr>
<tr>
<td>1.3.x</td>
<td>Brixton</td>
<td>兼容 Spring Boot 1.3.x, 也兼容 Spring Boot 1.4.x</td>
</tr>
<tr>
<td>1.4.x</td>
<td>Camden</td>
<td>兼容 Spring Boot 1.4.x, 也兼容 Spring Boot 1.5.x</td>
</tr>
<tr>
<td>1.5.x</td>
<td>Dalston</td>
<td>兼容 Spring Boot 1.5.x, 不兼容 Spring Boot 2.0.x</td>
</tr>
<tr>
<td>1.5.x</td>
<td>Edgware</td>
<td>兼容 Spring Boot 1.5.x, 不兼容 Spring Boot 2.0.x</td>
</tr>
<tr>
<td>2.0.x</td>
<td>Finchley</td>
<td>兼容 Spring Boot 2.0.x, 不兼容 Spring Boot 1.5.x</td>
</tr>
<tr>
<td>2.1.x</td>
<td>Greenwich</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="实际开发版本选择" tabindex="-1"><a class="header-anchor" href="#实际开发版本选择"><span>实际开发版本选择</span></a></h3>
<table>
<thead>
<tr>
<th>spring-boot-starter-parent</th>
<th>spring-boot-starter-parent</th>
<th>spring-cloud-dependencies</th>
<th>spring-cloud-dependencies</th>
</tr>
</thead>
<tbody>
<tr>
<td>版本号</td>
<td>发布日期</td>
<td>版本号</td>
<td>发布日期</td>
</tr>
<tr>
<td>1.5.2.RELEASE</td>
<td>2017 年 3 月</td>
<td>Dalston.RC1</td>
<td>2017 年未知月</td>
</tr>
<tr>
<td>1.5.9.RELEASE</td>
<td>2017 年 11 月</td>
<td>Edgware.RELEASE</td>
<td>2017 年 11 月</td>
</tr>
<tr>
<td>1.5.16.RELEASE</td>
<td>2018 年 9 月</td>
<td>Edgware.SR5</td>
<td>2018 年 10 月</td>
</tr>
<tr>
<td>1.5.20.RELEASE</td>
<td>2019 年 4 月</td>
<td>Edgware.SR5</td>
<td>2018 年 10 月</td>
</tr>
<tr>
<td>2.0.2.RELEASE</td>
<td>2018 年 5 月</td>
<td>Finchley.BUILD-SNAPSHOT</td>
<td>2018 年未知月</td>
</tr>
<tr>
<td>2.0.6.RELEASE</td>
<td>2018 年 10 月</td>
<td>Finchley.SR2</td>
<td>2018 年 10 月</td>
</tr>
<tr>
<td>2.1.4.RELEASE</td>
<td>2019 年 4 月</td>
<td>Greenwich.SR1</td>
<td>2019 年 3 月</td>
</tr>
<tr>
<td>2.1.5.RELEASE</td>
<td>2019 年 5 月</td>
<td>Greenwich.SR2</td>
<td>2019 年 5 月</td>
</tr>
<tr>
<td>2.2.0.RELEASE</td>
<td>2019 年 10 月</td>
<td>Hoxton.SR1</td>
<td>2019 年 10 月</td>
</tr>
<tr>
<td>2.2.1.RELEASE</td>
<td>2019 年 11 月</td>
<td>Hoxton.SR2</td>
<td>2019 年 11 月</td>
</tr>
<tr>
<td>2.2.2.RELEASE</td>
<td>2019 年 12 月</td>
<td>Hoxton.SR3</td>
<td>2019 年 12 月</td>
</tr>
</tbody>
</table>
</div></template>


