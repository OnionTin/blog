<template><div><h2 id="zuul-访问路径详解" tabindex="-1"><a class="header-anchor" href="#zuul-访问路径详解"><span>Zuul 访问路径详解</span></a></h2>
<blockquote>
<p>都是根据一步步的配置进行图例展示</p>
</blockquote>
<ol>
<li>
<p>Zuul 注册到 Eureka</p>
<p><img src="@source/admin/Java/SpringCloud/images/Zuul3.jpg" alt="Zuul 注册到 Eureka"></p>
</li>
<li>
<p>服务端访问路径</p>
<p><img src="@source/admin/Java/SpringCloud/images/Zuul1.jpg" alt="Zuul 注册到 Eureka"></p>
</li>
<li>
<p>走路由网关访问路径</p>
<p><img src="@source/admin/Java/SpringCloud/images/Zuul2.jpg" alt="Zuul 注册到 Eureka"></p>
</li>
<li>
<p>走路由网关访问路径(代理路径，避免爆露微服务名)</p>
<p><img src="@source/admin/Java/SpringCloud/images/Zuul4.jpg" alt="Zuul 注册到 Eureka">
<img src="@source/admin/Java/SpringCloud/images/Zuul5.jpg" alt="Zuul 注册到 Eureka"></p>
</li>
<li>
<p>走路由网关访问路径(多服务统一前缀)</p>
<p><img src="@source/admin/Java/SpringCloud/images/Zuul6.jpg" alt="Zuul 注册到 Eureka"></p>
</li>
</ol>
</div></template>


