import _ from 'lodash';

const comparer = (dataFile1, dataFile2) => {
  const keys = _.sortBy(_.union(_.keys(dataFile1), _.keys(dataFile2)));

  const getDiff = keys.map((key) => {
    if (_.isPlainObject(dataFile1[key]) && _.isPlainObject(dataFile2[key])) {
      return { key, type: 'nested', value: comparer(dataFile1[key], dataFile2[key]) };
    }

    if (!_.has(dataFile1, key)) {
      return { key, type: 'added', value: dataFile2[key] };
    }

    if (!_.has(dataFile2, key)) {
      return { key, type: 'deleted', value: dataFile1[key] };
    }

    if (dataFile1[key] !== dataFile2[key]) {
      return {
        key, type: 'changed', value1: dataFile1[key], value2: dataFile2[key],
      };
    }
    return { key, type: 'unchanged', value: dataFile2[key] };
  });

  return getDiff;
};

export default comparer;
