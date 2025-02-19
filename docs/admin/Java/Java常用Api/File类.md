## File 类

需要导包，在 java.io 下

什么是 File 类？

代表文件或者文件夹(目录)类，也就是说将文件或者文件夹，通过 File 类封装成对象。

### 常见的构造方法

| 方法                                     | 作用                                 |
| ---------------------------------------- | ------------------------------------ |
| public File(String pathname)             | 将给定的路径转换为 File 实例         |
| public File(String parent, String child) | 通过父路径和子路径创建新的 File 实例 |
| public File(File parent, String child)   | 通过父路径和子路径创建新的 File 实例 |

### 常见的成员方法

1. <font color=red>创建</font>

| 方法                           | 作用                     |
| ------------------------------ | ------------------------ |
| public boolean createNewFile() | 创建文件                 |
| public boolean mkdir()         | 创建文件夹，只能创建一级 |
| public boolean mkdirs()        | 创建文件夹，可以创建多级 |

2. <font color=red>删除</font>

- 如果要删除的文件夹里边有子文件或者子文件夹，需要先删除子文件或文件夹，再删除该文件夹
- 通过 delete()删除时，被删除文件或者文件夹，不会进入电脑的回收站

| 方法                    | 作用               |
| ----------------------- | ------------------ |
| public boolean delete() | 删除文件或者文件夹 |

3. <font color=red>判断</font>

| 方法                         | 作用             |
| ---------------------------- | ---------------- |
| public boolean exists()      | 判断是否存在     |
| public boolean isDirectory() | 判断是否是文件夹 |
| public boolean isFile()      | 判断是否是文件   |

4. <font color=red>获取</font>

| 方法                            | 作用                             |
| ------------------------------- | -------------------------------- |
| public long length()            | 获取`文件`中的字节数             |
| public String getName()         | 获取名称                         |
| public String getPath()         | 获取路径                         |
| public String getAbsolutePath() | 获取绝对路径                     |
| public File getParentFile()     | 获取上级目录的 File 对象         |
| public File[] listFiles()       | 获取目录中所有的子文件和子文件夹 |

5. <font color=red>重命名</font>

| 方法                               | 作用                                             |
| ---------------------------------- | ------------------------------------------------ |
| public boolean renameTo(File dest) | 把文件重命名为指定的文件路径，就是文件名称的修改 |

### 递归删除文件夹 aaa

```java
package com.wuziqi.gobang.IO;

import java.io.File;
import java.io.IOException;

public class DemoFile {
    public static void main(String[] args) throws IOException {
        // 递归删除
        File file = new File("aaa");
        delete(file);
    }
    public static void delete(File file){
        File[] files = file.listFiles();
        for(File f : files){
            // 如果是文件夹，需要重新调用方法
            if(f.isDirectory()){
                delete(f);
            }else{
                // 如果是文件，就直接删除
                f.delete();
            }
            // 最后，删除aaa这个根文件夹，没有文件了，可以直接删除
            file.delete();
        }
    };
}
```

### 递归获取 aaa 目录下的所有.java 文件

```java
package com.wuziqi.gobang.IO;

import java.io.File;

public class DemoFile {
    public static void main(String[] args) {
        // 递归获取aaa目录下的所有.java文件
        File getJavas = new File("aaa");
        print(getJavas);
    }
    public static void print(File file){
        File[] files = file.listFiles();
        for(File f : files){
            // 如果是文件夹，再遍历
            if(f.isDirectory()){
                print(f);
            }else{
                // 如果是文件，判断是否是java类型的文件
                if(f.getName().endsWith(".java")){
                    System.out.println(f.getAbsolutePath());
                }
            }
        }
    };
}
```

### 其他方法的使用

```java
package com.wuziqi.gobang.IO;

import java.io.File;
import java.io.IOException;

public class DemoFile {
    public static void main(String[] args) throws IOException {
        // 文件对象
        // public File(String pathname)：将给定的路径转换为 File 实例
        File file1 = new File("C:\\mulu\\test.txt");
        System.out.println(file1.getPath());

        // public File(String parent, String child)：通过父路径和子路径创建 File实例
        File file2 = new File("C:\\mulu\\subMulu", "test.txt");
        System.out.println(file2.getPath());

        // public File(File parent, String child)：通过父路径和子路径创建 File实例
        File parentDir = new File("C:\\mulu\\subMulu");
        File file3 = new File(parentDir, "test.txt");
        System.out.println(file3.getPath());


        // 创建
        // public boolean createNewFile()：创建文件
        File newFile = new File("C:\\mulu\\test.txt");
        boolean isCreated = newFile.createNewFile();
        System.out.println("文件是否创建成功：" + isCreated);

        // public boolean mkdir()：创建文件夹，只能创建一级
        File folder1 = new File("C:\\mulu");
        boolean isFolderCreated1 = folder1.mkdir();
        System.out.println("文件夹是否创建成功：" + isFolderCreated1);

        // public boolean mkdirs()：创建文件夹，可以创建多级
        File multiLevelFolder = new File("C:\\mulu\\subMulu1\\subMulu2");
        boolean isMultiFolderCreated = multiLevelFolder.mkdirs();
        System.out.println("多级文件夹是否创建成功：" + isMultiFolderCreated);


        // 删除
        // public boolean delete()：删除文件或者文件夹
        File fileToDelete = new File("C:\\mulu\\test.txt");
        boolean isDeleted = fileToDelete.delete();
        System.out.println("文件或文件夹是否删除成功：" + isDeleted);


        // 判断
        // public boolean exists()：判断是否存在
        File checkFile = new File("C:\\mulu\\test.txt");
        boolean doesExist = checkFile.exists();
        System.out.println("文件或文件夹是否存在：" + doesExist);

        // public boolean isDirectory() // 判断是否是文件夹
        File directoryCheck = new File("C:\\mulu");
        boolean isADirectory = directoryCheck.isDirectory();
        System.out.println("是否为文件夹：" + isADirectory);

        // public boolean isFile()：判断是否是文件
        File fileCheck = new File("C:\\mulu\\test.txt");
        boolean isAFile = fileCheck.isFile();
        System.out.println("是否为文件：" + isAFile);


        // 获取
        // public long length()：获取文件中的字节数
        File existingFile = new File("C:\\mulu\\test.txt");
        long fileSizeInBytes = existingFile.length();
        System.out.println("文件大小（字节）：" + fileSizeInBytes);

        // public String getName()：获取名称
        File fileNameExample = new File("C:\\mulu\\test.txt");
        String fileName = fileNameExample.getName();
        System.out.println("文件名：" + fileName); // test.txt

        // public String getPath()：获取路径(传什么获取什么)
        File filePathExample = new File("C:\\mulu\\test.txt");
        String filePath = filePathExample.getPath();
        System.out.println("文件路径：" + filePath); // "C:\mulu\test.txt"

        // public String getAbsolutePath()：获取绝对路径(从盘符到文件名的整体)
        File absPathExample = new File("test.txt");
        String absPath = absPathExample.getAbsolutePath();
        System.out.println("文件绝对路径：" + absPath); // "C:\mulu\test.txt"

        // public File getParentFile()：获取上级目录的 File 对象
        File parentDirExample = new File("C:\\mulu\\subMulu\\test.txt");
        File parentDirectory = parentDirExample.getParentFile();
        System.out.println("上级目录：" + parentDirectory.getPath());

        // public File[] listFiles()：获取目录中所有的子文件和子文件夹
        File dirToList = new File("C:\\mulu");
        File[] contents = dirToList.listFiles();
        if (contents != null) {
            for (File content : contents) {
                System.out.println(content.getName());
            }
        }


        // 修改
        // public boolean renameTo(File dest)：
        // 把文件重命名为指定的文件路径，就是文件名称的修改
        File fileToRename = new File("C:\\mulu\\test.txt");
        boolean isRenamed = fileToRename.renameTo(new File("C:\\mulu\\newTest.txt"));
        System.out.println("文件是否重命名成功：" + isRenamed);
    }
}
```
