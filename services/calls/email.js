import { HTTP } from '../http';
import { formatEmailContat } from '@utils/form';

export const postContactEmailCall = async values => {
  try {
    const endpoint =
      'https://5c8z3wzla6.execute-api.us-west-2.amazonaws.com/dev/mail';
    const formattedText = formatEmailContat(values);
    const response = await HTTP.post(endpoint, {
      maillist: ['jorge.hidalgo@sevenapps.com.br'],
      subject: 'Contato',
      text: formattedText,
    });
    return { response, error: false };
  } catch (error) {
    return { error, response: [] };
  }
};
