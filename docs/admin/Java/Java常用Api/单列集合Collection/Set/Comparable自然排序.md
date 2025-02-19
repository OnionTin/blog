## Comparable 自然排序

> 一堆学生，只有姓名和年龄，
>
> 先根据年龄从小到大排序，
>
> 如果年龄相同，则按照字典顺序从小到大排序，
>
> 同龄的学生中没有同名的。

```java
package com.wuziqi.gobang.Set;

import java.util.TreeSet;

public class DemoComparable {
    public static void main(String[] args) {
        TreeSet<Person> ts = new TreeSet<Person>();
        ts.add(new Person("Tom", 20));
        ts.add(new Person("Rose", 19));
        ts.add(new Person("Jerry", 20));
        ts.add(new Person("Jack", 19));
        ts.add(new Person("Tina", 18));
        ts.add(new Person("Rose", 19));
        System.out.println(ts);
    }
}
class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public int compareTo(Person o) {
        int i = this.age - o.age;
        return i == 0 ? this.name.compareTo(o.name) : i;
    }
}
/**
 * 输出结果：
 * [Person{name='Tina', age=18}, Person{name='Jack', age=19},
 * Person{name='Rose', age=19}, *Person{name='Jerry', age=20},
 * Person{name='Tom', age=20}]
 */
```
