<!-- @format -->

## SpringMvc 扩展

> 1. 首先编写一个@Configuration 注解的类，用于扫描自定义的注解
> 2. 这个类要实现 WebMvcConfigurer 接口，并且不能标注@EnableWebMvc 注解，否则会覆盖掉默认的配置
> 3. 编写自定义的类或者说组件，并通过@Bean 把他交给 SpringBoot 管理，SpringBoot 就会帮我们自动装配
> 4. 这样我们就完成了针对 SpringMvc 的自定义的扩展

```java
package com.ths.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Locale;
// 自定义Mvc扩展
@Configuration // 配置类，目的是让SpringBoot进行扫描 MyMvcConfig 这个类
public class MyMvcConfig implements WebMvcConfigurer {
  // 自定义视图解析器：MyViewResolver
  @Bean // @Bean组测组件，将 MyViewResolver交给SpringBoot托管，
  public ViewResolver MyViewResolver(){
    return null;
  }
  // MyViewResolver：要实现视图解析，就要实现 ViewResolver 接口
  public static class MyViewResolver implements ViewResolver{
    // 同时要重写 resolveViewName 方法
    @Override
    public View resolveViewName(String s, Locale locale) throws Exception {
      return null;
    }
  }
  // 自定义视图跳转
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    // 添加视图跳转
    registry.addViewController("/ths").setViewName("ths");
  }

  // 添加静态资源映射
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    // 添加静态资源映射
registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
  }
}
```
