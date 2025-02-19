## TreeMap 实现类

和<RouteLink active to="/admin/Java/Java常用Api/双列集合Map/Map接口.md">Map</RouteLink>很相似，除了<font color=red>可以排序</font>，其他基本一样；
双列集合；需要导包，在 java.util 下； TreeMap 是实现类。

### TreeMap 集合的特性

1. <font color = red>无序性</font>
2. <font color = red>无索引</font>
3. <font color = red>元素唯一(键唯一，值不唯一)</font>
4. <font color = red>双列的</font>
5. <font color = red>可以排序的(根据键来排序)</font>

![Map特性](../../../images/Map特性.jpg)

### 数据结构

红黑树，<RouteLink active to="/admin/Java/Java常用Api/单例集合Collection/Set/TreeSet实现类.md">TreeSet</RouteLink> 的底层就是 TreeMap。

### 常见的成员方法

| 方法                                | 作用                                                     |
| ----------------------------------- | -------------------------------------------------------- |
| V put(K key, V value)               | 添加元素，返回添加之前的值；修改元素，返回被修改之前的值 |
| V remove(Object key)                | 根据键来删除元素，返回被删除的元素的值                   |
| int size()                          | 获取长度                                                 |
| void clear()                        | 清空                                                     |
| V get(Object key)                   | 根据键来获取值                                           |
| boolean containsKey(Object key)     | 判断是否包含，键为给定的内容，的元素                     |
| boolean containsValue(Object value) | 判断是否包含，值为给定的内容，的元素                     |
| `Set<K> keySet()`                   | 获取所有的键，并用 Set 集合接收                          |
| `Collection<V> values()`            | 获取所有的值，并用 Collection(或其他结合) 集合接收       |
| `Set<Map.Entry<K,V>> entrySet()`    | 获取所有的键值对，并用 Set 结合接收                      |

### TreeMap 集合的遍历

1. 键找值遍历

```java
Set <String> keys = map.keySet();
    for (String key : keys){
        System.out.println(key + ":" + map.get(key));
        // 结果：
        // 李四:20
        // 张三:18
        // 王五:22
}
```

2. 键值对获取键合值

```java
Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
    for (Map.Entry<String, Integer> entry : entrySet){
        System.out.println(entry.getKey() + ":" + entry.getValue());
        // 结果：
        // 李四:20
        // 张三:18
        // 王五:22
}
```

```java
import java.util.Map.Entry; // 内部类的用法，需要导包
Set<Entry<String, Integer>> entrySet = map.entrySet();
    for (Entry<String, Integer> entry : entrySet){
        System.out.println(entry.getKey() + ":" + entry.getValue());
        // 结果：
        // 李四:20
        // 张三:18
        // 王五:22
}
```

### 排序(和<RouteLink active to="/admin/Java/Java常用Api/单例集合Collection/Set/TreeSet实现类.md">TreeSet</RouteLink>一样，自然排序、比较器)

### 方法的应用

```java
package com.wuziqi.gobang.Map;

import java.util.Comparator;
import java.util.Set;
import java.util.TreeMap;
import java.util.Map.Entry;

public class DemoTreeMap {
    public static void main(String[] args) {
        TreeMap<String, Student> tm = new TreeMap<String, Student>();
        tm.put("9527", new Student("Tom", 18));
        tm.put("9530", new Student("Jerry", 18));
        tm.put("9526", new Student("Rose", 18));
        tm.put("9531", new Student("Nose", 18));
        tm.put("9525", new Student("Fore", 18));
        Set<String> keys = tm.keySet();
        for (String key : keys) {
            System.out.println(key + ":" + tm.get(key));
            // 结果：根据键值，进行了排序
            // 9525:Student{name='Fore', age=18}
            // 9526:Student{name='Rose', age=18}
            // 9527:Student{name='Tom', age=18}
            // 9530:Student{name='Jerry', age=18}
            // 9531:Student{name='Nose', age=18}
        }

        TreeMap<Student, String> tm2 = new TreeMap<Student, String>(
          new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                int i = o1.getAge() - o2.getAge();
                int ii = i == 0 ? o1.getName().compareTo(o2.getName()) : i;
                return ii;
            }
          }
        );
        tm2.put(new Student("Tom", 18),"9527");
        tm2.put(new Student("Jerry", 17), "9530");
        tm2.put(new Student("Rose", 16), "9526");
        tm2.put(new Student("Nose", 20), "9531");
        tm2.put(new Student("Tom", 18), "9525");
        Set<Entry<Student, String>> sets = tm2.entrySet();
        for (Entry<Student, String> entry : sets) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
            // 结果：
            // Student{name='Rose', age=16}:9526
            // Student{name='Jerry', age=17}:9530
            // Student{name='Tom', age=18}:9525
            // Student{name='Nose', age=20}:9531
        }
    }
}
class Student {
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
//class Student implements Comparable<Student>{
//    private String name;
//    private int age;
//
//    public Student(String name, int age) {
//        this.name = name;
//        this.age = age;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    @Override
//    public String toString() {
//        return "Student{" +
//                "name='" + name + '\'' +
//                ", age=" + age +
//                '}';
//    }
//    @Override
//    public int compareTo(Student o) {
//        int i = this.age - o.age;
//        int ii = i == 0 ? this.name.compareTo(o.name) : i;
//        return ii;
//    }
//}
```
