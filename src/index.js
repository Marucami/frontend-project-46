import fs from 'fs';
import * as path from 'path';
import comparer from './comparator.js';
import styling from './formatters/index.js';
import parse from './parser.js';

const getFilePath = (fileName) => path.resolve(process.cwd(), fileName);
const getFileFormat = (fileName) => fileName.split('.')[1];
const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const dataFile1 = getFilePath(filePath1);
  const dataFile2 = getFilePath(filePath2);

  const dataParsedFile1 = parse(readFile(dataFile1), getFileFormat(dataFile1));
  const dataParsedFile2 = parse(readFile(dataFile2), getFileFormat(dataFile2));

  const diffOutput = comparer(dataParsedFile1, dataParsedFile2);

  return styling(diffOutput, formatName);
};

export default genDiff;
