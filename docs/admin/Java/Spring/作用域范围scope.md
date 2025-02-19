## Bean 的作用于范围

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
  <!--bean的作用域范围-scope:
  1. singleton: 默认值，单例模式，每次从容器中获取到的 Bean 都是同一个对象
  2. prototype: 多例模式，Bean 都是一个`新的对象，需要控制销毁
  3. request: 每一个web请求都会产生一个新的bean，在web项目中使用
  4. session: 同一个session共享一个bean，在web项目中使用
  5. global-session: 同一个全局session共享一个bean，在web项目中使用 -->
  <bean id="user1" class="com.haha.pojo.User" scope="singleton"></bean>
  <bean id="user2" class="com.haha.pojo.User" scope="prototype"></bean>
</beans>
```

```java
import com.haha.pojo.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestScope {
  public static void main(String[] args) {
    ApplicationContext context = new ClassPathXmlApplicationContext("userScope.xml");
    User user1 = (User) context.getBean("user1");
    User user2 = context.getBean("user1", User.class);
    System.out.println(user1 == user2); // true

    User user3 = (User) context.getBean("user2");
    User user4 = context.getBean("user2", User.class);
    System.out.println(user3 == user4); // false
  }
}
```
