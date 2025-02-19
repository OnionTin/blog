<!-- @format -->

## 回顾 Servlet

### Servlet 详细步骤

1. 创建一个 Maven 项目，什么模板都不用选
2. 在 pom.xml 中添加 servlet 的依赖

```xml
<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.3.9</version>
  </dependency>
  <dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
  </dependency>
  <dependency>
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>jsp-api</artifactId>
    <version>2.2</version>
  </dependency>
  <dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
  </dependency>
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.20</version>
  </dependency>
</dependencies>
```

3. 删除主项目的 src
4. 在主项目中创建子模块，在子模块的 pom.xml 中添加 servlet 的依赖
5. 在`子模块的项目名上`右键选择添加框架支持，选择 Web 应用程序，此时会发现多了一个 web 包
6. 创建一个 servlet

```java
package com.haha.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloSpringMvc extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 1.获取前端参数
    String method = req.getParameter("method");
    if ("add".equals(method)) {
      req.getSession().setAttribute("msg", "执行了add方法");
    } else if ("delete".equals(method)) {
      req.getSession().setAttribute("msg", "执行了delete方法");
    }
    // 2.调用业务层

    // 3. 响应结果，页面跳转
    // req.getRequestDispatcher("/WEB-INF/jsp/test.jsp").forward(req, resp);
    req.getRequestDispatcher("from.jsp").forward(req, resp);
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    doGet(req, resp);
  }
}
```

7. 在 web 包下创建 from.jsp(其实要不要都行)

```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Title</title>
</head>
<body>

<form action="/hello" method="post">
  <input type="text" name="method">
  <input type="submit">
</form>

</body>
</html>
```

8. 在 web 包下的 WEB-INF 下再创建一个 jsp 的包
9. 在 jsp 包下创建一个 test.jsp

```jsp
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

10. 配置 servlet( WEB-INF 下 web.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
   http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
   version="4.0"
  >
  <servlet>
    <servlet-name>hello</servlet-name>
    <servlet-class>com.haha.servlet.HelloSpringMvc</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>hello</servlet-name>
    <url-pattern>/hello</url-pattern>
  </servlet-mapping>

  <session-config>
    <!--30分钟-->
    <session-timeout>
      30
    </session-timeout>
  </session-config>

  <welcome-file-list>
    <welcome-file>index.jsp</welcome-file>
  </welcome-file-list>
</web-app>
```

11. 点击项目配置，弹框后点击"+"，选择 Tomcat
12. 之后切换到"部署"，右下角有一个"fix"按钮，点击后即可
13. 配置应用程序上下文，配置为"/"就行
14. 启动 Tomcat
