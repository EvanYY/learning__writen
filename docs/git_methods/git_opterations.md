# 操作命令
## 基础操作
+ 初始化 `git init`
+ 添加文件到版本库 `git add . | git add readme.txt`
+ 提交 `git commit -m 'commit comment'`
+ 查看版本库当前的状态 `git status`
+ 查看工作区文件修改的内容 `git diff | master or others`
+ 查看提交的日志,参数--pretty=oneline 每个提交日志信息只显示一行 `git log`
+ 显示最后一次提交信息 `git log -1`
+ 版本回退 HEAD:代表当前版本,HEAD^代表上个版本,HEAD^^上上个版本......HEAD~100...... `git reset --hard 版本号 (或者HEAD)`
+ 查看使用命令日志 `git reflog`
+ 撤销修改 `git checkout -- readme.txt`
命令git checkout – readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
总之，就是让这个文件回到最近一次git commit或git add时的状态。
`git reset HEAD readme.txt`
把暂存区的修改撤销掉（unstage），重新放回工作区.(工作区的文件内容无变化)
---
+ 生成后的key在 用户主目录/.ssh 下, id_rsa是私钥, id_rsq.pub是公钥 `ssh-keygen -t rsa -C "youremail@example.com"`
## 远程版本库
### 本地已有版本库,关联远程版本库
> + 本地已有版本库,关联远程版本库: `git remote add origin 远程版本库URL`
> + -u 参数: 把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以使用简化命令: git push origin master `git push -u origin master`
> + 本地没有版本库,克隆个新版本库: `git clone 远程版本库URL` 默认的git:// 使用ssh协议, 也可以用 https:// 协议
使用https除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令
### 分支管理
> + 创建分支 `git branch dev`
> + 切换分支 `git checkout dev`
> + 创建并切换分支 `git checkout -b dev`
> + 查看当前分支 `git branch` git branch命令会列出所有分支，当前分支前面会标一个*号
> + 合并分支 `git merge dev` 将dev分支合并到master分支,先切换到master分支上面,然后执行合并命令:
> + 删除分支 `git branch -d dev`
> + 用带参数的git log 查看分支的合并 `git log --graph --pretty=oneline --abbrev-commit` git log --graph 命令可以看到分支合并图
> + 合并分支时禁用Fast forward 模式 `git merge --no-ff -m "merge with no-ff" dev`  –no-ff 参数: 强制禁用Fast forward模式
通常，合并分支时，如果可能，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息
如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息

## BUG分支
> + 储藏工作现场 `git stash` 可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作
> + 切换到需要修复BUG的分支上(这步不能省略) `git checkout master`
> + 在需要修复BUG的分支上创建BUG分支并切换到BUG分支上 `git checkout -b issue-101`
> + 修复完成后切换到需要修复BUG的分支上 `git checkout master`
> + 合并分支 `git merge --no-ff -m "merged bug fix 101" issue-101`
> + 删除BUG分支 `git branch -d issue-101`
> + 切换到之前工作的分支上 `git checkout dev`
> + 查看储藏工作现场的列表 `git stash list`
> + 恢复工作现场的两种方式 `git stash apply` 恢复后，stash内容并不删除, 需要用git stash drop来删除
> +	恢复的同时把stash内容也删了 `git stash pop`
> + 多次stash  可以多次stash，恢复的时候，先用git stash list查看，然后恢复指定的stash，用命令：`git stash apply stash@{0}`
> + 强行删除未合并的分支 `git branch -D <branch name>`
> + 查看远程版本库信息 `git remote` 参数 -v 显示更详细的信息
> + 推送本地master分支到远程版本库 `git push origin master`
> + 推送本地dev分支到远程版本库 `git push origin dev`
> + 创建远程origin的dev分支到本地 `git checkout -b dev origin/dev`
> +  解决冲突:先用git pull把最新的提交从origin/dev抓下来，然后，在本地合并，解决冲突(修改完文件后add commit)，再推送 `git pull`
> +  指定本地dev分支与远程origin/dev分支的链接 `git branch --set-upstream dev origin/dev`
> +  创建标签`git tag v1.0` 切换到需要打标签的分支上,使用命令: ``git tag <name>`` 就可以打一个新标签默认标签是打在最新提交的commit上的
> +  查看标签`git tag` 查看所有标签注意，标签不是按时间顺序列出，而是按字母排序的
> +  使用commit id 创建标签 `git tag v0.9 6224937` 在任意commit点创建标签
> +  查看标签信息 `git show <tagname>` 在任意commit点创建标签
> +  创建带有说明的标签 `git tag -a v0.1 -m "version 0.1 released" 3628164` 用-a指定标签名，-m指定说明文字
> +  通过-s用私钥签名一个标签 `git tag -s v0.2 -m "signed version 0.2 released" fec145a` 签名采用PGP签名，因此，必须首先安装gpg（GnuPG），如果没有找到gpg，或者没有gpg密钥对，就会报错
> +  删除标签 `git tag -d v0.1`
> +  推送某个标签到远程 `git push origin v1.0` 创建的标签都只存储在本地，不会自动推送到远程如果要推送某个标签到远程，使用命令`git push origin <tagname>`
> + 一次性推送全部尚未推送到远程的本地标签 `git push origin --tags`
## 删除远程标签
> + 先从本地删除 `git tag -d v0.9`
> + 然后，从远程删除 `git push origin :refs/tags/v0.9`
## 基础配置操作
### 配置Git显示颜色
  `git config --global color.ui true`
### ignore 忽略特殊文件
> + 在Git工作区的根目录下创建一个特殊的.gitignore文件，然后把要忽略的文件名填进去，Git就会自动忽略这些文件
不需要从头写.gitignore文件
所有配置文件可以直接在线浏览：https://github.com/github/gitignore
如果你确实想添加该文件，可以用-f强制添加到Git `git add -f App.class`
> + 检查文件在.gitignore文件的哪条忽略规则中 `git check-ignore -v App.class`
> + 配置别名 `git config --global alias.<alias> <'git command'>`
<script>
// –global参数是全局参数，也就是这些命令在这台电脑的所有Git仓库下都有用 配置Git的时候，加上–global是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用
// 每个仓库的Git配置文件都放在.git/config文件中 当前用户的Git配置文件放在用户主目录下的一个隐藏文件.gitconfig中 删除别名: 别名就在配置文件中[alias]行后面，要删除别名，直接把对应的行删掉即可 配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置
</script>
`git config –global alias.unstage 'reset HEAD'`
配置别名: 把暂存区的修改撤销掉（unstage），重新放回工作区