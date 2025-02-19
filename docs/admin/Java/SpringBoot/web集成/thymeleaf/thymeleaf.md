## thymeleaf

### 模板

> 需要在 html 标签上添加<font color=red>thymeleaf 头部约束</font>

```html
<html xmlns:th="http://www.thymeleaf.org"></html>
```

### 源码

```java
// ThymeleafAutoConfiguration.java 截取
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(ThymeleafProperties.class)
@ConditionalOnClass({ TemplateMode.class, SpringTemplateEngine.class })
@AutoConfigureAfter({ WebMvcAutoConfiguration.class, WebFluxAutoConfiguration.class })
public class ThymeleafAutoConfiguration {
  // ...
}
```

### 配置文件

```java
// ThymeleafProperties.java 截取
@ConfigurationProperties(prefix = "spring.thymeleaf")
public class ThymeleafProperties {

	private static final Charset DEFAULT_ENCODING = StandardCharsets.UTF_8;

	public static final String DEFAULT_PREFIX = "classpath:/templates/";

	public static final String DEFAULT_SUFFIX = ".html";
}
```
