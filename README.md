# family-cli
our system cli, based vue and so on

### 介绍
自己开发的一个脚手架工具

### 开发思路

```
1.本地开发好项目模板上传到git远程仓库，开发的脚手架命令发布到npm官网
2.用户通过npm全局安装脚手架命令，根据命令行提示向导，从远程git仓库拉去对应的项目模板
模板仓库：https://github.com/hurong/family-template
脚手架仓库：https://github.com/hurong/family-cli
```

### 使用

#### 命令行参数
```
family-cli h |  family-cli --help
family-cli -V|version
family init <name>
```

``` bash
npm install family-cli -g
family init demo

```