---
sidebar: true
sidebarDepth: 3
---

# Git规范及常用操作

## Git规范(Beta)

更多开发规范，详见[开发手册](/portal/Git/dev-handbook)。

## Git常用操作

更多细节可以查看[官方文档](https://git-scm.com/docs/)

### 设置用户名/邮箱

```sh
git config --global user.name <user_name>
git config --global user.email <user_email>

# eg: git config --global user.name "代强"
#     git config --global user.email "daiqiang@agree.com.cn"
```

### 初始化本地git库

```sh
git init
```

### 本地库连接到远程

```sh
git remote add origin <repository_url>
# eg: git remote add origin git@192.9.200.187:daiqiang/git-guide-repo.git
git add .
git commit -m <commit_msg>
# eg: git commit -m "init repo"
git push -u origin master
```

> 如果是空文件夹需要在`git add .`之前先创建文件

### 克隆仓库

```sh
git clone <repository_url>
# eg: git clone git@192.9.200.187:daiqiang/git-guide-repo.git
```

### 迁移git库

可保留所有内容

```sh
git clone --bare git@old-project.git
cd old-project.git
git push --mirror git@new-project.git
```

> 需先进入已存在git库根目录

```sh
git remote rename <old_remote_name> <new_remite_name>
# eg: git remote rename origin old-origin
git remote add origin <repository_url>
# eg: git remote add origin git@192.9.200.187:daiqiang/git-guide-repo.git
git push -u origin --all
git push -u origin --tags
```

### 拉取代码

```sh
git pull
```

### 提交代码

```sh
git add <file> # 开始跟踪文件/以跟踪文件添加在暂存区/把有冲突的文件标记为已解决
# eg: git add README.md tools.js
#     git add . # .表示所有文件
git commit -m <commit_msg>
git push
```

### 修改提交历史

建议全部在本地操作，对已经push到远程的使用要慎重，查看[更多细节](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)

#### 使用`--amend`

只能修改最后一次的commit提交信息

```sh
git commit --amend # 会进入一个交互式的编辑器进行最后的commit信息修改
```

```sh
git commit --amend --no-edit -m "latest message" # --no-edit会跳过编辑器环节
```

#### 使用`git rebase -i`

可以修改多次commit提交信息，可以使用`commitid`，这里使用`HEAD~3`表示最近三次提交

```sh
git rebase -i HEAD~3 # 指定要合并的commit范围，并进入交互式编辑器
```

**例：**

原本提交记录假设是这样的(`git log --pretty=format:"%h %s" HEAD~4..HEAD`)：

```
2509411 another commit
1f0ff5a next commit
4a46942 one commit
92694c7 older commit
```

执行`git rebase -i HEAD~3`后，结果可能是这样的，按`i`进入编辑(`insert`)模式：

```
pick 4a46942 one commit
pick 1f0ff5a next commit
pick 2509411 another commit

# Rebase 92694c7..2509411 onto 92694c7 (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
```

将上述代码`pick`改为`squash`表示合并，然后退出并保存(`esc`->`:wq`)：

```
pick 4a46942 one commit
squash 1f0ff5a next commit
squash 2509411 another commit
```

然后进入修改commit信息的编辑器，未注释的三行对应三次的commit信息，大致如下：

```
# This is a combination of 3 commits.
# This is the 1st commit message:

one commit

# This is the commit message #2:

next commit

# This is the commit message #3:

another commit

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed Jul 21 11:49:50 2021 +0800
#
# interactive rebase in progress; onto 92694c7
# Last commands done (3 commands done):
#    squash 1f0ff5a next commit
#    squash 2509411 another commit
# No commands remaining.
```

可对信息进行修改，剩余未注释的信息为合并后的新commit信息，然后退出并保存(`esc`->`:wq`)，如：


```
# This is a combination of 3 commits.

combine commits message

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed Jul 21 11:49:50 2021 +0800
#
# interactive rebase in progress; onto 92694c7
# Last commands done (3 commands done):
#    squash 1f0ff5a next commit
#    squash 2509411 another commit
# No commands remaining.
```

再次查看记录(`git log --pretty=format:"%h %s" HEAD~2..HEAD`)，修改完成：

```
218cc70 combine commits message
92694c7 older commit
```

### 查看文件状态

```sh
git status
```

### 查看提交记录

```sh
git log -<n> # 查看最近的n条记录
git log <file> # 查看指定文件修改记录
git log --stat
git log --pretty=oneline
# eg: git log -3 --pretty=oneline README.md
```

### 取消文件修改

```sh
git checkout -- <file>
git checkout -- . # 取消所有文件修改
```

### 撤回暂存区的文件

```sh
git reset HEAD -- <file>
git reset HEAD -- . # 撤回所有文件
```

### 查看某次commit的提交信息

可通过`git log`查找对应的`commitid`

```sh
git show <commitid>
# eg: git show b30208ab322b2a7299b7079d4a046e69f9768bf5
```

### 撤回commit

```sh
git reset [--soft|--hard] HEAD~ # 撤回最近一次commit
git reset [--soft|--hard] HEAD~<n> # 撤回最近n次commit
# eg: git reset --soft HEAD~2
```

- `--hard`表示撤回后不保存原有改动

### 重置代码到某次提交

```sh
git reset <commitid>
# eg: git reset b30208ab322b2a7299b7079d4a046e69f9768bf5
```

### 分支管理

#### 创建分支

```sh
git branch <branch_name> # 创建一个本地分支
git checkout -b <branch_name> # 创建一个本地分支并切换到新创建的分支
```

#### 查看分支

```sh
git branch # 查看本地分支
git branch -a # 查看所有分支，包括远程
git branch -v # 查看本地所有分支最后一次提交，亦可使用-av
```

#### 切换分支

```sh
git checkout <branch_name> # 切换到一个本地分支
```

- 切换分支的时候未被commit和stash的代码会在切换后的分支中显示

#### 合并分支

```sh
git merge <branch_name> # 合并<branch_name>分支的代码到当前分支
# eg: git checkout master
#     git merge dev # 将dev分支合并到master分支
```

- 如果合并时出现了冲突可以通过`git status`查看冲突文件
- 解决冲突的文件可以使用`git add`标记为已解决，然后继续提交就可以了

#### 本地分支推送到远程

```sh
git push -u origin <branch_name>
```

- 之后可直接使用`git push`

#### 删除分支

```sh
git branch -d <branch_name> # 删除本地分支
git push -d origin <branch_name> # 删除远程分支
```
#### 更新远程分支

```sh
git remote update origin -p
```

- 如果本地分支改动没有合并会报错，如果需要可使用`-D`参数强制删除

#### 变基(rebase)

- 不要对已经提交到远程仓库的代码执行`rebase`操作 <Badge type='warning' text="warn"></Badge>

```sh
#  切换到需要rebase的分支执行rebase操作
git checkout <source_branch>
git rebase <target_branch> # 此步骤如果出现冲突可按照下面的办法解决
# 切换回目标分支进行合并
git checkout <target_branch>
git merge <source_branch>

# eg: git checkout bugfix
#     git rebase master

#     git checkout master
#     git merge bugfix
```

- 在执行`git rebase`操作时，如果出现冲突需要先手动解决，可用`git status`查看冲突文件
- 解决冲突后，需要使用`git add`将其标记为已解决，接着执行`git rebase --continue`，然后继续后续操作即可
- 结束后可在`<source_branch>`分支使用`git rebase --abort`

### cherry-pick

将其他分支的一次或几次提交应用到当前分支

```sh
git cherry-pick -xs <commitid_1> <commitid_2>
```

- 出现冲突可参考本页中其他解决冲突的基本本法

### 贮藏(stash)

#### 添加贮藏

使用`-u`表示包括**未被跟踪**的文件（如新增的文件），否则只包括已修改和暂存的**已跟踪**文件

```sh
git stash push -u -m <stash_msg> # 贮藏当前所有改动
```

#### 查看贮藏列表

```sh
git stash list
```

列表形式如下：

```sh
stash@{0}: On master: update README
stash@{1}: On master: add git.txt
stash@{2}: WIP on master: 82f49bf update docs
```

#### 使用贮藏

```sh
git stash pop # 应用最新一次stash并删除
git stash pop stash@{n} # 指定一个stash应用到当前工作区并删除
git stash apply stash@{n} # 指定一个stash应用到当前工作区
# eg: git stash apply stash@{1}
```

#### 删除贮藏

```sh
git stash drop stash@{n} # 在贮藏区中删除一个stash
# eg: git stash drop stash@{1}
```

#### 清空贮藏

```sh
git stash clear
```

### 标签(tag)

创建标签时如果使用`"`或`'`，那么这些符号也属于`<tag_name>`的一部分

#### tag列表

```sh
git tag # 查看所有标签
git tag -l v1.0* # 查看v1.0开头相关标签 
```

#### 查看某个tag

```sh
git show v1.0 # 查看v1.0的tag相关信息
```

#### 创建tag

```sh
git tag -a <version> -m <tag_msg> # 在当前提交打一个标签
# eg: git tag -a v1.0 -m "a first version"
git tag -a <version> <commitid> # 给每次提交打标签
# eg: git tag -a v0.3 8018cb2
```

> 上述通过`commitid`打标签后会提示需要输入标签信息

#### 将tag推送到远程

```sh
git push origin <tag_name>
# eg: git push origin v1.0
git push origin --tags # 推送所有标签到远程
```

#### 删除tag

```sh
git tag -d <tag_name> # 删除本地标签
git push origin -d <tag_name> # 删除远程标签
```

### 远程地址

```sh
git remote -v # 远程仓库地址
git remote add <shortname> <url> # 添加远程仓库
git ls-remote <remote>
git remote show <remote> # 查看远程仓库的更多信息
git fetch <remote> # 从远程仓库中拉取
git remote remove <remote> # 移除远程仓库
git remote rename <old_remote_name> <new_remite_name> # 远程仓库重命名
git remote set-url origin <newUrl> # 变更远程仓库地址
```

### 重命名大小写不敏感问题
Git 是对大小写不敏感的，所以在 Git 里文件重命名时很容易碰到一个问题，即当文件已经被 push 到远程仓库后，在本地资源管理器中直接右键修改文件名时仅仅修改了大小写，例如 `Test.js -> test.js` ，Git 不会认为该文件进行了改变。

此时在 Git 跟踪管理中的还是 test.js（可使用 `git ls-files`命令查看 Git 跟踪的文件信息）， 就会导致很多奇奇怪怪的问题，解决方法如下：

**使用 Git 重命名的方式改名**
```sh
git mv <old_file_name> <new_file_name>

# eg: git mv Test.js test.js
# 在 git 中使用 mv 命令的时候，会自动 add 所以是不用额外再 git add . 的
```

### 杂项

#### 不要上传`.gitignore`和`package-lock.json`文件

#### 移除文件并从git跟踪清单中移除

```sh
git rm [-f] <file>
```

#### 文件重命名

```sh
git mv <old_file_name> <new_file_name>
```

#### 提交记录相关

```sh
git log --graph # 带有线条的展示分支及合并记录
git log --pretty=format:<format_str> # 格式化记录输入出
# eg: git log --pretty=format:"%h - (%an - %ad) - (%cn - %cr) : %s"
```

| 选项   | 说明        |
| ------ |:-------------:|
| %H     | 提交的完整哈希值 |
| %h     | 提交的简写哈希值 |
| %T     | 树的完整哈希值 |
| %t     | 树的简写哈希值 |
| %P     | 父提交的完整哈希值 |
| %p     | 父提交的简写哈希值 |
| %an    | 作者名字 |
| %ae    | 作者的电子邮件地址 |
| %ad    | 作者修订日期，具体时间 |
| %ar    | 作者修订日期，按多久以前的方式显示 |
| %cn    | 提交者的名字 |
| %ce    | 提交者的电子邮件地址 |
| %cd    | 提交日期 |
| %cr    | 提交日期（距今多长时间） |
| %s     | 提交说明 |