<!-- @format -->

## nvm

### 1.下载

[下载 nvm 安装包](https://wwm.lanzout.com/i4xs41qfn7oh)
[官网](https://nvm.p6p.net/install/windows.html)

### 2.卸载 Node

### 3. 安装 Nvm

### 4. 配置镜像

> 找到 nvm 安装路径 -> 找到 settings.txt 文件 -> 添加下载源

```txt
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

### 安装 Node

```bash
nvm install 18.xxx
```

### 查看已安装的 Node 版本

```bash
nvm ls
```

```bash
node -v
```

### 使用 Node

```bash
nvm use 18.xxx
```

### Nvm 相关命令

| 命令                             | 作用                                                                                                  |
| -------------------------------- | ----------------------------------------------------------------------------------------------------- |
| nvm list                         | 查看已经安装的版本                                                                                    |
| nvm list installed               | 查看已经安装的版本                                                                                    |
| nvm list available               | 查看网络可以安装的版本                                                                                |
| nvm arch                         | 查看当前的系统位数和当前 nodejs 的位数                                                                |
| nvm install [arch]               | 安装制定版本的 node 并且可以指定平台 version 版本号 arch 平台                                         |
| nvm on                           | 打开 nodejs 版本控制                                                                                  |
| nvm off                          | 关闭 nodejs 版本控制                                                                                  |
| nvm proxy [url]                  | 查看和设置代理                                                                                        |
| nvm node_mirror [url]            | 设置或者查看 setting.txt 中的 node_mirror，如果不设置的默认是 https://nodejs.org/dist/                |
| nvm npm_mirror [url]             | 设置或者查看 setting.txt 中的 npm_mirror,如果不设置的话默认的是：https://github.com/npm/npm/archive/. |
| nvm uninstall [version]          | 卸载指定的版本                                                                                        |
| nvm use [version] [arch]         | 切换指定的 node 版本和位数                                                                            |
| nvm root [path]                  | 设置和查看 root 路径                                                                                  |
| nvm version                      | 查看当前的版本                                                                                        |
| nvm install-latest-npm           | 安装最新的 npm                                                                                        |
| nvm install-latest-ctags         | 安装最新的 ctags                                                                                      |
| nvm reinstall-packages [version] | 重新安装指定的 npm 包                                                                                 |
| nvm unload                       | 卸载 nvm                                                                                              |

### [环境配置](https://blog.csdn.net/qq_52775800/article/details/135344549)
