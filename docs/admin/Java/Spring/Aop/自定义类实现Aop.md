## 自定义类实现 Aop

> 使用自定义类，首先配置切入面，在面内根据切入点，使用通知，进行环绕

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
  <bean id="diy" class="com.haha.diy.DiyPointCut"></bean>
  <aop:config>
    <!--自定义切面，ref: 要引用的类-->
    <aop:aspect ref="diy">
      <!--切入点
        注意：com.UserServiceImpl：类路径；如果UserServiceImpl换成*，表示当前包下所有类-->
      <aop:pointcut
        id="point"
        expression="execution(* com.haha.service.UserServiceImpl.*(..))"
      />
      <!--通知-->
      <aop:before method="beforeMethod" pointcut-ref="point"/>
      <aop:after method="afterMethod" pointcut-ref="point"/>
    </aop:aspect>
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

// 自定义类
package com.haha.diy;

public class DiyPointCut {
  public void beforeMethod() {
    System.out.println("before method");
  }

  public void afterMethod() {
    System.out.println("after method");
  }
}
```

```java
import com.haha.service.UserService;
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
    // before method
    // add
    // after method
  }
}
```
