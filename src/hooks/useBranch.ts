import {useDispatch} from 'react-redux';
import {routeEnum} from '../enums/route.enum';
import {authenticationSlice} from '../redux/slices/authentication.slice';
import {userSlice} from '../redux/slices/user.slice';
import {useUtils} from './useUtils';

export const useBranch = () => {
  const {gotoScreen} = useUtils();
  const dispatch = useDispatch();

  const processParams = (params, error) => {
    console.log(params.token_type);
    params?.token_type === 'forgot-password' &&
      gotoScreen(routeEnum.NEWPASSWORD, {
        token: params?.token,
        email: params?.email,
      });
    params?.token_type === 'registration' &&
      gotoScreen(routeEnum.REGITSERPASSWORD, {
        token: params?.token,
        email: params?.email,
      });
    params?.token_type === 'password-update' &&
      gotoScreen(routeEnum.REGITSERPASSWORD, {
        token: params?.token,
        email: params?.email,
      });
    if (params?.token_type === 'change-email') {
      console.log('params?.token');
      if (params.token !== undefined) {
        dispatch(userSlice.actions.changeUserToken({usertoken: params?.token}));
        dispatch(authenticationSlice.actions.updateEmailToken({}));
      } else {
        console.log('something went wrong');
      }
    }
  };
  return {processParams};
};
