import {Platform, View} from 'react-native';
import React from 'react';
import {style} from './BottomOptions.style';
import Button from '../Button/Button.component';
import {useUtils} from '../../hooks/useUtils';
import {BottomOptionProps} from '../../interfaces/component.interface';

/**
 * Bottom Options
 * @param buttonAction : Function trigger on primary button click
 * @param ghostAction: Function trigger on ghost button click
 * @param mainlabel: The Primary Button label
 * @param ghostlabel: The ghost Button label
 * @param loading: Is the Primary button loading or not
 * @param backButtonDisabled: Is the bacButton Disabled or not
 * @returns JSX component
 */
const BottomOptions = ({
  buttonAction,
  ghostAction,
  mainlabel,
  ghostlabel,
  loading,
  backButtonDisabled,
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
            label={ghostlabel}
            type="ghost"
            Customstyle={style.customStyle}
            triggerclick={ghostAction}
            testid="back"
            disabled={backButtonDisabled}
          />
          <Button
            label={mainlabel}
            type="primary"
            Customstyle={style.customStyle}
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

export default BottomOptions;
