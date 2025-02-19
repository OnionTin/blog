## BigDecimal

需要导包，在 java.math 包下

### 常见构造方法

| 方法                          | 作用                        |
| ----------------------------- | --------------------------- |
| public BigDecimal(double val) | 将 double 转换为 BigDecimal |
| public BigDecimal(String val) | 将 String 转换为 BigDecimal |

<font color=red>注意: 如果期望结果更加准确的话，建议使用 BigDecimal(String val)的构造方法</font>

```java
package com.wuziqi.gobang.controller;
import java.math.BigDecimal;

public class DemoBigDecimal {
  public static void main(String[] args) {
    // public BigDecimal(String val)
    BigDecimal a = new BigDecimal("0.01");
    System.out.println(a); // 0.01
    BigDecimal b = new BigDecimal("1.10");
    System.out.println(b); // 1.10

    // public BigDecimal(double val)
    BigDecimal c = new BigDecimal(0.1);
    System.out.println(c); // 0.100000000000000005...
    BigDecimal d = new BigDecimal(1.0);
    System.out.println(d); // 1
  }
}
```

### 常见的成员方法

| 方法                                                                             | 作用                                  |
| -------------------------------------------------------------------------------- | ------------------------------------- |
| public BigDecimal add(另一个 BigDecimal 对象)                                    | 加法运算                              |
| public BigDecimal subtract(另一个 BigDecimal 对象)                               | 减法运算                              |
| public BigDecimal multiply(另一个 BigDecimal 对象)                               | 乘法运算                              |
| public BigDecimal divide(另一个 BigDecimal 对象)                                 | 除法运算                              |
| public BigDecimal divide(BigDecimal divisor,int scale,RoundingMode roundingMode) | <font color=red>除法运算除不尽</font> |

> public BigDecimal divide(BigDecimal divisor,int scale,RoundingMode roundingMode)
>
> divisor：另一个 BigDecimal 对象
>
> scale：保留几位小数
>
> roundingMode：舍入模式(ROUND_DOWN,ROUND_UP,ROUND_HALF_UP 等)
>
> ROUND_DOWN：直接舍去(去尾)
>
> ROUND_UP：直接进位(加头)
>
> ROUND_HALF_UP：四舍五入

```java
// 加法案例(加减乘除一样，这里以加法为例)
package com.wuziqi.gobang.controller;
import java.math.BigDecimal;

public class DemoBigDecimal {
  public static void main(String[] args) {
    BigDecimal bd1 = new BigDecimal(0.1);
    BigDecimal bd2 = new BigDecimal(0.2);
    BigDecimal bd3 = bd1.add(bd2);
    System.out.println(bd3); // 0.30000...

    BigDecimal bd10 = new BigDecimal("0.1");
    BigDecimal bd20 = new BigDecimal("0.2");
    BigDecimal bd30 = bd10.add(bd20);
    System.out.println(bd30); // 0.3 我们想要的结果
    // 使用 BigDecimal(String val)结果准确
  }
}
```

```java
// 除法(除不尽)
package com.wuziqi.gobang.controller;
import java.math.BigDecimal;

public class DemoBigDecimal {
  public static void main(String[] args) {
    BigDecimal bd1 = new BigDecimal("10.0");
    BigDecimal bd2 = new BigDecimal("3.0");
    BigDecimal bd3 = bd1.divide(bd2, 2, BigDecimal.ROUND_DOWN);
    BigDecimal bd4 = bd1.divide(bd2, 3, BigDecimal.ROUND_UP);
    BigDecimal bd5 = bd1.divide(bd2, 4, BigDecimal.ROUND_HALF_DOWN);
    System.out.println(bd3); // 3.33
    System.out.println(bd4); // 3.334
    System.out.println(bd5); // 3.3333
  }
}
```
