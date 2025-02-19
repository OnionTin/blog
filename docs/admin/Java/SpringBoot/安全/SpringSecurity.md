<!-- @format -->

## SpringSecurity

> SpringSecurity([spring-security5.2.0 官方文档](https://docs.spring.io/spring-security/site/docs/5.2.0.RELEASE/reference/htmlsingle/#jc-authentication)) 和 Shiro 都是框架，除了类和名字不一样，他俩很像，功能也差不多，Security 是 Spring 家族的，功能比 Shiro 强大，而且配置也简单。之前我们使用过滤器、拦截器，这些需要大量的原生代码。

Spring Security 的主要功能包括：

### 主要功能

| 功能     | 功能                          | 功能                     |
| -------- | ----------------------------- | ------------------------ |
| 功能权限 | 用户认证                      | 记住我                   |
| 访问权限 | 用户授权                      | 会话管理(超时、并发会话) |
| 菜单权限 | 安全防护(SQL 注入、XSS、CSRF) | 退出登录                 |

### 认证和授权

> SpringSecurity，基于 Aop 横切，所以安装依赖后，会自动拦截所有请求，进行认证和授权。

```xml
<!--spring-security-->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

```java
// 进行认证和授权
package com.ths.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter { // Aop横切
  // 链式编程
  // 授权
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    // 关闭csrf(默认开启的，目的是防止被攻击，这块关闭是要让post和get请求都能走通)
    http.csrf().disable();
    // 注释掉重写自定义
    http.authorizeRequests()
        // 登录页，所有人可以访问
        .antMatchers("/login.html").permitAll()
        // 首页必须登录后才能访问
        .antMatchers("/").authenticated()
        // 其他页面的访问权限
        .antMatchers("/emp/**").hasRole("vip1")
        .antMatchers("/widget","/widget.html").hasRole("vip1")
        .antMatchers("/button","/button.html").hasRole("vip2")
        .antMatchers("/element","/element.html").hasRole("vip2")
        .antMatchers("/typography", "/typography.html").hasRole("vip2")
        .antMatchers("/chart","/chart.html").hasRole("vip3")
        .antMatchers("/form", "/form.html").hasRole("vip3")
        .antMatchers("/table", "/table.html").hasRole("vip3");

    // 没有权限跳转到登录页(http://localhost:8080/login跳转到该页面)
    // loginPage("/xxx"): 自定义登录页
    // usernameParameter("username"): 自定义用户名参数
    // passwordParameter("password"): 自定义密码参数
    // defaultSuccessUrl("/home"): 登录成功跳转的页面
    // loginProcessingUrl("/xxx"): 自定义登录处理url
    http.formLogin()
        .loginPage("/login")
        .usernameParameter("username")
        .passwordParameter("password")
        .loginProcessingUrl("/login")
        .defaultSuccessUrl("/home");
    // 注销(http://localhost:8080/logout跳转到该页面)
    http.logout().logoutSuccessUrl("/login");
    // 开启记住我功能(默认开启了cookie，且默认保存两周)
    http.rememberMe().rememberMeParameter("remember");
  }
  // 认证(获取用户或者权限)
  // new BCryptPasswordEncoder(): 密码加密的一种方式,密码太简单会报错
  @Override
  public void configure(AuthenticationManagerBuilder auth) throws Exception {
    // 内存中配置用户(正常需要数据库中获取并配置用户)
    auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
        .withUser("admin").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1","vip2", "vip3")
        .and()
        .withUser("root").password(new BCryptPasswordEncoder().encode("123456")).roles("vip2")
        .and()
        .withUser("guest").password(new BCryptPasswordEncoder().encode("123456")).roles("vip3");
  }
}
```

#### 如果整合 SpringSecurity 和 Thymeleaf，还需要引入依赖

```xml
<!--SpringSecurity和Thymeleaf整合包-->
<dependency>
  <groupId>org.thymeleaf.extras</groupId>
  <!--页面上导入命名空间不报错：xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5"-->
  <artifactId>thymeleaf-extras-springsecurity5</artifactId>
  <version>3.0.4.RELEASE</version>
</dependency>
```

```html
<!-- 菜单页面 -->
<!DOCTYPE html>
<html
  lang="en"
  xmlns:th="http://www.thymeleaf.org"
  xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5"
>
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <div>
      <!--侧边栏-->
      <div class="sidebar pe-4 pb-3" th:fragment="sidebar">
        <nav class="navbar bg-light navbar-light">
          <a href="home.html" class="navbar-brand mx-4 mb-3">
            <h3 class="text-primary">
              <i class="fa fa-hashtag me-2"></i>Admin System
            </h3>
          </a>
          <!--thymeleaf与SpringSecurity整合，通过权限判断菜单是否展示-->
          <!--没生效，因为要求SpringBoot最高版本是2.1.0以下的，降级就生效了，但是代码没错-->
          <!--sec:authorise="isAuthenticated()"：判断是否登录-->
          <!--sec:authentication="name"：用户名-->
          <!--sec:authentication="principal.authorities"：角色-->
          <!--sec:authorise="hasRole('vip1')"：如果角色是vip1-->
          <div class="d-flex align-items-center ms-4 mb-4">
            <div class="position-relative">
              <img
                class="rounded-circle"
                th:src="@{/picture/user.jpg}"
                alt=""
                style="width: 40px; height: 40px;"
              />
              <div
                class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"
              ></div>
            </div>
            <div class="ms-3" sec:authorize="isAuthenticated()">
              <h6 class="mb-0" sec:authentication="name"></h6>
              <span
                sec:authentication="principal.authorities"
                id="data-roles"
              ></span>
            </div>
          </div>
          <div class="navbar-nav w-100">
            <!--接收组件传递的参数-->
            <a
              href="home.html"
              th:class="${activePage == 'home.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}"
              ><i class="fa fa-home me-2"></i>Home</a
            >
            <a
              sec:authorise="hasRole('vip1')"
              th:href="@{/employeeList}"
              th:class="${activePage == 'list.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}"
              ><i class="fa fa-tachometer-alt me-2"></i>List</a
            >
            <div class="nav-item dropdown">
              <a
                href="#"
                data-bs-toggle="dropdown"
                th:class="
            ${(activePage == 'button.html' || activePage == 'typography.html' || activePage == 'element.html')
            ? 'nav-link dropdown-toggle active show'
            : 'nav-link dropdown-toggle'}"
              >
                <i class="fa fa-laptop me-2"></i>Elements
              </a>
              <div
                sec:authorise="hasRole('vip1','vip2')"
                th:class="
            ${(activePage == 'button.html' || activePage == 'typography.html' || activePage == 'element.html')
            ? 'dropdown-menu bg-transparent border-0 show'
            : 'dropdown-menu bg-transparent border-0'}"
              >
                <a
                  href="button.html"
                  th:class="${activePage == 'button.html' ? 'dropdown-item active' : 'dropdown-item'}"
                  >Buttons</a
                >
                <a
                  href="typography.html"
                  th:class="${activePage == 'typography.html' ? 'dropdown-item active' : 'dropdown-item'}"
                  >Typography</a
                >
                <a
                  href="element.html"
                  th:class="${activePage == 'element.html' ? 'dropdown-item active' : 'dropdown-item'}"
                  >Other Elements</a
                >
              </div>
            </div>
            <a
              sec:authorise="hasRole('vip1')"
              href="widget.html"
              th:class="${activePage == 'widget.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}"
              ><i class="fa fa-th me-2"></i>Widgets</a
            >
            <a
              sec:authorise="hasRole('vip1', 'vip3')"
              href="form.html"
              th:class="${activePage == 'form.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}"
              ><i class="fa fa-keyboard me-2"></i>Forms</a
            >
            <a
              sec:authorise="hasRole('vip1', 'vip3')"
              href="table.html"
              th:class="${activePage == 'table.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}"
              ><i class="fa fa-table me-2"></i>Tables</a
            >
            <a
              sec:authorise="hasRole('vip1', 'vip3')"
              href="chart.html"
              th:class="${activePage == 'chart.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}"
              ><i class="fa fa-chart-bar me-2"></i>Charts</a
            >
          </div>
        </nav>
      </div>
      <!--顶部导航栏-->
      <nav
        class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0"
        th:fragment="navbar"
      >
        <a href="index1.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
        </a>
        <a href="#" class="sidebar-toggler flex-shrink-0">
          <i class="fa fa-bars"></i>
        </a>
        <form class="d-none d-md-flex ms-4">
          <input
            class="form-control border-0"
            type="search"
            placeholder="Search"
          />
        </form>
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                class="rounded-circle me-lg-2"
                th:src="@{/picture/user.jpg}"
                alt=""
                style="width: 40px; height: 40px;"
              />
              <span
                class="d-none d-lg-inline-flex"
                sec:authentication="name"
              ></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
            >
              <a th:href="@{/logout}" class="dropdown-item">Log Out</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </body>
</html>
```

```java
// 菜单
package com.ths.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RouteController {
  @RequestMapping({"", "/index"})
  private String signIn() {
    return "index";
  }
  @RequestMapping("/login")
  private String login() {
    return "login";
  }
  @RequestMapping("/home")
  public String home() {
    return "home";
  }

  @RequestMapping("/button")
  private String button() {
    return "button";
  }

  @RequestMapping("/chart")
  private String chart() {
    return "chart";
  }

  @RequestMapping("/element")
  private String element() {
    return "element";
  }

  @RequestMapping("/form")
  private String form() {
    return "form";
  }

  @RequestMapping("/table")
  private String table() {
    return "table";
  }

  @RequestMapping("/typography")
  private String typography() {
    return "typography";
  }

  @RequestMapping("/widget")
  private String widget() {
    return "widget";
  }
}
```

```java
// config
package com.ths.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// 自定义Mvc扩展
@Configuration // 配置类，目的是让SpringBoot进行扫描 MyMvcConfig 这个类
public class MyMvcConfig implements WebMvcConfigurer {
  // 自定义视图跳转
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    // 添加视图跳转
    registry.addViewController("/").setViewName("index");
    registry.addViewController("/login.html").setViewName("login");
    registry.addViewController("/home.html").setViewName("home");
    registry.addViewController("/button.html").setViewName("button");
    registry.addViewController("/chart.html").setViewName("chart");
    registry.addViewController("/form.html").setViewName("form");
    registry.addViewController("/element.html").setViewName("element");
    registry.addViewController("/table.html").setViewName("table");
    registry.addViewController("/widget.html").setViewName("widget");
    registry.addViewController("/typography.html").setViewName("typography");
    registry.addViewController("/list.html").setViewName("emp/list");
  }
  // 自定义一个国际化解析器
  @Bean
  public LocaleResolver localeResolver(){
    return new MyLocaleResolver();
  }
}
```

```java
// 国际化
package com.ths.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;

// 自定义一个LocaleResolver(国际化解析器)
public class MyLocaleResolver implements LocaleResolver {
  // 解析请求
  @Override
  public Locale resolveLocale(HttpServletRequest request) {
    // 获取请求中携带的参数
    String language = request.getParameter("l");
    Locale locale = Locale.getDefault(); // 如果没有就是用默认的语言
    // 如果携带了参数，就解析参数
    if (!StringUtils.isEmpty(language)){
      String[] split = language.split("_"); // zh_CN || en_US
      // 国家和地区
      locale = new Locale(split[0], split[1]);
    }
    return locale;
  }

  @Override
  public void setLocale(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Locale locale) {

  }
}
```
