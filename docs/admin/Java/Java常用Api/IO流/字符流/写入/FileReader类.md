## FileReader 类

### 常见的构造方法

| 方法                               | 作用                 |
| ---------------------------------- | -------------------- |
| public FileReader(String fileName) | 根据指定的文件名读取 |
| public FileReader(File file)       | 根据指定的文件读取   |

### 常见的成员方法

| 方法                                           | 作用                                         |
| ---------------------------------------------- | -------------------------------------------- |
| public int read()                              | 一次读取一个字符数据                         |
| public int read(char[] cbuf)                   | 一次读取一个字符数组，返回实际读取字符的个数 |
| public int read(char[] cbuf, int off, int len) | 一次读取一个字符数组的部分数据               |

### 示例

```java
package com.wuziqi.gobang.IO.ZiFuInput;

import java.io.FileReader;

public class FileReaderDemo01 {
    public static void main(String[] args) throws Exception {
        // public FileReader(String fileName)
        FileReader fr = new FileReader("aaa/111.txt");
        System.out.println(fr); // java.io.FileReader@23fc625e

        // 一次读一个字符：public int read()
        /*
        int a = fr.read();
        int a1 = fr.read();
        int a2 = fr.read();
        System.out.println(a); // 97
        System.out.println(a1); // 105
        System.out.println(a2); // 32422
        System.out.println((char) a2); // 约

        int a = 0;
        while( (a = fr.read()) != -1 ) {
            System.out.print((char) a); // ai约不约？随便吧。
        }
        */

        // 一次读取一个数组：public int read(char[] cbuf)
        /*
        char[] arr = new char[5];
        int a = fr.read(arr);
        System.out.println(a); // 5 读到了5个字符
        System.out.println(new String(arr)); // ai约不约

        char[] arr = new char[5];
        int a = 0;
        while( (a = fr.read(arr)) != -1 ) {
            System.out.print(new String(arr, 0, a)); // ai约不约？随便吧。
        }
        */

        // 一次读取一个数组的部分：public int read(char[] cbuf, int off, int len)
        char[] arr = new char[5];
        int a = fr.read(arr, 1,3);
        System.out.println(a); // 3：读取到3个
        System.out.println(new String(arr)); //  ai约
    }
}
```

### 文件的复制

```java
package com.wuziqi.gobang.IO.ZiFuInput;

import java.io.FileReader;
import java.io.FileWriter;

public class FileCopy01 {
    public static void main(String[] args) throws Exception {
        // 一次读取一个字符，一次写入一个字符
        /*
        FileReader fr = new FileReader("aaa/111.txt");
        FileWriter fw = new FileWriter("aaa/222.txt");
        int len = 0;
        while( (len = fr.read()) != -1){
            fw.write(len);
        }
        fw.close();
        fr.close();
        */

        // 一次读取一个字符数组，一次写入一个字符数组的一部分
        FileReader fr = new FileReader("aaa/111.txt");
        FileWriter fw = new FileWriter("aaa/222.txt");
        char [] ch = new char[1024];
        int len = 0;
        while( (len = fr.read(ch)) != -1){
            fw.write(ch,0,len);
        }
        fw.close();
        fr.close();
    }
}
```
