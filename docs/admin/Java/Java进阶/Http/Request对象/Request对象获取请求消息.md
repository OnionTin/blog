## Request 对象获取请求消息

### 1. 获取请求行数据

| 方法                         | 作用              |
| ---------------------------- | ----------------- |
| String getMethod()           | 获取请求方式      |
| String getContextPath()      | 获取虚拟目录      |
| String getServletPath()      | 获取 Servlet 路径 |
| String getRequestURI()       | 获取请求 URI      |
| StringBuffer getRequestURL() | 获取请求 URL      |
| String getQueryString()      | 获取请求参数      |
| String getProtocol()         | 获取请求协议      |
| String getRemoteAddr()       | 获取客户端 IP     |

### 2. 获取请求头数据

| 方法                                        | 作用                                           |
| ------------------------------------------- | ---------------------------------------------- |
| String getHeader(String name)               | 根据请求头的名称获取请求头的值                 |
| Enumeration &lt;String&gt; getHeaderNames() | 获取所有的请求头                               |
| Enumeration getHeaders(String name)         | 根据请求头的名称获取值                         |
| int getIntHeader(String name)               | 根据请求头获取对应的值，注意值 只能是 int 类型 |

### 3. 获取请求体数据

| 方法                                | 作用                                     |
| ----------------------------------- | ---------------------------------------- |
| ServletInputStream getInputStream() | 获取请求体数据，只有 post 请求才有请求体 |
| BufferedReader getReader()          | 获取请求体数据，只有 post 请求才有请求体 |

### 方法的使用

```java
package com.Request;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.Enumeration;

@WebServlet("/ReqDemo01")
public class Demo01 extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 1. 获取请求行信息
    // String getMethod()          获取请求方式
    // String getContextPath()     获取虚拟目录
    // String getServletPath()     获取 Servlet 路径
    // String getRequestURI()      获取请求 URI
    // StringBuffer getRequestURL()获取请求 URL
    // String getQueryString()     获取请求参数
    // String getProtocol()        获取请求协议
    // String getRemoteAddr()      获取客户端 IP地址
    String method = req.getMethod();
    System.out.println(method);

    String contextPath = req.getContextPath();
    System.out.println(contextPath);

    String servletPath = req.getServletPath();
    System.out.println(servletPath);

    String requestURI = req.getRequestURI();
    System.out.println(requestURI);

    StringBuffer requestURL = req.getRequestURL();
    System.out.println(requestURL);

    String queryString = req.getQueryString();
    // 浏览器默认对URL进行了编码，所以需要使用URLDecoder解码
    String params = URLDecoder.decode(queryString,"UTF-8");
    System.out.println(params);
    // post请求时 queryString 为null，所以直接打印就行了，不能转码，否则会报错
    System.out.println(queryString);

    String protocol = req.getProtocol();
    System.out.println(protocol);

    String remoteAddr = req.getRemoteAddr();
    System.out.println(remoteAddr);
    // 结果：
    // GET || POST
    // /MyWebApp_war
    // /ReqDemo01
    // /MyWebApp_war/ReqDemo01
    // http://localhost:8080/MyWebApp_war/ReqDemo01
    // username=张三&password=123456 || null
    // HTTP/1.1
    // 0:0:0:0:0:0:0:1

    // 2. 获取请求头的信息(Accept、Connection、Content-Length、Referer、User-Agent、Cookie)
    // String getHeader(String name)                根据请求头的名称获取请求头的值
    // Enumeration <String> getHeaderNames()        获取所有的请求头
    // Enumeration <String> getHeaders(String name) 根据请求头的名称获取值
    // int getIntHeader(String name)                根据请求头获取对应的值，注意值 只能是 int 类型

    String header = req.getHeader("User-Agent");
    System.out.println(header);
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36
    //text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,
    // application/signed-exchange;v=b3;q=0.7

    String header1 = req.getHeader("Accept");
    System.out.println(header1);
    // text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7

    String header2 = req.getHeader("Connection");
    System.out.println(header2);
    // keep-alive

    String header3 = req.getHeader("Content-Length");
    System.out.println(header3);
    // null || 43(参数字符串长度数值)

    String header4 = req.getHeader("Referer");
    System.out.println(header4);
    // http://localhost:8080/MyWebApp_war/demo.html

    String header5 = req.getHeader("Cookie");
    System.out.println(header5);
    // JSESSIONID=1DC30CA8374390C718CEE5E28235215D

    Enumeration<String> headerNames = req.getHeaderNames();
    while (headerNames.hasMoreElements()) {
      String name = headerNames.nextElement();
      String value = req.getHeader(name);
      System.out.println(name + ":" + value);
      //host:localhost:8080
      //connection:keep-alive
      //sec-ch-ua:"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"
      //sec-ch-ua-mobile:?0
      //sec-ch-ua-platform:"Windows"
      //upgrade-insecure-requests:1
      //user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0
      // Safari/537.36
      //accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,
      // application/signed-exchange;v=b3;q=0.7
      //sec-fetch-site:same-origin
      //sec-fetch-mode:navigate
      //sec-fetch-user:?1
      //sec-fetch-dest:document
      //referer:http://localhost:8080/MyWebApp_war/demo.html
      //accept-encoding:gzip, deflate, br, zstd
      //accept-language:zh-CN,zh;q=0.9
      //cookie:JSESSIONID=1DC30CA8374390C718CEE5E28235215D
    }

    Enumeration<String> headerNames1 = req.getHeaders("User-Agent");
    while (headerNames1.hasMoreElements()) {
      String name = headerNames1.nextElement();
      String value = req.getHeader(name);
      System.out.println(name + ":" + value);
      // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36:null
    }

    int header6 = req.getIntHeader("Content-Length");
    System.out.println(header6);
    // -1(get) || 43(post)

    // 3. 获取请求体对象
    // ServletInputStream getInputStream() 获取请求体数据，只有 post 请求才有请求体
    // BufferedReader getReader()          获取请求体数据，只有 post 请求才有请求体
    System.out.println("-----------------------------");
    ServletInputStream sis = req.getInputStream();
    System.out.println(sis.toString());
    // org.apache.catalina.connector.CoyoteInputStream@7c206475
    int i = sis.read();
    System.out.println(i);
    // 117

    System.out.println("-----------------------------");
    BufferedReader br = req.getReader();
    System.out.println(br.toString());
    // org.apache.catalina.connector.CoyoteReader@6c796bd0
    while (br.ready()) {
      String body = br.readLine();
      String params = URLDecoder.decode(body,"UTF-8");
      System.out.println(params);
      // username=张三&password=123456
    }
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    this.doGet(req, resp);
  }
}
```
