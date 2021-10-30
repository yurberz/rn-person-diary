import moment from 'moment';

const dateFormat = (date: object | string) => {
  return moment(date).format('DD-MM-YYYY, HH:mm');
};

export default dateFormat;
