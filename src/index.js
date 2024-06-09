import * as fs from 'node:fs';
import _ from 'lodash';
import * as path from 'node:path';
import * as process from 'node:process';
import yaml from 'js-yaml';

export function dataParse(puti) {
  return JSON.parse(fs.readFileSync(puti, 'utf-8'));
}

export function genDiff(file1, file2) {
  const fileres1 = path.resolve(process.cwd(), file1);
  const fileres2 = path.resolve(process.cwd(), file2);
  const data1 = JSON.parse(fs.readFileSync(fileres1));
  const data2 = JSON.parse(fs.readFileSync(fileres2));

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
