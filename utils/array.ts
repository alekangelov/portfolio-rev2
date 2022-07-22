export const splitInHalf = <T>(arr: T[]) => {
  const half = Math.floor(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
};

export const makeMasonryFromArray = <T>(base: T[], columns = 2) => {
  console.log(base);
  const columnArray = Array.from({ length: columns }).map(() => []) as T[][];
  let currentColumn = 0;
  for (let i = 0; i < base.length; i++) {
    const element = base[i];
    if (element) {
      if (currentColumn > columnArray.length - 1) {
        currentColumn = 0;
      }
      console.log(columnArray[currentColumn]);
      columnArray[currentColumn].push(element);
      currentColumn++;
    }
  }
  return columnArray;
};
