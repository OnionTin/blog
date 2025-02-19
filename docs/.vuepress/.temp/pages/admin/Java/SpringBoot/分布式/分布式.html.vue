<template><div><!-- @format -->
<h2 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式"><span>分布式</span></a></h2>
<h3 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统"><span>分布式系统</span></a></h3>
<blockquote>
<p>分布式系统是若干独立计算机的集合，这些计算机对于用户来说就像单个相关系统。(举例：拼多多下单，下单有很多个服务，但是用户感觉就是一个服务，这些服务就是分布式)</p>
</blockquote>
<h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h3>
<blockquote>
<p>假设 A 服务占用 98%资源，B 服务只占用了 10%资源，负载均衡就是将负载高的服务分配给负载低的服务，从而保证系统的稳定运行</p>
</blockquote>
<h3 id="服务降级" tabindex="-1"><a class="header-anchor" href="#服务降级"><span>服务降级</span></a></h3>
<blockquote>
<p>当服务出现问题，或者服务压力过大时，为了保证核心服务的正常运行，需要将非核心服务或者低优先级的服务暂时关闭或者延迟处理，待系统负载降低后，再重新开启或者恢复</p>
</blockquote>
<h3 id="服务熔断" tabindex="-1"><a class="header-anchor" href="#服务熔断"><span>服务熔断</span></a></h3>
<blockquote>
<p>服务熔断就是当服务出现问题时，立即关闭服务，防止服务雪崩</p>
</blockquote>
<h3 id="服务限流" tabindex="-1"><a class="header-anchor" href="#服务限流"><span>服务限流</span></a></h3>
<blockquote>
<p>服务限流就是限制请求的速率，防止服务压力过大，导致服务崩溃</p>
</blockquote>
<h3 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc"><span>RPC</span></a></h3>
<blockquote>
<p>远程过程调用，是一种进程间通信方式，比如本地调用远程的方法，就像调用本地方法一样。(举例：我要洗衣服，但是我出门了，我给家人打电话，让家人帮我洗衣服)</p>
<p>RPC 的核心：通讯和序列化(通讯：网络传输，序列化：将对象转换成字节流，字节流转换成对象；网线传输的都是 2 进制的 01)</p>
</blockquote>
<h3 id="dubbo" tabindex="-1"><a class="header-anchor" href="#dubbo"><span>Dubbo</span></a></h3>
<blockquote>
<p>RPC 服务框架</p>
</blockquote>
<h3 id="dubbo-admin" tabindex="-1"><a class="header-anchor" href="#dubbo-admin"><span>Dubbo-admin</span></a></h3>
<blockquote>
<p>查看服务的监控管理后台，当然了这个后台系统有没有都无所谓，只是方便我们查看服务而已</p>
</blockquote>
<h4 id="dubbo-admin-安装和启动" tabindex="-1"><a class="header-anchor" href="#dubbo-admin-安装和启动"><span>Dubbo-admin 安装和启动</span></a></h4>
<ol>
<li>[下载](<a href="https://gitee.com/friendlytkyj/dubbo-admin" target="_blank" rel="noopener noreferrer">gitee 地址<ExternalLinkIcon/></a>) Dubbo-admin 并解压</li>
<li>启动 Zookeeper</li>
<li>进入到 dubbo-admin 目录下的 conf 目录，修改 application.properties 文件，配置注册中心地址(zookeeper 的地址)，当然都是默认也行</li>
<li>进入到 dubbo-admin 目录下的 target 目录，双击 dubbo-admin-0.0.1-SNAPSHOT.jar 文件，启动 Dubbo-admin</li>
<li>打开浏览器，输入 http://127.0.0.1:7001 ，即可访问 Dubbo-admin</li>
</ol>
<h3 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper"><span>Zookeeper</span></a></h3>
<blockquote>
<p>注册中心！！！分布式协调服务，用于分布式系统中的协调服务，比如：分布式锁、分布式配置中心、分布式命名服务、分布式队列等</p>
</blockquote>
<h4 id="zookeeper-安装和启动" tabindex="-1"><a class="header-anchor" href="#zookeeper-安装和启动"><span>Zookeeper 安装和启动</span></a></h4>
<ol>
<li><a href="https://zookeeper.apache.org/releases.html" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a> Zookeeper 并解压</li>
<li>进入到 zookeeper 目录下的 conf 目录，复制 zoo_sample.cfg 并重命名为 zoo.cfg</li>
<li>配置 zoo.cfg(随意，一般配置 dataDir 和 clientPort，默认端口是 2181)</li>
<li>进入到 zookeeper 目录下的 bin 目录，双击 zkServer.cmd 文件，启动 Zookeeper</li>
</ol>
<h3 id="dubbo-zookeeper-案例" tabindex="-1"><a class="header-anchor" href="#dubbo-zookeeper-案例"><span>Dubbo + Zookeeper 案例</span></a></h3>
<RouteLink to="/admin/Java/SpringBoot/分布式/案例.md">案例</RouteLink><h3 id="分布式架构的四大核心问题" tabindex="-1"><a class="header-anchor" href="#分布式架构的四大核心问题"><span>分布式架构的四大核心问题</span></a></h3>
<ol>
<li>这么多服务，客户端如何调用？</li>
<li>这么多服务，如何进行通信？</li>
<li>这么多服务，如何进行管理？</li>
<li>服务挂了，如何保证高可用？</li>
</ol>
<h3 id="解决分布式架构的四大核心问题" tabindex="-1"><a class="header-anchor" href="#解决分布式架构的四大核心问题"><span>解决分布式架构的四大核心问题</span></a></h3>
<p>Spring Cloud</p>
</div></template>


