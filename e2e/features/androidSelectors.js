/**
 * Function to get UI selector string of an element using resource ID
 * @param selector ID name
 * @param includeCPM_ID Default: true. Include "com.conversiontechnologies:id"
 * @returns element selector string
 */
//need to check resource id.
const androidIDSelector = (selector, includeCPM_ID = true) => {
  let str = includeCPM_ID
    ? `android=new UiSelector().resourceId("${selector}")`
    : `android=new UiSelector().resourceId("${selector}")`;
  return str;
};
