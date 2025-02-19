<template><div><h2 id="request-对象" tabindex="-1"><a class="header-anchor" href="#request-对象"><span>Request 对象</span></a></h2>
<blockquote>
<p>Request 对象 就是请求对象，是 Tomcat 封装的一个对象，里面包含了所有的请求消息的格式</p>
</blockquote>
<h3 id="request-体系结构" tabindex="-1"><a class="header-anchor" href="#request-体系结构"><span>Request 体系结构</span></a></h3>
<blockquote>
<p>ServletRequest 接口：
javax.servlet.ServletRequest 接口</p>
</blockquote>
<blockquote>
<p>HttpServletRequest 接口：
javax.servlet.http.HttpServletRequest 接口</p>
</blockquote>
<blockquote>
<p>RequestFacade 类：
org.apache.catalina.connector.RequestFacade 实现类</p>
</blockquote>
<h3 id="request-对象原理" tabindex="-1"><a class="header-anchor" href="#request-对象原理"><span>Request 对象原理</span></a></h3>
<blockquote>
<p>客户端发送请求，Tomcat 服务器接收到请求，Tomcat 服务器会创建 Request 对象，Request 对象会封装请求消息，然后将 Request 对象传递给 Servlet 程序供我们使用，我们能够通过 Request 对象获取到各种想要的数据了</p>
</blockquote>
<p><img src="@source/admin/Java/Java进阶/images/request对象原理.jpg" alt="request对象原理"></p>
</div></template>


