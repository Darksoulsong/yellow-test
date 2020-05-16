import React from 'react';
import { FormControl, Field, FileUploadField } from '@components';
import { fieldHasError } from '@utils';
import { FormUploadWrapper, FormUploadFieldLabel, FormHolder } from '../styles';

export default function PersonalInfoTwo({
  values,
  errors,
  handleBlur,
  handleChange,
  touched,
  setFieldValue,
  setTouched,
  setFieldError,
}) {
  // const schema = {
  //   lastCompany: Yup.string().required('Campo obrigatório'),
  //   lastOccupation: Yup.string().required('Campo obrigatório'),
  //   lastWage: Yup.string().required('Campo obrigatório'),
  //   resume: Yup.object().shape({
  //     lastModified: Yup.number(),
  //     lastModifiedDate: Yup.date(),
  //     name: Yup.string(),
  //     size: Yup.number(),
  //     type: Yup.string(),
  //     webkitRelativePath: Yup.string(),
  //   }),
  // };

  // const initialValues = {
  //   email: '',
  //   fullname: '',
  //   birthDate: '',
  //   phone: '',
  //   state: '',
  //   city: '',
  // };

  // const initialValues = {
  //   lastCompany: 'Foo Inc.',
  //   lastOccupation: 'Programmer',
  //   lastWage: '123456',
  //   linkedin: 'https://linked.in/john-doe',
  //   resume: '',
  // };

  const handleInputFileChange = React.useCallback(
    file => {
      setTouched({ resume: true });
      setFieldValue('resume', file);
    },
    [setFieldValue, setTouched, setFieldError]
  );

  return (
    <FormHolder>
      <FormControl>
        <Field
          type="text"
          placeholder="última empresa"
          name="lastCompany"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastCompany}
          hasError={fieldHasError('lastCompany', touched, errors)}
          validationMessage={errors.lastCompany}
        />
      </FormControl>
      <FormControl>
        <Field
          placeholder="último cargo"
          name="lastOccupation"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastOccupation}
          hasError={fieldHasError('lastOccupation', touched, errors)}
          validationMessage={errors.lastOccupation}
        />
      </FormControl>
      <FormControl>
        <Field
          placeholder="último salário"
          name="lastWage"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastWage}
          hasError={fieldHasError('lastWage', touched, errors)}
          validationMessage={errors.lastWage}
        />
      </FormControl>
      <FormControl>
        <Field
          placeholder="linkedin"
          name="linkedin"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.linkedin}
          hasError={fieldHasError('linkedin', touched, errors)}
          validationMessage={errors.linkedin}
        />
      </FormControl>
      <FormControl style={{ marginBottom: '-32px' }}>
        <FormUploadWrapper>
          <FileUploadField
            name="resume"
            onChange={handleInputFileChange}
            hasError={fieldHasError('resume', touched, errors)}
          >
            <FormUploadFieldLabel>
              anexe seu currículo <br /> <br />
              <small>(recomendável, mas opcional)</small>
            </FormUploadFieldLabel>
          </FileUploadField>
        </FormUploadWrapper>
      </FormControl>
    </FormHolder>
  );
}
