## final

`常量、初始值、不被继承、不被重写`

### final 关键字的特点

1. final 关键字修饰的变量就是常量

   常量的分类

   1. 字面量常量

      - 整数常量
      - 小数常量
      - 字符常量
      - 字符串常量
      - 布尔常量
      - 空常量

   2. 自定义常量

   - 被 final 修饰的变量

2. 被 final 修饰的类不能被继承

3. 被 final 修饰的成员方法不能被重写

### final 的注意事项

> 如果一个成员变量，在被定义的时候，并没有赋初始值，会编译报错，我们必须给其赋值。
>
> 赋值的方式有两种：
>
> 1. 定义的同时赋值
>
> 2. 有参构造赋值

```java
public class Demo {
    final int a; // 编译报错
    final int age = 18; // 没有问题
    // final char value = 'final'; // 没有问题 方式一
    final int value; // 没有问题
    public Demo(int value) {
      this.value = value; // 方式二
    }
}
```
