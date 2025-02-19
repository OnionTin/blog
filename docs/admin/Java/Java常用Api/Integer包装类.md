## Integer 包装类

> 包装类: 就是把基本数据类型包装成引用类型

| 基本数据类型               | 对应的包装类（位于 java.lang 包中） |
| -------------------------- | ----------------------------------- |
| byte                       | Byte                                |
| short                      | Short                               |
| <font color=red>int</font> | <font color=red>Integer</font>      |
| long                       | Long                                |
| float                      | Float                               |
| double                     | Double                              |
| `char`                     | `Character`                         |
| boolean                    | Boolean                             |

### Integer(int 类型包装类)

#### 常见的构造方法

| 方法                      | 作用                                             |
| ------------------------- | ------------------------------------------------ |
| public Integer(int value) | 创建 Integer 对象;int -> Integer                 |
| public Integer(String s)  | 创建 Integer 对象;String 类型的`数字` -> Integer |

```java
// public Integer(int value):
Integer in1 = new Integer(12);
System.out.println(in1); // 12

// public Integer(String s)
Integer in2 = new Integer("12");
System.out.println(in2); // 12

// 只能是`数字`类型的String
Integer in3 = new Integer("abc");
System.out.println(in3); // 运行报错

// 超出Integer范围(就是int的范围)
Integer in4 = new Integer(11111111111111111); // 这是17位，int最大16位
System.out.println(in4); // 运行报错
```

#### 常见的成员方法

| 方法                                                        | 作用                                                           |
| ----------------------------------------------------------- | -------------------------------------------------------------- |
| public int intValue()                                       | 将 Integer 类型的数字转换为 int 类型的数字                     |
| public boolean equals(Object obj)                           | 比较两个 Integer 类型的数字是否相等                            |
| <font color=red>public static int parseInt(String s)</font> | <font color=red>将字符串类型的数字转换为 int 类型的数字</font> |
| public String toString()                                    | 将 Integer 类型的数字转换为字符串类型的数字                    |
| public static String toString(int i)                        | 将 int 类型的数字转换为字符串类型的数字                        |
| public static Integer valueOf(int i)                        | 将 int 类型的数字转换为 Integer 类型的数字                     |
| public static Integer valueOf(String s)                     | 将字符串类型的数字转换为 Integer 类型的数字                    |

```java
// 最重要的使用方法案例：
System.out.println(Integer.parseInt("123")); // 123
```

### 自动装箱和自动拆箱

> 自动装箱: int -> Integer
>
> 自动拆箱: Integer -> int

```java
Integer i = 10; // 自动装箱 => 手动装箱: Integer i = Integer.valueOf(10);
int n = i + 2; // 自动拆箱 => 手动拆箱: int n = i.intValue() + 2;

Integer in = 12;
in = in + 20; // in = Integer.valueOf(in.intValue() + 20);
```

### 基本数据类型和包装类之间的转换

> 基本数据类型转换为包装类: 使用包装类的构造器

```java
int num = 10;
Integer i = new Integer(num);
```

> 包装类转换为基本数据类型: 使用包装类中的方法

```java
Integer i = new Integer(10);
int num = i.intValue();
```

> 自动转换: 直接将包装类赋值给基本数据类型

```java
Integer i = new Integer(10);
int num = i;
```

> 注意: 自动转换是编译器自动进行的, 不是我们手动进行的

### 常见的问题

```java
  Integer in1 = new Integer(127);
  Integer in2 = new Integer(127);
  System.out.println(in1 == in2); // false: 因为new出来的对象在内存中是不同的

  Integer in3 = new Integer(128);
  Integer in4 = new Integer(128);
  System.out.println(in3 == in4); // false: 因为new出来的对象在内存中是不同的

  Integer in5 = 127;
  Integer in6 = 127;
  System.out.println(in5 == in6); // true: 因为自动装箱, 会将127自动装箱成Integer对象

  Integer in7 = 128;
  Integer in8 = 128;
  System.out.println(in7 == in8); // false: Integer范围: -128 - 127，范围内比较数值
  System.out.println(in7.equals(in8)); // true: equals比较的是数值

  Integer in9 = 126;
  Integer in10 = in9 + 1;
  Integer in11 = in9 + 1; // in11 是Integer类型；Integer对象的比较要用equals
  System.out.println(in10 == in11); // true
  System.out.println(in5 == in10); // true
  System.out.println(in5 == in2); // false
  System.out.println(in2 == in10); // false
```
