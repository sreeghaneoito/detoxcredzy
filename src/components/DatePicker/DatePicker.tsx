import {Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {style} from './DatePicker.style';
import {useTheme} from '../../hooks/useTheme';
import DatePicker from 'react-native-date-picker';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DatePickerProps} from '../../interfaces/component.interface';

/**
 * Date picker
 * @param label: Date input label
 * @param testid: Testid for Automation
 * @param date: current date displayed on the picker
 * @param setDate: change current date
 * @param errorText: Error Text
 * @returns JSX Component
 */
const DatePick = ({
  label,
  testid,
  date,
  setDate,
  errorText,
}: DatePickerProps) => {
  const {theme, currentTheme} = useTheme();
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const min = currentYear - 18;
  const max = currentYear - 100;
  const initialLoad = useSharedValue(true);
  const labelAnimation = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 16,
      top: withTiming(initialLoad.value ? 16 : 4, {duration: 100}),
      fontSize: initialLoad.value ? 13 : 9,
      color: errorText
        ? '#E30E2C'
        : currentYear >= max
        ? 'green'
        : currentTheme === 'dark'
        ? 'white'
        : 'black',
      fontFamily: 'Roboto-Regular',
    };
  });

  const animatedDateLabel = useAnimatedStyle(() => {
    return {
      top: withTiming(initialLoad.value ? 30 : 5, {duration: 200}),
    };
  });

  try {
    return (
      <>
        <Pressable
          style={[style.picker, theme.surface, errorText && style.dangerBorder]}
          onPress={() => {
            setOpen(true);
          }}
          testID={`${testid}datepicker`}>
          <Animated.Text style={[labelAnimation]}>{label}</Animated.Text>
          {date.getFullYear() >= max && (
            <Animated.Text style={[theme.onSurface, animatedDateLabel]}>
              {date.getMonth() + 1 <= 9 && 0}
              {date.getMonth() + 1} - {date.getDate() < 10 && 0}
              {date.getDate()} - {date.getFullYear()}
            </Animated.Text>
          )}
        </Pressable>
        {errorText && <Text style={style.errorText}>{errorText}</Text>}
        <DatePicker
          modal
          open={open}
          date={date}
          timeZoneOffsetInMinutes={0}
          onConfirm={selectedDate => {
            initialLoad.value = false;
            // const day = selectedDate.getDate();
            // const month = selectedDate.getMonth() + 1;
            // const year = selectedDate.getFullYear();
            // console.log({day, month, year});
            // console.log({selectedDate});
            setOpen(false);
            // const tempdate = new Date(selectedDate);
            // setDate(new Date(tempdate.setDate(tempdate.getDate())));
            setDate(selectedDate);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="date"
          maximumDate={new Date(`${min}-01-01`)}
          minimumDate={new Date(`${max}-01-01`)}
        />
      </>
    );
  } catch (error) {
    console.log('Dateppicker =>', error);
    return <view style={style.picker} />;
  }
};

export default DatePick;
