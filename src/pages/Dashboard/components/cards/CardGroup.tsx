import {View, Text, Pressable, Platform} from 'react-native';
import React, {useState} from 'react';
import {BlockChart} from '../../../../components';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {dashboard} from '../../../../enums/store.enum';
import {style} from './Cards.style';
import Info from '../../../../assets/icons/Info';
import DetailsModal from '../DetailsModal/DetailsModal';
import {useDashboardAnimation} from '../../../../hooks/useDashboardAnimation';
import {useUtils} from '../../../../hooks/useUtils';
import VerifiedBadge from '../VerifiedBadge/VerifiedBadge';
import {returnFirstValid} from '../../../../utils/functions/returnFirstValid';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {
  downToZero,
  numberConvert,
} from '../../../../utils/functions/numberConvert';
interface Props {
  notExpandable?: boolean;
  swa: {};
}
const CardGroup = ({notExpandable}: Props) => {
  const {swareport, dashboardData} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const [showCalculation, setShowCalculation] = useState(false);
  const {theme, font} = useUtils();
  const expandedView = useSharedValue(false);
  const {
    switchLayout,
    common,
    capital,
    capacity,
    charecter,
    dashboardState,
    showDetails,
  } = useDashboardAnimation();
  const changeCardState = (state: string) => {
    if (!notExpandable) {
      expandedView.value = !expandedView.value;
      switchLayout(state);
    }
  };

  const characterValueArray: number[] = Object.values(
    dashboardData?.questionnaire?.scores || {},
  )?.filter(val => +val > 0);
  const charecterCalculation =
    characterValueArray.length > 0
      ? characterValueArray.reduce(
          (currentvalue: number, accum: number) => +currentvalue + +accum,
        ) / characterValueArray.length
      : 0;

  const capacityvalue = returnFirstValid([dashboardData?.capacity, 'NA']);
  const capitalvalue = returnFirstValid([dashboardData?.capital, 'NA']);
  const charactervalue = returnFirstValid([
    swareport.score,
    charecterCalculation.toFixed(),
    'NA',
  ]);

  return (
    <>
      <View style={style.containerMain} testID="CardGroup">
        {/* Capacity Section  */}
        <View style={[style.cardContainer]} testID="capacitycard">
          <Pressable
            style={style.pressable}
            onPress={() => {
              changeCardState(dashboard.CAPACITY);
            }}
            testID="capacitycard">
            <Animated.View
              testID="capacitycard"
              style={[
                style.card,
                common.animatedCardHeight,
                Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
                theme.surfaceExtend,
              ]}>
              <Animated.Text
                style={[theme.onSurface, capacity.capacityAnimatedHead]}>
                Capacity
              </Animated.Text>
              <Animated.Text
                numberOfLines={1}
                style={[style.count, theme.onSurface, common.hiddenInverted]}>
                {downToZero(capacityvalue) +
                  (capacityvalue !== 'NA' ? '%' : '')}
              </Animated.Text>
              <Animated.View style={[capacity.capacityAnimatedChart]}>
                <BlockChart max={100} val={dashboardData.capacity} />
              </Animated.View>
            </Animated.View>
          </Pressable>
        </View>
        {/* Charecter Section  */}
        <View style={[style.cardContainer]} testID="charectercard">
          <Pressable
            style={style.pressable}
            onPress={() => {
              changeCardState(dashboard.CHARECTER);
            }}
            testID="charectercard">
            <Animated.View
              testID="charectercard"
              style={[
                style.card,
                common.animatedCardHeight,
                Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
                theme.surfaceExtend,
              ]}>
              <Animated.Text
                style={[theme.onSurface, charecter.charecterAnimatedHead]}>
                Character
              </Animated.Text>
              <Animated.Text
                style={[style.count, theme.onSurface, common.hiddenInverted]}
                numberOfLines={1}>
                {charactervalue}
              </Animated.Text>
              <Animated.View style={[charecter.charecterAnimatedChart]}>
                <BlockChart max={850} val={charactervalue} />
              </Animated.View>
            </Animated.View>
          </Pressable>
        </View>
        {/* Capital Section  */}
        <View style={[style.cardContainer]} testID="capitalcard">
          <Pressable
            style={style.pressable}
            onPress={() => {
              changeCardState(dashboard.CAPITAL);
            }}
            testID="capitalcard">
            <Animated.View
              testID="capitalcard"
              style={[
                style.card,
                common.animatedCardHeight,
                Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
                theme.surfaceExtend,
              ]}>
              <Animated.Text
                style={[theme.onSurface, capital.capitalAnimatedHead]}>
                Capital
              </Animated.Text>
              <Animated.Text
                style={[style.count, theme.onSurface, common.hiddenInverted]}
                numberOfLines={1}>
                {capitalvalue !== 'NA' && '$'}
                {numberConvert(capitalvalue)}
              </Animated.Text>
              <Animated.View style={[capital.capitalAnimatedChart]}>
                <BlockChart max={10000} val={dashboardData.capital} />
              </Animated.View>
            </Animated.View>
          </Pressable>
        </View>
      </View>
      <View style={style.container}>
        <Animated.View style={[style.expandedView, common.hidden]}>
          <Animated.View>
            <Pressable
              style={[style.countBlockExpanded]}
              onPress={() => {
                setShowCalculation(true);
              }}
              testID="countexpanded">
              <Animated.Text style={[style.expandedHeading, theme.onSurface]}>
                {dashboardState === dashboard.CAPACITY &&
                  downToZero(capacityvalue) +
                    (capacityvalue !== 'NA' ? '%' : '')}
                {dashboardState === dashboard.CHARECTER && charactervalue}
                {dashboardState === dashboard.CAPITAL &&
                  numberConvert(capitalvalue)}
              </Animated.Text>
              {showDetails && <Info />}
            </Pressable>
          </Animated.View>
          <Animated.View style={style.verBox}>
            {showDetails && <VerifiedBadge />}
            <Animated.Text
              style={[
                style.headingExpanded,
                theme.onSurface,
                Platform.OS === 'ios' ? style.gothamIos : style.gothamAndroid,
              ]}>
              {dashboardState === dashboard.CAPACITY && 'Capacity'}
              {dashboardState === dashboard.CHARECTER && 'Character'}
              {dashboardState === dashboard.CAPITAL && 'Capital'}
            </Animated.Text>
          </Animated.View>
        </Animated.View>
        {showDetails && (
          <Animated.View>
            {dashboardState === dashboard.CAPACITY && (
              <Text style={[style.note, theme.onSurface]}>
                This number represents your remaining income after debt.
              </Text>
            )}
            {dashboardState === dashboard.CHARECTER && (
              <Text style={[style.note, theme.onSurface]}>
                Your credit score is the very first thing lenders will use to
                determine your <Text style={font.gotham}>Character</Text>.
              </Text>
            )}
            {dashboardState === dashboard.CAPITAL && (
              <Text style={[style.note, theme.onSurface]}>
                This number represents the total value of your assets and
                savings.
              </Text>
            )}
          </Animated.View>
        )}
      </View>

      {/* Modals used for the Dashboard */}
      <DetailsModal
        visible={showCalculation}
        closeModal={() => {
          setShowCalculation(false);
        }}
      />
    </>
  );
};

export default CardGroup;
