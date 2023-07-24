import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import {dashboard} from '../../../../enums/store.enum';
import {useDashBoard} from '../../../../hooks/useDashBoard';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
const VerifiedBadge = () => {
  const {dashboardState} = useDashBoard();
  const {swareport} = useSelector((State: RootState) => State.scoreWatcher);
  return (
    <View>
      {dashboardState === dashboard.CAPACITY &&
        (swareport.total_balances || swareport.monthly_payments ? (
          <Text style={style.verified}>Verified</Text>
        ) : (
          <Text style={style.unverified}>Unverified</Text>
        ))}
      {dashboardState === dashboard.CAPITAL && (
        <Text style={style.unverified}>Unverified</Text>
      )}
      {dashboardState === dashboard.CHARECTER &&
        (swareport.score ? (
          <Text style={style.verified}>Verified</Text>
        ) : (
          <Text style={style.unverified}>Unverified</Text>
        ))}
    </View>
  );
};

export default VerifiedBadge;
