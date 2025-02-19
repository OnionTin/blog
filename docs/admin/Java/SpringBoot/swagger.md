<!-- @format -->

## swagger

> 访问地址：http://localhost:8080/swagger-ui/index.html

### 1.引入依赖

```xml
<!--swagger-->
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger2</artifactId>
  <version>2.9.2</version>
</dependency>
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger-ui</artifactId>
  <version>2.9.2</version>
</dependency>
```

### 2.配置类

```java
package com.ths.config;

import com.ths.controller.UserController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

@Configuration
@EnableSwagger2 //开启swagger2(访问：http://localhost:8080/swagger-ui.html)
public class SwaggerConfig {
  /*
  // RequestHandlerSelectors: 配置扫描的控制器
  basePackage: 扫描指定包下的所有请求
  any(): 扫描全部
  none(): 全都不扫描
  withClassAnnotation: 扫描类上的注解
  withClassAnnotation(RestController.class): 扫描所有有RestController注解的类
  withMethodAnnotation: 扫描方法上的注解
  withMethodAnnotation(GetMapping.class): 扫描所有有GetMapping注解的方法
  // PathSelectors: 配置过滤规则
  ant(): 扫描指定路径下的所有请求(ant("/dev/**"))
  any(): 扫描全部
  none(): 不扫描
  regex(): 正则表达式
  */
  // 配置Swagger的Docket的bean实例
  // User组
  @Bean
  public Docket userDocket(Environment env){
    // 设置要显示swagger的环境
    Profiles profiles = Profiles.of("dev", "test");
    // 获取当前环境
    boolean flag = env.acceptsProfiles(profiles);
    return new Docket(DocumentationType.SWAGGER_2)
        .apiInfo(apiInfo())
        // 分组
        .groupName("用户模块")
        // 配置是否启动Swagger(默认是true，false就关掉了)
        .enable(flag)
        .select()
        .apis(RequestHandlerSelectors.basePackage("com.ths.controller"))
        .paths(PathSelectors.regex("/user.*")) // 所有/user开头的请求
        .build();
  }
  // Hello组
  @Bean
  public Docket helloDocket(Environment env){
    Profiles profiles = Profiles.of("dev", "test");
    boolean flag = env.acceptsProfiles(profiles);
    return new Docket(DocumentationType.SWAGGER_2)
        .apiInfo(apiInfo())
        // 分组
        .groupName("Hello模块")
        .enable(flag)
        .select()
        .apis(RequestHandlerSelectors.basePackage("com.ths.controller"))
        .paths(PathSelectors.ant("/hello/**"))
        .build();
  }

  // 配置ApiInfo信息(就是接口信息)
  private ApiInfo apiInfo() {
    Contact DEFAULT_CONTACT = new Contact("ths", "http://www.ths.com", "ths@ths.com");
    return new ApiInfo(
        "Api文档", // 标题
        "文档描述", // 描述
        "1.0", // 版本
        "urn:tos", // 服务条款URL
        DEFAULT_CONTACT, // 联系人
        "Apache 2.0", // 许可
        "http://www.apache.org/licenses/LICENSE-2.0", // 许可URL
        new ArrayList() // 扩展
    );
  }
}
```

```java
// UserController
package com.ths.controller;

import com.ths.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(value = "用户接口", tags = "用户接口")
public class UserController {
  @GetMapping("/user")
  @ApiOperation("get方式获取用户信息") // 给接口加文档注释
  public User getUser(@ApiParam("用户名") String username, @ApiParam("密码") String password) {
    return new User(username, password);
  }
  @PostMapping("/user")
  @ApiOperation("post方式获取用户信息") // 给接口加文档注释
  public User postUser(@ApiParam("用户名") String username, @ApiParam("密码") String password) {
    return new User(username, password);
  }
  @PostMapping("/user2")
  @ApiOperation("post方式获取用户信息") // 给接口加文档注释
  public User postUser2(User user) {
    return user;
  }
}

// HelloController
package com.ths.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/hello")
public class HelloController {
  @RequestMapping("/hello")
  public String hello() {
    return "hello";
  }
}

// User
package com.ths.pojo;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Api("用户字段信息") // 和ApiModel作用一样
//@ApiModel("用户字段信息") // 给实体类加文档注释
public class User {
  @ApiModelProperty("用户名")
  private String username;
  @ApiModelProperty("密码")
  private String password;
}
```

```properties
# application.properties
spring.application.name = spring-boot-2-swagger
# 激活开发环境
spring.profiles.active = dev

# application-dev.properties
server.port = 8080

# application-test.properties
server.port = 8081

# application-prod.properties
server.port = 19200
```
