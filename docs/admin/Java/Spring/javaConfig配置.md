## javaConfig 配置

> 早期，javaConfig 是 Spring 的一个子项目；在 Spring4 之后，是一个单独的功能了。
>
> Spring4 之后，推荐使用 javaConfig 配置这种方式。因为使用 javaConfig 配置 更加灵活，没有 xml 配置文件这种方式的约束。

```java
// User
package com.haha.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Component // 交给Spring托管
public class User {
  @Value("张三风") // 给属性赋值
  public String name;
}

//MyConfig
package com.haha.config;

import com.haha.pojo.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

// 这个文件就是配置文件的替代，就是换一种方式
@Configuration // 这个注解就是把当前的配置文件交给Spring托管，本质就是@Component
@ComponentScan("com.haha.pojo")
@Import(Config2.class) // 导入其他配置文件
public class MyConfig {
  @Bean // 注册bean的注解(id: 方法名；class属性：方法的返回值)
  public User gotUser() {
    return new User(); // 返回注入到bean中的对象
  }
}

//Config2
package com.haha.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class Config2 {
}

// Test
import com.haha.config.MyConfig;
import com.haha.pojo.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class TestConfig {
  public static void main(String[] args) {
    // 获取配置文件的上下文对象用ClassPathXmlApplicationContext
    // 获取注解上下文对象用AnnotationConfigApplicationContext
    ApplicationContext ac = new AnnotationConfigApplicationContext(MyConfig.class);
    User user = ac.getBean("gotUser", User.class);
    System.out.println(user);
  }
}
```
