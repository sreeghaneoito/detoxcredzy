import {Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LazyDashBoardPage, LazyPartnerHome} from './pages';
import {tabEnum} from '../enums/route.enum';
import {style} from './style';
import Dashboard from '../assets/icons/Dashboard';
import Experts from '../assets/icons/Experts';
import {BioMetricAuth} from '../components';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/root.reducer';

const Tab = createBottomTabNavigator();
const DashboardTab = () => {
  const {needBioMetric} = useSelector((State: RootState) => State.user);
  return (
    <>
      <Tab.Navigator
        initialRouteName={tabEnum.DASHBOARDPAGE}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#28AF51',
          tabBarInactiveTintColor: '#999BA0',
          unmountOnBlur: true,
          tabBarStyle: {
            height: 70,
            paddingTop: 15,
            paddingBottom: 15,
          },
        }}>
        <Tab.Screen
          name={tabEnum.DASHBOARDPAGE}
          component={LazyDashBoardPage}
          options={{
            tabBarLabel: ({focused}) => {
              return focused && <Text style={style.tablabel}>Dashboard</Text>;
            },
            tabBarIcon: ({focused}) => {
              return <Dashboard isActive={focused} />;
            },
          }}
        />
        <Tab.Screen
          name={tabEnum.PARTNERHOMEPAGE}
          component={LazyPartnerHome}
          options={{
            tabBarLabel: ({focused}) => {
              return focused && <Text style={style.tablabel}>Partners</Text>;
            },
            tabBarIcon: ({focused}) => {
              return <Experts isActive={focused} />;
            },
          }}
        />
      </Tab.Navigator>
      {needBioMetric && <BioMetricAuth />}
    </>
  );
};

export default DashboardTab;
