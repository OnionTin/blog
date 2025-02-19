## Comparator 比较器

> 一堆学生，只有姓名和年龄，
>
> 先根据年龄从小到大排序，
>
> 如果年龄相同，则按照字典顺序从小到大排序，
>
> 同龄的学生中没有同名的。

```java
package com.wuziqi.gobang.Set;

import java.util.Comparator;
import java.util.TreeSet;

public class DemoComparator {
    public static void main(String[] args) {
        TreeSet<Student> ts = new TreeSet<Student>(new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                int i = o1.getAge() - o2.getAge();
                return i == 0 ? o1.getName().compareTo(o2.getName()) : i;
            }
        });
        ts.add(new Student("Tom", 20));
        ts.add(new Student("Rose", 19));
        ts.add(new Student("Jerry", 20));
        ts.add(new Student("Jack", 19));
        ts.add(new Student("Tina", 18));
        ts.add(new Student("Rose", 19));
        System.out.println(ts);
    }
}
class Student{
    private String name;
    private int age;

    public Student(String name, int age) {
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
/**
 * 输出结果：
 * [Person{name='Tina', age=18}, Person{name='Jack', age=19},
 * Person{name='Rose', age=19}, *Person{name='Jerry', age=20},
 * Person{name='Tom', age=20}]
 */
```
