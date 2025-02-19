## Spring Api 接口实现 Aop

> 配置切入点，以及配置切入点的环绕方法

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/aop
  https://www.springframework.org/schema/aop/spring-aop.xsd">
  <!--注册bean-->
  <bean id="userService" class="com.haha.service.UserServiceImpl"></bean>
  <bean id="beforeLog" class="com.haha.log.BeforeLog"></bean>
  <bean id="afterLog" class="com.haha.log.AfterLog"></bean>

  <!--配置Aop：切忌，上边需要导入Aop的约束-->
  <aop:config>
    <!--配置多个切入点： expression表达式，表示的是切入点的所有方法以及所有参数-->
    <aop:pointcut
      id="pointcut"
      expression="execution(* com.haha.service.UserServiceImpl.*(..))"
    />
    <!--配置多个执行环绕-->
    <aop:advisor advice-ref="beforeLog" pointcut-ref="pointcut"></aop:advisor>
    <aop:advisor advice-ref="afterLog" pointcut-ref="pointcut"></aop:advisor>
  </aop:config>
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

// 前置类
package com.haha.log;

import org.springframework.aop.MethodBeforeAdvice;

import java.lang.reflect.Method;

public class BeforeLog implements MethodBeforeAdvice {
  // Method method, Object[] objects, Object o:
  // Method method: 要执行的目标对象的方法
  // Object[] objects: 参数（args）
  // Object o: 目标对象(target)
  @Override
  public void before(Method method, Object[] objects, Object o) throws Throwable {
    System.out.println(
      o.getClass().getName() + "的" + method.getName() + "方法被执行了"
    );
  }
}

// 后置类
package com.haha.log;

import org.springframework.aop.AfterReturningAdvice;

import java.lang.reflect.Method;

public class AfterLog implements AfterReturningAdvice {
  // Object o, Method method, Object[] objects, Object o1:
  // Object o: 返回值
  // Method method: 要执行的目标对象的方法
  // Object[] objects: 参数(args)
  // Object o1: 目标对象(target)
  @Override
  public void afterReturning(Object o, Method method, Object[] objects, Object o1)
    throws Throwable {
    System.out.println("执行了" + method.getName() + "方法，返回结果为：" + o);
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
    // com.haha.service.UserServiceImpl的add方法被执行了
    // add
    // 执行了add方法，返回结果为：null
  }
}
```
