import {TextInput, Pressable, TouchableOpacity, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useInputAnimationHook} from '../../hooks/useFormAnimationHook';
import Animated from 'react-native-reanimated';
import {useTheme} from '../../hooks/useTheme';
import {style} from './inputField.style';
import PasswordHidden from '../../assets/icons/PasswordHidden';
import PasswordVisible from '../../assets/icons/PasswordVisible';
import MaskInput from 'react-native-mask-input';

interface Props {
  label: string /* Label of the textbox */;
  placeholder?: string /* Placeholder */;
  errortext?: string /* Custom error text*/;
  errortype?: 'warning' | 'danger' | '' /* Error type*/;
  password?: boolean /* Is the textfield is password input or not*/;
  changeText: (e: any) => void /*Function triggers on text change */;
  customStyle?: {} /* Custom style for text input*/;
  testid?: String /* Test id for automation just include the exact name */;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'number-pad'
    | 'phone-pad' /*Input keyboard type*/;
  autofocus?: boolean /* Is the input autofocused or not*/;
  keyboardSubmit?: () => void /* The function trigger on keyboard submit*/;
  value?: any /* Prefilled value */;
  readonly?: boolean /* Is the texbox readonly or not */;
  maxlength?: number /* Maximum input charecter count*/;
  onlyNumbers?: boolean /* Accept only numbers */;
  mask: any /* mask pattern  */;
  verified?: boolean /* Show verified badge */;
  showObfuscatedValue?: boolean /* Show obfuscated value */;
}
const MaskedInput = ({
  label,
  placeholder,
  errortext,
  errortype,
  password,
  changeText,
  customStyle,
  testid,
  keyboardType,
  autofocus,
  keyboardSubmit,
  value,
  readonly,
  maxlength,
  onlyNumbers,
  mask,
  verified,
  showObfuscatedValue,
}: Props) => {
  const {labelAnimation, setIsActive, animatedTextInput, content, setContent} =
    useInputAnimationHook({
      errortype: errortype,
      focus: autofocus,
      value: value,
    });
  const {theme} = useTheme();
  const [pwdEntry, setPwdEntry] = useState(password);
  const inputref = useRef<TextInput>(null);
  try {
    return (
      <>
        <Pressable
          style={[
            style.inputbox,
            theme.surface,
            errortype === 'danger' && style.dangerBorder,
            errortype === 'warning' && style.warningBorder,
            customStyle,
          ]}
          testID={`${testid}box`}
          onPress={() => {
            setIsActive(true);
            inputref.current?.focus();
          }}>
          <Animated.Text style={[labelAnimation]}>{label}</Animated.Text>
          <Animated.View style={[animatedTextInput]}>
            <MaskInput
              placeholder={placeholder}
              onBlur={() => {
                setIsActive(false);
              }}
              style={[style.txtBox, theme.onSurface]}
              value={content}
              onChangeText={(masked, unmasked) => {
                if (onlyNumbers) {
                  unmasked = unmasked.replace(/[^0-9]/g, '');
                }
                setContent(unmasked);
                changeText(unmasked);
              }}
              placeholderTextColor="gray"
              secureTextEntry={pwdEntry}
              ref={inputref}
              defaultValue={content}
              testID={`${testid}input`}
              keyboardType={keyboardType || 'default'}
              autoFocus={autofocus}
              onSubmitEditing={keyboardSubmit}
              editable={!readonly}
              maxLength={maxlength}
              mask={mask}
            />
          </Animated.View>
          {verified && <Text style={style.verified}>Verified</Text>}
          <TouchableOpacity
            style={style.togglePwdBtn}
            onPress={() => {
              setPwdEntry(!pwdEntry);
            }}
            testID={`${testid}passwordtoggle`}>
            {password && (
              <>
                {pwdEntry ? (
                  <Animated.View>
                    <PasswordHidden />
                  </Animated.View>
                ) : (
                  <Animated.View>
                    <PasswordVisible />
                  </Animated.View>
                )}
              </>
            )}
          </TouchableOpacity>
        </Pressable>
        <Animated.Text
          style={[
            style.errorText,
            errortype === 'danger' && style.dangerText,
            errortype === 'warning' && style.warningText,
          ]}>
          {errortext}
        </Animated.Text>
      </>
    );
  } catch (error) {
    console.log('Error =>', error);
    return <View style={style.inputbox} />;
  }
};

export default MaskedInput;
