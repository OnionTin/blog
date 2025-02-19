## Feign

> Feign 和 Ribbon 都可以远程接口调用，Feign 中集成了 Ribbon，区别在于 Feign 需要编写接口，而 Ribbon 需要编写配置类。

### Ribbon 调用过程

> 1. 配置实现负载均衡的 RestTemplate
> 2. restTemplate.getForObject(REST_URL_PREFIX + "/dept/list", List.class)

### Feign 调用过程

> 1. 在 Api 模块中定义接口
> 2. 在 Api 模块接口中指定@FeignClient(value = "PROJECT-PROVIDER")
> 3. 在调用模块启动类加上@EnableFeignClients(basePackages = {"com.ths.api.service"})扫描机制
> 4. 在调用地方注入接口，调用接口方法即可

### Feign 的优缺点

> 优点：Feign 集成了 Ribbon，Feign 是声明式的，只需要创建一个接口并注解。简化了 Ribbon 的调用方式，只需要创建一个接口并添加注解即可。
>
> 缺点：Feign 不支持文件上传，需要使用 Feign 的扩展组件 Feign-form。

### Feign 具体步骤

#### 1. 导入依赖

##### 1.1. api 模块

```xml
<!--导入Feign-->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-feign</artifactId>
  <version>1.4.6.RELEASE</version>
</dependency>
```

##### 1.2. 调用模块

> 该模块是把 project-consumer-80 中的全都拿了过来，然后去掉 Ribbon，加上 Feign

```xml
<!--Feign客户端实现负载均衡-->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-feign</artifactId>
  <version>1.4.6.RELEASE</version>
</dependency>
```

#### 2. 配置文件

##### 2.1 调用模块

```yaml
server:
  port: 8808
spring:
  application:
    name: project-consumer-8808
# Eureka
eureka:
  client:
    # 不注册自己
    register-with-eureka: false
    # 从注册中心获取服务
    service-url:
      defaultZone: http://eureka7002.com:7002/eureka/,
      http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/
```

#### 3. 编写 Api 模块接口

> Api 模块中的<font color=red>接口地址必须与微服务(project-provider-8001 等)中提供的地址接口地址保持一致</font>，因为 Feign 会根据接口地址去调用微服务中的接口

```java
// 比如这是调用模块中的接口
@RestController
public class DeptController {
  @Autowired
  private DeptService service;

  // 查询所有部门
  @GetMapping("/dept/list")
  public List<Dept> queryAll() {
    return service.queryAll();
  }
}
```

```java
// Api模块接口
package com.ths.api.service;

import com.ths.api.pojo.Dept;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Component
@FeignClient(value = "PROJECT-PROVIDER")
public interface FeignSupport {

  @GetMapping("/dept/list") // 这块必须保持一致
  public List<Dept> queryAll();

  @GetMapping("/dept/get/{id}")
  public Dept queryById(@PathVariable("id") Long id);

  @PostMapping("/dept/add")
  public boolean addDept(@RequestParam("dept") Dept dept);

  @PostMapping("/dept/delete")
  public boolean deleteDept(@RequestParam("id") Long id);

  @PostMapping("/dept/update")
  public boolean updateDept(@RequestParam("dept") Dept dept);
}
```

#### 3. 调用模块注入接口

```java
package com.ths.consumer.controller;

import com.ths.api.pojo.Dept;
import com.ths.api.service.FeignSupport;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GetDeptController {
  // 在启动类上加上扫描包，否则会飘红
  private FeignSupport feignSupport = null;

  public GetDeptController(FeignSupport feignSupport) {
    this.feignSupport = feignSupport;
  }

  @PostMapping("/add")
  public boolean addDept(@RequestParam("dept") Dept dept) {
    return this.feignSupport.addDept(dept);
  }

  @PostMapping("/delete")
  public boolean deleteDept(@RequestParam("id") Long id) {
    return this.feignSupport.deleteDept(id);
  }

  @GetMapping("/queryAll")
  public List<Dept> queryAll() {
    return this.feignSupport.queryAll();
  }

  @GetMapping("/queryById/{id}")
  public Dept queryById(@PathVariable("id") Long id) {
    return this.feignSupport.queryById(id);
  }

  @PostMapping("/update")
  public boolean updateDept(@RequestParam("dept") Dept dept) {
    return this.feignSupport.updateDept(dept);
  }
}
```

#### 4. 调用模块启动类

```java
package com.ths.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

// 确保扫描到所有相关包
@SpringBootApplication
// 服务注册与发现
@EnableEurekaClient
// 扫描包，让api模块中的所有接口都生效
@EnableFeignClients(basePackages = {"com.ths.api.service"})
// 扫描包，让api模块中的所有注解都生效
//@ComponentScan("com.ths.api.service")
public class FeignConsumer_8808 {
  public static void main(String[] args) {
    SpringApplication.run(FeignConsumer_8808.class, args);
  }
}
```
