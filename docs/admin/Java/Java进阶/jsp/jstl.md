## jstl

> jstl 是 Jsp 标准标签函式库，用来替代 Java 代码的，提高了页面的维护性

### jslt 如何使用

1. 导入相关的 jar 包(依赖)
2. 再 jsp 页面上引入指令
3. 在 jsp 页面中写 jstl 标签库

### 常见的标签

| 标签        | 作用     |
| ----------- | -------- |
| if 标签     | 条件判断 |
| c:forEach   | 循环     |
| c:forTokens | 循环     |
| c:choose    | 分支选择 |
| c:when      | 分支选择 |
| c:otherwise | 分支选择 |
| c:out       | 输出     |
| c:set       | 赋值     |
| c:remove    | 删除     |
| c:catch     | 异常处理 |
| c:import    | 引入     |

```java
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.HashMap" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
  <title>Title</title>
</head>
<body>
<!--条件判断一：使用c:set设置变量 -->
<c:set var="num" value="${3}"/>
<c:choose>
  <c:when test="${num == 3}">
    约
  </c:when>
  <c:otherwise>
    不约
  </c:otherwise>
</c:choose>
<%--条件判断二：使用request.setAttribute设置变量--%>
<%
  int num = 3;
  request.setAttribute("num", num);
%>
<c:if test="${num == 3}">约</c:if>
<c:if test="${num != 3}">不约</c:if><br>

<%--
forEach 遍历
var: 定义的变量
begin: 从几开始
end: 到几结束
step: 步长
varStatus: 遍历状态
  index: 索引
  count: 遍历次数
items: 被遍历的容器(数组、单双例集合)
--%>
<c:forEach var="num" begin="1" end="10" step="1" varStatus="status">
  ${num}----${status.index}----${status.count}<br>
  <c:out value="${num}"/>
</c:forEach>

<%
  int[] arr = {1, 2, 3, 4, 5};
  request.setAttribute("arr", arr);

  ArrayList<String> list = new ArrayList<>();
  list.add("aaa");
  list.add("bbb");
  request.setAttribute("list", list);

  HashMap<String, String> map = new HashMap<>();
  map.put("username", "xiaoming");
  map.put("password", "123456");
  request.setAttribute("map", map);
%>
<c:forEach var="num" step="1" varStatus="status" items="${arr}">
  ${num}----${status.index}----${status.count}<br>
</c:forEach>
<c:forEach var="a" items="${list}">
  <c:out value="${a}"/><br>
</c:forEach>
<c:forEach var="b" items="${map}">
  ${b.key}----${b.value}<br>
  <c:out value="${b}"/><br>
</c:forEach>
</body>
</html>
```
