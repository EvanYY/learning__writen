

## git 的对比
- `git diff` 工作区和暂存区
- `git diff 分支名` 工作区和历史区
- `git diff --cached` 暂存区和历史区比较

## 撤销
- 从暂存区中将工作内容覆盖掉 `git checkout . | 文件名` 当撤回后就不能回去 只有放在历史区才最安全

## 版本穿越
- `git log` 查看版本
- `git reset --hard 版本号`
- `git reflog` 打印所有日志
- `git checkout 版本号 文件名` 回滚某个版本文件
## 创建分支
