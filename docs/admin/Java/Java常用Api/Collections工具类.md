## Collections 工具类(对 List 进行排序)

工具类(构造方法私有的，成员方法静态的)

### 常用的成员方法

| 方法                                                                      | 作用                               |
| ------------------------------------------------------------------------- | ---------------------------------- |
| `public static <T extends Comparable<? super T>> void sort(List<T> list)` | 对 List 集合进行排序(自定义类)     |
| `public static <T> void sort(List<T> list, Comparator<? super T> c)`      | 对 List 集合进行排序(不含自定义类) |

### 方法的使用

```java
package com.wuziqi.gobang.Collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class DemoCollections {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("aaa");
        list.add("dd");
        list.add("c");
        list.add("bbbb");
        // list有序的：
        System.out.println(list); // [aaa, dd, c, bbbb]

        // 不给定规则，默认按自然排序，即按字母顺序排序
        Collections.sort(list);
        System.out.println(list); // [aaa, bbbb, c, dd]

        // 如果定规则，按照规则排序：比如按照字符长度排序
        Collections.sort(list, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.length() - o2.length();
            }
        });
        System.out.println(list); // [c, dd, aaa, bbbb]

        /**
         *  List中存储的是自定义类的话，
         *  如果想要排序需要使用Comparable接口，重写compareTo方法
         *  因为List是可以重复的，所以Comparable自然排序后，不会去重
         *  这也是List和Set的区别，如果是Set集合则会去重
         */
        ArrayList<Person> persons = new ArrayList<Person>();
        persons.add(new Person("tom", 10));
        persons.add(new Person("jerry", 12));
        persons.add(new Person("rose", 8));
        persons.add(new Person("jack", 10));
        persons.add(new Person("tom", 10));
        Collections.sort(persons);
        System.out.println(persons);
        // 结果：
        // [Person{name='rose', age=8}, Person{name='jack', age=10},
        // Person{name='tom', age=10}, Person{name='tom', age=10},
        // Person{name='jerry', age=12}]
    }
}
class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
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
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
    @Override
    public int compareTo(Person o) {
        int i = this.age - o.age;
        return i == 0 ? this.name.compareTo(o.name) : i;
    }
}
```
