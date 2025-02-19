## ArrayList 实现类

需要导包，在 java.util 下；ArrayList 是 List 接口的实现类；底层是数组数据结构。

### ArrayList 类的特点(List 接口的特点)

1. <font color=red>有序</font>的集合（即：存进去的顺序和取出来的顺序是一致的）
2. <font color=red>有索引</font>
3. 元素都<font color=red>允许重复</font>

### 常见的构造方法

| 方法             | 作用     |
| ---------------- | -------- |
| public ArrayList | new 对象 |

### 常见的成员方法

和 <font color=red><RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/List子接口.md">List 接口</RouteLink> 中定义的方法基本一致，当然包括<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Collection接口.md">Collection 集合</RouteLink>中的方法。</font>

### 遍历

和 <font color=red><RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/List子接口.md">List 接口</RouteLink> 中定义的遍历一样。</font>

### 案例

```java
/**
 * 已知集合中存储了"aaa"、"bbb"、"aaa"、"ccc"、"aaa"、"ddd"
 *
 * 要求：把集合中的所有"aaa"干掉
*/
import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args){
        ArrayList list = new ArrayList();
        list.add("aaa");
        list.add("bbb");
        list.add("aaa");
        list.add("ccc");
        list.add("aaa");
        list.add("ddd");
        System.out.println("修改前的集合：" + list);
        // 把集合中的所有"aaa"干掉
        for (int i = 0; i < list.size(); i++){
            if ("aaa".equals(list.get(i))){
                list.remove(i);
                i--;
                /**
                 * 注意：
                 *      如果删除的是最后一个元素，则不会影响集合的长度
                 *      如果删除的不是最后一个元素，则需要重新计算下标的位置，重新开始
                 *      i--不能忘记，否则会出现删除不完全的情况
                 *      如果使用迭代器删除或者使用增强for循环删除，有可能会报错
                 *          java.util.ConcurrentModificationException
                 *          并发修改异常
                */
            }
        }
    }
}
```

```java
/**
 * 已知一个集合，有3个学生，遍历打印3个学生的信息
*/
package com.wuziqi.gobang.controller;

import java.util.ArrayList;

public class DemoList {
    public static void main(String[] args) {
        ArrayList astu = new ArrayList();
        astu.add(new Student("小明",18));
        astu.add(new Student("小张",20));
        astu.add(new Student("rose",18));
        for (Object o : astu) { //for each 多态格式
            // System.out.println(o); 这样直接打印没问题
            // 换一种打印
            Student s = (Student) o; // 向下转型后才可以使用特有方法
            System.out.println(s.getName() + "..." + s.getAge());
        }
    }
}

class Student{
    private String name;
    private int age;

    Student(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```
