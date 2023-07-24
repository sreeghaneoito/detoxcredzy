import {NavigationContainerRef} from '@react-navigation/native';
import {createNavigationContainerRef} from '@react-navigation/native';

export let navigator: NavigationContainerRef;

export const navigationref = createNavigationContainerRef();

export const setTopLevelNavigator = (ref: NavigationContainerRef) => {
  navigator = ref;
};

export const navigate = (name: string, params?: {}) => {
  if (navigationref.isReady()) {
    navigationref.navigate(name, params);
  }
};
