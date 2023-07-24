/**
 * This function accepts an array and return the first valid elemnt that not a null, undefined or empty string
 * @param data array of elements
 * @returns The first valid element from the array
 */
const returnFirstValid = (data: any[]) => {
  for (let element of data) {
    if (element !== null && element !== undefined && element !== '') {
      return element;
    }
  }
  return null;
};

export {returnFirstValid};
