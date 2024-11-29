import fs from 'fs';
<<<<<<< HEAD
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const filepath3 = getFixturePath('file3.yml');
const filepath4 = getFixturePath('file4.yaml');

const pattern1 = readFile('pattern1.txt');
const pattern2 = readFile('pattern2.txt');
const pattern3 = readFile('pattern3.txt');
const pattern4 = readFile('pattern4.txt');
const pattern5 = readFile('pattern5.txt');
const pattern6 = readFile('pattern6.txt');

test('default output', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(pattern1);
  expect(genDiff(filepath3, filepath4)).toEqual(pattern4);
});

test.each([
  { format: 'stylish', expected: pattern1 },
  { format: 'plain', expected: pattern2 },
  { format: 'json', expected: pattern3 },
])('json files. Output: $format', ({ format, expected }) => {
  expect(genDiff(filepath1, filepath2, format)).toBe(expected);
});

test.each([
  { format: 'stylish', expected: pattern4 },
  { format: 'plain', expected: pattern5 },
  { format: 'json', expected: pattern6 },
])('yml & yaml files. Output: $format', ({ format, expected }) => {
  expect(genDiff(filepath3, filepath4, format)).toBe(expected);
});
=======
import path from 'path';
// import { fileUrlToPath } from "url";
import assert from 'assert';
import { genDiff } from '../src/index.js';

// const __filename = fileUrlToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

function getFixturePath(filePath) {
  return path.join('__tests__', '..', '__fixtures__', filePath);
}

function fileData(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

const referenceFlatFiles = fileData('./__fixtures__/flat-file-test.txt');

describe('genDiff', () => {
  it('Flat JSON', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');

    assert.strictEqual(genDiff(file1, file2), referenceFlatFiles);
  });

  it('Flat YAML', () => {
    const file1 = getFixturePath('file1.yml');
    const file2 = getFixturePath('file2.yml');

    assert.strictEqual(genDiff(file1, file2), referenceFlatFiles);
  });
});
>>>>>>> refs/remotes/origin/main
