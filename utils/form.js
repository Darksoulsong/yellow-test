export const fieldHasError = (fieldName, touched, errors) => {
  if (touched[fieldName]) {
    return !!errors[fieldName];
  }

  return false;
};
