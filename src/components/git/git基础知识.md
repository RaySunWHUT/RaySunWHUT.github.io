---
title: git核心基础知识
category:
  - 中间件
tag:
  - git
date: 2023-07-22
---

git基础知识及易混淆概念整理
<!-- more -->


## **Git知识图谱**
![](/website_assets/git/git_basic/image.png)

## **Git操作流程图**
![](/website_assets/git/git_basic/image-1.png)

## **Git名词解释**

- **工作区**(**workspace**)

即在电脑里能看到的代码库目录，在 **工作区(workspace)** 新增、删除、修改文件。

- **暂存区(index / stage)**

临时存放文件的变动/更改，实际上它只是一个文件(**.git/index**)，保存 **待提交(to be committed)** 文件信息。

使用 **`git add`** 命令将 **工作区(workspace)** 的修改保存至 **暂存区(stage)**。

- **本地仓库(Repository)**

保存 **已提交(committed)** 的文件修改/变动。

使用 **`git commit -m "msg"`** 命令将 **暂存区(stage)** 的修改保存至 **本地仓库(Repository)**。

- **远程仓库(Remote)**

使用 **`git push origin`** 命令将 **本地仓库(Repository)** 的修改推送至 **远程仓库(Remote)**。

- **头(HEAD)**

HEAD类似一个“**指针**”，指向 **当前分支** 的 **最新commit**。

![](/website_assets/git/git_basic/image-2.png)

## **Git命令**

### **git push**
```bash
# 强制推送
git push -f origin

# 将 本地 branchA 分支 的最新提交, 推送到 远程仓库的 branchB 分支
git push branchA:branchB
```


### **git stash**
**作用**：在不执行提交commit的情况下，保存当前 **暂存区(stage)** 的文件变更/更改(**用于保存现场**)。

**使用场景**：当前正在feature分支开发需求中，功能尚未开发完成且不想进行commit，但临时遭遇突发情况，需要切换到其他分支处理问题。
```bash
# 将stage区文件变动暂存
git stash

# 还原现场
git stash pop

# 销毁暂存内容
git stash drop
```


### **git reset**

**git reset 操作** 会将代码 **回退(回滚)** 至指定commitId版本，根据参数项[--mixed | --soft | --hard]的不同，将HEAD与commitId之间的所有commit提交的文件变动/更改，**回退** 至 **工作区(workspace)**、**暂存区(stage)** 或 **清除**。

**使用注意事项⚠️** :

1. **`git reset HEAD`** 仅用于 **回滚** **git add** 操作，在文件更改已 **提交(commit)** 至 **本地仓库(Repository)** 的情况下，**`git reset HEAD`**(当前分支最新commit)是没有任何效果的，什么也不会发生。
2. 回滚 **git commit 操作** 需使用 **`git reset [--soft | --mixed | --hard] [commitId]`** ，且 **[commitId]** 必须早于 **HEAD**。

```bash
git reset [--soft | --mixed | --hard] [HEAD | commitId]

# --mixed(默认)
# 作用: 将HEAD与commId之间的所有commit的文件更改/变动，全部 回退至 工作区(workspace), 即 尚未添加(add)至暂存区(stage) 的状态
# 使用场景: 撤回 git add, git commit

# git reset HEAD 仅用于 回滚 git add 操作
git reset
git reset HEAD

# 回滚 git commit 操作
# 注: 此处 commitId 必须早于 HEAD 才会有效果
git reset [commitId]

# --soft
# 作用: 将HEAD与commId之间的所有commit的文件更改/变动，全部 回退 至 暂存区(stage)，即 已添加(add)至 暂存区(stage) 的状态
git reset --soft [commitId]

# --hard
# 作用: 将代码 回滚 至指定commitId版本
# 注: 将HEAD与commId之间的所有commit的文件更改/变动, 全部 清除，代码切换至指定commitId版本；若操作失误则 git log 无法找到提交痕迹，可通过 git reflog 找到commitId版本并恢复。
git reset --hard [commitId]
```

#### **关于 HEAD：**

- HEAD 表示当前版本。
- HEAD^ 上一个版本
- HEAD^^ 上上一个版本
- HEAD^^^ 上上上一个版本
- HEAD~n 回撤 n 个版本(HEAD~0等价于HEAD)，这种也是更加方便的

### **git reflog**
保存所有commit记录，包括使用 **`git reset --hard`** 回退的commit记录仍然可以通过 **`git reflog`** 找到。

### **git revert**
**`git revert -n [commitId]`** 操作会 “**撤销↩️**” 指定commitId的更改，并将指定commitId的更改 **回退** 至 **暂存区(stage)**。

**revert** 理解为 “**撤销↩️**” 某个commit的更改更为合适。

**reset操作** 是向后的，**revert操作** 是向前的，即在原分支最新提交的基础上生成一个新commit。

**深刻理解**：**`git revert HEAD`** 连续执行两次就和什么也没有执行是一样的。

```bash
# revert操作 会在当前代码基础上撤回指定commit的更改，并在用户填写完commit msg后, 将 “在当前代码基础上撤回指定commit更改后的代码”，自动commit至远程分支
git revert [commitId]
# -n: 使用 revert -n 后，会将当前commit的更改保存至暂存区，用户可进一步调整后再手动commit
git revert -n [commitId]

git revert 与 git reset 区别: 
# 将代码 回滚 至指定commitId版本
git reset [commitId]
# 撤销↩️ 指定commitId版本的提交, 并将指定commitId版本的提交回退至 暂存区(stage)
# 注：git revert 的效果是 撤回，而 git reset 的效果是 回滚
git revert -n [commitId]
```

### **git log**

查看仓库分支的提交(commit)记录信息，包括commitId、提交人和提交时间描述等。

```bash
git log --pretty="%an(%cd) %h - %s" --since="2022-09-01" --no-merges --name-status
```

```bash
# 命令格式
# 注意: 没有这种写法: git log branchA branchB
# git log 两点 和 空格 不一样
git log [<branch> | <commit>]..[<branch> | <commit>]
git log [<branch> | <commit>]...[<branch> | <commit>]

# 正确✅
git log testMater...testSun
# 错误❌
# 注: git 两点log 和三点diff 的 "点(.)" 前后不能有空格
git log testMater ... testSun
```

#### **git log 两点(..)比较**

展示 **分支B拥有而分支A没有的所有提交**。

![](/website_assets/git/git_basic/image-6.png)

![](/website_assets/git/git_basic/image-7.png)

#### git log  **三点(…)比较**

**<font color="#C3002E">注</font>: git log三点(…)比较的两个分支 <font color="#C3002E">没有前后顺序之分</font>。**

展示 **分支B拥有而分支A没有的所有提交，以及，分支A拥有而分支B没有的所有提交**。

![](/website_assets/git/git_basic/image-8.png)

![](/website_assets/git/git_basic/image-9.png)


![网上流传的原图都包浆了，太丑了，重新绘制(不带水印！)](/website_assets/git/git_basic/git_log2.png)


### **git diff**

可在分支、commit之间执行 diff。 

```bash
# 命令格式
# 空格 和 .. 比较等价
git diff [<branch> | <commit>] [<branch> | <commit>]
git diff [<branch> | <commit>]..[<branch> | <commit>]
git diff [<branch> | <commit>]...[<branch> | <commit>]

# 正确✅
git diff testMater...testSun
# 错误❌
# 注: git 两点diff 和三点diff 的 "点(.)" 前后不能有空格
git diff testMater ... testSun
```

#### **git diff 两点(..)比较 && 三点(...)比较**
<font color="C3002E"><b>注: 从集合交、并逻辑来看，diff两点比较与log三点比较结果相同，diff三点比较与log两点比较结果相同 </b></font>
**ps**: 虽然二者逻辑结果相同，但仍有细微差别，log三点比较没有前后顺序之分(即 **`git log A...B`** 与 **`git log B...A`** 结果完全一致)，但diff两点比较( **`git diff A..B`** 与 **`git diff B..A`** )虽然逻辑结果相同，但实际执行返回结果是不同的，体现在交换顺序后，<font color="#43b244"><b>+(增)</b></font> -> <font color="#C3002E"><b>-(减)</b></font>，<font color="#C3002E"><b>-(减)</b></font> -> <font color="#43b244"><b>+(增)</b></font>
![](/website_assets/git/git_basic/image-4.png)

![网上流传的原图都包浆了，太丑了，重新绘制(不带水印！)](/website_assets/git/git_basic/git_diff2.png)


### **git 文件类型**

在 Git 中，文件可以分为以下几类：

- **已修改文件(modified)**：在 **工作区(workspace)** 中已修改，但尚未添加到 **暂存区(stage)** 的文件。
- **已暂存文件(staged)**：已通过 git add 命令添加到 **暂存区(stage)** 的新增/已修改文件。
- **未修改文件(unmodified)**：如名。
- **未追踪文件(Untracked)**：在Git仓库中存在，但尚未添加到Git版本控制系统中的文件。
- **忽略文件(Ignored)**：**.gitignore**文件中指定的文件，这些文件不会被 Git 跟踪，也不会显示在 **未追踪文件(Untracked)** 中。

```bash
# 使用git status 可查看到标颜色文件
git status
```

![](/website_assets/git/git_basic/image-11.png)
### 工作区(workspace)命令

```bash
# 销毁 工作区(workspace) 文件变动/更改
# -d：同时删除未被跟踪的目录。
# -f 或 --force：强制执行删除操作，不再提示确认
git clean -df

# 查看 工作区(workspace) 文件变动/更改
# 注: 使用该命令无法检测到 未追踪文件(Untracked file)
git diff

# -n: 用于查看未追踪文件(Untracked)列表
git clean -n
```

### 暂存区(stage)命令

```bash
# 将 暂存区(stage) 文件变动/更改回退至 工作区(workspace) 
git reset
git restore --staged .

# 销毁 暂存区(stage) 内容
git stash
git stash drop

# 查看 暂存区(stage) 内容(对比 暂存区(stage) 与 工作区(workspace) 的差异)
git diff [--staged | --cached]
# 查看某个文件在 暂存区(stage) 与 工作区(workspace) 的差异
git diff [--staged | --cached] <file-path>
```

### 本地仓库(Repository)命令

```bash
# 比较本地分支与远程分支差异
# 注: 注意两点比较和三点比较的区别
git diff main..origin/main
```

### 清除远程分支引用
```bash
# 清理本地仓库中已被删除的远程分支引用
git remote prune origin
git fetch --prune
```

## 参考文献
1. https://stackoverflow.com/questions/7251477/what-are-the-differences-between-double-dot-and-triple-dot-in-git-dif
2. https://stackoverflow.com/questions/462974/what-are-the-differences-between-double-dot-and-triple-dot-in-git-com
3. https://juejin.cn/post/6869519303864123399