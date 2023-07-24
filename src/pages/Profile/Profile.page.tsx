/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import About from './components/About/About';
import Personal from './components/Personal/Personal';
import Support from './components/Support/Support';
import {SocialIcons} from '../../components';
import {userSlice} from '../../redux/slices/user.slice';
import {useUtils} from '../../hooks/useUtils';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/root.reducer';
import DeleteModal from './components/DeleteModal/DeleteModal';
import LogoutModal from './components/LogoutModal/LogoutModal';
import ProfileFooter from './components/ProfileFooter/ProfileFooter';
import {appSlice} from '../../redux/slices/app.slice';
import Settings from './components/Settings/Settings';

export type modalType = 'delete' | 'logout' | '';

const ProfilePage = () => {
  const [modalControl, setModalControl] = useState<modalType>('');

  const {dispatch} = useUtils();
  const {userdetails} = useSelector((State: RootState) => State.user);

  useEffect(() => {
    dispatch(userSlice.actions.fetchUser({}));
    dispatch(appSlice.actions.fetchAppDetails({}));
  }, []);

  const closeModal = () => {
    setModalControl('');
  };

  const openModal = (type: modalType) => {
    setModalControl(type);
  };

  const sections = [
    {component: <Personal details={userdetails} />},
    {component: <Settings openModal={(e: modalType) => openModal(e)} />},
    {component: <About />},
    {component: <Support />},
  ];

  return (
    <>
      <SafeAreaView testID="profile-screen">
        <FlatList
          data={sections}
          renderItem={({item}) => {
            return <>{item.component}</>;
          }}
          ListHeaderComponent={() => {
            return <SocialIcons />;
          }}
          ListFooterComponent={() => {
            return <ProfileFooter openModal={(e: modalType) => openModal(e)} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      <DeleteModal isVisible={modalControl === 'delete'} close={closeModal} />
      <LogoutModal isVisible={modalControl === 'logout'} close={closeModal} />
      {/* {needBioMetric && <BioMetricAuth />} */}
    </>
  );
};

export default ProfilePage;
