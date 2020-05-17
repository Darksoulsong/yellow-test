import React from 'react';
import { SVG } from '@components';
import {
  FileUploadFieldRoot,
  FileUploadFieldIcon,
  FileUploadFieldContent,
  FileUploadFieldContainer,
  FileUploadFieldName,
  FileUploadFieldValidationMessage,
} from './styles';

export default function FileUploadField({
  children,
  name,
  onChange,
  hasError,
  validationMessage,
  maxFileSize, // in bytes
  accept,
}) {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(validationMessage);
  const isEmpty = !file;

  const maxSize = React.useMemo(() => {
    return `${maxFileSize / 1000}KB`;
  }, [maxFileSize]);

  const handleChange = React.useCallback(e => {
    let theFile = null;

    if (e.target.files.length) {
      theFile = e.target.files[0];
    }

    setFile(theFile);

    if (theFile.size > maxFileSize) {
      setError(`Tente um arquivo menor do que ${maxSize}`);
    } else {
      setError(null);
    }

    if (typeof onChange === 'function') {
      onChange(e, theFile);
    }
  }, []);

  return (
    <FileUploadFieldRoot>
      <input name={name} onChange={handleChange} type="file" accept={accept} />
      <FileUploadFieldContainer>
        <div>
          <FileUploadFieldIcon active={!isEmpty} hasError={hasError || !!error}>
            <SVG size="7px" name="paperclip-icon" />
          </FileUploadFieldIcon>
        </div>

        <FileUploadFieldContent>
          {isEmpty && children}
          {!isEmpty && <FileUploadFieldName>{file.name}</FileUploadFieldName>}
        </FileUploadFieldContent>
      </FileUploadFieldContainer>

      <FileUploadFieldValidationMessage show={error}>
        {error}
      </FileUploadFieldValidationMessage>
    </FileUploadFieldRoot>
  );
}

FileUploadField.defaultProps = {
  accept: '*',
  maxFileSize: 1000000, // 1mb
};
