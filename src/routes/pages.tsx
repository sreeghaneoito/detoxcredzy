import {lazy} from 'react';
import {PageFallBackUi, withPageSuspense} from '../utils/lazyLoaders/lazyPage';

const LazyLoginPage = withPageSuspense(
  lazy(() => import('../pages/auth/LoginPage/Login.page')),
  PageFallBackUi,
);
const LazyProfilePage = withPageSuspense(
  lazy(() => import('../pages/Profile/Profile.page')),
  PageFallBackUi,
);
const LazyDashBoardPage = withPageSuspense(
  lazy(() => import('../pages/Dashboard/Dashboard.page')),
  PageFallBackUi,
);
const LazyOnBoardPage = withPageSuspense(
  lazy(() => import('../pages/OnBoard/OnBoard.page')),
  PageFallBackUi,
);
const LazyMyGoalPage = withPageSuspense(
  lazy(() => import('../pages/Mygoal/MyGoal.page')),
  PageFallBackUi,
);
const LazyForgotCredentials = withPageSuspense(
  lazy(() => import('../pages/auth/ForgotCredentials/ForgotCredentials.page')),
  PageFallBackUi,
);
const LazyUpdatePassword = withPageSuspense(
  lazy(() => import('../pages/auth/UpdatePassword/UpdatePassword.page')),
  PageFallBackUi,
);
const LazyOnboardFlow = withPageSuspense(
  lazy(() => import('../pages/OnboardFlow/OnboardFlow.page')),
  PageFallBackUi,
);
const LazyShareInfo = withPageSuspense(
  lazy(() => import('../pages/ShareInfo/ShareInfo.page')),
  PageFallBackUi,
);
const LazySignupOnboardWelcome = withPageSuspense(
  lazy(() => import('../pages/OnboardFlow/Initialpage/Initial.page')),
  PageFallBackUi,
);
const LazyRegisterPassword = withPageSuspense(
  lazy(() => import('../pages/auth/signup/RegisterPassword.Page')),
  PageFallBackUi,
);
const LazySignupDetails = withPageSuspense(
  lazy(() => import('../pages/auth/signup/SignupDetails.page')),
  PageFallBackUi,
);
const LazyCreditOverview = withPageSuspense(
  lazy(() => import('../pages/CreditOverview/CreditOverview.page')),
  PageFallBackUi,
);
const LazyPrepareDashboard = withPageSuspense(
  lazy(() => import('../pages/OnboardFlow/PrepareDashboard/PrepareDashboard')),
  PageFallBackUi,
);
const LazyVerifyEmail = withPageSuspense(
  lazy(() => import('../pages/auth/VerifyEmail/VerifyEmail.page')),
  PageFallBackUi,
);
const LazyRegisterEmail = withPageSuspense(
  lazy(() => import('../pages/auth/signup/RegisterEmail.page')),
  PageFallBackUi,
);
const LazyValidationError = withPageSuspense(
  lazy(() => import('../pages/validationError/ValidationError.page')),
  PageFallBackUi,
);
const LazyNewPassword = withPageSuspense(
  lazy(() => import('../pages/auth/NewPassword/NewPassword.page')),
  PageFallBackUi,
);
const LazyDashboardForms = withPageSuspense(
  lazy(() => import('../pages/DashBoardForms/DashboardForms.page')),
  PageFallBackUi,
);
const LazyPartnerHome = withPageSuspense(
  lazy(() => import('../pages/Partners/PartnerHome.page')),
  PageFallBackUi,
);
const LazyPartnerList = withPageSuspense(
  lazy(() => import('../pages/Partners/PartnerList.page')),
  PageFallBackUi,
);
const LazyPartnerProfile = withPageSuspense(
  lazy(() => import('../pages/Partners/PartnerProfile.page')),
  PageFallBackUi,
);

const LazyKba = withPageSuspense(
  lazy(() => import('../pages/OnboardFlow/forms/kba/KbaAddress.page')),
  PageFallBackUi,
);
const LazyKbaQuestions = withPageSuspense(
  lazy(() => import('../pages/OnboardFlow/forms/kba/KbaQuestions.page')),
  PageFallBackUi,
);
const LazyChangeEmail = withPageSuspense(
  lazy(() => import('../pages/auth/ChangeEmail/ChangeEmail.page')),
  PageFallBackUi,
);
const LazyOnboardComplete = withPageSuspense(
  lazy(
    () => import('../pages/OnboardFlow/OnboardComplete/OnboardComplete.page'),
  ),
  PageFallBackUi,
);
export {
  LazyLoginPage,
  LazyProfilePage,
  LazyDashBoardPage,
  LazyOnBoardPage,
  LazyMyGoalPage,
  LazyForgotCredentials,
  LazyUpdatePassword,
  LazyOnboardFlow,
  LazyShareInfo,
  LazySignupOnboardWelcome,
  LazyRegisterPassword,
  LazySignupDetails,
  LazyCreditOverview,
  LazyPrepareDashboard,
  LazyVerifyEmail,
  LazyRegisterEmail,
  LazyValidationError,
  LazyNewPassword,
  LazyDashboardForms,
  LazyPartnerHome,
  LazyPartnerList,
  LazyPartnerProfile,
  LazyKba,
  LazyKbaQuestions,
  LazyChangeEmail,
  LazyOnboardComplete,
};
