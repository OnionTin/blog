## Zuul

> Zuul 包含了对请求的路由和过滤两个最主要的功能：
>
> 其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul 和 Eureka 进行整合，将 Zuul 自身注册为 Eureka 服务治理下的应用，同时从 Eureka 中获得其他微服务的消息，也即以后的访问微服务都是通过 Zuul 跳转后获得。

> 注意：Zuul 服务最终还是会注册进 Eureka
>
> 提供：代理+路由+过滤三大功能！

### 修改本地域名映射

```shell
# 修改 C:\Windows\System32\drivers\etc\hosts
127.0.0.1       www.thsstudy.com
```

### 项目搭建

#### 1. 依赖

```xml
<!--Eureka-->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-eureka</artifactId>
  <version>1.4.6.RELEASE</version>
</dependency>
<!--Zuul-->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-zuul</artifactId>
  <version>1.4.6.RELEASE</version>
</dependency>
```

#### 2. 配置

```yaml
server:
  port: 9527
spring:
  application:
    name: project-zuul
eureka:
  client:
    service-url:
      defaultZone: http://eureka7001.com:7001/eureka/,
      http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/
  instance:
    instance-id: zuul-9527
    prefer-ip-address: true
info:
  app.name: project-zuul
  app.description: project-zuul
  company.name: ths
# 配置Zuul路由代理
zuul:
  routes:
    # 配置路由(原来访问的路径的name)
    myprovider.serviceId: project-provider
    # 配置路由(新路径，用provider来替代)
    myprovider.path: /provider/**
  # 控制走代理路径，原路径不能访问了，只能走路由网关
  # ignored-services: project-provider
  # *：通配符，所有的微服务都必须走代理
  ignored-services: "*"
  # 统一前缀(/ths/provider，一般这要不要都行)
  prefix: /ths
  # 如果把port改成80，访问时端口就可以不要了
```

#### 3. 启动类

```java
package com.ths.zuul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy // 开启Zuul服务代理
public class ZuulApplication_9527 {
  public static void main(String[] args) {
    SpringApplication.run(ZuulApplication_9527.class, args);
  }
}
```
