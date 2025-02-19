<!-- @format -->

## Druid

> Druid 是阿里巴巴开源的一款数据库连接池，它提供了丰富的功能和性能优化，包括 SQL 监控、连接池管理、SQL 防火墙、慢查询分析等。

### Druid 使用步骤

1. 添加 Druid 依赖
2. 配置 Druid 数据源
3. 配置 Druid 监控

### Druid 依赖

```xml
<!--druid-->
<dependency>
  <groupId>com.alibaba</groupId>
  <artifactId>druid</artifactId>
  <version>1.2.6</version>
</dependency>
<!--log4j: Druid需要log4j依赖进行日志-->
<dependency>
  <groupId>log4j</groupId>
  <artifactId>log4j</artifactId>
  <version>1.2.17</version>
</dependency>
```

### Druid 数据源

```yaml
spring.datasource:
  username: root
  password: 123456
  url: jdbc:mysql://localhost:3306/sister?useUnicode=true
    &characterEncoding=utf-8&serverTimezone=UTC
  driver-class-name: com.mysql.cj.jdbc.Driver
  # 数据源改成Druid，没有就是默认的Hikari
  type: com.alibaba.druid.pool.DruidDataSource
  # SpringBoot默认不注入的属性，需要自己配置的
  # Druid
  # 初始化大小
  initial-size: 5
  # 最小空闲连接数
  min-Idle: 5
  # 最大连接数
  max-active: 20
  # 配置获取连接等待超时的时间
  max-wait: 6000
  # 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒
  time-between-eviction-runs-millis: 60000
  # 配置一个连接在池中最小生存的时间，单位是毫秒
  min-evictable-idle-time-millis: 300000
  # 用来检测连接是否有效的sql，要求是一个查询语句
  validation-query: SELECT 1 FROM DUAL
  # 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能
  test-while-idle: true
  # 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能
  test-on-borrow: false
  # 归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能
  test-on-return: false
  # 打开PSCache，并且指定每个连接上PSCache的大小
  pool-prepared-statements: true
  # 配置监控拦截统计的filters(stat:监控统计, log4j: 日志记录, wall: 预防sql注入)
  # 如果报错如下: java.lang.ClassNotFoundException: org.apache.log4j.Priority
  # 择需要导入log4j的依赖
  # 通过connectProperties属性来打开mergeSql功能；慢SQL记录
  connection-properties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
  # 配置监控统计拦截的filters，去掉后监控界面sql无法统计，'wall'用于防火墙
  filters: stat,wall,log4j
  # 合并多个DruidDataSource的监控数据
  use-global-datasource-stat: true
  # 配置监控统计拦截的filters，去掉后监控界面sql无法统计，'wall'用于防火墙
  max-pool-prepared-statement-per-connection-size: 20
```

### Druid 监控

```java
package com.ths.config;

import com.alibaba.druid.filter.stat.StatFilter;
import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

// 自定义Druid配置类
@Configuration
public class DruidConfig {
  // 绑定配置文件中的属性
  @ConfigurationProperties(prefix = "spring.datasource")
  @Bean
  public DataSource druidDataSource() {
    return new DruidDataSource();
  }

  // 后台监控功能(因为SpringBoot内置Servlet，所以没有相关配置
  // 这个类就相当于web.xml，访问: 项目启动后，
  // 在浏览器中将访问的url改成druid，http://localhost:8080/druid/sql.html)
  @Bean
  public ServletRegistrationBean statViewServlet() {
    ServletRegistrationBean<StatViewServlet> bean
    = new ServletRegistrationBean(new StatViewServlet(), "/druid/*");
    // 需要有人登录才能访问
    Map<String, String> initParams = new HashMap<>();
    initParams.put("loginUsername", "admin"); // key 是固定的
    initParams.put("loginPassword", "123456"); // key 是固定的
    /**
     * allow: 允许谁可以访问，如果配置了，需要将ip白名单配置，否则不允许所有ip访问
     *   “”：默认就是允许所有访问
     *   localhost: 表示本机访问
     *   192.168.1.1: 表示指定ip访问
     * deny: 拒绝谁访问
     */
    initParams.put("allow", "");
    initParams.put("deny", "192.168.3.33");
    bean.setInitParameters(initParams); // 初始化参数
    return bean;
  }

  // filter过滤
  @Bean
  public FilterRegistrationBean webStatFilter() {
    FilterRegistrationBean bean = new FilterRegistrationBean();
    bean.setFilter(new WebStatFilter());
    // 配置过滤哪些
    Map<String, String> initParams = new HashMap<>();
    // 不记录哪些页面
    initParams.put("exclusions", "*.js,*.css,/druid/*");
    bean.setInitParameters(initParams);
    return bean;
  }

  // 配置log4j
  @Bean
  public StatFilter statFilter() {
    StatFilter statFilter = new StatFilter();
    statFilter.setSlowSqlMillis(500); // 慢sql，单位ms
    statFilter.setLogSlowSql(true); // 是否记录慢sql
    statFilter.setMergeSql(true); // 合并sql
    return statFilter;
  }
}
```

```properties
# 加上这个配置文件后会把日志输出到控制台上
# log4j.properties
log4j.rootLogger=INFO, console

# Console Appender
log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.Target=System.out
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

# Druid Logger
log4j.logger.druid=DEBUG, console
```
