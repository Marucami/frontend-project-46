import fs from 'fs';
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
