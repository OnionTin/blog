## Listener

> Listener：监听器，是 javaweb 三大组件(Servlet、Filter、Listener)之一。

### 监听器步骤

1. 创建一个类，实现监听器接口
2. 重写抽象方法
3. 在 web.xml 中配置监听器

### ServletContextListener

> ServletContextListener：监听 ServletContext 对象创建和销毁，当项目启动时，ServletContext 对象被创建，当服务停止时，ServletContext 对象被销毁

### ServletRequestListener

> ServletRequestListener：监听 ServletRequest 对象创建和销毁，当用户访问 Servlet 等资源的 时候，ServletRequest 对象被创建，当用户关闭浏览器时候，ServletRequest 对象被销毁

### Listener 的配置方式

1. web.xml 配置
2. 注解配置(@WebListener)

### Listener 案例

1. 统计网站在线人数
2. 网站访问量统计

```java
// ServletContextListener.java
package com.api.Listener;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class MyServletContextListener implements ServletContextListener {
  @Override
  public void contextInitialized(ServletContextEvent sce) {
    // 初始化
    // 获取ServletContext对象
    ServletContext sc = sce.getServletContext();
    // 获取全局参数
    String value = sc.getInitParameter("username");
    System.out.println("value:" + value);
  }

  @Override
  public void contextDestroyed(ServletContextEvent sce) {
    // 销毁
    System.out.println("MyServletContextListener销毁");
  }
}
```

```java
// MyServletRequestListener.java
package com.api.Listener;

import javax.servlet.ServletRequest;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class MyServletRequestListener implements ServletRequestListener {
  @Override
  public void requestDestroyed(ServletRequestEvent sre) {
    ServletRequest sr = sre.getServletRequest();
  }

  @Override
  public void requestInitialized(ServletRequestEvent sre) {
    System.out.println("MyServletRequestListener销毁");
  }
}
```

```xml
<!--web.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<web-app
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://java.sun.com/xml/ns/javaee"
  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
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

  <servlet>
    <servlet-name>aaa</servlet-name>
    <servlet-class>com.api.Servlet.ServletDemo01</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>aaa</servlet-name>
    <url-pattern>/bbb</url-pattern>
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

  <!--配置Linster-->
  <listener>
    <listener-class>com.api.Listener.MyServletContextListener</listener-class>
  </listener>
  <listener>
    <listener-class>com.api.Listener.MyServletRequestListener</listener-class>
  </listener>
  <context-param>
    <param-name>username</param-name>
    <param-value>张三</param-value>
  </context-param>
</web-app>
```
