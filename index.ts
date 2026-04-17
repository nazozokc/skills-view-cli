import { consola } from "consola";
import { Command } from "commander";
import { homedir } from "os";
import { execa, execaSync } from "execa";
import { readdir } from "fs/promises";

async function listskills(dir: string, name: string): Promise<void> {
  try {
    const files = await readdir(dir);

    consola.log(`${name} skills list`);

    for (const file of files) {
      consola.log(file);
    }
  } catch (error) {
    consola.log("no such file directory");
  }
}

const runCLI = () => {
  const program = new Command();

  program.name("skills").description("skills list CLI").version("0.1.0");
  program.command("claude").action(() => {
    listskills(`${homedir()}/.claude/skills`, "claude code");
  });

  program.command("codex").action(() => {
    listskills(`${homedir()}/.codex/skills`, "codex");
  });

  program.command("global").action(() => {
    listskills(`${homedir()}/.agents/skills`, "global");
  });

  program.parse();
};

runCLI();
