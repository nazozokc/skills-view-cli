#!/usr/bin/env node
import { Command } from "commander";
import { homedir } from "os";
import { viewskills } from "./viewskills.ts";

const runCLI = () => {
  const program = new Command();

  program.name("skills").description("skills list CLI").version("0.1.7");
  program.command("claude").action(() => {
    viewskills(`${homedir()}/.claude/skills`, "claude code");
  });

  program.command("codex").action(() => {
    viewskills(`${homedir()}/.codex/skills`, "codex");
  });

  program.command("global").action(() => {
    viewskills(`${homedir()}/.agents/skills`, "global");
  });

  program.parse();
};

runCLI();
