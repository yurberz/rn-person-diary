import React from 'react';
import DatePicker from 'react-native-date-picker';
import {IDatePickerProps} from '../../helpers/ts-helpers/interfaces';

const DatePickerModal: React.FC<IDatePickerProps> = ({
  mode = 'datetime',
  minimumDate = new Date('2021-01-01'),
  maximumDate = new Date('2024-01-01'),
  onDateChange,
  open,
  date,
  onConfirm,
  onCancel,
}) => {
  return (
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
    />
  );
};

export default DatePickerModal;
