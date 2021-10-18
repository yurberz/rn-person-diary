import moment from 'moment';

const dateFormat = (date: object) => {
  return moment(date).format('DD-MM-YYYY, HH:mm');
};

export default dateFormat;
