## Math

不需要导包，工具类(构造方法是私有的，成员方法是静态的)

### 常用的成员方法

| 方法                                 | 作用                                    |
| ------------------------------------ | --------------------------------------- |
| static int abs(int a)                | 返回参数的绝对值                        |
| static int max(int a,int b)          | 返回两个参数中的较大值                  |
| static int min(int a,int b)          | 返回两个参数中的较小值                  |
| static double ceil(double a)         | 向上取整                                |
| static double floor(double a)        | 向下取整                                |
| static double pow(double a,double b) | 返回 a 的 b 次幂                        |
| static long round(double a)          | <font color=red>四舍五入</font>         |
| static double random()               | <font color=red>0-1 之间的随机数</font> |

```java
int num = Math.max(int a, int b); // 取较大值

double num = Math.random(); // 0-1之间的随机数
```
