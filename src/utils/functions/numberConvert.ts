/**
 * Funtion that accepts a number and return shortened conversion
 * eg: if the number is 1100, it returns 1.1K, and its more than a million
 * @param data The number that should be manipulated
 * @returns The manipulated string with K or M postfix
 */
export const numberConvert = (data: number) => {
  if (data > 999 && data < 999999) {
    const updatedNumber = Number(data / 1000).toFixed(1);
    return updatedNumber + 'K';
  } else if (data > 999999) {
    const updatedNumber = Number(data / 1000000).toFixed(1);
    return updatedNumber + 'M';
  } else {
    return data;
  }
};

export const downToZero = (data: number) => {
  // if (data < 0) {
  //   return 0;
  // } else {
  //   return data;
  // }
  return data;
};
