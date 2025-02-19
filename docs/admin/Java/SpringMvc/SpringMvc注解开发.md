<!-- @format -->

## SpringMvc 注解开发

> 注解是 SpringMvc 的灵魂!

### SpringMvc 注解开发步骤

1. 导入依赖并加上文件过滤
2. 创建 web.xml：选择`添加框架支持`，选择`web应用程序`，默认选择最新版本 4.0
3. 选择`项目结构`，再选`工件`，添加 lib 目录，并在 lib 目录下添加 jar 包
4. 完善 web.xml 文件(后续不用再去修改)
5. 添加 springmvc.xml 并完善(后续也不用再去修改)
6. 在 WEB-INF 下创建 jsp 文件夹，并在 jsp 文件夹下创建 test.jsp 文件
7. 创建 Controller 类，并添加注解
8. 配置 Tomcat 工件启动项目

```xml
<!-- pom.xml中文件过滤的内容 -->
<!--资源过滤：在打包jar包时，资源文件不会被打包进去-->
<build>
  <resources>
    <resource>
      <directory>src/main/java</directory>
      <includes>
        <include>**/*.properties</include>
        <include>**/*.xml</include>
      </includes>
      <filtering>false</filtering>
    </resource>
    <resource>
      <directory>src/main/resources</directory>
      <includes>
        <include>**/*.properties</include>
        <include>**/*.xml</include>
      </includes>
      <filtering>false</filtering>
    </resource>
  </resources>
</build>
```

### 注解开发实践

```xml
<!-- web.xml(不用再改) -->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
  http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
  version="4.0">
  <!--注册DispatcherServlet-->
  <servlet>
    <servlet-name>springmvc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <!--关联配置文件-->
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:springmvc.xml</param-value>
    </init-param>
    <!--启动级别：1：表示在服务器启动的时候，就加载DispatcherServlet，并初始化-->
    <load-on-startup>1</load-on-startup>
  </servlet>
  <!--
    匹配servlet的访问路径：
    /：表示匹配所有请求，包括html，js，css，不包括jsp
    /*：表示匹配所有请求，包括jsp
  -->
  <servlet-mapping>
    <servlet-name>springmvc</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
</web-app>
```

```xml
<!-- springmvc.xml(不用再改) -->
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

  <!-- 自动扫描包，让指定包下的注解生效，有Ioc管理 -->
  <context:component-scan base-package="com.haha.controller"/>
  <!--让SpringMvc不处理静态资源(.css/.js/.html/.mp3...这些文件不能走视图解析器会出问题)-->
  <mvc:default-servlet-handler/>
  <!--mvc注解支持(自动配置HandlerMapping和HandlerAdapter)-->
  <mvc:annotation-driven/>
  <!--视图解析器-->
  <bean
    class="org.springframework.web.servlet.view.InternalResourceViewResolver"
    id="InternalResourceViewResolver"
  >
    <property name="prefix" value="/WEB-INF/jsp/"/>
    <property name="suffix" value=".jsp"/>
  </bean>
</beans>
```

```jsp
<!-- test.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Title</title>
</head>
<body>
${msg}
</body>
</html>
```

```jsp
<!-- hello.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Title</title>
</head>
<body>
${msg}
</body>
</html>
```

```java
// TestController
package com.haha.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // 这个会被视图解析器解析，相当于继承了Controller类
@RequestMapping("/mvc") // 一级访问路径
public class TestController {
  @RequestMapping("/test") // 二级路径，真实访问地址是：/mvc/test
  public String test(Model model){
    model.addAttribute("msg","TestSpringMvcAnnotation!");
    return "test"; // 这个返回结果会被视图解析器处理，即跳转到test.jsp
  }

  @RequestMapping("/hello") // 二级路径，真实访问地址是：/mvc/hello
  public String hello(Model model){
    model.addAttribute("msg","HelloSpringMvcAnnotation!");
    return "hello"; // 这个返回结果会被视图解析器处理，即跳转到hello.jsp
  }
}
```
