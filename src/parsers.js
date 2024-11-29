import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const parse = (fileData, fileFormat) => parsers[fileFormat](fileData);

export default parse;
