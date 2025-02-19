<!-- @format -->

## Shiro

### 功能

| 功能     | 描述                               |
| -------- | ---------------------------------- |
| 认证     | 用户登录                           |
| 授权     | 用户具有哪些权限                   |
| 会话管理 | 用户登录后的会话管理               |
| 加密     | 对密码进行加密                     |
| Web 支持 | 可以非常容易的集成到 web 项目中    |
| 缓存     | 缓存用户信息，减少查询数据库的次数 |
| 记住我   | 记住用户登录状态，下次自动登录     |

### 核心组件

| 组件            | 描述                                                      |
| --------------- | --------------------------------------------------------- |
| Subject         | 用户                                                      |
| SecurityManager | 管理所有用户                                              |
| Realms          | 连接数据源，通过 Realm 获取安全数据（如用户、角色、权限） |

### 导入依赖

```xml
<!--shiro-->
<dependency>
  <groupId>org.apache.shiro</groupId>
  <artifactId>shiro-spring</artifactId>
  <version>1.4.1</version>
</dependency>
<!--thymeleaf依赖-->
<dependency>
  <groupId>org.thymeleaf</groupId>
  <artifactId>thymeleaf-spring5</artifactId>
  <version>3.0.11.RELEASE</version>
</dependency>
<dependency>
  <groupId>org.thymeleaf.extras</groupId>
  <artifactId>thymeleaf-extras-java8time</artifactId>
  <version>3.0.4.RELEASE</version>
</dependency>
```

#### Shiro 和 Thymeleaf 整合的话还需要导入依赖

```xml
<dependency>
  <groupId>com.github.theborakompanioni</groupId>
  <artifactId>thymeleaf-extras-shiro</artifactId>
  <version>2.0.0</version>
</dependency>
```

#### 同时页面需要命名空间

```html
<html
  xmlns:th="http://www.thymeleaf.org"
  xmlns:shiro="http://www.thymeleaf.org/thymeleaf-extras-shiro"
></html>
```

### 配置 Shiro

```java
// ShiroConfig
package com.ths.config;

import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ShiroConfig {
  // Subject: 当前用户 ShiroFilterFactoryBean(3后写)
  // SecurityManager: 权限管理 DefaultWebSecurityManager(2再写)
  // Realm: 数据源 AuthenticatingRealm，需要自定义（1先写）
  @Bean
  public ShiroFilterFactoryBean getShiroFilterFactoryBean(
    @Qualifier("securityManager") DefaultWebSecurityManager defaultWebSecurityManager
    ){
    ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean();
    // 设置安全管理器
    bean.setSecurityManager(defaultWebSecurityManager);
    /*
    // 拦截(添加shiro的过滤器)
    anno：放行所有
    authc: 必须认证才可以访问
    user: 使用记住我或认证通过可以访问
    perms: 拥有对某个资源的权限才能访问
    role: 拥有某个角色权限才能访问
    filterMap.put("/user/add", "authc");
    filterMap.put("/user/update", "authc");
    */
    Map<String, String> filterMap = new HashMap<>();
    // 授权
    filterMap.put("/user/add", "perms[user:add]");
    filterMap.put("/user/update", "perms[user:update]");
    // 只有认证了才能访问user下边面的页面
    filterMap.put("/user/*", "authc");
    bean.setFilterChainDefinitionMap(filterMap);

    // 未登录界面
    bean.setLoginUrl("/toLogin");
    // 未授权界面
    bean.setUnauthorizedUrl("/noAuth");
    return bean;
  }
  @Bean(name="securityManager")
  public DefaultWebSecurityManager getDefaultWebSecurityManager(
      @Qualifier("userRealm") UserRealm userRealm
    ){
    DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
    // 关联Realm
    securityManager.setRealm(userRealm);
    return securityManager;
  }
  @Bean
  public UserRealm userRealm() {
    // 这里就和UserRealm联动了，进行数据认证
    return new UserRealm();
  }

  // 整合Thymeleaf需要配置
  @Bean
  public ShiroDialect getShiroDialect(){
    return new ShiroDialect();
  }
}
```

```java
// UserRealm
package com.ths.config;

import com.ths.pojo.User;
import com.ths.service.UserServiceImpl;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;

// 自定义的Realm
public class UserRealm extends AuthorizingRealm {
  // 获取数据库中的用户信息
  @Autowired
  UserServiceImpl userService;
  // 授权
  @Override
  protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
    System.out.println("执行了授权");
    // 给用户授权以及角色
    SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
    // 获取当前登陆的用户
    Subject subject = SecurityUtils.getSubject();
    User currentUser = (User) subject.getPrincipal();
    // 当前用户授权
    info.addStringPermission(currentUser.getPerms());
    // 当前用户角色
    info.addRole(currentUser.getRole());
    return info;
  }
  // 认证
  @Override
  protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token)
    throws AuthenticationException {
    System.out.println("执行了认证");
    // 获取token
    UsernamePasswordToken UserToken = (UsernamePasswordToken) token;
    // 模拟数据
    // String username = "admin";
    // String password = "123456";
    // if(!UserToken.getUsername().equals(username)){
    //  return null; // 自动抛出UnknownAccountException异常
    // }
    // return new SimpleAuthenticationInfo("", password, "");

    // 认证用户名和密码(数据库中获取)
    User user = userService.queryUserByName(UserToken.getUsername());
    if (user==null){
      return null; // 自动抛出UnknownAccountException异常
    }
    // 密码认证(默认是简单认证)
    // return new SimpleAuthenticationInfo("", user.getPassword(), "");、

    // MD5加密(md5不可逆)
    // String encryptedPassword = DigestUtils.md5Hex(user.getPassword());
    // MD5加密密码认证
    // return new SimpleAuthenticationInfo("", encryptedPassword, "");

    // 存入Shiro缓存
    Subject currentUser = SecurityUtils.getSubject();
    Session session = currentUser.getSession();
    session.setAttribute("currentUser", user);

    // MD5盐值加密(md5虽然不可逆，但他是固定的，123就是ac590...，加上盐值就不好破解了)
    // 获取盐值
    String salt = user.getSalt();
    // MD5盐值加密密码
    String encryptedPassword = DigestUtils.md5Hex(user.getPassword() + salt);
    // MD5盐值加密密码认证
    // 参数说明：
    // 1. principal:用户身份信息
    // 2. 密码
    // 3. realmName:当前realm的名称
    return new SimpleAuthenticationInfo(user, encryptedPassword, "userRealm");
  }
}
```

```java
// LoginController
package com.ths.controller;

import com.ths.pojo.User;
import com.ths.service.UserServiceImpl;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
  @Autowired
  UserServiceImpl userService;

  // 登录
  @RequestMapping("/login")
  public String login(String username, String password, Model model) {
    // 检查用户名和密码是否为空
    if (username == null||username.isEmpty()||password == null||password.isEmpty()) {
      model.addAttribute("msg", "用户名或密码不能为空");
      return "login";
    }
    // 获取当前用户
    Subject subject = SecurityUtils.getSubject();
    // 封装用户的登录数据(密码没有处理)
    // UsernamePasswordToken token = new UsernamePasswordToken(username, password);

    // 封装用户的登录数据(MD5加密密码)
    // UsernamePasswordToken token =
      // new UsernamePasswordToken(username, DigestUtils.md5Hex(password));

    // 封装用户的登录数据(MD5密码盐值加密)
    // 获取盐值（假设从服务端获取）
    String salt = getSalt(username);
    // MD5盐值加密密码
    String encryptedPassword = DigestUtils.md5Hex(password + salt);
    UsernamePasswordToken token =
      new UsernamePasswordToken(username, encryptedPassword);

    try {
      subject.login(token); // 执行登录方法
      return "index";
    }catch (UnknownAccountException e){
      model.addAttribute("msg", "用户名不存在");
      return "login";
    } catch (IncorrectCredentialsException e){
      model.addAttribute("msg", "密码错误");
      return "login";
    } catch (LockedAccountException e){
      model.addAttribute("msg", "用户被锁了");
      return "login";
    }
  }

  // 获取盐值
  private String getSalt(String username) {
    String salt = userService.getSaltByUsername(username);
    return salt;
  }

  // 注销
  @RequestMapping("/logout")
  public String logout() {
    Subject subject = SecurityUtils.getSubject();
    subject.logout();
    return "login";
  }
}
```

```java
// RouteController
package com.ths.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RouteController {
  @RequestMapping({"/", "/index"})
  public String index(Model model){
    model.addAttribute("msg", "Hello Shiro");
    return "index";
  }
  @RequestMapping("/toLogin")
  public String toLogin(){
    return "login";
  }
  @RequestMapping("/user/add")
  public String add(){
    return "user/add";
  }
  @RequestMapping("/user/update")
  public String update(){
    return "user/update";
  }

  @RequestMapping("/noAuth")
  @ResponseBody
  public String unauthorized(){
    return "您无权访问!";
  }
}
```

```html
<!DOCTYPE html>
<html
  lang="en"
  xmlns:th="http://www.thymeleaf.org"
  xmlns:shiro="http://www.w3.org/1999/xhtml"
>
  <head>
    <meta charset="UTF-8" />
    <title>index</title>
  </head>
  <body>
    <h1>index</h1>
    <h2 th:text="${msg}"></h2>
    <div shiro:hasPermission="user:add">
      <a th:href="@{/user/add}">添加</a>
    </div>
    <div shiro:hasPermission="user:update">
      <a th:href="@{/user/update}">更新</a>
    </div>
    <!-- th:if="${!session.currentUser}" -->
    <div th:if="!session.currentUser">
      <a th:href="@{/toLogin}">登录</a>
    </div>
    <div th:if="session.currentUser">
      <a th:href="@{/logout}">注销</a>
    </div>
  </body>
</html>
```
