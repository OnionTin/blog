<!-- @format -->

## MyBatis

### Mybatis 使用步骤

1. 添加 MyBatis 依赖
2. 整合 MyBatis
3. 编写 Mapper 接口和 XML 映射文件进行测试

### MyBatis 依赖

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
<!--mybatis启动器-->
<dependency>
  <groupId>org.mybatis.spring.boot</groupId>
  <artifactId>mybatis-spring-boot-starter</artifactId>
  <version>2.1.4</version>
</dependency>
```

### 整合 MyBatis

```yaml
spring.datasource:
  username: root
  password: 123456
  url: jdbc:mysql://localhost:3306/sister?useUnicode=true
    &characterEncoding=utf-8&serverTimezone=UTC
  driver-class-name: com.mysql.cj.jdbc.Driver
mybatis:
  type-aliases-package: com.ths.pojo
  mapper-locations: classpath:mapper/*.xml
```

### 编写 Mapper 接口和 XML 映射文件进行测试

```java
// pojo实体类
package com.ths.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MybatisUse {
  private int id;
  private String name;
  private String age;
}

// mapper接口
package com.ths.mapper;

import com.ths.pojo.MybatisUse;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper // 加上这个注解就是MyBatis的Mapper接口
// 或者在SpringBootApplication中指定扫描包就不用配了
@Repository
public interface MybatisUseMapper {
  List<MybatisUse> queryMybatisUseList();
  MybatisUse queryMybatisUseById(int id);
  void addMybatisUse(MybatisUse mybatis);
  void deleteMybatisUse(int id);
  void updateMybatisUse(MybatisUse mybatis);
}
```

```xml
<!-- 映射文件 -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd"
    >
<mapper namespace="com.ths.mapper.MybatisUseMapper">
  <select id="queryMybatisUseList" resultType="MybatisUse" useCache="true">
    select * from mybatisuse
  </select>
  <select id="queryMybatisUseById" resultType="MybatisUse">
    select * from mybatisuse where id = #{id}
  </select>
  <insert id="addMybatisUse" parameterType="MybatisUse">
    insert into mybatisuse(id, name, age) values(#{id}, #{name}, #{age})
  </insert>
  <delete id="deleteMybatisUse" parameterType="int">
    delete from mybatisuse where id = #{id}
  </delete>
  <update id="updateMybatisUse" parameterType="MybatisUse">
    update mybatisuse set name = #{name}, age = #{age} where id = #{id}
  </update>
</mapper>
```

```java
// controller测试
package com.ths.controller;

import com.ths.mapper.MybatisUseMapper;
import com.ths.pojo.MybatisUse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MybatisUseController {
  final
  MybatisUseMapper mybatisUseMapper;

  public MybatisUseController(MybatisUseMapper mybatisUseMapper) {
    this.mybatisUseMapper = mybatisUseMapper;
  }
  // 查询全部
  @RequestMapping("/mybatisUseList")
  @ResponseBody
  public List<MybatisUse> mybatisUseList() {
    return mybatisUseMapper.queryMybatisUseList();
  }
  // 根据id查询
  @RequestMapping("/mybatisUseById")
  @ResponseBody
  public MybatisUse mybatisUseById(int id) {
    return mybatisUseMapper.queryMybatisUseById(id);
  }
  // 添加
  @RequestMapping("/mybatisUseAdd")
  public String mybatisUseAdd(MybatisUse mybatis) {
    mybatisUseMapper.addMybatisUse(mybatis);
    return "redirect:/mybatisUseList";
  }
  // 删除
  @RequestMapping("/mybatisUseDelete")
  public String mybatisUseDelete(int id) {
    mybatisUseMapper.deleteMybatisUse(id);
    return "redirect:/mybatisUseList";
  }
  // 修改
  @RequestMapping("/mybatisUseUpdate")
  public String mybatisUseUpdate(MybatisUse mybatis) {
    mybatisUseMapper.updateMybatisUse(mybatis);
    return "redirect:/mybatisUseList";
  }
}
```

### 指定 Mapper 扫描包

```java
package com.ths;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("com.ths.mapper") // 指定扫描的mapper接口位置，在接口中就不用@Mapper
public class SpringBoot220Application {
  public static void main(String[] args) {
    SpringApplication.run(SpringBoot220Application.class, args);
  }
}
```
