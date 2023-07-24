import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {style} from './RadioGroup.style';
import {globalStyle} from '../../styles/global.style';
import {useUtils} from '../../hooks/useUtils';
export interface Props {
  withbg?: boolean;
  children?: any;
  Radiodata: {name: string; isSelected: boolean}[];
  testid?: string;
  setSelectedValue: (e: string) => void;
}
const RadioGroup = ({
  withbg,
  children,
  Radiodata,
  testid,
  setSelectedValue,
}: Props) => {
  const {theme} = useUtils();
  const [data, setData] = useState(Radiodata);
  const changeStatus = (indexDown: any) => {
    const SelectOption = data.map((obj, index) => {
      if (indexDown === index) {
        setSelectedValue(obj.name);
        return {...obj, isSelected: true};
      } else {
        return {...obj, isSelected: false};
      }
    });
    setData(SelectOption);
  };
  try {
    return (
      <View style={globalStyle.container} testID={testid}>
        <View>{children}</View>
        <FlatList
          style={style.radioGroup}
          data={data}
          renderItem={({item, index}) => {
            return (
              <Pressable
                style={[
                  style.radioBox,
                  withbg ? [style.withbg, theme.surface] : style.withoutbg,
                ]}
                onPress={() => {
                  changeStatus(index);
                }}
                testID={`radioitems${index}`}>
                <View style={style.radio}>
                  {item.isSelected && (
                    <View style={style.radioActive} testID="radioactive" />
                  )}
                </View>
                <Text style={theme.onBackground}>{item.name}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    );
  } catch (error) {
    console.log('Rodio Component => ', error);
    return <View style={globalStyle.container} />;
  }
};

export default RadioGroup;
