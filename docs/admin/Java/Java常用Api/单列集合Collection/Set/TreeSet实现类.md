## TreeSet 实现类

### TreeSet 集合的特点

1. <font color=red>无序性</font>（即：存进去的顺序和取出来的顺序不一定一致）
2. <font color=red>无索引</font>
3. <font color=red>唯一性</font>，TreeSet 类中的元素的不能重复
4. <font color=red>可以排序的</font>(按照规则排序，默认按照字典顺序由小到大)

### 常见的成员方法

<font color=red><RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Set/Set接口.md">与 Set 集合</RouteLink>一致</font>

### TreeSet 集合遍历

1. 转数组循环遍历

2. 迭代器遍历

3. 增强 for 循环遍历(for each)

### TreeSet 存储字符串类型的数据

<font color=red>按照字典顺序，由小到大排序</font>

### TreeSet 存储 Integer 类型的数据

<font color=red>按照数字的大小，由小到大排序</font>

```java
package com.wuziqi.gobang.Set;

import java.util.TreeSet;

public class TreeSets {
    public static void main(String[] args) {
        TreeSet<String> ts = new TreeSet<String>();
        ts.add("aaa");
        ts.add("ccc");
        ts.add("bbb");
        System.out.println(ts); // 按照字典顺序，由小到大：[aaa, bbb, ccc]

        TreeSet<Integer> ts1 = new TreeSet<Integer>();
        ts1.add(1);
        ts1.add(3);
        ts1.add(2);
        System.out.println(ts1); // 按照数字大小由小到大：1 2 3
    }
}
```

### TreeSet 存储的数据类型不一致的问题

<font color=red>TreeSet 一般与泛型一起使用</font>

```java
package com.wuziqi.gobang.Set;

import java.util.TreeSet;

public class TreeSets {
    public static void main(String[] args) {
        TreeSet ts2 = new TreeSet();
        ts2.add(1);
        ts2.add("3");
        ts2.add(true);
        // 运行时期异常：因为底层排序没有规则，
        // 所以出现类型转换异常，因此一般与泛型一起使用
        System.out.println(ts2);
    }
}
```

### TreeSet 存储自定义的类的问题

<font color=red>如果存储的是自定义类，需要构造 Comparable 或者 Comparator，不然也会报类型转换异常</font>

```java
package com.wuziqi.gobang.Set;

import java.util.TreeSet;

public class TreeSets {
    public static void main(String[] args) {
        TreeSet<Pig> ts3 = new TreeSet<Pig>();
        ts3.add(new Pig("小猪", 1));
        ts3.add(new Pig("小猪", 2));
        // 运行时期异常：没有给排序规则，类型转换异常，
        // 因此需要Comparable 或者 Comparator
        System.out.println(ts3);
    }
}
class Pig{
    private String name;
    private int age;

    public Pig(String name, int age) {
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
        return "Pig{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

### TreeSet 存储自定义的类需要满足的条件

1. 自然排序 Comparable

   > 如何实现自然排序？
   >
   > 1. 自定义的这个类要实现 Comparable 接口
   >
   > 2. 重写 compareTo 抽象方法
   >
   > 3. 在 compareTo 方法中定义排序规则
   >
   >    - return 0：集合中的元素只有一个
   >
   >    - return 正数：集合中的元素按照正序排列
   >
   >    - return 负数：集合中的元素按照倒序排列

2. 比较器 Comparator
   > 如何实现比较器？
   >
   > 1. 自定义类
   >
   > 2. 创建 TreeSet 对象时，在构造方法中传递 Comparator 的对象
   >
   > 3. 重写 compareTo 抽象方法
   >
   > 4. 在 compare() 方法中定义排序规则
   >
   >    - return 0：集合中的元素只有一个
   >
   >    - return 正数：集合中的元素按照正序排列
   >
   >    - return 负数：集合中的元素按照倒序排列

#### Comparable

```java
// Comparable 自然排序
package com.wuziqi.gobang.Set;

import java.util.TreeSet;

public class TreeSets {
    public static void main(String[] args) {
        TreeSet<Pig> ts3 = new TreeSet<Pig>();
        ts3.add(new Pig("小猪", 1));
        ts3.add(new Pig("小猪", 2));
        System.out.println(ts3);
    }
}
class Pig implements Comparable<Pig>{
    private String name;
    private int age;

    public Pig(String name, int age) {
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
        return "Pig{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public int compareTo(Pig o) {
        return 0;
        /**
         * return 0：[Pig{name='小猪', age=1}]
         * return 正数：[Pig{name='小猪', age=1}, Pig{name='小猪', age=2}]
         * return 负数：[Pig{name='小猪', age=2}, Pig{name='小猪', age=1}]
        */
    }
}
```

#### Comparator

```java
// Comparator 比较器
package com.wuziqi.gobang.Set;

import java.util.Comparator;
import java.util.TreeSet;

public class TreeSets {
    public static void main(String[] args) {
        TreeSet<Dog> ts4 = new TreeSet<Dog>(new Comparator<Dog>() {
            @Override
            public int compare(Dog o1, Dog o2) {
                return 0;
                /**
                 * return 0：[Dog{name='小狗', age=18}]
                 * return 正数：[Dog{name='小狗', age=18}, Dog{name='小狗', age=30}]
                 * return 负数：[Dog{name='小狗', age=30}, Dog{name='小狗', age=18}]
                */
            }
        });
        ts4.add(new Dog("小狗", 18));
        ts4.add(new Dog("小狗", 30));
        System.out.println(ts4);
    }
}
class Dog {
    private String name;
    private int age;

    public Dog(String name, int age) {
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
        return "Dog{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```
