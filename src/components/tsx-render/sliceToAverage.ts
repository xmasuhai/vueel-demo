// unFlat & slice array To Average by groupLen
export const sliceToAverage = <T>(arr: Array<T>,
                                  groupLen: number): Array<T>[] => {
  let index = 0;
  const newArr = [];
  while (index < arr.length) {
    newArr.push(arr.slice(index, index += groupLen));
  }
  return newArr;
};