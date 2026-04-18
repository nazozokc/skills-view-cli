import { consola } from "consola";
import { readdir } from "fs/promises";

export async function viewskills(dir: string, name: string): Promise<void> {
  try {
    const files = await readdir(dir);

    consola.log(`${name} skills list`);
    consola.log(`--------------------------------------`);

    for (const file of files) {
      consola.log(file);
    }
  } catch (error) {
    consola.log("no such file directory");
  }
}
