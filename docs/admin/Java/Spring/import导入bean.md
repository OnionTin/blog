## import 导入 bean

> 当多人协作的时候，可能会有多个 bean 文件，我们可以将多个 bean 文件通过 import 导入到主配置文件中，我们只需要使用主配置文件就可以

```xml
<!-- applicationContext.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd"
>

  <import resource="bean1.xml"/>
  <import resource="bean2.xml"/>
  <import resource="bean3.xml"/>
</beans>
```
