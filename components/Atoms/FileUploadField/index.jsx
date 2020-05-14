import React from 'react';
import { SVG } from '@components';
import {
  FileUploadFieldRoot,
  FileUploadFieldIcon,
  FileUploadFieldContent,
  FileUploadFieldContainer,
  FileUploadFieldName,
} from './styles';

export default function FileUploadField({ children }) {
  const [filename, setFilename] = React.useState('');
  const isEmpty = filename === '';

  const handleChange = React.useCallback(e => {
    if (e.target.files.length) {
      setFilename(e.target.files[0].name);
    } else {
      setFilename('');
    }
  }, []);

  return (
    <FileUploadFieldRoot>
      <input onChange={handleChange} type="file" />
      <FileUploadFieldContainer>
        <FileUploadFieldIcon active={!isEmpty}>
          <SVG size="7px" name="paperclip-icon" />
        </FileUploadFieldIcon>

        <FileUploadFieldContent>
          {isEmpty && children}
          {!isEmpty && <FileUploadFieldName>{filename}</FileUploadFieldName>}
        </FileUploadFieldContent>
      </FileUploadFieldContainer>
    </FileUploadFieldRoot>
  );
}
