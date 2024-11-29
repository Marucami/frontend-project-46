import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return _.isString(value) ? `'${value}'` : String(value);
};

const plain = (dataFile, propertyKey = '') => {
  const rows = dataFile.flatMap((node) => {
    const {
      type, key, value, value1, value2,
    } = node;
    const currentKey = propertyKey ? `${propertyKey}.${key}` : key;
    switch (type) {
      case 'nested':
        return plain(value, currentKey);
      case 'added':
        return `Property '${currentKey}' was added with value: ${stringify(value)}`;
      case 'deleted':
        return `Property '${currentKey}' was removed`;
      case 'changed':
        return `Property '${currentKey}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
      case 'unchanged':
        return [];
      default:
        throw new Error(`Received node type ${type} is unknown.`);
    }
  });
  return rows.join('\n');
};

export default plain;
