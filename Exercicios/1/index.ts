export const maskify = (value: string) => {
  let result = '';
  for (let index = 0; index < value.length - 4; index++) {
    result += '#';
  }

  return result + value.slice(-4);
};
