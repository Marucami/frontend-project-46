import fs from 'fs';
import * as path from 'path';
import comparer from './comparer.js';
import styling from './formatters/index.js';
import parse from './parsers.js';

const getFilePath = (fileName) => path.resolve(process.cwd(), fileName);
const getFileFormat = (fileName) => fileName.split('.')[1];
// const getFileFormat = (fileName) => path.extname(fileName).slice(1);
const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

const gendiff = (filePath1, filePath2, formatName = 'stylish') => {
  const dataFile1 = getFilePath(filePath1);
  const dataFile2 = getFilePath(filePath2);

  const dataParsedFile1 = parse(readFile(dataFile1), getFileFormat(dataFile1));
  const dataParsedFile2 = parse(readFile(dataFile2), getFileFormat(dataFile2));

  const diffOutput = comparer(dataParsedFile1, dataParsedFile2);

  return styling(diffOutput, formatName);
};

export default gendiff;
