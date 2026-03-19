# Manual Install / 手动安装

## English

### Preset install
1. Copy `cc-statusline/scripts/statusline.sh` to `~/.claude/statusline.sh`.
2. If the target file already exists, back it up to `~/.claude/statusline.sh.bak`.
3. Open `~/.claude/settings.json`.
4. Update only the `statusLine` field so it runs:
   ```json
   {
     "statusLine": {
       "type": "command",
       "command": "bash \"~/.claude/statusline.sh\" \"<preset>\" \"<theme>\" \"<icon_style>\"",
       "padding": 0
     }
   }
   ```
5. Optionally save the previous `statusLine` value to `~/.claude/cc-statusline-state.json`.
6. Restart Claude Code if needed.

Available preset ids:
- `full`
- `standard`
- `minimal`
- `developer`

Available theme ids:
- `aurora`
- `sunset`
- `ocean`
- `mono`

Available icon style ids:
- `classic`
- `minimal`
- `developer`

### Custom install
1. Generate `~/.claude/statusline.custom.sh` with the repo script if possible:
   ```bash
   bash cc-statusline/scripts/generate_custom_statusline.sh \
     "$HOME/.claude/statusline.custom.sh" \
     "model,modes,active" \
     "cwd,git,context" \
     "ctx_tokens,sum_tokens,duration,cost" \
     "ocean" \
     "developer"
   ```
2. For an unused line, pass `-`.
3. Open `~/.claude/settings.json`.
4. Update only the `statusLine` field so it runs:
   ```json
   {
     "statusLine": {
       "type": "command",
       "command": "bash \"~/.claude/statusline.custom.sh\"",
       "padding": 0
     }
   }
   ```
5. Optionally save the previous `statusLine` value to `~/.claude/cc-statusline-state.json`.
6. Restart Claude Code if needed.

## 中文

### 预设安装
1. 将 `cc-statusline/scripts/statusline.sh` 复制到 `~/.claude/statusline.sh`。
2. 如果目标文件已存在，先备份为 `~/.claude/statusline.sh.bak`。
3. 打开 `~/.claude/settings.json`。
4. 只修改 `statusLine` 字段，使其执行：
   ```json
   {
     "statusLine": {
       "type": "command",
       "command": "bash \"~/.claude/statusline.sh\" \"<preset>\" \"<theme>\" \"<icon_style>\"",
       "padding": 0
     }
   }
   ```
5. 可选：把旧的 `statusLine` 值保存到 `~/.claude/cc-statusline-state.json`。
6. 如有需要，重启 Claude Code。

可用预设 id：
- `full`
- `standard`
- `minimal`
- `developer`

可用主题 id：
- `aurora`
- `sunset`
- `ocean`
- `mono`

可用图标风格 id：
- `classic`
- `minimal`
- `developer`

### 自定义安装
1. 如条件允许，优先使用仓库内脚本生成 `~/.claude/statusline.custom.sh`：
   ```bash
   bash cc-statusline/scripts/generate_custom_statusline.sh \
     "$HOME/.claude/statusline.custom.sh" \
     "model,modes,active" \
     "cwd,git,context" \
     "ctx_tokens,sum_tokens,duration,cost" \
     "ocean" \
     "developer"
   ```
2. 不使用的行传 `-`。
3. 打开 `~/.claude/settings.json`。
4. 只修改 `statusLine` 字段，使其执行：
   ```json
   {
     "statusLine": {
       "type": "command",
       "command": "bash \"~/.claude/statusline.custom.sh\"",
       "padding": 0
     }
   }
   ```
5. 可选：把旧的 `statusLine` 值保存到 `~/.claude/cc-statusline-state.json`。
6. 如有需要，重启 Claude Code。
