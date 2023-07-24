/**
 *
 * @param {*} name
 * @returns test id of the button
 */
export const checkElementExist = async name =>
  await waitFor(element(by.id(name)))
    .toBeVisible()
    .withTimeout(5000);

/**
 *
 * @param {*} name
 * @returns test id of the button
 */
export const clickElementOnce = async name => await element(by.id(name)).tap();

/**
 *
 * @param {*} name
 * @returns test id of the button
 */
export const clickElementTwice = async name =>
  await element(by.id(name)).multiTap(2);

/**
 *
 * @param {*} name
 * @returns test id of the button
 * @param {*} value
 * @returns text to be entered in field
 */
export const enterText = async (name, value) => {
  await element(by.id(name)).typeText(value);
};

/**
 *
 * @param {*} name
 */
export const elementScrollTOVIew = async name => {
  await element(by.id(name)).elementScrollTOVIew();
};
