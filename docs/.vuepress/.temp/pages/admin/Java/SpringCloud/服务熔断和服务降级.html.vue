<template><div><h2 id="服务熔断和服务降级" tabindex="-1"><a class="header-anchor" href="#服务熔断和服务降级"><span>服务熔断和服务降级</span></a></h2>
<h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3>
<table>
<thead>
<tr>
<th>服务熔断</th>
<th>服务降级</th>
</tr>
</thead>
<tbody>
<tr>
<td>服务端</td>
<td>客户端</td>
</tr>
<tr>
<td>针对具体服务</td>
<td>针对整体</td>
</tr>
</tbody>
</table>
<h3 id="服务熔断" tabindex="-1"><a class="header-anchor" href="#服务熔断"><span>服务熔断</span></a></h3>
<p>熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。当检测到该节点微服务调用响应正常后，恢复调用链路。在 SpringCloud 中熔断机制通过 Hystrix 实现，Hystrix 会监控微服务间调用的状况，当失败的调用到一定阈值，缺省是 5 秒内 20 次调用失败就会启动熔断机制。熔断机制的注解是@HystrixCommand。</p>
<h3 id="服务降级" tabindex="-1"><a class="header-anchor" href="#服务降级"><span>服务降级</span></a></h3>
<p>服务降级是从整个系统的负荷情况出发和考虑的，对某些负荷会比较高的情况，为了预防系统整体负荷过高，而提出的一种降低服务质量的策略，即通过提供一些降级服务从而保障核心服务正常运行。</p>
</div></template>


