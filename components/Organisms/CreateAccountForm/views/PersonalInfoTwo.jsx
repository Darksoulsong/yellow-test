import React from 'react';
import { useFormikContext } from 'formik';
import { FormControl, Field, FileUploadField } from '@components';
import { fieldHasError } from '@utils';
import { FormUploadWrapper, FormUploadFieldLabel, FormHolder } from '../styles';

export default function PersonalInfoTwo() {
  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    values,
    setTouched,
    setFieldValue,
  } = useFormikContext();

  const handleInputFileChange = (e, file) => {
    setTouched({ resume: true });
    setFieldValue('resume', file);
  };

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
          // isLoading={loading}
          // disabled={loading}
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
          // isLoading={loading}
          // disabled={loading}
        />
      </FormControl>
      <FormControl>
        <Field
          type="number"
          placeholder="último salário"
          name="lastWage"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastWage}
          hasError={fieldHasError('lastWage', touched, errors)}
          validationMessage={errors.lastWage}
          // isLoading={loading}
          // disabled={loading}
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
          // isLoading={loading}
          // disabled={loading}
        />
      </FormControl>
      <FormControl>
        <FormUploadWrapper>
          <FileUploadField
            name="resume"
            onChange={handleInputFileChange}
            hasError={fieldHasError('resume', touched, errors)}
            validationMessage={errors.resume}
            accept=".doc, .pdf"
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
