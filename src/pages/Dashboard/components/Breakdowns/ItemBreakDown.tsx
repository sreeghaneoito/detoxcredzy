import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {style} from './style';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {routeEnum} from '../../../../enums/route.enum';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {useUtils} from '../../../../hooks/useUtils';
import {dashboard} from '../../../../enums/store.enum';
import {returnFirstValid} from '../../../../utils/functions/returnFirstValid';

interface Props {
  questionnaire: {
    capacity: {
      monthly_debt: number | null;
      monthly_income: number | null;
    };
    capital: {
      none: boolean;
      f401k: number;
      other: number;
      savings: number;
      real_estate: number;
      stocks_and_bonds: number;
    };
  };
}
const ItemBreakDown = ({questionnaire}: Props) => {
  const {swareport} = useSelector((State: RootState) => State.scoreWatcher);
  const dashboardState = useSelector(
    (State: RootState) => State.dashboard.status,
  );
  const {theme, gotoScreen} = useUtils();
  return (
    <View style={style.container}>
      <Text style={[style.heading, theme.onSurface]}>
        {dashboardState.charAt(0).toUpperCase() +
          dashboardState.substr(1).toLowerCase()}
      </Text>
      <Animated.View
        style={[theme.surface, style.card]}
        entering={FadeIn}
        exiting={FadeOut}>
        <Text style={style.cardHead}>
          {dashboardState.charAt(0).toUpperCase() +
            dashboardState.substr(1).toLowerCase()}{' '}
          Items
        </Text>

        {dashboardState === dashboard.CAPACITY && (
          <>
            <View style={style.cardSec}>
              <Text style={[theme.onSurface, style.name]}>Estimated Debt</Text>
              <Text style={[theme.onSurface, style.value]}>
                $
                {returnFirstValid([
                  swareport.monthly_payments,
                  questionnaire?.capacity?.monthly_income,
                  '0',
                ])}
              </Text>
            </View>
            <View style={style.cardSec}>
              <Text style={[theme.onSurface, style.name]}>
                Estimated Income
              </Text>
              <Text style={[theme.onSurface, style.value]}>
                $
                {returnFirstValid([
                  questionnaire?.capacity?.monthly_income,
                  '0',
                ])}
              </Text>
            </View>
          </>
        )}
        {dashboardState === dashboard.CAPITAL && (
          <>
            <View style={style.cardSec}>
              <Text style={[theme.onSurface, style.name]}>Savings</Text>
              <Text style={[theme.onSurface, style.value]}>
                ${questionnaire?.capital?.savings || '0'}
              </Text>
            </View>
            <View style={style.cardSec}>
              <Text style={[theme.onSurface, style.name]}>F401k</Text>
              <Text style={[theme.onSurface, style.value]}>
                ${questionnaire?.capital?.f401k || '0'}
              </Text>
            </View>
            <View style={style.cardSec}>
              <Text style={[theme.onSurface, style.name]}>
                Stocks and Bonds
              </Text>
              <Text style={[theme.onSurface, style.value]}>
                ${questionnaire?.capital?.stocks_and_bonds || '0'}
              </Text>
            </View>
            <View style={style.cardSec}>
              <Text style={[theme.onSurface, style.name]}>Real Estate</Text>
              <Text style={[theme.onSurface, style.value]}>
                ${questionnaire?.capital?.real_estate || '0'}
              </Text>
            </View>
            <View style={style.cardSec}>
              <Text style={[theme.onSurface, style.name]}>Others</Text>
              <Text style={[theme.onSurface, style.value]}>
                ${questionnaire?.capital?.other || '0'}
              </Text>
            </View>
          </>
        )}
        {dashboardState === dashboard.CAPACITY && (
          <Pressable
            style={[theme.primary, style.editdatabtn]}
            onPress={() => {
              gotoScreen(routeEnum.DASHBOARDFORM);
            }}
            testID="editdata">
            <Text style={[theme.onPrimary, style.getdataTxt]}>Edit data</Text>
          </Pressable>
        )}
        {dashboardState === dashboard.CAPITAL && (
          <Pressable
            style={[theme.primary, style.editdatabtn]}
            onPress={() => {
              gotoScreen(routeEnum.DASHBOARDFORM);
            }}
            testID="editdata">
            <Text style={[theme.onPrimary, style.getdataTxt]}>Edit data</Text>
          </Pressable>
        )}
      </Animated.View>
    </View>
  );
};

export default ItemBreakDown;
