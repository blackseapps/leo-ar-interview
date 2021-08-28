export const DataGroup = (data, key) => {
  let _tempGroup = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item[key][0]])
        acc[item[key][0]] = {
          id: item.id,
          musicType: item[key][0],
          musicTypes: [],
        };
      acc[item[key][0]].musicTypes.push(item.musicTypes);
      return acc;
    }, {}),
  );

  //console.log(_tempGroup);

  return _tempGroup;
};

export const DataFilter = (data, key, value) => {
  let _tempGroup;

  if (value === 'All') {
    _tempGroup = data;
  } else {
    _tempGroup = data.filter(item => item[key][0] === value);
  }

  console.log(_tempGroup);

  return _tempGroup;
};
