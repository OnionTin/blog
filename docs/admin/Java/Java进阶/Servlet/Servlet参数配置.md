## Servlet 参数配置

```java
@Override
public void init(ServletConfig config) throws ServletException {
  // 获取到xml中配置的参数数据
  String value = config.getInitParameter("name");
  System.out.println("name:" + value);
}
```
