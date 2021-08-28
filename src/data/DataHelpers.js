export const DataGroup = (data, key) => {
  let newDirectory = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.musicType])
        acc[item.musicType] = {
          id: item.id,
          musicType: item.musicType,
          categorie: [],
        };
      acc[item.musicType].categorie.push(item.categorie);
      return acc;
    }, {}),
  );

  console.log(newDirectory);

  return newDirectory;
};
