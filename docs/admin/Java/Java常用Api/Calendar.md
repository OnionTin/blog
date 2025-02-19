## Calendar

需要导包，在 java.util 包下, 抽象类，使用时需要创建子对象

### 常见的成员方法

| 方法                                     | 作用                                       |
| ---------------------------------------- | ------------------------------------------ |
| getInstance()                            | 获取 Calender 的子对象                     |
| int get(int field)                       | 获取年、月、日、小时、分钟、秒等           |
| void set(int field, int value)           | 设置年、月、日、小时、分钟、秒等           |
| final Date getTime()                     | 获取 Date 对象(将 Calendar 转成 Date 类型) |
| abstract void add(int field, int amount) | 对年、月、日等进行增将或减量               |

```java
public static void main(String[] args) {
  Calendar c = Calendar.getInstance(); // c: Calendar子对象

  // 获取年、月、日、小时、分钟、秒等
  int year = c.get(Calendar.YEAR);
  int month = c.get(Calendar.MONTH);
  int day = c.get(Calendar.DAY_OF_MONTH);
  int hour = c.get(Calendar.HOUR_OF_DAY);
  int minute = c.get(Calendar.MINUTE);
  int second = c.get(Calendar.SECOND);
  System.out.println(year + "年" + month + "月" + day + "日");
  System.out.println(hour + "时" + minute + "分" + second + "秒");

  // 设置年、月、日、小时、分钟、秒等
  c.set(Calendar.YEAR, 2020);
  c.set(Calendar.MONTH, 10); // 月份是从0开始的
  c.set(Calendar.DAY_OF_MONTH, 1);
  c.set(Calendar.HOUR_OF_DAY, 12);
  c.set(Calendar.MINUTE, 30);
  c.set(Calendar.SECOND, 30);
  System.out.println(c.getTime()); // Sun Nov 01 12:30:30 CST 2020

  // 对年、月、日等进行增将或减量
  c.add(Calendar.YEAR, 1); // 正数是加
  c.add(Calendar.MONTH, 1); // 月份是从0开始的
  c.add(Calendar.DAY_OF_MONTH, 1);
  c.add(Calendar.HOUR_OF_DAY, 12);
  c.add(Calendar.MINUTE, 30);
  c.add(Calendar.SECOND, 30);
  System.out.println(c.getTime()); // Thu Nov 01 12:30:30 CST 2021
}
```
