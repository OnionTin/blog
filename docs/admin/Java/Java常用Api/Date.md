## Date

需要导包，在 java.util 包下

### 常见构造方法

| 方法                   | 作用                                                           |
| ---------------------- | -------------------------------------------------------------- |
| public Date()          | 分配 Date 对象并初始化，以便它代表它被创建时的日期和时间       |
| public Date(long date) | 分配 Date 对象并初始化，以便它代表 date 参数中给出的毫秒时间值 |

### 常见的成员方法

| 方法                            | 作用                                         |
| ------------------------------- | -------------------------------------------- |
| public long getTime()           | 返回自 1970 年 1 月 1 日 00:00:00 毫秒值     |
| public void setTime (long time) | 设置自 1970 年 1 月 1 日 00:00:00 毫秒时间值 |

### 格式化时间(SimpleDateFormat)

需要导包，在 java.text 包下

Date => String

```java
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

String dateString = dateFormat.format(date);
```

String => Date

```java
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

Date date = dateFormat.parse(dateString);
```

### 实际应用

```java
public static void main(String[] args) {
  Date date = new Date();
  SimpleDateFormat dF1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
  SimpleDateFormat dF2 = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
  SimpleDateFormat dF3 = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss E");
  String time1 = dF1.format(date);
  String time2 = dF2.format(date);
  String time3 = dF3.format(date);
  System.out.println(time1); // 2024-03-12 11:36:04
  System.out.println(time2); // 2024年03月12日 11:36:04
  System.out.println(time3); // 2024/03/12 11:36:04 星期二
}
```
