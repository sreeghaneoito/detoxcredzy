//  * s1 is Yellow
//  * s2 is green
// * s3 is blue
// * r1 is Diamond shape

import {Dimensions} from 'react-native';
import {bubbleType} from './types';
const screenwidth = Dimensions.get('screen').width;
const screenheight = Dimensions.get('screen').height;

/**
 * @author Ajo Alex
 * @name Style Cordinate
 * @description These conrdinates controls the entire bubble animation in the app
 */
export const styleCordinates: bubbleType = [
  // Invisible
  {
    s1top: 0,
    s2top: screenheight + 20,
    s3top: -30,
    s1left: -20,
    s2left: screenwidth + 20,
    s3left: screenwidth / 2,
    r1left: -100,
    r1top: screenheight / 3,
    r2left: screenwidth * 1.1,
    r2top: screenheight / 4,
  },
  // for dashboard
  {
    s1top: screenheight / 7,
    s2top: screenheight / 3,
    s3top: screenheight / 9,
    s1left: 0,
    s2left: screenwidth / 1.5,
    s3left: screenwidth / 2,
    r1left: -60,
    r1top: screenheight / 3,
    r2left: screenwidth / 1.1,
    r2top: screenheight / 4,
  },
  // for dashboard
  {
    s1top: screenheight / 3,
    s2top: screenheight / 8,
    s3top: screenheight / 2.5,
    s1left: screenwidth / 24,
    s2left: screenwidth / 1.8,
    s3left: screenwidth / 1.1,
    r1left: -50,
    r1top: screenheight / 2.5,
    r2left: screenwidth / 1.8,
    r2top: screenheight / 14,
  },
  // for onboard screen
  {
    s1top: screenheight / 3,
    s2top: screenheight / 3.4,
    s3top: screenheight / 8,
    s1left: screenwidth / 24,
    s2left: screenwidth - 70,
    s3left: screenwidth / 8,
    r1left: -50,
    r1top: screenheight / 5,
    r2left: screenwidth - 50,
    r2top: screenheight / 3.5,
  },
  // for New C page
  {
    s1top: screenheight / 5,
    s2top: screenheight / 8,
    s3top: screenheight / 5,
    s1left: screenwidth / 1.3,
    s2left: screenwidth / 1.3,
    s3left: screenwidth / 3,
    r1left: -50,
    r1top: screenheight / 6,
    r2left: screenwidth - 50,
    r2top: screenheight / 5,
  },
  // C completed
  {
    s1top: screenheight / 12,
    s2top: screenheight / 10,
    s3top: screenheight / 22,
    s1left: screenwidth / 10,
    s2left: screenwidth / 1.3,
    s3left: screenwidth / 3,
    r1left: -50,
    r1top: screenheight / 12,
    r2left: screenwidth - 50,
    r2top: screenheight / 8,
  },
  // Partners page
  {
    s1top: 100,
    s2top: 110,
    s3top: 20,
    s1left: screenwidth / 24,
    s2left: screenwidth - 70,
    s3left: screenwidth / 8,
    r1left: -50,
    r1top: 20,
    r2left: screenwidth - 50,
    r2top: 100,
  },
];
