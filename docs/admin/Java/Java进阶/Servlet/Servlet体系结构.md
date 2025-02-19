## Servlet 体系结构

> Servlet 接口：
>
> javax.servlet.Servlet 接口，通用的顶级接口

> GenericServlet 类：
>
> javax.servlet.GenericServlet 类，实现了 Servlet 接口，是一个通用的抽象类

> HttpServlet 类：
>
> javax.servlet.http.HttpServlet 类，继承了 GenericServlet 类，实现了 HttpServletRequest 接口，是一个抽象类

### Servlet 的多种实现方式

#### 1. 实现 Servlet 接口，并重写方法

```java
package com.Servlet;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/ServletDemo03")
public class ServletDemo03 implements Servlet {
  @Override
  public void init(ServletConfig servletConfig) throws ServletException {

  }

  @Override
  public ServletConfig getServletConfig() {
    return null;
  }

  @Override
  public void service(ServletRequest sReq, ServletResponse sRes)
    throws ServletException, IOException {

  }

  @Override
  public String getServletInfo() {
    return null;
  }

  @Override
  public void destroy() {

  }
}
```

#### 2. 继承 GenericServlet 类，并重写 service 方法

```java
package com.Servlet;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/ServletDemo04")
public class ServletDemo04 extends GenericServlet {
  @Override
  public void service(ServletRequest sReq, ServletResponse sRes)
    throws ServletException, IOException {

  }
}
```

#### 3. 继承 HttpServlet 类, 并重写 doGet 或 doPost 方法(推荐)

```java
package com.Servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/ServletDemo05")
public class ServletDemo05 extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
      System.out.println("get请求");
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
      System.out.println("post请求");
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form
      method="post"
      action="http://localhost:8080/MyWebApp_war/ServletDemo05"
    >
      用户名： <input type="text" name="username" /> 密&nbsp;&nbsp;码：<input
        type="password"
        name="password"
      />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```
