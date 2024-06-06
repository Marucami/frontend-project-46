
import fs from "fs"; 
import path from "path";
import { fileUrlToPath } from "url";

import genDiff from "../src/index.js";
import test from "node:test";

const __filename = fileUrlToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

function getFixturePath(filePath){
path.join(__dirname, '..' , '__fixtures__', filePath); 
}

function fileData(filePath){
    fs.readFileSync(getFixturePath(filePath), 'utf-8');
}

const referenceFlatFiles = fileData('flat-files-test.txt');

test('Flat JSON', () => {
  const file1= getFixturePath('file1.json'); 
  const file2 = getFixturePath('file2.json');

expect(genDiff(file1, file2)).toEqual(referenceFlatFiles);
})
