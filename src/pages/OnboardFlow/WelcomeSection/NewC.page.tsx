/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {style} from './NewC.style';
import Card from './components/Card';
import {useSelector} from 'react-redux';
import {Button} from '../../../components';
import {useUtils} from '../../../hooks/useUtils';
import {onboardFlow, onboardStep} from '../../../enums/store.enum';
import {withSphere} from '../../../hoc/withBGAnimation';
import {useFocusEffect} from '@react-navigation/native';
import {RootState} from '../../../redux/store/root.reducer';
import {useBubbleAnimation} from '../../../hooks/useBubbleAnimation';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import {CurvedBlueArrow, the_first_overlay, CLight} from '../../../assets';
import {the_second_overlay, the_third_overlay, CDark} from '../../../assets';
import {formslice} from '../../../redux/slices/forms.slice';

const NewCharecter = () => {
  const {theme, font, currentTheme, navigation, dispatch} = useUtils();
  const {changeBubblePosition} = useBubbleAnimation();
  const {
    data: {onboardState},
    formLoader,
  } = useSelector((State: RootState) => State.form);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        changeBubblePosition(4);
      }, 0);
      return () => changeBubblePosition(0);
    }, []),
  );

  return (
    <SafeAreaView testID="newc-screen">
      <View style={style.container}>
        <View>
          <ImageBackground
            source={
              (onboardState === onboardFlow.CHARECTER && the_first_overlay) ||
              (onboardState === onboardFlow.CAPACITY && the_third_overlay) ||
              the_second_overlay
            }>
            <Text style={[theme.onSurface, style.label]}>
              {onboardState === onboardFlow.CHARECTER && 'the first'}
              {onboardState === onboardFlow.CAPACITY && 'the third'}
              {onboardState === onboardFlow.CAPITAL && 'the second'}
            </Text>
            <View style={style.cbox}>
              {currentTheme === 'dark' ? <CLight /> : <CDark />}
            </View>
          </ImageBackground>
          <Text style={[theme.onSurface, style.head, font.gotham]}>
            {onboardState}
          </Text>
          {onboardState === onboardFlow.CHARECTER && (
            <Text style={[theme.onSurface, style.desc]}>
              Your credit score is the very first thing lenders will use to
              determine your{' '}
              <Text style={[font.gotham, style.sentenceCase]}>
                {onboardState}
              </Text>
              .
            </Text>
          )}
          {onboardState === onboardFlow.CAPITAL && (
            <Text style={[theme.onSurface, style.desc]}>
              You might own things of value that strengthen your ability to
              borrow, this is{' '}
              <Text style={[font.gotham, style.sentenceCase]}>
                {onboardState}
              </Text>
              .
            </Text>
          )}
          {onboardState === onboardFlow.CAPACITY && (
            <Text style={[theme.onSurface, style.desc]}>
              A lender has to determine your{' '}
              <Text style={[font.gotham, style.sentenceCase]}>
                {onboardState}{' '}
              </Text>
              which is your ability to repay a loan.
            </Text>
          )}
        </View>
        <View style={style.cardArea}>
          <View style={style.blueArrow}>
            <CurvedBlueArrow />
          </View>
          <Card />
        </View>
        <View style={style.btnGroup}>
          <Button
            type="ghost"
            label="back"
            triggerclick={() => {
              navigation.goBack();
            }}
            Customstyle={style.btnCustom}
            testid="back"
          />
          <Button
            type="primary"
            label={
              (onboardState === onboardFlow.CHARECTER && 'Grab Your Score') ||
              (onboardState === onboardFlow.CAPACITY && 'Calculate') ||
              'Estimate Capital'
            }
            triggerclick={() => {
              dispatch(
                formslice.actions.setFormControl({
                  data: {onboardpagestatus: onboardStep.FORM},
                }),
              );
            }}
            Customstyle={style.btnCustom}
            testid="next"
            loading={formLoader}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const NewC = withSphere({BodyContainer: NewCharecter});
export default NewC;
