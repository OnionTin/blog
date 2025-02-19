## LocalDateTime(jdk1.8 新出的日期类)

写法简单，并且把 Date 和 Calendar 的用法都归纳总结了

- LocalDate 表示日期，比如 2014-03-18。

- LocalTime 表示时间，比如 22:30:40。

- LocalDateTime 同时表示日期和时间，比如 2014-03-18T22:30:40。

### LocalDateTime 类

需要导包，在 java.time 包下

没有构造方法(不能 new)

#### LocalDateTime 获取当前类的方法

| 方法                                                                                                  | 作用         |
| ----------------------------------------------------------------------------------------------------- | ------------ |
| public static LocalDateTime now()                                                                     | 当前时间     |
| public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute, int second) | 获取传入时间 |

```java
package com.wuziqi.gobang.controller;
import java.time.LocalDateTime;

public class DemoNewDate {
    public static void main(String[] args) {
        LocalDateTime date1 = LocalDateTime.now();
        System.out.println(date1); // 2024-03-13T11:29:58.939
        LocalDateTime date2 = LocalDateTime.of(2022,2,22,22,22,22);
        System.out.println(date2); // 2022-02-22T22:22:22
    }
}
```

#### LocalDateTime 获取年月日时分秒方法

| 方法          | 作用   | 方法        | 作用 |
| ------------- | ------ | ----------- | ---- |
| getYear       | 获取年 | getHour()   | 时   |
| getMonthValue | 获取月 | getMinute() | 分   |
| getDayOfMonth | 获取日 | getSecond() | 秒   |

```java
package com.wuziqi.gobang.controller;

import java.time.LocalDateTime;

public class DemoNewDate {
    public static void main(String[] args) {
        LocalDateTime date = LocalDateTime.of(2022,2,22,22,22,22);
        System.out.println(date); // 2022-02-22T22:22:22
        System.out.println(date.getYear()); // 2022
        System.out.println(date.getMonthValue()); // 2
        System.out.println(date.getHour()); // 22
    }
}
```

#### LocalDateTime 转换方法

| 方法                    | 作用                         |
| ----------------------- | ---------------------------- |
| LocalDate toLocalDate() | LocalDateTime 转成 LocalDate |
| LocalTime toLocalTime() | LocalDateTime 转成 LocalTime |

```java
package com.wuziqi.gobang.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class DemoNewDate {
    public static void main(String[] args) {
        LocalDateTime date = LocalDateTime.of(2022,2,22,22,22,22);
        System.out.println(date); // 2022-02-22T22:22:22
        LocalDate ld = date.toLocalDate();
        System.out.println(ld); // 2022-02-22
        LocalTime lt = date.toLocalTime();
        System.out.println(lt); // 22:22:22
    }
}
```

#### LocalDateTime 解析和格式化方法

需要导包，DateTimeFormatter，在 java.time.format 包下

| 方法                                                                 | 作用                 |
| -------------------------------------------------------------------- | -------------------- |
| DateTimeFormatter.ofPattern("yyyy 年 MM 月 dd 日 HH:mm:ss E")        | 格式                 |
| String format(pattern)                                               | 格式化 LocalDateTime |
| static LocalDateTime parse(String text, DateTimeFormatter formatter) | LocalDateTime 解析   |

```java
package com.wuziqi.gobang.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DemoNewDate {
    public static void main(String[] args) {
        LocalDateTime date2 = LocalDateTime.of(2022,2,22,22,22,22);
        DateTimeFormatter pattern =
        DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH:mm:ss E");
        String ldf = date2.format(pattern);
        System.out.println(ldf); // 2022年02月22日 22:22:22 星期二

        LocalDateTime ldt = LocalDateTime.parse(ldf, pattern);
        System.out.println(ldt);// 2022-02-22T22:22:22
    }
}
```

#### LocalDateTime 增量

| 方法                                | 作用       |
| ----------------------------------- | ---------- |
| LocalDateTime plusYears(long years) | 增加 n 年  |
| LocalDateTime plusXXX(long xxx)     | 增加 n xxx |

#### LocalDateTime 修改

| 方法                                | 作用       |
| ----------------------------------- | ---------- |
| LocalDateTime withYears(long years) | 修改 n 年  |
| LocalDateTime withXXX(long xxx)     | 修改 n xxx |

```java
package com.wuziqi.gobang.controller;

import java.time.LocalDateTime;

public class DemoNewDate {
    public static void main(String[] args) {
        LocalDateTime date2 = LocalDateTime.of(2022,2,22,22,22,22);
        System.out.println(date2); // 2022-02-22T22:22:22
        LocalDateTime ldj = date2.plusYears(2);
        System.out.println(ldj); // 2024-02-22T22:22:22
        LocalDateTime ldx = date2.withYear(2022);
        System.out.println(ldx); // 2022-02-22T22:22:22
    }
}
```
