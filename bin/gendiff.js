#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .description('Comparing of two json-format files with displaying differences.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const resultDiff = genDiff(filepath1, filepath2, program.opts().format);
    console.log(resultDiff);
  });

program.parse();
