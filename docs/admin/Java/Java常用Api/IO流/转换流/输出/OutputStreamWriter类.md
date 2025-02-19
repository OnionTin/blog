## OutputStreamWriter 类

> 转换流可以将字节流转换成字符流

### 常见的构造方法

| 方法                                                            | 作用                                          |
| --------------------------------------------------------------- | --------------------------------------------- |
| public OutputStreamWriter(OutputStream out)                     | 创建一个使用默认字符编码的 OutputStreamWriter |
| public OutputStreamWriter(OutputStream out, String charsetName) | 创建一个使用命名字符编码的 OutputStreamWriter |

### 常见的成员方法

| 方法 | 作用                                                                                               |
| ---- | -------------------------------------------------------------------------------------------------- |
| 方法 | <RouteLink to="/admin/Java/Java常用Api/IO流/字符流/输出/FileWriter类.md">同 FileWriter</RouteLink> |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZhuanhuanOutput;

import java.io.FileOutputStream;
import java.io.OutputStreamWriter;

public class OutputStreamWriter01 {
  public static void main(String[] args) throws Exception{
    // public OutputStreamWriter(OutputStream out)
    /*
    FileOutputStream fos = new FileOutputStream("aaa/111.txt");
    OutputStreamWriter osw = new OutputStreamWriter(fos);
    */
    OutputStreamWriter osw = new OutputStreamWriter(
      new FileOutputStream("aaa/111.txt")
    );
  }
}
```
