import React from 'react';
import { SVG } from '@components';
import {
  FileUploadFieldRoot,
  FileUploadFieldIcon,
  FileUploadFieldContent,
  FileUploadFieldContainer,
  FileUploadFieldName,
} from './styles';

export default function FileUploadField({
  children,
  name,
  onChange,
  hasError,
}) {
  const [file, setFile] = React.useState(null);
  const isEmpty = !file;

  const handleChange = React.useCallback(e => {
    let theFile = null;

    if (e.target.files.length) {
      theFile = e.target.files[0];
    }

    setFile(theFile);

    if (typeof onChange === 'function') {
      onChange(theFile);
    }
  }, []);

  console.log({ hasError });

  return (
    <FileUploadFieldRoot>
      <input name={name} onChange={handleChange} type="file" />
      <FileUploadFieldContainer>
        <div>
          <FileUploadFieldIcon active={!isEmpty} hasError={hasError}>
            <SVG size="7px" name="paperclip-icon" />
          </FileUploadFieldIcon>
        </div>

        <FileUploadFieldContent>
          {isEmpty && children}
          {!isEmpty && <FileUploadFieldName>{file.name}</FileUploadFieldName>}
        </FileUploadFieldContent>
      </FileUploadFieldContainer>
    </FileUploadFieldRoot>
  );
}
