import { format } from 'date-fns';

export const getTimeString = (date) => {
  try {
    let str = format(date, 'hh:mm a');
    return str;
  } catch (error) {
    return '';
  }
};
