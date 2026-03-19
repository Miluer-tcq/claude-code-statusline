# Manual Install / 手动安装

## English

### Install the skill directory
1. Clone the repository:
   ```bash
   git clone https://github.com/Miluer-tcq/claude-code-statusline
   ```
2. Create the Claude Code skills directory if needed:
   ```bash
   mkdir -p ~/.claude/skills
   ```
3. Copy the self-contained skill directory into Claude Code:
   ```bash
   cp -r claude-code-statusline/cc-statusline ~/.claude/skills/cc-statusline
   ```
4. Restart Claude Code if the current session does not detect the new skill.

### Install with npx
If you want a one-command install similar to `skills add`, use the npm package after publishing:
```bash
npx -y -p @miluer-tcq/cc-statusline skills add cc-statusline
```

During local development, the equivalent validation command is:
```bash
npx --yes --package . skills add cc-statusline
```

### Ask AI to install from the GitHub link
You can also paste this prompt to an AI agent that can manage Claude Code files:

```text
Please install this Claude Code skill for me:
https://github.com/Miluer-tcq/claude-code-statusline

Install target: ~/.claude/skills/cc-statusline
After installation, tell me how to trigger it.
```

### Use the installed skill
After the skill is installed, say things like:
- `Install the Full / 完整版 statusline for me`
- `Switch me to the Developer / 开发者版 statusline`
- `Generate a 2-line custom statusline with the ocean theme and developer icons`
- `Uninstall the statusline and restore the default one`

### Direct script usage after installation
If you want to run the bundled scripts directly from the installed skill:

Preset install:
```bash
bash ~/.claude/skills/cc-statusline/scripts/activate_preset_statusline.sh full aurora classic
```

Custom generation:
```bash
bash ~/.claude/skills/cc-statusline/scripts/generate_custom_statusline.sh \
  "$HOME/.claude/statusline.custom.sh" \
  "model,modes,active" \
  "cwd,git,context" \
  "ctx_tokens,sum_tokens,duration,cost" \
  "ocean" \
  "developer"
```

Custom activation:
```bash
bash ~/.claude/skills/cc-statusline/scripts/activate_custom_statusline.sh "$HOME/.claude/statusline.custom.sh" ocean developer
```

Restore default behavior:
```bash
bash ~/.claude/skills/cc-statusline/scripts/uninstall_statusline.sh
```

## 中文

### 安装 skill 目录
1. 先克隆仓库：
   ```bash
   git clone https://github.com/Miluer-tcq/claude-code-statusline
   ```
2. 如有需要，先创建 Claude Code 的 skills 目录：
   ```bash
   mkdir -p ~/.claude/skills
   ```
3. 把自包含的 skill 目录复制进去：
   ```bash
   cp -r claude-code-statusline/cc-statusline ~/.claude/skills/cc-statusline
   ```
4. 如果当前会话没有识别到新 skill，重开 Claude Code 会话即可。

### 使用 npx 安装
如果你想要接近 `skills add` 的一条命令安装体验，推荐在发布到 npm 后使用：
```bash
npx -y -p @miluer-tcq/cc-statusline skills add cc-statusline
```

当前本地开发环境对应的验证命令是：
```bash
npx --yes --package . skills add cc-statusline
```

### 把 GitHub 链接发给 AI 让它安装
你也可以把下面这段提示词直接发给支持 Claude Code 文件操作的 AI：

```text
请帮我安装这个 Claude Code skill：
https://github.com/Miluer-tcq/claude-code-statusline

安装目标：~/.claude/skills/cc-statusline
安装完成后告诉我如何触发它。
```

### 安装后使用
安装完成后，可以直接这样说：
- `帮我一键安装 Full / 完整版 状态栏`
- `帮我切换到 Developer / 开发者版 状态栏`
- `帮我生成一个 2 行自定义状态栏，主题用 ocean，图标用 developer`
- `卸载状态栏，恢复默认状态栏`

### 安装后直接调用脚本
如果你想直接调用 skill 内自带脚本：

启用预设：
```bash
bash ~/.claude/skills/cc-statusline/scripts/activate_preset_statusline.sh full aurora classic
```

生成自定义：
```bash
bash ~/.claude/skills/cc-statusline/scripts/generate_custom_statusline.sh \
  "$HOME/.claude/statusline.custom.sh" \
  "model,modes,active" \
  "cwd,git,context" \
  "ctx_tokens,sum_tokens,duration,cost" \
  "ocean" \
  "developer"
```

启用自定义：
```bash
bash ~/.claude/skills/cc-statusline/scripts/activate_custom_statusline.sh "$HOME/.claude/statusline.custom.sh" ocean developer
```

恢复默认：
```bash
bash ~/.claude/skills/cc-statusline/scripts/uninstall_statusline.sh
```
