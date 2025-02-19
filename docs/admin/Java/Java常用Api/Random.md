## Random

需要导包， 在 java.util 包下

### 构造方法

Random() 创建一个新的随机数生成器
| 方法 | 作用 |
| ------------------------------------ | --------------------------------------- |
| Random() | 创建一个新的随机数生成器 |

### 常用方法

| 方法               | 作用                                                 |
| ------------------ | ---------------------------------------------------- |
| int nextInt(int n) | 返回一个伪随机数，范围在 0（包括）到 n（不包括）之间 |

```java
Random r = new Random();
for(int i = 0; i < 10; i++){
  int nI = r.nextInt(10);
  System.out.println(nI);
  // 输出结果可以为： 0 1 4 3 7 8 2 6 9 5
}
```

### 获取 1-100 之间的随机数

#### Math 方法

```java
int num = (int)(Math.random() * 100) + 1;
```

#### <font color= red>Random 方法</font>

```java
Random r = new Random();
int num = r.nextInt(100) + 1;
```
