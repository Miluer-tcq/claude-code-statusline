# Trigger Validation Prompts / 触发验证提示词

Use this file to manually review whether `cc-statusline` should trigger for realistic requests.
这个文件用于人工检查 `cc-statusline` 是否会对真实请求稳定触发。

## Should trigger / 应触发

### T1 — Preset install on Windows
**Prompt**
`Help me set up a Claude Code statusline on Windows and let me choose between the full preset and the developer preset.`

**Expected**
- should trigger `cc-statusline`
- should route to preset installation
- should preview before changing settings

### T2 — 中文预设安装
**Prompt**
`帮我给 Claude Code 加个状态栏，先预览，再帮我安装成完整版。`

**Expected**
- 应触发 `cc-statusline`
- 应进入预设安装流程
- 应先预览再写入

### T3 — Beautify existing preset
**Prompt**
`I already have a Claude Code statusline but it feels too busy. Make it cleaner and switch the icons to minimal.`

**Expected**
- should trigger `cc-statusline`
- should route to beautify / optimize
- may keep preset flow if only style changes are needed

### T4 — 中文基于预设微调
**Prompt**
`我想从完整版开始微调，保留 Git、Context、Token，做成 2 行 ocean 主题。`

**Expected**
- 应触发 `cc-statusline`
- 应进入基于预设微调
- 应最终走 custom 生成流程

### T5 — One-line custom, generate only
**Prompt**
`Build me a one-line custom Claude Code statusline with model, active, and cost only, but don't activate it yet.`

**Expected**
- should trigger `cc-statusline`
- should route to custom generation
- should generate only, not activate immediately

### T6 — 中文恢复默认
**Prompt**
`帮我恢复默认状态栏，但不要删掉之前生成的脚本文件。`

**Expected**
- 应触发 `cc-statusline`
- 应进入 uninstall / restore flow
- 应只移除 `statusLine`

### T7 — Troubleshoot on macOS
**Prompt**
`My Claude Code statusline install failed on macOS — can you troubleshoot why the statusLine command isn't working?`

**Expected**
- should trigger `cc-statusline`
- should route to troubleshooting
- should inspect script path, settings, and jq availability

### T8 — 中文切换预设与图标
**Prompt**
`把我的 Claude Code 状态栏切到开发者版，再换成 developer 图标风格。`

**Expected**
- 应触发 `cc-statusline`
- 应进入 preset switch flow
- 应保持关键选项双语

### T9 — Custom from scratch
**Prompt**
`Generate a custom Claude Code statusline from scratch: line 1 model+modes, line 2 cwd+git+context, line 3 tokens+duration+cost.`

**Expected**
- should trigger `cc-statusline`
- should route to custom from scratch
- should map module choices into generator arguments

### T10 — 中文只改主题并先预览
**Prompt**
`我不想重装，只想把现有 Claude Code 状态栏换成 sunset 主题并先给我看预览。`

**Expected**
- 应触发 `cc-statusline`
- 应进入 beautify / optimize 或 preset switch
- 应先预览再执行

## Near misses / 临界不触发

### N1 — zsh prompt
**Prompt**
`Make my zsh prompt look cleaner and show git branch.`

**Expected**
- should not trigger `cc-statusline`
- this is about shell prompt theming

### N2 — Windows taskbar
**Prompt**
`帮我把 Windows 任务栏调透明。`

**Expected**
- 不应触发 `cc-statusline`
- 这是系统任务栏，不是 Claude Code 状态栏

### N3 — VS Code status bar
**Prompt**
`Customize the VS Code status bar colors for my theme.`

**Expected**
- should not trigger `cc-statusline`
- this is about VS Code UI

### N4 — Web component
**Prompt**
`给我做一个网页顶部状态栏组件。`

**Expected**
- 不应触发 `cc-statusline`
- 这是前端 UI 需求

### N5 — Terminal prompt
**Prompt**
`I need a terminal prompt with kubernetes context and git info.`

**Expected**
- should not trigger `cc-statusline`
- this is terminal prompt customization, not Claude Code statusline

### N6 — Claude Desktop, not Claude Code
**Prompt**
`帮我调 Claude Desktop 的界面主题，不是 Claude Code。`

**Expected**
- 不应触发 `cc-statusline`
- 用户已明确排除 Claude Code

## Coverage map / 覆盖范围
- preset install / 预设安装: T1, T2
- preset switch / 预设切换: T8
- custom from scratch / 从零自定义: T5, T9
- customize from preset / 基于预设微调: T4
- beautify / optimize / 美化优化: T3, T10
- uninstall / restore / 卸载恢复: T6
- troubleshoot / 排障: T7
- near misses / 临界不触发: N1–N6

## Execution workflow / 执行方式
1. Open a fresh Claude Code session where `cc-statusline` is available.
2. Paste one prompt at a time from this file.
3. Record the result in `templates/trigger-validation.template.json`.
4. For each case, fill:
   - `actual_trigger`
   - `actual_route`
   - `actual_signals`
   - `pass`
   - `notes`
5. Mark the full run as passed only if:
   - all should-trigger cases load the skill and route correctly
   - all near-miss cases avoid loading the skill

1. 在一个可用 `cc-statusline` 的全新 Claude Code 会话中进行验证。
2. 每次只粘贴一条提示词。
3. 把结果记录到 `templates/trigger-validation.template.json`。
4. 每条 case 至少填写：
   - `actual_trigger`
   - `actual_route`
   - `actual_signals`
   - `pass`
   - `notes`
5. 只有当以下条件同时满足时，整轮验证才算通过：
   - 所有应触发 case 都成功加载 skill 且路由正确
   - 所有 near-miss case 都没有误触发

## High-risk prompts / 高风险提示词
These prompts are the most likely to expose under-trigger or mis-route issues:
这些提示词最容易暴露“未触发”或“路由错误”问题：
- `T3` beautify existing preset / 美化现有状态栏
- `T5` one-line custom, generate only / 单行 custom 且只生成不启用
- `T6` restore default without deleting scripts / 恢复默认但保留脚本
- `T10` theme-only change with preview / 只改主题并要求先预览

If these fail, the first place to adjust is usually the `SKILL.md` frontmatter description rather than the body.
如果这些 case 失败，优先考虑调整 `SKILL.md` 的 frontmatter description，而不是正文。

## Review notes / 复查说明
If a should-trigger prompt does not load the skill, the most likely fixes are:
如果某个应触发提示词没有触发，优先检查这些点：
- whether `SKILL.md` frontmatter description is specific enough / frontmatter 描述是否足够具体
- whether the prompt mentions Claude Code clearly enough / 提示词是否足够明确提到 Claude Code
- whether the prompt sounds too generic for a skill / 提示词是否过于泛泛，像普通对话而不是技能场景
- whether a competing interpretation is stronger / 是否有更强的竞争性解释
