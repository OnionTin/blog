## Servlet 概述

> 能够被浏览器访问到的类就是 Servlet 类，其他的普通类是不能够通过浏览器访问到的；一个普通类想要
> 被浏览器访问到，必须将这个普通类转换为 Servlet 类，即实现 Servlet 接口。

### 入门小案例

1. 创建一个普通类，实现 Servlet 接口，并重写 5 个方法

```java
package com.api.Servlet;

import javax.servlet.*;

public class ServletDemo01 implements Servlet {
  @Override
  public ServletConfig getServletConfig() {
    System.out.println("getServletConfig...");
    return null;
  }
  @Override
  public String getServletInfo() {
    System.out.println("getServletInfo...");
    return null;
  }
  @Override
  public void init(ServletConfig arg0) throws ServletException {
    System.out.println("init...");
  }
  @Override
  public void service(ServletRequest arg0, ServletResponse arg1) {
    System.out.println("service...");
    System.out.println("ServletDemo01");
  }
  @Override
  public void destroy(){
    System.out.println("destroy...");
  }
}
```

2. 在 service 添加测试内容给，比如输入一句话
3. 在 web.xml 文件中配置 Servlet 类

```xml
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
</web-app>
```

4. 在浏览器中输入地址 http://localhost:8080/gobang(虚拟目录)/demo01(虚拟路径) 访问这个类
5. 回到 idea 控制台中查看是否有打印输出

```java
// 结果：
// init...
// service...
// ServletDemo01
```
