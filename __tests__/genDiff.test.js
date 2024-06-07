
import fs from "fs"; 
import path from "path";
//import { fileUrlToPath } from "url";

import { genDiff } from "../src/index.js";
import test from "node:test";

//const __filename = fileUrlToPath(import.meta.url); 
//const __dirname = path.dirname(__filename);

function getFixturePath(filePath){
return path.join('__tests__', '..' , '__fixtures__', filePath); 
}

function fileData(filePath){
  return fs.readFileSync(filePath, 'utf-8');
}

const referenceFlatFiles = fileData('./__fixtures__/flat-file-test.txt');
const f = fs.readFileSync('./__fixtures__/flat-file-test.txt', 'utf-8')

test('Flat JSON', () => {
  const file1= getFixturePath('file1.json'); 
  const file2 = getFixturePath('file2.json');

expect(genDiff(file1, file2)).toEqual(referenceFlatFiles);
})
