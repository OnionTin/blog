<!-- @format -->

## SpringMvc

### 创建步骤

1. servlet 配置文件(web.xml)
2. 创建 SpringMvc 配置文件
3. 创建 Controller 类
4. 配置视图解析器
5. 创建 jsp 及文件
6. 启动查看是否 404
7. 找到`项目结构`->`工件`->在`WEB-INF`下新建`lib文件夹`添加所有的依赖

### 实践

```xml
<!-- web.xml -->
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
<!-- springmvc.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">
  <!--配置处理器映射器和适配器：处理接收前端发送的请求-->
  <!--处理器映射：DisPatcherHandler根据请求地址找到对应的Handler(找Controller)-->
  <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/>
  <!--处理器适配器：按照特定的规则去调用处理器方法，也就是执行Handler(得到ViewModel)-->
  <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/>

  <!--
  配置视图解析器：
    通过DisPatcherServlet将请求转发到指定的视图(返回ModelAndView并跳转到指定的页面)
  -->
  <bean
    class="org.springframework.web.servlet.view.InternalResourceViewResolver"
    id="InternalResourceViewResolver"
  >
    <!--前缀-->
    <property name="prefix" value="/WEB-INF/jsp/"/>
    <!--后缀-->
    <property name="suffix" value=".jsp"/>
  </bean>

  <!--配置Handler：处理器映射器根据id去查找对应的Handler，交给处理器适配器去执行-->
  <bean id="/hello" class="com.haha.controller.HelloController"/>
</beans>
```

```java
package com.haha.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// 需要实现Controller接口
public class HelloController implements Controller {
  @Override
  public ModelAndView handleRequest(
    HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse
    ) throws Exception {
    // ModelAndView：模型和视图
    ModelAndView mv = new ModelAndView();
    // 调用业务层
    // .....
    // addObject：添加一个对象，将其放在ModelAndView中
    mv.addObject("msg", "HelloSpringMvc");
    // setViewName：设置视图的名字，就是传递一个要跳转的视图
    mv.setViewName("test");// 完整的路径其实是 /WEB-INF/jsp/test.jsp
    return mv;
  }
}
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
