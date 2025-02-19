## jsp 语法

### jsp 脚本

1. 格式一：`<% java 代码 %>`

   在这里写的 java 代码，翻译后存在于 servlet 类中的 server() 方法内部(类似于内部变量、方法)

2. 格式二：`<%! java 代码 %>`

   在这里写的 java 代码，翻译后存在于 servlet 类中的成员位置上(类似于成员变量、方法)

3. 格式三：`<%= java 代码 %>`

   在这里写的 java 代码翻译后会打印到浏览器页面上

### jsp 指令

1. page 指令：主要是用来对 jsp 页面进行各种配置

```java
<!--
  contentType：设置jsp翻译成servlet时，服务器告诉浏览器响应数据的MIME类型和编码方式
  pageEncoding：设置jsp翻译成servlet时使用的编码格式
  import：导包的
  isErrorPage：设置为true，就可以在翻译成的servlet对象中使用exception对象；默认为false
  errorPage：设置错误页面，一般都设置成 errorPage="error.jsp"
  isELIgnored：设置el表达式是否可用，默认为false
-->
<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="java.util.Date" %>

<%@ page errorPage="error.jsp" %>

<%@ page isELIgnored="true" %>
```

2. include 指令：主要用来包含其他页面

```java
<!--静态包含：被包含的文件被拼到包含的servlet里边，只生成一个java文件，节省内存-->
<%@ include file="header.jsp" %>
<!--动态包含：一样的效果，但是被包含的文件单独生成了一个java文件-->
<jsp:include page="header.jsp"></jsp:include>
```

3. taglib 指令：主要用来引入 jstl 标签库

```java
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

### jsp 注释

1. 方式一：`<!-- 被注释的代码 -->`

2. 方式二(推荐使用，因为注释的内容不在 servlet 源码中，不占内存)：`<%-- 备注释的代码 --%>`

### jsp 九大`内置`对象

| 对象名      | 对象的真实类型      | 作用                                                       |
| ----------- | ------------------- | ---------------------------------------------------------- |
| pageContext | PageContext         | 四大域对象之一，范围是当前 jsp 页面，实现数据的共享        |
| request     | HttpServletRequest  | 四大域对象之一，范围是一次请求的范围，实现数据共享         |
| session     | HttpSession         | 四大域对象之一，范围是一次会话的范围，也是用来实现数据共享 |
| application | ServletContext      | 四大域对象之一，范围是整个项目的范围，也是实现数据共享     |
| response    | HttpServletResponse | 响应对象，可以设置响应头、响应状态码、响应体内容等         |
| config      | ServletConfig       | 用来配置 Servlet 参数，获取参数的                          |
| out         | JspWriter           | 和 PrintWriter 功能几乎一样，向页面写内容的                |
| page        | Object              | jsp 页面翻译成 Servlet 那个对象，.java .classes            |
| exception   | Throwable           | 异常对象，可以设置异常信息                                 |

### EL 表达式

> EL 表达式：目的是为了简化 jsp 语法
>
> 格式：`${表达式}`

1. 运算符：

> 算术运算符：`+ - \* / %`
>
> 关系运算符：`> < >= <= == !=`
>
> 逻辑运算符：`&&(and)、||(or)、!(not)、!true(not true)`
>
> 空运算符：`empty`
>
> 用来判断字符串、数组、集合中的数据是否为 null 或者是长度是否为 0

2. 获取值：

> 获取值的前提是要先有只值，这个值是事先存储在域中的，可以通过域对象名称来获取，其中域名称可以省略；
>
> 当域名称被省略时，他会按照 pageContext -> request - > session - > application 的顺序(从小到大)依次查找域对象，直到找到为止。
>
> `获取域对象中的值：${域对象名称.键名}`
>
> `获取域对象中的值：${键名}`
>
> `获取域对象中的值：${键名.属性名}`
>
> `获取域对象中的值：${键名[索引]}`
>
> `获取域对象中的值：${键名['属性名']}`
>
> `获取域对象中的值：${键名[索引].属性名}`

| 域对象      | 对应的域对象名称 |
| ----------- | ---------------- |
| pageContext | pageScope        |
| request     | requestScope     |
| session     | sessionScope     |
| application | applicationScope |

```java
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="com.domain.Student" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head></head>
<body>
<%
  // 存取值
  request.setAttribute("name", "张三");
  session.setAttribute("age", 18);

  ArrayList aaa = new ArrayList<String>();
  aaa.add("aaa");
  aaa.add("bbb");
  aaa.add("ccc");
  pageContext.setAttribute("list", aaa);


  HashMap<String, String> map = new HashMap<>();
  map.put("username", "xiaoming");
  map.put("password", "123456");
  application.setAttribute("map", map);

  Student s = new Student("张三", 18);
  request.setAttribute("student", s);

  HashMap<String, Student> students = new HashMap<>();
  students.put("1", new Student("张三", 18));
  students.put("2", new Student("李四", 19));
  request.setAttribute("students", students);

  // 判断是否为空
  String s1 = "";
  String s2 = null;
  ArrayList p1 = new ArrayList<>();
  ArrayList p2 = new ArrayList<>();
  p2.add(1);
  request.setAttribute("s1", s1);
  request.setAttribute("s2", s2);
  request.setAttribute("p1", p1);
  request.setAttribute("p2", p2);
%>

${ requestScope.name }<br/>
<%--页面上展示：张三--%>
${ sessionScope.age }<br/>
<%--页面上展示：18--%>

${ pageScope.list }<br/>
<%--页面上展示：[aaa,bbb,ccc]--%>
${ list[0] }<br/>
<%--页面上展示：aaa--%>

${ applicationScope.map }<br/>
<%--页面上展示：{password=123456, username=xiaoming}--%>
${ map.password }<br/>
<%--页面上展示：123456--%>
${ map['password'] }<br/>
<%--页面上展示：123456--%>

${ requestScope.student }<br/>
<%--页面上展示：Student{name='张三', age=18}--%>
${ student.name }<br/>
${ student.aaa }<br/>
<%--页面上展示：张三--%>
<%--页面上展示：约吗？ --%>

${ requestScope.students }<br/>
<%--页面上展示：{1=Student{name='张三', age=18}, 2=Student{name='李四', age=19}}--%>
${ students.get("2") }<br/>
<%--页面上展示：Student{name='李四', age=19}--%>
${ students.get("2").age }<br/>
<%--页面上展示：19--%>

${empty s1}
<%--true--%>
${not empty s2}
<%--false--%>
${empty p1}
<%--true--%>
${empty p2}
<%--false--%>
</body>
</html>
```

```java
// Student.java
package com.domain;

public class Student {
  private String name;
  private int age;

  public Student() {
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public Student(String name, int age) {
    this.name = name;
    this.age = age;
  }

  @Override
  public String toString() {
    return "Student{" +
        "name='" + name + '\'' +
        ", age=" + age +
        '}';
  }

  public String getAaa() {
    return "约吗？";
  }
}
```
