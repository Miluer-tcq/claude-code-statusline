#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const sourceSkillDir = path.join(repoRoot, 'cc-statusline');
const skillsRoot = path.join(os.homedir(), '.claude', 'skills');
const targetSkillDir = path.join(skillsRoot, 'cc-statusline');

function help() {
  console.log(`cc-statusline skill installer

Usage:
  npx @miluer-tcq/cc-statusline add
  npx @miluer-tcq/cc-statusline add cc-statusline
  npx cc-statusline-install add
  npx @miluer-tcq/cc-statusline help

What it does:
  - installs the cc-statusline skill into ~/.claude/skills/cc-statusline
  - overwrites an existing cc-statusline skill directory
  - does not modify your statusline until you invoke the skill in Claude Code
`);
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function installSkill() {
  if (!fs.existsSync(sourceSkillDir)) {
    console.error(`Source skill directory not found: ${sourceSkillDir}`);
    process.exit(1);
  }

  fs.mkdirSync(skillsRoot, { recursive: true });
  if (fs.existsSync(targetSkillDir)) {
    fs.rmSync(targetSkillDir, { recursive: true, force: true });
  }
  copyRecursive(sourceSkillDir, targetSkillDir);

  console.log('Installed Claude Code skill:');
  console.log(`  ${targetSkillDir}`);
  console.log('');
  console.log('Try one of these prompts in Claude Code:');
  console.log('  帮我安装 Full / 完整版 状态栏');
  console.log('  帮我切换到 Developer / 开发者版 状态栏');
  console.log('  帮我生成一个 2 行自定义状态栏');
  console.log('');
  console.log('You can also paste this GitHub URL to Claude and ask it to install the skill:');
  console.log('  https://github.com/Miluer-tcq/claude-code-statusline');
}

const [, , command = 'help', skillName] = process.argv;

if (command === 'help' || command === '--help' || command === '-h') {
  help();
  process.exit(0);
}

if (command === 'add') {
  if (skillName && skillName !== 'cc-statusline') {
    console.error(`Unsupported skill name: ${skillName}`);
    process.exit(1);
  }
  installSkill();
  process.exit(0);
}

console.error(`Unknown command: ${command}`);
help();
process.exit(1);
