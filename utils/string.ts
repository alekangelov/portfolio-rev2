export const textMap = (
  text: string,
  map: (element: string, index: number) => JSX.Element
) => {
  const splitted = text.split("");
  return splitted.map(map);
};
