import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (diffOutput, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(diffOutput);
    case 'plain':
      return plain(diffOutput);
    case 'json':
      return json(diffOutput);
    default:
      throw new Error(`Output format styling <${formatName}> is not supported`);
  }
};
