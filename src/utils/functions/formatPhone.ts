export const formatPhone = (value: string) => {
  let formatedvalue = `(${value.slice(0, 3)})${value.slice(3, 6)}-${value.slice(
    6,
    10,
  )}`;
  return `+1${formatedvalue}`;
};
