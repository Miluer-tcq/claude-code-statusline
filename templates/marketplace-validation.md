# Marketplace Validation / Marketplace 安装验证

## Purpose / 目的
Use this document before the first public release to verify that `cc-statusline` works correctly when installed from the marketplace entry, not only from the local repository scripts.
这个文档用于首发前验证：`cc-statusline` 不仅要能从本地仓库脚本安装，也要能通过 marketplace 入口正常安装与触发。

## Pre-check / 前置检查
Before running the marketplace flow, confirm:
在运行 marketplace 流程前，先确认：
- `.claude-plugin/marketplace.json` exists
- the plugin name is `cc-statusline`
- the repository metadata points to the correct GitHub repo
- `cc-statusline/SKILL.md` is present
- install / activate / uninstall scripts are already validated locally

## Validation goals / 验证目标
A successful marketplace validation should prove:
一次成功的 marketplace 验证，至少要证明：
1. the plugin is discoverable / 插件可发现
2. the skill can be installed from marketplace metadata / skill 可通过 marketplace 元数据安装
3. the installed skill triggers for bilingual prompts / 安装后的 skill 能对中英文提示稳定触发
4. preset install flow still works / 预设安装流程正常
5. custom generation flow still works / 自定义生成流程正常
6. uninstall / restore flow still works / 卸载恢复流程正常

## Suggested validation environment / 建议验证环境
Use a clean or isolated Claude Code environment when possible.
尽量在干净或隔离的 Claude Code 环境中验证。

Recommended isolation targets:
推荐隔离目标：
- a temporary user profile or VM / 临时用户环境或虚拟机
- a clean `~/.claude/settings.json` backup / 干净的 `~/.claude/settings.json` 备份
- a test target under `~/.claude/` / `~/.claude/` 下的测试目标文件

## Validation steps / 验证步骤

### 1. Discoverability / 可发现性
Check whether the marketplace entry is visible and named correctly.
检查 marketplace 条目是否可见，名称是否正确。

Record:
记录：
- plugin name shown / 展示的插件名
- description shown / 展示的描述
- version shown / 展示的版本
- whether the bilingual positioning is understandable / 双语定位是否清晰

### 2. Install from marketplace / 从 marketplace 安装
Install the plugin from the marketplace entry.
通过 marketplace 条目安装插件。

Record:
记录：
- install succeeded or failed / 安装是否成功
- install path or resulting skill path / 安装路径或结果路径
- whether `cc-statusline` appears in the installed skills list / `cc-statusline` 是否出现在已安装 skill 列表

### 3. Trigger smoke test / 触发冒烟验证
Use a small subset of the prompts from `templates/test-prompts.md`.
从 `templates/test-prompts.md` 里挑一小组提示词做冒烟验证。

Recommended minimum set:
建议最小集合：
- preset install / 预设安装：T2
- custom generation / 自定义生成：T5
- restore default / 恢复默认：T6
- near miss / 临界不触发：N1 or N3

Record:
记录：
- did the skill trigger / 是否触发 skill
- did it route correctly / 是否进入正确流程
- were key labels bilingual / 关键选项是否保持双语

### 4. Preset install flow / 预设安装流程
Run one real preset install through the installed marketplace skill.
通过已安装的 marketplace skill 实际跑一次预设安装。

Verify:
检查：
- preview appears before writing / 写入前是否先预览
- `statusLine` only is updated / 是否只改了 `statusLine`
- target script exists / 目标脚本是否存在
- backup file exists when replacing / 覆盖时是否生成备份
- state snapshot is saved / 是否保存快照

### 5. Custom generation flow / 自定义生成流程
Run one real custom generation flow.
实际跑一次自定义生成流程。

Verify:
检查：
- grouped module questioning works / 分组模块提问是否正常
- `~/.claude/statusline.custom.sh` is generated / 是否生成 custom 脚本
- one-line or multi-line layout maps correctly / 单行或多行布局是否正确映射
- activation behavior matches the user choice / 是否按用户选择启用或仅生成

### 6. Uninstall / restore flow / 卸载恢复流程
Run a restore-default or uninstall request.
执行一次恢复默认或卸载请求。

Verify:
检查：
- only `statusLine` is removed / 是否只移除 `statusLine`
- generated scripts remain on disk / 生成脚本是否保留
- previous snapshot is still available / 旧快照是否仍可用

## Result record template / 结果记录模板
Use this structure when writing the final notes:
记录最终结果时可用这个结构：

```text
Marketplace validation result / Marketplace 验证结果
- Discoverable / 可发现: pass | fail
- Install / 安装: pass | fail
- Trigger smoke test / 触发冒烟验证: pass | fail
- Preset install / 预设安装: pass | fail
- Custom generation / 自定义生成: pass | fail
- Uninstall / 恢复默认: pass | fail
- Notes / 备注: <key findings>
```

## Failure logging / 失败记录
If the marketplace flow fails, record at least:
如果 marketplace 流程失败，至少记录：
- which step failed / 哪一步失败
- visible error text / 可见报错文本
- whether the failure is metadata, install, trigger, or runtime related / 属于元数据、安装、触发还是运行时问题
- whether the local repo flow still works / 本地仓库流程是否仍正常
- the minimal reproducible prompt / 最小复现提示词

## Exit criteria / 通过标准
Marketplace validation is ready to mark complete only when:
只有在以下条件全部满足时，marketplace 验证才可标记完成：
- marketplace install succeeds
- at least one preset install succeeds through the installed skill
- at least one custom generation flow succeeds through the installed skill
- uninstall / restore succeeds
- at least one near-miss prompt does not trigger the skill
