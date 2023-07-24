import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {style} from './style';
import {useUtils} from '../../../../hooks/useUtils';
import {routeEnum} from '../../../../enums/route.enum';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';

interface Props {
  scores: {
    equifax: number;
    experian: number;
    transunion: number;
  };
}
const CreditBreakdown = ({scores}: Props) => {
  const {swa, dashboardData, swareport} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const {theme, gotoScreen} = useUtils();
  return (
    <View style={style.container}>
      <Text style={[style.heading, theme.onSurface]}>Character</Text>
      {swa.clientKey !== '' ? (
        <View style={[theme.surface, style.card]}>
          <Text style={style.cardHead}>Credit Score Breakdown</Text>
          <View style={style.scoreFlex}>
            {swareport.score ? (
              <></>
            ) : (
              <>
                <View style={[style.scoreCard, theme.background]}>
                  <Text style={[style.scoreHead, theme.onSurface]}>
                    Equifax
                  </Text>
                  <Text style={style.score}>
                    {scores?.equifax ||
                      dashboardData?.questionnaire?.scores?.equifax ||
                      0}
                  </Text>
                </View>
                <View style={[style.scoreCard, theme.background]}>
                  <Text style={[style.scoreHead, theme.onSurface]}>
                    Experian
                  </Text>
                  <Text style={style.score}>
                    {scores?.experian ||
                      dashboardData?.questionnaire?.scores?.experian ||
                      0}
                  </Text>
                </View>
              </>
            )}

            <View style={[style.scoreCard, theme.background]}>
              <Text style={[style.scoreHead, theme.onSurface]}>Transunion</Text>
              <Text style={style.score}>
                {swareport?.score ||
                  dashboardData?.questionnaire?.scores?.transunion ||
                  0}
              </Text>
            </View>
          </View>
          {/* <Pressable
            testID="moreDetails"
            style={[theme.primary, style.getdatabtn]}
            onPress={() => {
              gotoScreen(routeEnum.CREDITOVERVIEW);
            }}>
            <Text style={[theme.onPrimary, style.getdataTxt]}>
              More Details
            </Text>
          </Pressable> */}
        </View>
      ) : (
        <View style={[theme.surface, style.card]}>
          <View style={style.certHeadBox}>
            <Text style={style.cardHead}>Certification </Text>
            <Text style={style.unverified}>Unverified </Text>
          </View>
          <View>
            <Text style={style.certificateDesc}>
              Your credit score is not valid. Lenders only look a Bureau sourced
              credit scores. Don’t worry, we can hook you up.
            </Text>
          </View>
          <Text
            style={style.manualEnter}
            onPress={() => {
              gotoScreen(routeEnum.DASHBOARDFORM);
            }}>
            Manually Enter Score
          </Text>
        </View>
      )}
    </View>
  );
};

export default CreditBreakdown;
