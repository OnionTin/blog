## Object 类的常用 Api

### 1. equals

> 用来比较两个对象是否相等
>
> 如果是基本数据类型，则是比较两个数大小是否相等
>
> 如果是引用数据类型，则是比较`地址值`
>
> 如果想要判断两个对象的属性是否相同，需要用到 Object 的 equals 的方法进行重写

```java
// equals方法的重写示例

package com.wuziqi.gobang.controller;

public class Demo {
  public static void main(String[] args) {
    /*name可以都为"null"字符串, 可以都为null,也可以都为"",这样会相等，
    *但是"null" != null != ""
    **/
    System.out.println("" == null); // "" != null，"null"是空字符串
    Pig p1 = new Pig("小猪", 18);
    Pig p2 = new Pig("小猪", 18);
    Pig p3 = new Pig("小狗", 18);
    Dog p4 = new Dog("小狗", 18);
    Pig p5 = new Pig("", 18); // p5 == p6
    Pig p6 = new Pig("", 18);
    Pig p7 = new Pig("null", 18); // p7 == p8
    Pig p8 = new Pig("null", 18);
    Pig p9 = new Pig(null, 18); // p8 != p9

    boolean a = p1.equals(p2);
    boolean b = p2.equals(p3);
    // boolean c = p3.equals(p4);
    System.out.println(a); // true
    System.out.println(b); // false
    // System.out.println(c); 编译报错
    System.out.println(p5.equals(p6)); // true
    System.out.println(p7.equals(p8)); // true
    System.out.println(p5.equals(p7)); // false
    System.out.println(p8.equals(p9)); // false
    System.out.println(p5.equals(p9)); // false
  }
}

class Pig extends Object {
    private String name;
    private int age;

    public Pig(String name, int age) {
        this.name = name;
        this.age = age;
    }
    // 这块是鼠标右键生成的equals方法重写
    @Override
    public boolean equals(Object o) {
      // 判断是否指向同一个对象
        if (this == o) return true;
        // 判断有参数为空(null)以及判断两个对象是否同一种类
        if (o == null || getClass() != o.getClass()) return false;
        Pig pig = (Pig) o;
        return age == pig.age && name.equals(pig.name);
    }

//    // 这是按照思路自己重写的equals写法，用来弄清重写的意图
//    @Override
//    public boolean equals(Object obj){
//        Pig p = (Pig) obj;
//        // 限定不能为空参传入
//        if (obj == null) return false;
//        // 限定传入对象需要与入参对象类型一致
//        if (!(obj instanceof Pig)) return false;
//        // String也有一个equals方法用来判断是否相等
//        return this.name.equals(p.name) && this.age == p.age;
//    }
}

class Dog {
    private String name;
    private int age;

    Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

```

### 2. toString

> 如果不重写方法的话，获取到的是类名加上@加上对象所在的地址值
>
> 通过鼠标右键重写的方法会打印出来转成字符串形式的内容

```java
package com.wuziqi.gobang.controller;

public class Demo {
    public static void main(String[] args) {
        // 不重写toString()方法
        Dog dog1 = new Dog("小明", 18, "公");
        // 下边两个方法的打印结果一样，
        // 都是com.wuziqi.gobang.controller.Dog@23fc625e
        System.out.println(dog1);
        System.out.println(dog1.toString());
        // 重写toString()方法后
        Dog dog2 = new Dog("小灰", 18, "母");
        System.out.println(dog2.toString()); // Dog{name='小灰', age=18, sex='母'}
    }
}
class Dog extends Object{
    private String name;
    private int age;
    private String sex;

    public Dog(String name, int age, String sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                '}';
    }
}
```
