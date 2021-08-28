export const DataGroup = (data, key) => {
  let _tempGroup = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item[key]])
        acc[item[key]] = {
          id: item.id,
          musicType: item[key],
          musicTypes: [],
        };
      acc[item[key]].musicTypes.push(item.musicTypes);
      return acc;
    }, {}),
  );

  // console.log(_tempGroup);

  return _tempGroup;
};

export const DataFilter = (data, key, value) => {
  let _tempGroup;

  if (value === 'All') {
    _tempGroup = data;
  } else {
    _tempGroup = data.filter(item => item[key] === value);
  }

  console.log(_tempGroup);

  return _tempGroup;
};
