import {routeEnum} from '../../../enums/route.enum';

export const support = [
  {
    name: 'Report a Bug',
    route: 'https://forms.gle/gZCDJzofnxd4hd8p7',
    type: 'link',
  },
  {
    name: 'Give Feedback',
    route: 'https://forms.gle/4ZKYGjMjXfPkoAto6',
    type: 'link',
  },
];
export const personal = [
  {
    name: 'Name',
    route: '',
    value: 'Jared Zipping',
    readonly: true,
  },
  {
    name: 'Email',
    // route: '',
    route: routeEnum.CHANGEEMAIL,
    value: 'jzipping@gmail.com',
    readonly: false,
  },
  {
    name: 'Update Password',
    route: routeEnum.UPDATEPASSWORD,
    readonly: false,
  },
  {
    name: 'My Goal',
    route: routeEnum.MYGOAL,
    value: 'Strond Credit Profile',
    readonly: false,
  },
];
export const about = [
  {
    name: 'Terms of Service',
    route: 'https://credzy.com/terms-of-use/',
    type: 'link',
  },
  {
    name: 'Privacy Policy',
    route: 'https://credzy.com/privacy-policy/',
    type: 'link',
  },
];
