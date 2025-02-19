## p 命名空间注入

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:p="http://www.springframework.org/schema/p"
  xmlns:c="http://www.springframework.org/schema/c"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">

  <!--p命名：实际使用的就是set注入(注入属性)-->
  <bean name="user1" class="com.haha.pojo.User" p:name="张三" p:age="20"></bean>
  <!--c命名：实际使用的就是构造器注入-->
  <bean name="user2" class="com.haha.pojo.User" c:name="李四" c:age="30"></bean>
</beans>
```

```java
// Test
import com.haha.pojo.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestP {
  public static void main(String[] args) {
    ApplicationContext ac = new ClassPathXmlApplicationContext("user.xml");
    // getBean(bean的id属性，实体类的实体类的class)
    // 当第二个值给定的时候，是不需要强制转换了，因为知道类型了
    User user1= ac.getBean("user1", User.class);
    System.out.println(user1);
    // User(name=张三, age=20)
    User user2= ac.getBean("user2", User.class);
    System.out.println(user2);
    // User(name=李四, age=30)
  }
}
```

```java
// User
package com.haha.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
  private String name;
  private int age;
}
```
