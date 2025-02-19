<template><div><h2 id="dubbo-和-cloud-代码对比" tabindex="-1"><a class="header-anchor" href="#dubbo-和-cloud-代码对比"><span>Dubbo 和 Cloud 代码对比</span></a></h2>
<h3 id="dubbo-实现流程" tabindex="-1"><a class="header-anchor" href="#dubbo-实现流程"><span>Dubbo 实现流程</span></a></h3>
<ol>
<li>安装并启动 zookpeer，作为注册中心</li>
<li>在生产者项目中发布一个接口(@Service)到注册中心</li>
<li>在消费者中也要创建一个同生产者中相同接口</li>
<li>在消费者项目中引用(@Reference)注册中心的接口并调用</li>
</ol>
<p><img src="@source/admin/Java/SpringCloud/images/dubbo-生产者.png" alt="dubbo-生产者.png">
<img src="@source/admin/Java/SpringCloud/images/dubbo-消费者.png" alt="dubbo-消费者.png"></p>
<h3 id="springcloud-实现流程" tabindex="-1"><a class="header-anchor" href="#springcloud-实现流程"><span>SpringCloud 实现流程</span></a></h3>
<blockquote>
<p>简单来说，就是 api 模块提供实体类，生产者模块提供接口实现，消费者模块通过 RestTemplate 调用接口</p>
</blockquote>
<p><img src="@source/admin/Java/SpringCloud/images/spring-cloud-api模块.png" alt="api服务">
<img src="@source/admin/Java/SpringCloud/images/spring-cloud-生产者1.png" alt="生产者服务">
<img src="@source/admin/Java/SpringCloud/images/spring-cloud-生产者2.png" alt="生产者服务">
<img src="@source/admin/Java/SpringCloud/images/spring-cloud-消费者.png" alt="消费者服务"></p>
</div></template>


