import {View, Text, FlatList, Pressable, Linking, Switch} from 'react-native';
import React from 'react';
import Card from '../../../../components/Card/Card.component';
import {style} from '../style';
import RightArrow from '../../../../assets/icons/RightArrow';
import {useUtils} from '../../../../hooks/useUtils';
import {settings} from './data';
import ThemeToggle from '../ThemeToggler/ThemeToggle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {userSlice} from '../../../../redux/slices/user.slice';
import {ToggleSwitch} from '../../../../components';
import {modalType} from '../../Profile.page';

interface Props {
  openModal: (e: modalType) => void;
}
const Settings = ({openModal}: Props) => {
  const {theme} = useUtils();
  const dispatch = useDispatch();
  const {needBioMetric} = useSelector((State: RootState) => State.user);

  const changeAppLockStatus = () => {
    dispatch(userSlice.actions.changeApplockStatus(!needBioMetric));
  };
  return (
    <View>
      <Card>
        <FlatList
          data={settings}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={[style.seperator, theme.secondary]} />
                <Pressable
                  style={style.item}
                  onPress={() => {
                    // item.type === 'page' && gotoScreen(item.route);
                    // item.type === 'link' && Linking.openURL(item.route);
                    item.name === 'Remove Account' && openModal('delete');
                  }}
                  testID={`supportitem${index + 1}`}>
                  <Text style={[theme.onSurface, style.itemText]}>
                    {item.name}
                  </Text>
                  <View>
                    {item.name === 'Appearance' && <ThemeToggle />}
                    {item.name === 'Remove Account' && <RightArrow />}
                    {item.name === 'Biometrics' && (
                      <>
                        <ToggleSwitch
                          onChange={changeAppLockStatus}
                          value={needBioMetric}
                          trackColor={{true: '#28AF51', false: '#17181A'}}
                        />
                      </>
                    )}
                  </View>
                </Pressable>
              </>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <>
                <Text style={[style.cardHeader, theme.onSurface]}>
                  Settings
                </Text>
              </>
            );
          }}
          scrollEnabled={false}
        />
        <View style={[style.seperator, theme.secondary]} />
      </Card>
    </View>
  );
};

export default Settings;
