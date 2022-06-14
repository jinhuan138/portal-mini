---
sidebar: true
sidebarDepth: 3
---

# npm私有仓库使用指南

## 登录管理端

[点击登录](http://192.9.180.42:30108/)打开管理端。

输入用户名/密码即可查看相关信息，如需申请用户可发邮件到`daiqiang@agree.com.cn`或通过企业微信联系`A5524`。

亦可通过[搜索页](http://192.9.200.187:53201/pkgsearch)查看已发布的`packages`（无需登录私库）。

**不登陆管理端不影响包的发布和安装。**

## 安装

首先，[注册npm源](/FAQ/faq#_2-切换-npm-下载源)为`http://192.9.180.42:30108/repository/ab-group/`，然后直接`install`即可。

```sh
npm install [包名]
```

例：

```sh
npm install @agree/aui-web
```

## 发布

### 通过命令行

首先，进入待发布包的根目录，然后登录用户并发布。

```sh
// 登陆用户
npm adduser --registry http://192.9.180.42:30108/repository/ab-hosted/

// 发布包
npm publish --access public --registry http://192.9.180.42:30108/repository/ab-hosted/
```

## 下载离线私库资源包

点击👇按钮，下载私库内所有自研npm包最新版本的集合(.zip文件)。

<!-- <package-download></package-download> -->

## 如何将私库包发布到其他仓库

只针对私有的npm包，做如下说明。

### 1.获取私库依赖包

通过[下载离线私库资源包](#下载离线私库资源包)的**下载最新资源包**按钮，下载私库最新包到本地。

点击按钮后会按顺序下载依赖包，并显示统计数据，在下载完成后下方会出现`下载完成，压缩中，请稍等......`字样，说明正在压缩文件，在文件较多情况下可能要等待一会，如下图。

<img src="/portal/images/npm/download_2.png" width="800"/>

压缩完成后，如果是Chrome会在浏览器右下角看到如下图的样子（其他浏览器可能显示有所不同）：

<img src="/portal/images/npm/download_3.png" width="500"/>

如果未出现提示可能是浏览器设置的原因，可以在下载列表中查看或直接查看浏览器设置的下载保存的本地路径，文件名会显示下载的时间。

<img src="/portal/images/npm/download_4.png" width="500"/>

解压后的文件像下面这样：

<img src="/portal/images/npm/download_extract.png" width="300"/>

### 2.上传依赖包

这里以nexus为例，其他方式搭建的npm私库按照对应文档方式上传即可。

打开管理端，点击左侧**Upload**，然后选择解压好的`.tgz`文件点击上传(`Upload`按钮)即可，如下图：

<img src="/portal/images/npm/nexus_upload.png" width="500"/>

> 可参考nexus的[上传文档](https://help.sonatype.com/repomanager3/user-interface/uploading-components)。