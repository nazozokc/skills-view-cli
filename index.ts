import { consola } from "consola";
import { Command } from "commander";
import { homedir } from "os";
import { execa, execaSync } from "execa";
import { readdir } from "fs/promises";

const runCLI = () => {
  const program = new Command();

  program.name("skills").description("skills list CLI").version("0.1.0");

  program.command("claude").action(async () => {
    try {
      const files = await readdir(`${homedir()}/.claude/skills`);

      consola.log("claude code skills list");

      for (const file of files) {
        consola.log(file);
      }
    } catch (error) {
      consola.log("no such file directory");
    }
  });

  program.parse();
};

runCLI();
