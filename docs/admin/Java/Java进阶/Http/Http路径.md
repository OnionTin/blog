## Http 路径

### 绝对路径(好用)

以前：

1. 以盘符开始的路径就称为绝对路径(比如：`C:\aaa\bbb\ccc.txt`)

现在：

1. 以`/`开头的路径(/项目的虚拟路径+资源路径)

2. 以 http: 开头的路径(http://协议+端口号+项目的虚拟路径+资源路径)

```html
<!--正常使用的案例-->
<a href="/index.html">绝对路径</a>
<img src="/img/1.jpg" alt="" />
<form action="/servlet01" method="post"></form>
<link rel="stylesheet" href="/css/1.css" />
<script src="/js/1.js"></script>
<a href="http://localhost:8080/index.html">绝对路径</a>
<img src="http://localhost:8080/img/1.jpg" alt="" />
<form action="http://localhost:8080/login.html" method="post"></form>
<link rel="stylesheet" href="http://localhost:8080/css/1.css" />
<script src="http://localhost:8080/js/1.js"></script>
```

### 绝对路径的问题

转发的时候，不管哪种绝对路径，使用全路径都会 404。因为 Tomcat 在转发的时候，默认已经帮我们添加上了`/项目的虚拟路径`，所以转发的时候，只能用`/资源路径`

```java
// 这两种都不行(app: 项目的虚拟路径， index.html：资源路径)
request.getRequestDispatcher("/app/index.html").forward(request, response);
request.getRequestDispatcher(
  "http://localhost:8080/app/index.html"
  ).forward(request, response);

// 只有这种可以
request.getRequestDispatcher("/index.html").forward(request, response);
```

### 相对路径

以前：

1. `./` 代表当前路径，其中`./`可以省略不写的
2. `../` 代表上一级目录

现在：

1. 以`./`开头的路径，还是代表当前路径
2. 以`../`开头的路径，还是代表上一级目录

> 现在和以前，查找的规则变了，现在首先要知道两个资源的绝对路径，之后，根据当前的资源所在路径，按照以前的相对路径的规则，找到要匹配的资源

举例：

```html
<!-- 
当前资源的绝对路径是:
http://localhost:8080/app/html/index.html

目标资源的绝对路径是:
http://localhost:8080/app/css/1.css

那么，相对路径就是: -->
<link rel="stylesheet" href="../css/1.css" />
```

### 相对路径转发

相对路径转发也是按照上面的规则

```java
@WebServlet("/servlet1")
public class Servlet01 extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    // 转发
    request.getRequestDispatcher("./servlet2").forward(request, response);
  }
}
@WebServlet("/aaa/servlet1")
public class Servlet01 extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    // 转发
    request.getRequestDispatcher("../servlet2").forward(request, response);
  }
}
```
