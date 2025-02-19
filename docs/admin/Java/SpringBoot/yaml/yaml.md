## yaml

> [官方配置](https://docs.spring.io/spring-boot/appendix/application-properties/index.html#appendix.application-properties)
>
> yaml 比 properties 更加简洁，并且支持数据类型更多
>
> yaml 文件可以注入到配置类中

### yaml 语法

1. key: value，冒号后面必须有空格
2. 大小写敏感
3. 使用缩进表示层级关系，k-v 对的缩进不允许使用 tab，只允许空格
4. 缩进的空格数不重要，只要相同层级的元素左对齐即可
5. '#' 表示注释
6. 字符串默认不使用引号，单引号和双引号都可以，单引号转义字符无效，双引号转义字符有效
7. yaml 支持的数据类型有：null、boolean、string、number、date、array、map
8. yaml 支持的数据结构有：scalar、sequence、mapping
9. yaml 文件可以注册到配置类中
10. yaml，支持松散绑定

### yaml 与 properties 的区别

1. yaml 可以写对象或者数组，properties 不行
2. yaml 写对象可以使用行内写法

```yaml
student:
  name: zhangsan
  age: 18
# 等价于
student: { name: zhangsan, age: 18 }
```

3. yaml 写数组

```yaml
pets:
  - cat
  - dog
# 等价于
pets: [cat, dog]
```

4. yaml 支持多行字符串，注意缩进

```yaml
my:
  desc: >
    hello
    world
# 等价于
my: { desc: "hello\nworld" }
```
