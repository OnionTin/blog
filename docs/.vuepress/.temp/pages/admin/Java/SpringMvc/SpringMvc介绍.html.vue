<template><div><!-- @format -->
<h2 id="springmvc-介绍" tabindex="-1"><a class="header-anchor" href="#springmvc-介绍"><span>SpringMvc 介绍</span></a></h2>
<blockquote>
<p>SpringMvc 是 Spring 框架的一部分，是 Spring 的一个模块，SpringMvc 是一个基于 Java 的实现了 MVC 设计模式的请求驱动类型的轻量级 Web 框架，即使用了 Spring 的 IoC 容器，将控制器、模型对象、分派器以及处理程序对象的角色进行了分离，它为 Java EE 应用程序开发提供了一套简洁的模型。</p>
</blockquote>
<h3 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc"><span>MVC</span></a></h3>
<p>M：模型层，提供要展示的数据，现在一般分离开来分为 Vlaue Object(dao 层)和 服务层(service 层)</p>
<p>V：视图层，负责数据的展示(Jsp、Html、Thymeleaf 等)</p>
<p>C：控制层，负责接收请求、获取表单数据、调用业务逻辑、转向指定视图层进行展示(servlet)</p>
<h3 id="springmvc-的优点" tabindex="-1"><a class="header-anchor" href="#springmvc-的优点"><span>SpringMvc 的优点</span></a></h3>
<ol>
<li>清晰的职责划分：SpringMvc 的设计使得每个组件都各司其职，职责明确，易于理解和维护。</li>
<li>灵活的配置：SpringMvc 提供了丰富的配置选项，可以根据实际需求进行灵活配置。</li>
</ol>
<h3 id="servlet-的缺点" tabindex="-1"><a class="header-anchor" href="#servlet-的缺点"><span>Servlet 的缺点</span></a></h3>
<ol>
<li>配置繁琐：Servlet 的配置需要编写大量的 XML 配置文件，配置繁琐。</li>
<li>代码冗余：Servlet 的代码冗余，需要编写大量的代码来处理请求和响应。</li>
<li>代码耦合：Servlet 的代码耦合度高，难以进行单元测试和重构。</li>
</ol>
<h3 id="springmvc-和-servlet" tabindex="-1"><a class="header-anchor" href="#springmvc-和-servlet"><span>SpringMvc 和 Servlet</span></a></h3>
<p>SpringMvc 通过 Servlet 接收请求，通过 Servlet 的实现类 DispatcherServlet 来处理请求，DispatcherServlet 是 SpringMvc 的核心，它负责将请求分发到不同的处理器，处理器处理完请求后，DispatcherServlet 再将请求转发到不同的视图层进行展示。</p>
<h3 id="springmvc-的核心组件-映射-适配-处理-解析" tabindex="-1"><a class="header-anchor" href="#springmvc-的核心组件-映射-适配-处理-解析"><span>SpringMvc 的核心组件(映射-&gt; 适配-&gt;处理-&gt;解析)</span></a></h3>
<ol>
<li>DispatcherServlet：前端控制器，负责接收请求、分发请求、处理响应。</li>
<li>HandlerMapping：处理器映射器，负责将请求映射到对应的处理器。</li>
<li>HandlerAdapter：处理器适配器，负责调用处理器处理请求。</li>
<li>Handler：处理器，负责处理请求，返回 ModelAndView 对象。</li>
<li>ViewResolver：视图解析器，负责将 ModelAndView 对象解析为具体的视图。</li>
<li>View：视图，负责展示数据。</li>
</ol>
</div></template>


