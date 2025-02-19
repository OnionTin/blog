<template><div><h2 id="ribbon-负载均衡" tabindex="-1"><a class="header-anchor" href="#ribbon-负载均衡"><span>Ribbon 负载均衡</span></a></h2>
<blockquote>
<p>是基于 Netflix Ribbon 实现的<font color=red>客户端</font>负载均衡工具</p>
</blockquote>
<h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h3>
<blockquote>
<p>将用户的请求分摊到多个服务上，从而达到系统的 HA(高可用性)，负载均衡有很多方式，包括<font color=red>轮询、随机、加权(权重)、IP 哈希等，也可以自定义</font>。常见的负载均衡方式有：Nginx、LVS 等。</p>
</blockquote>
<h3 id="负载均衡的好处" tabindex="-1"><a class="header-anchor" href="#负载均衡的好处"><span>负载均衡的好处</span></a></h3>
<blockquote>
<p>举例：A 早上用网，100M 的网速，100 元/月；B 和 C 也类似，B 中午，C 晚上；负载均衡可以将 A、B、C 的网速叠加，达到 300M，节省了成本。然后在用户使用的时候，让用户每个月还是 100 元，但是可以享受 300M 的网速。</p>
</blockquote>
<p><img src="@source/admin/Java/SpringCloud/images/Ribbon.jpg" alt="Ribbon"></p>
</div></template>


