## 注解实现 Aop

> 使用注解的方式实现，其实也分多种方式，比如使用配置文件，还是使用@Component 注解

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xmlns:context="http://www.springframework.org/schema/context"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/aop
  https://www.springframework.org/schema/aop/spring-aop.xsd
  http://www.springframework.org/schema/context
  http://www.springframework.org/schema/context/spring-context.xsd">
  <!--注册bean-->
  <bean id="userService" class="com.haha.service.UserServiceImpl"></bean>
  <bean id="beforeLog" class="com.haha.log.BeforeLog"></bean>
  <bean id="afterLog" class="com.haha.log.AfterLog"></bean>

  <!--使用注解(1)-->
  <bean id="annotationPointCut" class="com.haha.diy.AnnotationPointCut"></bean>
  <!--开启注解支持-->
  <aop:aspectj-autoproxy/>

  <!--使用注解(2)-->
  <!--注解的支持：注意上边需要引入的约束-->
  <context:annotation-config />
  <context:component-scan base-package="com.haha.diy"/>
  <aop:aspectj-autoproxy/>
</beans>
```

```java
// UserService
package com.haha.service;

public interface UserService {
  public void add();
  public void delete();
  public void update();
  public void query();
}

// UserServiceImpl
package com.haha.service;

public class UserServiceImpl implements UserService{

  @Override
  public void add() {
    System.out.println("add");
  }

  @Override
  public void delete() {
    System.out.println("delete");
  }

  @Override
  public void update() {
    System.out.println("update");
  }

  @Override
  public void query() {
    System.out.println("query");
  }
}

// 自定义注解类
package com.haha.diy;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect // 表示当前类是一个切面类
@Component // 使用注解导入当前类
public class AnnotationPointCut {
  // @Before: 前置通知
  // 切入点表达式：找到要代理的具体方法
  @Before("execution(* com.haha.service.UserServiceImpl.*(..))")
  public void beforeMethod() {
    System.out.println("方法执行之前");
  }

  @After("execution(* com.haha.service.UserServiceImpl.*(..))")
  public void afterMethod() {
    System.out.println("方法执行之后");
  }

  // 在环绕通知中，我们可以给定一个参数，代表我们要获取的切入点方法
  @Around("execution(* com.haha.service.UserServiceImpl.*(..))")
  public void aroundMethod(ProceedingJoinPoint joinPoint) throws Throwable {
    System.out.println("环绕通知，通知前我还能做处理");
    // 执行通知方法中
    Object obj = joinPoint.proceed();
    System.out.println("环绕通知，通知后我还能做处理");
  }
}
```

```java
import com.haha.service.UserService;
import com.haha.service.UserServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestAop1 {
  public static void main(String[] args) {
    ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
    // 动态代理，代理的是接口，不再是实现类了
    // UserServiceImpl user = (UserServiceImpl)context.getBean("userService");
    UserService user = (UserService)context.getBean("userService");
    user.add();
    // 结果：
    // 环绕通知，通知前我还能做处理
    // 方法执行之前
    // add
    // 方法执行之后
    // 环绕通知，通知后我还能做处理
  }
}
```
