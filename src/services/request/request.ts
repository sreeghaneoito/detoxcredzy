import Axios from 'axios';
import {Appconfig} from '../../config/config';
import {userSlice} from '../../redux/slices/user.slice';
import {store} from '../../redux/store/store';

const request = Axios.create();

request.interceptors.request.use(async config => {
  const {usertoken} = store.getState().user;
  console.log('User Token =>', usertoken);
  config.headers = {
    Authorization: `Bearer ${Appconfig.BEARER_TOKEN}${
      usertoken && ':' + usertoken
    }`,
  };
  return config;
});

request.interceptors.response.use(
  response => {
    return response;
  },
  async err => {
    const {dispatch} = store;
    const {usertoken, refreshtoken} = store.getState().user;
    const originConfig = err.config;
    if (err.response.status === 401) {
      try {
        const rs = await request.patch(
          `${Appconfig.BASE_URL}/customer/refresh`,
          {
            token: usertoken,
            refresh_token: refreshtoken,
          },
        );
        dispatch(userSlice.actions.changeUserToken(rs.data));
        return request(originConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);

export {request};
