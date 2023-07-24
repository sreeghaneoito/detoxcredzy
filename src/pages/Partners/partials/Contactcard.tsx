import {View, Text, Clipboard, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './styles';
import {useTheme} from '../../../hooks/useTheme';
import {useToastHook} from '../../../hooks/useToastHook';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

interface Props {
  icon: any;
  label: string;
  value: string;
  onPress: () => void;
}
const ContactCard = ({icon, label, value, onPress}: Props) => {
  const {theme} = useTheme();
  const {showToast} = useToastHook();
  const copyText = () => {
    Clipboard.setString(value);
    ReactNativeHapticFeedback.trigger('impactHeavy', {
      ignoreAndroidSystemSettings: true,
    });
    showToast('Copied to Clipboard');
  };
  return (
    <TouchableOpacity
      testID={label}
      style={style.contactCard}
      onLongPress={copyText}
      onPress={onPress}>
      <View>{icon}</View>
      <View>
        <View>
          <Text style={style.label}>{label}</Text>
        </View>
        <View>
          <Text style={[style.value, theme.onSurface]}>{value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
