// export const elementAssertClick = async (elm, elementName, assertType) => {
//   // elementName === "" ? elm : elementName;

//   if (assertType === 'exist') {
//     await expect(
//       element(elm).toExist(),
//       `${elementName} doesn't exist`,
//     ).eventually.toBeTruthy();
//   } else if (assertType === 'displayed') {
//     await expect(
//       element(elm).toExist(),
//       `${elementName} doesn't exist`,
//     ).eventually.toBeTruthy();
//     await expect(
//       element(elm).toBeVisible(),
//       `${elementName} doesn't exist`,
//     ).eventually.toBeTruthy();
//   } else if (assertType === 'enabled') {
//     await expect(
//       element(elm).toExist(),
//       `${elementName} doesn't exist`,
//     ).eventually.toBeTruthy();
//     await expect(
//       element(elm).toBeVisible(),
//       `${elementName} doesn't exist`,
//     ).eventually.toBeTruthy();
//     await expect(
//       element(elm).toBeFocused(),
//       `${elementName} doesn't exist`,
//     ).eventually.toBeTruthy();
//   }
// };
