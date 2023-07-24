import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {globalStyle} from '../../styles/global.style';
import {style} from './CheckBox.style';
import Tick from '../../assets/icons/Tick';
import {useTheme} from '../../hooks/useTheme';
import {CheckBoxGroupProps} from '../../interfaces/component.interface';

/**
 * Checkbox Group
 * @param label: Checkbox group Heading
 * @param checkboxdata: An array of checkbox options
 * @param testid: Test id for automation
 * @returns JSX component
 */
const CheckBoxGroup = ({label, checkboxdata, testid}: CheckBoxGroupProps) => {
  const [data, setData] = useState(checkboxdata);
  const [nullSelected, setNullSelected] = useState(false);
  const {theme} = useTheme();
  const changeStatus = (indexDown: any) => {
    const newarr = data.map((obj, index) => {
      if (index === indexDown) {
        return {...obj, isSelected: !obj.isSelected};
      }
      return obj;
    });
    setData(newarr);
  };
  const nullOption = () => {
    setNullSelected(!nullSelected);
    const newarr = data.map(obj => {
      return {...obj, isSelected: false};
    });
    setData(newarr);
  };
  try {
    return (
      <View style={globalStyle.container} testID={testid}>
        <Text style={[style.label, theme.onBackground]}>{label}</Text>
        <FlatList
          style={style.list}
          data={data}
          renderItem={({item, index}) => {
            return (
              <Pressable
                style={[style.listItems, theme.surface]}
                onPress={() => {
                  changeStatus(index);
                }}
                testID={`checkboxitem${index}`}>
                <View style={[style.Checkbox, style.rd4]}>
                  {item.isSelected && <Tick />}
                </View>
                <Text style={theme.onSurface}>{item.name}</Text>
              </Pressable>
            );
          }}
          ListFooterComponent={() => {
            return (
              <Pressable
                style={[style.listItems, theme.surface]}
                onPress={() => {
                  nullOption();
                }}>
                <View style={[style.Checkbox, style.rd9]}>
                  {nullSelected && <Tick />}
                </View>
                <Text style={theme.onSurface}>
                  No, I don’t have any of these.
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
    );
  } catch (error) {
    console.log('Checkbox =>', error);
    return <View style={globalStyle.container} />;
  }
};

export default CheckBoxGroup;
