## Servlet 生命周期

| 方法    | 作用     |
| ------- | -------- |
| init    | 初始化   |
| service | 执行方法 |
| destory | 销毁方法 |

### init

- 初始化方法，在 servlet 被创建时执行，只会执行一次
- 用于加载资源，初始化 servlet 对象

### service

- 服务方法，每次请求都会执行
- 用于处理请求，响应数据

### destory

- 销毁方法，在 服务被正常关闭时，只会执行一次

### 如何将 Servlet 对象的创建提前

> load-on-startup：用来表示创建 Servlet 对象的时机，默认值为-1，设置的值越小(正整数)，优先级越高；相同优先级，按照 servlet-name 的字典顺序执行

```xml
<servlet>
    <servlet-name>ServletDemo</servlet-name>
    <servlet-class>com.atguigu.servlet.ServletDemo</servlet-class>
    <!-- 创建 Servlet 对象的时机 -->
    <load-on-startup>1</load-on-startup>
</servlet>
```
