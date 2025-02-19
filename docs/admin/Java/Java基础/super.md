## super

`super指向父类、this指向本类`

`构造方法中第一行要么this(参数)要么super(参数)，但不共存`

`至少有一个构造方法中调用super()`

> super 是父类内存空间的标记，在用法上，我们可以当作父类对象的引用来使用，但是我们不能说
>
> super 就是父类对象的引用

### super 关键字和 this 关键字的区别

1. `调用构造方法`

- super()
  - 调用父类的构造方法
- this()
  - 调用本类的构造方法

2. `调用成员方法`

- super.方法名()
  - 调用父类中的成员方法
- this.方法名()
  - 调用本类中的成员方法

3. `调用成员变量`

- super.变量名
  - 调用父类中的成员变量
- this.变量名
  - 调用本类中的成员变量

### 具体说明 super 和 this

1. 子类中的所有的构造方法的第一行，`默认`都有一个`super()`。

```java
// 因为有继承，说明子类可以使用父类的成员变量，那也就意味着父类的成员变量一定要有一直

// 才可以被使用，所以在创建类对象的时候，会调用子类的构造方法，而子类的构造方法中会先

// 去调用父类的构造方法，目的就是给父类的额成员变量默认初始化
class Fu{
  String name;
  public Fu(){ // 父类默认有一个无参构造
    System.out.println("Fu的无参构造");
  }
}
class Zi extends Fu{
  public Zi(){
    super(); // 默认调用父类的无参构造
  }
  public Zi(String name){
    super(); // 默认调用父类的无参构造
  }
  public Zi(int age){
    super(); // 默认调用父类的无参构造
  }
  public Zi(String name,int age){
    super(); // 默认调用父类的无参构造
  }
}
class Demo {
  public static void main(String[] args) {
    Zi zi = new Zi();
    System.out.println(zi.name); // null
  }
}
```

2. 子类中的所有`构造方法`中， 第一行要么是 super(参数)，要么是 this(参数)，他们不能同时存在。

```java
class Fu{
  String name;
  public Fu(){
  }
}
class Zi extends Fu{
  public Zi(String name){
    super();
    // this(); // 错误，super和this不能同时存在
  }
  public Zi(){
    this("张三"); // 正确的，因为调用了上面的有参构造
  }
}
```

3. 子类中的所有的构造方法中`至少有一个`构造方法里面调用的是 super(参数)，如果没有显式的调用 super(参数)，则默认调用 super()。

```java
class Fu{
  String name;
  int age;
}
class Zi extends Fu{
  public Zi(){
    this("aaa");
  }
  public Zi(String name){
    this(18);
  }
  public Zi(int age){
    this("aaa", 18)
  }
  public Zi(String name,int age){
    // super();
  }
}
class Demo {
  public static void main(String[] args) {
    Zi zi = new Zi();
  }
}
```
