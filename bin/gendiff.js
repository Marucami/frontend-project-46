#!/usr/bin/env node
import { Command } from 'commander';
// import * as path from 'node:path';
// import * as process from 'node:process'
import { genDiff } from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .argument('filepath1')
  .argument('filepath2')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
  // const fileres1 = path.resolve(process.cwd(), filepath1);
  // const fileres2 = path.resolve(process.cwd(), filepath2);
  // const data1 = dataParse(fileres1);
  // const data2 = dataParse(fileres2);
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();
