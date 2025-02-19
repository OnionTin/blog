## MyBatis 回顾

### MyBatis 的使用步骤

1. 导入相关 jar 包(mysql、spring-jdbc、mybatis)
2. 创建实体类
3. 编写核心配置文件
4. 编写接口
5. 编写映射文件
6. 编写测试类

### 1. 导入相关 jar 包

```xml
<!--pom.xml-->
<!-- 将xml文件添加到打包路径 -->
<build>
  <resources>
    <resource>
      <directory>src/main/java</directory>
      <includes>
        <include>**/*.xml</include>
      </includes>
    </resource>
  </resources>
</build>
```

### 2. 创建实体类

```java
package com.haha.pojo;

import lombok.Data;

@Data
public class User {
  private int id;
  private String name;
  private String age;
}
```

### 3. 编写核心配置文件

```properties
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=123456
```

```xml
<!--mybatis-config.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
    PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
  <properties resource="db.properties"/>
  <typeAliases>
    <package name="com.haha.pojo"/>
  </typeAliases>
  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC"/>
      <dataSource type="POOLED">
        <property name="driver" value="${driver}" />
        <property name="url" value="${url}" />
        <property name="username" value="${username}" />
        <property name="password" value="${password}" />
      </dataSource>
    </environment>
  </environments>
  <mappers>
    <package name="com.haha.mapper"/>
  </mappers>
</configuration>
```

### 4. 编写接口

```java
package com.haha.mapper;

import com.haha.pojo.User;

import java.util.List;

public interface UserMapper {
  public List<User> selectUser();
}
```

### 5. 编写映射文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.haha.mapper.UserMapper">
  <select id="selectUser" resultType="user">
    select * from user
  </select>
</mapper>
```

### 6. 编写测试类

```java
import com.haha.mapper.UserMapper;
import com.haha.pojo.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MyTest {
  @Test
  public void test() throws IOException {
    // 1. 获取流对象，读取核心配置文件
    InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
    // 2. 创建 SqlSession 工厂的构建者对象
    SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
    // 3. 获取 SqlSession 工厂对象
    SqlSessionFactory factory = builder.build(is);
    // 4. 获取 SqlSession 对象
    SqlSession session = factory.openSession();
    // 5. 获取 UserMapper 代理类对象
    UserMapper mapper = session.getMapper(UserMapper.class);

    List<User> userList = mapper.selectUser();
    for (User user : userList) {
      System.out.println(user);
    }
  }
}
```
