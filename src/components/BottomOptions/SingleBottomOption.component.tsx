import {Platform, View} from 'react-native';
import React from 'react';
import {style} from './BottomOptions.style';
import Button from '../Button/Button.component';
import {useUtils} from '../../hooks/useUtils';
import {BottomOptionProps} from '../../interfaces/component.interface';

/**
 * Bottom Options
 * @param buttonAction : Function trigger on primary button click
 * @param mainlabel: The Primary Button label
 * @param loading: Is the Primary button loading or not
 * @returns JSX component
 */
const SingleBottomOption = ({
  buttonAction,
  mainlabel,
  loading,
}: BottomOptionProps) => {
  const {theme} = useUtils();

  try {
    return (
      <>
        <View
          style={[
            style.container,
            theme.secondaryExtend,
            Platform.OS === 'ios' ? [style.shadowIOS] : [style.shadowAndroid],
          ]}>
          <Button
            label={mainlabel}
            type="primary"
            Customstyle={style.fullWidthBtn}
            triggerclick={buttonAction}
            testid="continue"
            loading={loading}
          />
        </View>
      </>
    );
  } catch (error) {
    console.log('Bottom option crashed =>', error);
    return <View style={style.container} />;
  }
};

export default SingleBottomOption;
