import React from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {IDatePickerProps} from '../../helpers/ts-helpers/interfaces';
import dateFormat from '../../helpers/function-helpers/dateFormat';
import styles from './styles';
import IconButton from '../iconButton/IconButton';

const DatePickerModal: React.FC<IDatePickerProps> = ({
  mode = 'datetime',
  minimumDate = new Date('2021-01-01'),
  maximumDate = new Date('2024-01-01'),
  onDateChange,
  open,
  date,
  onConfirm,
  onCancel,
  iconProps,
}) => {
  const formattedDateTime = dateFormat(date);

  return (
    <View style={styles.calendarContainerStyle}>
      <Text style={styles.calendarTextStyle}>{formattedDateTime}</Text>

      <IconButton {...iconProps} />

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={onConfirm}
        onCancel={onCancel}
        onDateChange={onDateChange}
        mode={mode}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        // timeZoneOffsetInMinutes={3 * 60}
      />
    </View>
  );
};

export default DatePickerModal;
