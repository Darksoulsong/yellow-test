import * as Yup from 'yup';
import { isCorporateEmail } from '@utils';

Yup.addMethod(Yup.mixed, 'ensureEmailIsCorporate', function(message) {
  return this.test('ensure-email-is-corporate', message, function(value) {
    return isCorporateEmail(value);
  });
});

export default Yup;
