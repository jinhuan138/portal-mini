---
sidebar: true
sidebarDepth: 3
---

# 开发手册

## gitlab

现在js代码都在gitlab上，代码提交要遵循相关规范。

### 分支说明

**aui-web**:

- 稳定分支为`aui-web-teller`
- 开发分支为`update_v1.6.x`

**aui-m**:

- 稳定分支为`master`
- 开发分支为`update_v1.4`

**agree-sdk**:

- 稳定分支为`master`
- 开发分支为`master`

**通用说明**：

- 相关需求/缺陷可由开发分支创建新分支, 后通过MergeRequest申请合并到开发分支
- 由特定人员在固定发版周期截止时将开发分支合并到稳定分支并发布
- 上述库之外的代码库，都需要创建分支后申请合并，而不是直接提交到对应的稳定分支上

> 如未被告知，都属于非特定人员。

### 分支命名

- 必须以字母开头，可包含字母、数字、`-`、`_`和`.`中的一种或几种
- 根据当前的需求、`BUG`或其他情况，并结合当前的具体问题命名
- 不要一直使用同一个分支，根据不同问题创建不同分支，及时清理
- 不要有无意义的命名

**建议直接使用`类型`+`_`+`tapdID`命名**

**Bad**

```
git checkout -b update-select
git checkout -b fix-table
git checkout -b spdb-aui-web
git checkout -b feature-update-select-component3
git checkout -b zhangsan // 张三
```

**Good**

```
git checkout -b feature_dialog_target
git checkout -b bigfix_select_not_filterable

// 可以使用tapd上的缺陷或者需求ID
git checkout -b feature_1039247 // 需求
git checkout -b bugfix_1008064 // 缺陷
git checkout -b feat_1008064 // 需求
git checkout -b bug_1008064 // 缺陷
git checkout -b task_1008064 // 任务
```

#### 注意事项

- `bugfix`和`feature`合并后需删除远程分支
- commit信息长度适中，简洁且点名主题即可
- 在`bugfix`和`feature`分支每次提交代码不易过多，便于review
- 每次上线需要对应位置打好`tag`

### commit规范

#### 1.NPM Script

存在`npm run commit`的直接执行`npm run commit`后按提示填写即可。

```
npm run commit
```

#### 2.Command Line

直接使用`git commit`即可，格式如下：

```
[type]([scope]): [short description]

[longer description]

BREAKING CHANGE: [break description]

[issueType] #[tapdID]
```

**其中`[...]`为需要填写的内容。**

- `[type]`：**必须**，本次提交修改的类型，`feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`build`、`ci`、`chore`和`revert`
- `[scope]`：**可选**，当前修改影响的范围
- `[short description]`：**必须**，当前修改的简短描述
- `[longer description]`：**可选**，当前修改的详细描述
- `[break description]`：**若存在，则必须**，存在破坏性改动的描述
- `[issueType]`：**若存在，则必须**，关联tapd上的问题类型，`story`(需求)、`bug`(缺陷)和`task`(任务)
- `[tapdID]`：**若存在，则必须**，关联tapd问题的ID

> 注意其中的`(`、`)`、`:`、`空行`、`空格`及`#`。

例：

```sh
git commit -m "feat(picture): remove X flag

The picture's longer description

BREAKING CHANGE: picture X is removed

story #1009774"
```

#### 3.GibLib

提交的合并请求(MR)只能有一个`commit`

如确实需要多次修改代码，可使用`git commit --amend`和`git rebase -i`，参见[修改提交历史](/git-guide/#修改提交历史)

#### 4.关联多个tapdID

同类可直接顺序填写tapdID，并用空格分割，如：

```
story #1009774 #1009775 #1009776
```

不同类需重新指明每个tapdID对应的类型，然后顺序填写并用空格分割即可，如：

```
story #1009774 bug #1010238
```

### 市场分支建立

#### 1.主分支对应git节点创建市场`tag`

根据市场上线或申请源码时所使用的代码，在对应git节点创建市场`tag`，并添加相关信息。

- 标签名格式为：`[tagName]-release`

- 标签注释格式为：

```
release_name: [projectChineseName]
release_branch: [projectBranchName]
```

> `release_name`为项目中文名，`release_branch`为项目分支名，若暂时不需要切换分支也必须预先确定好分支名。

**通过Command Line创建tag**

```sh
git tag -a [tagName] -m "
release_name: [projectChineseName]
release_branch: [projectBranchName]"
```
```sh
git push origin [tagName]
```

示例如下：

```sh
git tag -a BeiQiFinanceIBP-release -m "release_name: 北汽财务IBP电子档案项目
release_branch: BeiQiFinance-IBP"
```
```sh
git push origin BeiQiFinanceIBP-release
```

**通过Gitlab创建tag**

通过点击`commit`页面的`Options`下的`tag`选项 或者 直接点`New tag`按钮基于某个分支创建。

**Options/tag**

<img src="/images/devhandbook/commit-tag.png" width="400"/>

**Tags/New tag**

<img src="/images/devhandbook/repo-tags.png" width="400"/>

填写信息，示例如下：

<img src="/images/devhandbook/gitlab-newtag.png" width="400"/>

#### 2.切换分支

在市场对应`tag`位置，根据分支命名规则，建立市场对应分支，需要的进行分支初始化。

### 分支合并

- **必须**使用MergeRequest提交合并请求

### 使用MergeRequest(MR)

- **Title**: 一般我们都会采用合并`commit message`信息（`Squash commits`）来让`commit history`更清晰，那么`title`将作为最终合并的`commit message`；若只有一条则仍使用原有的`commit`信息，这也是[上面](#_3-giblib)需要**只能有一个commit**的原因
- **Assignee**: 表示你想把这个`MR`分配给谁，可以理解为想让谁去处理这个`MR`
- **Approvers**: 用来指明`CodeReview`的审核人，下面的`Approvals required`可以配置最少必须有多少人审核通过才可以通过
- 如果是临时分支请勾选下面的`Remove source branch`和`Squash commits`复选框，表示在通过`MR`时**移除源分支**和**合并commit信息**；其他分支根据情况勾选
- 如果由于某些原因被关闭的`MR`，使用`Reopen merge request`按钮，而不是再创建一个新的`MR`，这样既能保留当前`MR`的`Discussion`也避免整体`MR`冗余
- 每次提交`MR`前，检查下`Changes`里面的文件改动，确认无误后再点击提交按钮

## tapd

现在所有需求/缺陷全部通过tapd来进行分配，需要大家密切关注tapd的变化。

- 更清楚的记录任务信息
- 更好的记录每个人的工作任务，在一些评选中占有一定权重
- 防止非公司人员违规向我们请求支持

### 分配/接受任务

- 任务分配由特定人员进行，会修改对应的`处理人`字段
- 收到任务后可将状态流转为类似`开发中`或`实现中`等，表明当前处理的状态

### 状态流转

- 完成后，将`处理人`修改为对应的人员，并添加相应描述，如果对应的修改存在`MergeRquest`需附上对应链接
- 非特定人员，不可直接将状态流转为`拒绝`或`关闭`相关状态

### 相关附件及说明

每次流转时，需附加相关说明或评论，如需要附件，可上传附件

### deadline

注意`结束时间`字段，需控制开发时间，如未按时间解决，可与提出人员进行沟通进行延期，或说明原因。
