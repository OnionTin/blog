## 获取 Class 对象(获取字节码文件对象)

前两种方式已知是 Person 类，后最后一种方式不需要知道是哪个类

```java
package com.api.Reflex;

public class Demo01 {
    public static void main(String[] args) throws ClassNotFoundException {
        // 获取Person类对象class对象
        Class c1 = Person.class;

        Person p = new Person();
        Class c2 = p.getClass();

        Class c3 = Class.forName("com.api.Reflex.Person");

        System.out.println(c1 == c2); // true
        System.out.println(c1 == c3); // true
    }
}
class Person{
    private String name;
    private int age;

    public Person() {
    }

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
}
```

### Class 类常用方法

| 方法                        | 作用             |
| --------------------------- | ---------------- |
| public Object newInstance() | 创建一个类的实例 |

```java
package com.api.Reflex;

public class Demo02 {
    public static void main(String[] args) throws Exception {
        // 获取字节码文件对象
        Class clazz = Class.forName("com.api.Reflex.Pig");

        // 创建对象
        Object obj = clazz.newInstance();
        System.out.println(obj); // com.api.Reflex.Pig@4f023edb

        // 向下转型
        Pig pig = (Pig) clazz.newInstance();
        System.out.println(pig); // com.api.Reflex.Pig@3a71f4dd
    }
}

class Pig {

}
```
