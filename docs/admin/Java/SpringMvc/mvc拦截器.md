## mvc 拦截器

> 拦截器，和 Filter(过滤器)类似，好处是他比过滤器更强大，可以获取请求和响应的信息，并且可以修改请求和响应的信息
>
> 拦截器是 SpringMVC 的，过滤器是 Servlet 的
>
> <font color=red>拦截器只能拦截 Controller 的请求，不能拦截 JSP 等其他 请求</font>
>
> 拦截器是 AOP 思想的具体应用

```xml
<!-- web.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:mvc="http://www.springframework.org/schema/mvc"
  xmlns:context="http://www.springframework.org/schema/context"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/mvc
  https://www.springframework.org/schema/mvc/spring-mvc.xsd
  http://www.springframework.org/schema/context
  https://www.springframework.org/schema/context/spring-context.xsd">

  <context:component-scan base-package="com.haha.controller"/>

  <!-- Json乱码问题配置 -->
  <mvc:annotation-driven>
    <mvc:message-converters register-defaults="true">
      <!--消息转化机制-->
      <bean class="org.springframework.http.converter.StringHttpMessageConverter">
        <constructor-arg value="UTF-8"/>
      </bean>
      <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
        <property name="objectMapper">
          <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
            <property name="failOnEmptyBeans" value="false"/>
          </bean>
        </property>
      </bean>
    </mvc:message-converters>
  </mvc:annotation-driven>

  <mvc:default-servlet-handler/>
  <bean
    class="org.springframework.web.servlet.view.InternalResourceViewResolver"
    id="InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INF/jsp/"/>
    <property name="suffix" value=".jsp"/>
  </bean>

  <!--拦截器配置-->
  <mvc:interceptors>
    <mvc:interceptor>
      <!--/**：所有请求都拦截-->
      <mvc:mapping path="/**"/>
      <!--执行文件-->
      <bean class="com.haha.config.MyInterceptor"/>
    </mvc:interceptor>
  </mvc:interceptors>
</beans>
```

```java
// 拦截器
package com.haha.config;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyInterceptor implements HandlerInterceptor {
  @Override
  public boolean preHandle(
    HttpServletRequest request,
    HttpServletResponse response,
    Object handler
    ) throws Exception {
    // 处理前：一般都只写这就好了，比如登录验证
    System.out.println("处理前");
    return HandlerInterceptor.super.preHandle(request, response, handler);
  }

  @Override
  public void postHandle(
    HttpServletRequest request,
    HttpServletResponse response,
    Object handler,
    ModelAndView modelAndView
   ) throws Exception {
    // 是否放行 返回true|false：一般用来处理拦截日志
    System.out.println("是否放行");
    HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
  }

  @Override
  public void afterCompletion(
    HttpServletRequest request,
    HttpServletResponse response,
    Object handler,
    Exception ex
  ) throws Exception {
    // 处理后
    System.out.println("处理后");
    HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
  }
}

// TestController
package com.haha.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
  @GetMapping("/test")
  public String test() {
    System.out.println("hello world");
    // 处理前
    //hello world
    //是否放行
    //处理后
    return "拦截器比filter好在他默认就是只对Controller有效";
    }
}
```
