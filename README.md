# cc-statusline

Bilingual Claude Code statusline skill for preset installation, preview-first activation, interactive customization, theme/icon switching, and cross-platform setup on Windows, macOS, and Linux.

## Features
- bilingual trigger coverage for Chinese and English requests
- one-click preset installation
- grouped module-based custom layouts
- custom generation from scratch or from a preset
- 1 / 2 / 3 line layouts
- theme and icon style switching
- backup of the target script to `<target>.bak`
- previous `statusLine` snapshot saved to `~/.claude/cc-statusline-state.json`
- updates only the `statusLine` field in `~/.claude/settings.json`
- uninstall removes only `statusLine` and keeps generated scripts on disk

## What the repository includes
- `cc-statusline` skill
- runtime statusline script
- platform-specific install scripts
- preset / theme / icon metadata
- custom generation and activation wrappers
- marketplace metadata for a single-plugin repository
- bilingual release docs

## Installation

### 1. Preset install via scripts (recommended)
Recommended entry points:
- unified preset wrapper: `scripts/activate_preset_statusline.sh`
- Windows installer: `scripts/install_statusline_windows.sh`
- macOS installer: `scripts/install_statusline_macos.sh`
- Linux installer: `scripts/install_statusline_linux.sh`

Recommended command:
```bash
bash scripts/activate_preset_statusline.sh full aurora classic
```

What the preset install flow does:
- installs or reuses `jq`
- backs up the target script to `<target>.bak`
- preserves the previous `statusLine` value in `~/.claude/cc-statusline-state.json`
- writes the runtime script to `~/.claude/statusline.sh` by default
- updates only the `statusLine` field in `~/.claude/settings.json`
- asks before replacing a foreign `statusLine` configuration

### 2. Generate a custom statusline
Generate a three-line custom layout:
```bash
bash cc-statusline/scripts/generate_custom_statusline.sh \
  "$HOME/.claude/statusline.custom.sh" \
  "model,modes,active" \
  "cwd,git,context" \
  "ctx_tokens,sum_tokens,duration,cost" \
  "ocean" \
  "developer"
```

Generate a one-line custom layout:
```bash
bash cc-statusline/scripts/generate_custom_statusline.sh \
  "$HOME/.claude/statusline.custom.sh" \
  "model,active,cost" \
  "-" \
  "-" \
  "mono" \
  "minimal"
```

Notes:
- use comma-separated module ids per line
- pass `-` for an unused line
- the generator prints a compact summary of the final layout

Activate the generated custom script:
```bash
bash scripts/activate_custom_statusline.sh "$HOME/.claude/statusline.custom.sh" ocean developer
```

Switch back to a preset later:
```bash
bash scripts/activate_preset_statusline.sh full aurora classic
```

### 3. Uninstall / restore default behavior
```bash
bash scripts/uninstall_statusline.sh
```

This removes only the `statusLine` field from `~/.claude/settings.json`.
Generated script files stay on disk unless the user explicitly wants them removed.

### 4. Marketplace release
This repository already includes `.claude-plugin/marketplace.json` for a single-plugin marketplace release.

Current metadata:
- plugin name: `cc-statusline`
- marketplace name: `miluer-statusline`
- branch: `main`
- version: `0.1.0`

## Presets
- `Full / 完整版` — closest to the current full Miluer-style layout
- `Standard / 标准版` — balanced for daily use
- `Minimal / 极简版` — lowest visual noise
- `Developer / 开发者版` — emphasizes git state and token visibility

## Themes
- `Aurora / 极光`
- `Sunset / 日落`
- `Ocean / 海洋`
- `Mono / 单色`

## Icon styles
- `classic / 经典`
- `minimal / 极简`
- `developer / 开发者`

## Customization model
The skill supports:
- selecting a preset directly
- starting from scratch with grouped module selection
- starting from a preset and fine-tuning modules
- choosing 1 / 2 / 3 line layouts
- choosing an existing theme first, then refining colors
- switching icon styles
- generating `~/.claude/statusline.custom.sh` before activation

Canonical module groups are documented in `cc-statusline/references/modules.md`.
Trigger phrase examples are documented in `cc-statusline/references/trigger-phrases.md`.

## Manual install
See `templates/manual-install.md`.

## Screenshots

### Preset selection / 预设选择
![Preset selection / 预设选择](assets/screenshots/preset-selection.svg)

### Custom layout preview / 自定义布局预览
![Custom layout preview / 自定义布局预览](assets/screenshots/custom-layout-preview.svg)

### Themes and icon styles / 主题与图标风格
![Themes and icon styles / 主题与图标风格](assets/screenshots/theme-and-icons.svg)

### Installed statusline examples / 安装后状态栏示例
![Installed statusline examples / 安装后状态栏示例](assets/screenshots/installed-statusline-examples.svg)

### Cross-platform install examples / 三平台安装示例
![Cross-platform install examples / 三平台安装示例](assets/screenshots/cross-platform-install.svg)

## Repository layout
See `templates/repo-structure.md`.

## Release checklist
See `templates/release-checklist.md`.
