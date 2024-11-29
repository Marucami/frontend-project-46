<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import parser from './parser.js';
import buildTreeDiff from './comparator.js';
import formatter from './formatters/index.js';
=======
import * as fs from 'node:fs';
import _ from 'lodash';
import * as path from 'node:path';
import * as process from 'node:process';
import yaml from 'js-yaml';
>>>>>>> refs/remotes/origin/main

const fileRead = (filepath) => fs.readFileSync(path.resolve(filepath));
const fileFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const objOne = parser(fileRead(filepath1), fileFormat(filepath1));
  const objTwo = parser(fileRead(filepath2), fileFormat(filepath2));
  const result = buildTreeDiff(objOne, objTwo);
  return formatter(result, formatName);
};

<<<<<<< HEAD
export default genDiff;
=======
  const keys = _.union(_.keys(data1), _.keys(data2));
  keys.sort();

  const diff = [];
  for (const key of keys) {
    if (data1[key] === data2[key]) {
      diff.push(`  ${key}: ${data1[key]}`);
      continue;
    }
    if (key in data1) {
      diff.push(`- ${key}: ${data1[key]}`);
    }
    if (key in data2) {
      diff.push(`+ ${key}: ${data2[key]}`);
    }
  }

  return diff.join('\n');
}

export function generateDiff(file1, file2) {
  const data1 = yaml.parse(file1);
  const data2 = yaml.parse(file2);

  const diff = {};

  for (const key of keys) {
    if (data1[key] === data2[key]) {
      diff.push(`  ${key}: ${data1[key]}`);
      continue;
    }
    if (key in data1) {
      diff.push(`- ${key}: ${data1[key]}`);
    }
    if (key in data2) {
      diff.push(`+ ${key}: ${data2[key]}`);
    }
  }

  return yaml.stringify(diff);
}
>>>>>>> refs/remotes/origin/main
