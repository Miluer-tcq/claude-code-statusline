# Custom Statusline Preview / 自定义状态栏预览模板

## Preview / 预览
- Target path / 目标路径: `~/.claude/statusline.custom.sh`
- Backup behavior / 备份行为: do not overwrite current preset unless user chooses to activate it / 默认不覆盖当前预设，除非用户确认启用
- Settings change / 设置变更: ask before switching `statusLine.command` / 切换 `statusLine.command` 前先询问

## Example grouped module choices / 示例模块分组
- Base / 基础: `model, modes, version, active`
- Environment / 环境: `context, tools, cwd, git`
- Metrics / 统计: `ctx_tokens, sum_tokens, duration, cost`

## Example output command / 示例生成命令
```bash
bash cc-statusline/scripts/generate_custom_statusline.sh \
  "$HOME/.claude/statusline.custom.sh" \
  "model,modes,active" \
  "cwd,git,context" \
  "ctx_tokens,sum_tokens,duration,cost" \
  "ocean" \
  "developer"
```
