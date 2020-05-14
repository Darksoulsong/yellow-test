import React from 'react';
import { FormControl, Field, FileUploadField } from '@components';
import { FormUploadWrapper, FormUploadFieldLabel } from '../styles';

export default function PersonalInfoTwo() {
  return (
    <>
      <FormControl>
        <Field type="text" placeholder="última empresa" name="lastCompany" />
      </FormControl>
      <FormControl>
        <Field placeholder="último cargo" name="lastOccupation" />
      </FormControl>
      <FormControl>
        <Field placeholder="último salário" name="lastWage" />
      </FormControl>
      <FormControl>
        <Field placeholder="linkedin" name="linkedin" />
      </FormControl>
      <FormControl style={{ marginBottom: '-32px' }}>
        <FormUploadWrapper>
          <FileUploadField>
            <FormUploadFieldLabel>
              anexe seu currículo <br /> <br />
              <small>(recomendável, mas opcional)</small>
            </FormUploadFieldLabel>
          </FileUploadField>
        </FormUploadWrapper>
      </FormControl>
    </>
  );
}
