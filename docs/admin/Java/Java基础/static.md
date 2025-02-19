## static

`共享成员、只能访问静态变量和方法、与实例对象无关、优先对象加载等问题`

> static 是一个修饰符，代表静态的意思，用来修饰成员变量和成员方法的，不能修饰构造方法。

### 特点

1. 被 static 修饰的成员变量和成员方法在内存中只有一个副本，被所有对象`共享`。
2. 被 static 修饰的成员变量和成员方法`独立于该类的任何对象。也就是说，这些成员变量和成员方法与类的任何对象实例无关`，它们属于类本身，因此通过类名就可以访问它们。

   类名.成员变量

   类名.成员方法()

3. 被 static 修饰的成员变量和成员方法随着字节码文件对象的加载而加载，所以是`优先于对象存在于内存中`。

### 案例

1. `静态方法只能访问类的静态成员变量和静态方法，不能访问非静态成员变量和非静态方法`

```java
 class Person{
  String name;
  static int age;
  public static void eat(){
    drink(); // 没有问题
    System.out.println(name); // 没有问题
    sleep(); // 编译报错
    System.out.println(age); // 编译报错
  }
  public static void drink(){

  }
  public void sleep(){

  }
 }
```
