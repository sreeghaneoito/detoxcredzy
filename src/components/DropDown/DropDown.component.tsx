import {Text, Pressable, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyle} from '../../styles/global.style';
import {style} from './dropdown.style';
import Animated, {
  BounceInDown,
  FadeOut,
  SlideOutDown,
} from 'react-native-reanimated';
import {useDropdownAnimationHook} from '../../hooks/useFormAnimationHook';
import DropdownArrow from '../../assets/icons/DropdownArrow';
import {Portal} from 'react-native-paper';
import {useTheme} from '../../hooks/useTheme';
import {DropDownProps} from '../../interfaces/component.interface';

/**
 * DropDown
 * @param data: Array of strings. thats is the options for dropdown
 * @returns JSX Component
 */
const DropDown = ({data}: DropDownProps) => {
  const {
    Label,
    selectedValue,
    setSelectedValue,
    SetismodalOpen,
    ismodalOpen,
    modalOpen,
  } = useDropdownAnimationHook();
  const {theme} = useTheme();
  return (
    <>
      <Pressable
        style={[globalStyle.inputBox, theme.surface]}
        onPress={() => {
          SetismodalOpen(true);
        }}>
        <View>
          <Animated.Text style={[Label, theme.primaryText]}>
            Select a Value
          </Animated.Text>
          {selectedValue !== '' && (
            <Text style={[style.label, theme.onSurface]}>{selectedValue}</Text>
          )}
        </View>
        <View>
          <DropdownArrow />
        </View>
      </Pressable>
      {ismodalOpen && (
        <Portal>
          <Animated.View
            style={[style.modalContainer, theme.background]}
            exiting={FadeOut.delay(100)}>
            <Animated.View
              style={[style.card, theme.surface]}
              entering={BounceInDown}
              exiting={SlideOutDown}>
              <FlatList
                data={data}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={style.cardList}
                      onPress={() => {
                        setSelectedValue(item);
                        modalOpen.value = true;
                        SetismodalOpen(false);
                      }}>
                      <Text style={[style.ListText, theme.onBackground]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                ItemSeparatorComponent={() => {
                  return <View style={[style.seperator, theme.background]} />;
                }}
              />
            </Animated.View>
          </Animated.View>
        </Portal>
      )}
    </>
  );
};

export default DropDown;
