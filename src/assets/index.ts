import {lazy} from 'react';
import {FallBackUi, withIconSuspense} from '../utils/lazyLoaders/lazyIcon';

// Svg Files

const CredzyLogo_light = withIconSuspense(
  lazy(() => import('../assets/images/svg/credzylogo-light.svg')),
  FallBackUi,
);
const CredzyLogo_dark = withIconSuspense(
  lazy(() => import('../assets/images/svg/credzylogo-dark.svg')),
  FallBackUi,
);
const CredzyLogo_light_small = withIconSuspense(
  lazy(() => import('../assets/images/svg/credzylogo-light-small.svg')),
  FallBackUi,
);
const CredzyLogo_dark_small = withIconSuspense(
  lazy(() => import('../assets/images/svg/credzylogo-dark-small.svg')),
  FallBackUi,
);
const Success_Modal = withIconSuspense(
  lazy(() => import('../assets/images/svg/success-modal.svg')),
  FallBackUi,
);
const Error_Modal = withIconSuspense(
  lazy(() => import('../assets/images/svg/error-modal.svg')),
  FallBackUi,
);
const OverlayDiamond_light = withIconSuspense(
  lazy(() => import('../assets/images/svg/overlay-diamond.svg')),
  FallBackUi,
);
const OverlayRectangle_light = withIconSuspense(
  lazy(() => import('../assets/images/svg/overlay-rectangle.svg')),
  FallBackUi,
);
const OverlayDiamond_dark = withIconSuspense(
  lazy(() => import('../assets/images/svg/overlay-diamond-dark.svg')),
  FallBackUi,
);
const OverlayRectangle_dark = withIconSuspense(
  lazy(() => import('../assets/images/svg/overlay-rectangle-dark.svg')),
  FallBackUi,
);
const CredzyIcon = withIconSuspense(
  lazy(() => import('../assets/images/svg/credzy_icon.svg')),
  FallBackUi,
);
const CurvedBlueArrow = withIconSuspense(
  lazy(() => import('../assets/images/svg/curved-blue-arrow.svg')),
  FallBackUi,
);
const LeftGreen = withIconSuspense(
  lazy(() => import('../assets/images/svg/left-green.svg')),
  FallBackUi,
);
const CDark = withIconSuspense(
  lazy(() => import('../assets/images/svg/c_dark.svg')),
  FallBackUi,
);
const CLight = withIconSuspense(
  lazy(() => import('../assets/images/svg/c_light.svg')),
  FallBackUi,
);
// Lottie files

const Onboard_light = require('../assets/animations/onboard_light.json');
const Onboard_dark = require('../assets/animations/onboard_dark.json');
const Machine_light = require('../assets/animations/credzy_machine');
const Preparing_light = require('../assets/animations/credzy_preparing.json');
const Splash_light = require('../assets/animations/credzy_splash_light.json');
const Splash_dark = require('../assets/animations/credzy_splash_dark.json');

// Png Files

const the_first_overlay = require('./images/png/the-first.png');
const the_second_overlay = require('./images/png/the-second.png');
const the_third_overlay = require('./images/png/the-third.png');

export {
  CredzyLogo_light,
  CredzyLogo_dark,
  Success_Modal,
  Error_Modal,
  OverlayRectangle_dark,
  OverlayRectangle_light,
  OverlayDiamond_dark,
  OverlayDiamond_light,
  CredzyLogo_light_small,
  CredzyLogo_dark_small,
  CredzyIcon,
  CurvedBlueArrow,
  LeftGreen,
  CDark,
  CLight,
  // lottie files
  Onboard_dark,
  Onboard_light,
  Machine_light,
  Preparing_light,
  Splash_light,
  Splash_dark,
  // png files
  the_first_overlay,
  the_second_overlay,
  the_third_overlay,
};
