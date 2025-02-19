<!-- @format -->

## JdbcTemplate

> SpringBoot 中有很多 xxxTemplate，比如 JdbcTemplate、RestTemplate、OkHttpTemplate、WebClientTemplate 等，这些模板类都是 Spring 提供的简化开发模板类，可以大大简化开发。

### 使用 JdbcTemplate

#### 1. 添加依赖

```xml
<!--JDBC启动器-->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<!--mysql-->
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>8.0.28</version>
</dependency>
```

#### 2. 配置数据源

```yaml
spring:
  profiles:
    active: dev
---
spring:
  profiles: dev
server:
  port: 8080
spring.datasource:
  username: root
  password: 123456
  url: jdbc:mysql://localhost:3306/sister?useUnicode=true&characterEncoding=utf-8&serverTimezone=UTC
  driver-class-name: com.mysql.cj.jdbc.Driver
```

#### 3. 创建 JdbcTemplate 实例

```java
@Configuration
public class JdbcConfig {
  @Bean
  public JdbcTemplate jdbcTemplate(DataSource dataSource) {
    return new JdbcTemplate(dataSource);
  }
}
```

#### 4. 使用 JdbcTemplate 进行数据库操作

```java
package com.ths.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
// @Service
public class JDBCController {
  // SpringBoot 中有很多 xxxTemplate，已经配置好Bean的，拿来就能用
  @Autowired
  JdbcTemplate jdbcTemplate;
  // 查询数据据库的所有信息(没有实体类，怎么获取数据库中的信息)
  @GetMapping("/userList")
  public List<Map<String, Object>> userList() {
    String sql = "select * from user";
    System.out.println(jdbcTemplate.queryForList(sql));
    return jdbcTemplate.queryForList(sql);
  }
  @GetMapping("/add")
  public String add() {
    String sql = "insert into user(id, name, age) values (3,'小明', '20')";
    jdbcTemplate.update(sql);
    return "新增成功!";
  }
  @GetMapping("/update/{id}")
  public String updateUser(@PathVariable("id") int id) {
    String sql = "update user set name=?,age=? where id= ?";
    Object[] args = {"小红", 22, id};
    jdbcTemplate.update(sql, args);
    return "修改成功!";
  }
  @GetMapping("/delete/{id}")
  public String deleteUser(@PathVariable("id") int id) {
    // 这句sql不如修改那样好，不安全，Object[] args可以防止sql注入
    String sql = "delete from user where id = " + id;
    jdbcTemplate.update(sql);
    return "删除成功!";
  }
}
```
