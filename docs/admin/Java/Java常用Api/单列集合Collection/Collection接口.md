## Collection 接口

单列集合；需要导包，在 java.util 下；Collection 接口，不是类，是单列集合的顶层

### 常见的成员方法

| 方法                                      | 作用                              |
| ----------------------------------------- | --------------------------------- |
| boolean add(Object e)                     | 添加元素                          |
| boolean addAll(Collection c)              | 添加集合                          |
| boolean remove(Object o)                  | 删除元素                          |
| boolean removeIf(Predicate filter)        | 按照条件删除元素                  |
| void clear()                              | 清空集合                          |
| int size()                                | 获取集合长度                      |
| boolean contains(Object o)                | 是否包含                          |
| boolean isEmpty                           | 是否为空                          |
| <font color=red>Object[] toArray()</font> | <font color=red>集合转数组</font> |
| `Iterator<E> iterator()`                  | 获取迭代器对象                    |

### 集合的遍历

1. 转数组循环遍历

```java
Collection c = new ArrayList();
Object[] obj = c.toArray();
for(int i = 0; i < obj.length; i++){
    System.out.println(obj[i]);
}
```

2. 迭代器遍历

```java
Collection c = new ArrayList();
Iterator it = c.iterator();
while (it.hasNext()) {
    Object obj = it.next();
    System.out.println(obj);
}
```

3. 增强 for 循环(for each 遍历)

> 增强 for 循环底层也是迭代器遍历，只是简化写法
>
> 增强 for 循环也可以用来遍历数组
>
> 格式：for(数据类型 变量名 : 数组名/集合名){...}

```java
Collection c = new ArrayList();
for (Object obj : c) {
    System.out.println(obj);
}
```

### 方法的应用

```java
package com.wuziqi.gobang.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.function.Predicate;

public class DemoCollection {
    public static void main(String[] args) {
        // 多态格式的，Collection是类，所以只能创建子对象
        Collection c = new ArrayList();
        System.out.println(c); // 结果为[]: 说明底层重写了toString方法

        // boolean add(Object e)：集合中添加一个元素
        c.add("aaa");
        c.add("bbb");
        // Collection只能添加引用类型，这块不报错说明底层自动转成Integer类型了
        c.add(111);
        System.out.println(c); // [aaa, bbb, 111]

        // boolean addAll(Collection c)：集合中添加一个集合
        Collection c1 = new ArrayList();
        c1.addAll(c);
        System.out.println(c1); // [aaa, bbb, 111]

        // boolean remove(Object o)：删除某一元素
        c1.remove("aaa");
        System.out.println(c1); // [bbb, 111]

        // boolean removeIf(Predicate filter)：根据条件删除
        // Object是泛型，当然可以换成String等
        c.removeIf(new Predicate<Object>() {
            @Override
            public boolean test(Object t) { // Object和上边对应
                // return true; // 满足条件，要把该元素删除掉
                // reutrn false; // 不满足，不能删掉元素
                return t instanceof Integer;
            }
        });
        // c.removeIf((o) -> o.equals(111)); // 与上边的重写方法一样效果
        System.out.println(c); // [aaa, bbb]

        // boolean isEmpty()：是否为空
        System.out.println(c.isEmpty()); // false

        // int Size()：获取长度
        System.out.println(c.size()); // 2

        // boolean contains(Object o)：是否包含
        System.out.println(c); // [aaa, bbb]
        c.add(111);
        System.out.println(c.contains("ddd")); // false
        System.out.println(c.contains(111)); // true

        // void clear()：清空集合
        c.clear();
        System.out.println(c); // []
        System.out.println(c.isEmpty()); // true

        // Object[] toArray()：转成数组进行遍历
        System.out.println(c1); // [bbb, 111]
        Object[] objs = c1.toArray();
        for (int i = 0; i < objs.length; i++){
            System.out.println(objs[i]); // bbb 111
        }

        // Iterator<E> iterator()：通过迭代器对象遍历
        c1.add(new Pigs("小明", 18));
        // 结果：[bbb, 111, com.wuziqi.gobang.controller.Pigs@23fc625e]
        // 给Pigs加上toString()方法后
        // 打印结果：[bbb, 111, Pigs{name='小明', age=18}]
        System.out.println(c1);
        /**
         * Iterator是接口
         * 有两个子方法
         * hasNext()：判断是否还有元素
         * next()：获取下一个元素
         * */
        Iterator it = c1.iterator(); // 需要导包，也是多态格式
        while (it.hasNext()){
            System.out.println(it.next());
            // 打印结果：bbb 111 Pigs{name='小明', age=18}
        }

        // 增强for循环(for each遍历)
        for (Object obj : c1){
            System.out.println(obj);
            // 打印结果：bbb 111 Pigs{name='小明', age=18}
        }

        // 增强for循环遍历数组
        int arr[] = {1,2,3,4,5,6,7,8,9};
        for (Object obj : arr){
            System.out.println(obj); // 1,2,3,4,5,6,7,8,9
        }
    }
}
class Pigs{
    private String name;
    private int age;
    Pigs(String name, int age){
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Pigs{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```
