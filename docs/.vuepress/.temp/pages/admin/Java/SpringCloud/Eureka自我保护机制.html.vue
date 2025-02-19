<template><div><h2 id="eureka-自我保护机制" tabindex="-1"><a class="header-anchor" href="#eureka-自我保护机制"><span>Eureka 自我保护机制</span></a></h2>
<blockquote>
<p>总结就是好死不如赖活着</p>
</blockquote>
<blockquote>
<p>比如某一个服务，因为断电等原因，导致服务下线，Eureka 接收不到心跳，但是服务并没有真正的下线，此时不该注销该服务，Eureka 会保存注册中心的服务信息，宁可错误保留，也不盲目注销或删除，这就是好死不如赖活着。</p>
</blockquote>
<blockquote>
<p>当 Eureka 再次收到心跳时，服务会被重新注册，这就是自我保护机制。</p>
</blockquote>
</div></template>


