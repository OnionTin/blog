## thymeleaf 语法

> thymeleaf 和 vue 一样，都是模板引擎，用于在 html 中插入数据；只是 thymeleaf 的开头是 th:，而 vue 是 v-

### 表达式

| 语法       | 说明         | 语法        | 说明         | 语法      | 说明         | 语法     | 说明                                  |
| ---------- | ------------ | ----------- | ------------ | --------- | ------------ | -------- | ------------------------------------- |
| ${...}     | 变量表达式   | [[...]]     | 文本         | th:if     | 判断         | th:href  | 设置 href 属性                        |
| \*{...}    | 选择表达式   | [(...)]     | 属性         | th:unless | 判断         | th:src   | 设置 src 属性                         |
| #{...}     | 消息表达式   | [()]        | 消息         | th:switch | 判断         | th:attr  | 设置任意属性                          |
| @{...}     | URL 表达式   | [()]        | URL          | th:case   | 判断         | th:class | 设置 class 属性                       |
| ~{...}     | 片段表达式   | [()]        | 片段         | th:each   | 遍历         | th:style | 设置 style 属性                       |
| th:message | 设置文本内容 | th:messages | 设置文本内容 | th:text   | 设置文本内容 | th:utext | 同 th:tex，唯一区别是会转义 html 标签 |

#### 举例：

```html
<div th:text="${user.name}"></div>
<div th:utext="<h1>${user.name}</h1>"></div>
<div th:each="user:${users}" th:text="${user}"></div>
<div th:each="user:${users}">[[${user}]]</div>
<div th:if="${user.age > 18}"></div>
<div th:src="@{${user.avatar}}"></div>
<div th:fragment="userList">
  <ul>
    <li th:each="user:${users}">[[${user.name}]]</li>
  </ul>
</div>
<!-- 条件 -->
<div th:if="${user.age > 18}">成年</div>
<div th:unless="${user.age > 18}">未成年</div>
<div th:switch="${user.sex}">
  <p th:case="1">男</p>
  <p th:case="2">女</p>
  <p th:case="*">未知</p>
</div>
<!-- 循环 -->
<ul>
  <li th:each="user:${users}">[[${user.name}]]</li>
</ul>
<!-- 属性设置 -->
<a th:href="@{/user/list}">用户列表</a> <img th:src="@{/user/avatar}" />
<div th:attr="title=${user.name}, data-id=${user.id}"></div>
<div
  th:attr="
    title=${user.name},
    data-id=${user.id},
    class=${user.sex == 1 ? 'man' : 'woman'}
  "
></div>
<div th:class="${user.sex == 1 ? 'man' : 'woman'}"></div>
<div th:style="'color: ' + (${user.sex == 1 ? 'blue' : 'red'})"></div>
<!-- 消息表达式属性赋值 -->
<div th:text="#{user.name}"></div>
<div th:text="#{user.name(${user.name})}"></div>
```

### 表达式对象

| 语法      | 说明                     | 语法            | 说明                 |
| --------- | ------------------------ | --------------- | -------------------- |
| #ctx      | web context 对象         | #session        | HttpSession 对象     |
| #vars     | 变量对象                 | #servletContext | ServletContext 对象  |
| #locale   | locale 对象              | #execInfo       | 表达式解析器相关信息 |
| #request  | HttpServletRequest 对象  | #config         | 配置对象             |
| #response | HttpServletResponse 对象 | #objects        | 全部对象             |

#### 举例：

```html
<div th:text="${#ctx.request.contextPath}"></div>
<div th:text="${#vars.user.name}"></div>
<div th:text="${#locale.language}"></div>
<div th:text="${#request.getAttribute('user')}"></div>
<div th:text="${#response.getHeader('Content-Type')}"></div>
<div th:text="${#session.getAttribute('user')}"></div>
<div th:text="${#servletContext.getAttribute('user')}"></div>
<div th:text="${#execInfo.templateName}"></div>
<div th:text="${#config.maxUploadSize}"></div>
```

### 表达式运算符

| 语法 | 说明       | 语法 | 说明           |
| ---- | ---------- | ---- | -------------- |
| +    | 加法运算符 | !=   | 不等于运算符   |
| -    | 减法运算符 | <    | 小于运算符     |
| \*   | 乘法运算符 | >    | 大于运算符     |
| /    | 除法运算符 | <=   | 小于等于运算符 |
| %    | 取模运算符 | >=   | 大于等于运算符 |
| ==   | 等于运算符 | !    | 逻辑非运算符   |

#### 举例：

```html
<div th:text="${user.age % 2}"></div>
<div th:text="${user.age != 18}"></div>
<div th:text="${!user.sex}"></div>
```

### 片段表达式

| 语法       | 说明     | 语法        | 说明     |
| ---------- | -------- | ----------- | -------- |
| th:insert  | 插入片段 | th:fragment | 定义片段 |
| th:replace | 替换片段 | th:remove   | 移除片段 |
| th:include | 包含片段 |

#### 举例：

```html
<!-- 定义片段 -->
<div th:fragment="userList">
  <ul>
    <li th:each="user:${users}">[[${user.name}]]</li>
  </ul>
</div>
<!-- 插入片段 -->
<div th:insert="~{userList::userList}"></div>
<!-- 替换片段 -->
<div th:replace="~{userList::userList}"></div>
<!-- 包含片段 -->
<div th:include="~{userList::userList}"></div>
<!-- 移除片段 -->
<div th:remove="all">移除所有</div>
<div th:remove="tag">移除标签</div>
<div th:remove="body">移除内容</div>
<div th:remove="all-but-first">移除除第一个外的所有</div>
<div th:remove="all-but-last">移除除最后一个外的所有</div>
<div th:remove="none">不移除</div>
```

### 真实案例

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="UTF-8" />
    <title>首页</title>
  </head>
  <body>
    <!--/*@thymesVar id="msg" type=""*/-->
    <div th:text="${msg}"></div>
    <div th:utext="${msg}"></div>
    <hr />
    <!--/*@thymesVar id="url" type=""*/-->
    <a th:href="@{${url}}">百度</a>
    <hr />
    <!--/*@thymesVar id="lists" type=""*/-->
    <div th:each="list:${lists}" th:text="${list}"></div>
    <div th:each="list:${lists}">[[${list}]]</div>
  </body>
</html>
```

```java
package com.ths.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;

// 在templates目录下的页面只能通过controller来跳转
// 需要thymeleaf模板引擎的支持
@Controller
public class IndexController {
  @GetMapping("/a")
  public String index(Model model){
    String[] arr = {"java","python","c++"};
    model.addAttribute("msg","<h1>Hello Thymeleaf</h1>");
    model.addAttribute("url","https://www.baidu.com");
    model.addAttribute("lists", Arrays.asList(arr));
    return "index";
  }
}
```
