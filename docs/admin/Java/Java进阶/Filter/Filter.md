## Filter

```java
// 注解方式
package com.api.Filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter("/*")
public class Filter02 implements Filter {
  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
    Filter.super.init(filterConfig);
  }

  @Override
  public void doFilter(ServletRequest sReq, ServletResponse sResp, FilterChain chain)
    throws IOException, ServletException {
    chain.doFilter(sReq, sResp);
  }

  @Override
  public void destroy() {
    Filter.super.destroy();
  }
}
```

```java
// 配置文件方式
package com.api.Filter;

import javax.servlet.*;
import java.io.IOException;

public class Filter01 implements Filter {

  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
    Filter.super.init(filterConfig);
  }

  @Override
  public void doFilter(ServletRequest sReq, ServletResponse sResp, FilterChain chain)
    throws ServletException, IOException {
    System.out.println("Filter01 doFilter ...");
    // 过滤，或者叫放行，不放行没法走到下一步
    chain.doFilter(sReq, sResp);
  }

  @Override
  public void destroy() {
    Filter.super.destroy();
  }
}
```

```xml
<!-- tomcat的 web.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<web-app
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://java.sun.com/xml/ns/javaee"
  xsi:schemaLocation="
  http://java.sun.com/xml/ns/javaee
  http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
  version="2.5"
>
<display-name>Demo01</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.htm</welcome-file>
    <welcome-file>default.jsp</welcome-file>
  </welcome-file-list>
  <!--servlet配置-->
  <servlet>
    <!--
    servlet-name：servlet名称，自定义，唯一
    servlet-class：servlet实现类全路径名
    servlet-name：同上，需要保持一致
    url-pattern：servlet虚拟路径，随便起，但是千万别忘了/
    访问：localhost:8080/虚拟目录/虚拟路径
    -->
    <servlet-name>servletDemo01</servlet-name>
    <servlet-class>com.api.Servlet.ServletDemo01</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>servletDemo01</servlet-name>
    <url-pattern>/demo01</url-pattern>
  </servlet-mapping>

  <!--filter配置-->
  <!--
  filter-name：filter名称，自定义，唯一
  filter-class：filter实现类全路径名
  filter-name：同上，需要保持一致
  url-pattern：/servlet-name
  -->
  <filter>
    <filter-name>Filter01</filter-name>
    <filter-class>com.api.Filter.Filter01</filter-class>
  </filter>
  <filter-mapping>
    <filter-name>Filter01</filter-name>
    <!--拦截具体的资源-->
    <url-pattern>/servletDemo01</url-pattern>
  </filter-mapping>

  <filter>
    <filter-name>Filter02</filter-name>
    <filter-class>com.api.Filter.Filter01</filter-class>
  </filter>
  <filter-mapping>
    <filter-name>Filter02</filter-name>
    <!--拦截user模块下的所有资源-->
    <url-pattern>/user/*</url-pattern>
  </filter-mapping>

  <filter>
    <filter-name>Filter03</filter-name>
    <filter-class>com.api.Filter.Filter01</filter-class>
  </filter>
  <filter-mapping>
    <filter-name>Filter03</filter-name>
    <!--拦截jsp类型的文件-->
    <url-pattern>*.jsp</url-pattern>
  </filter-mapping>

  <filter>
    <filter-name>Filter04</filter-name>
    <filter-class>com.api.Filter.Filter01</filter-class>
  </filter>
  <filter-mapping>
    <filter-name>Filter04</filter-name>
    <!--拦截所有资源-->
    <url-pattern>/*</url-pattern>
  </filter-mapping>
</web-app>
```
