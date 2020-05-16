import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const FormWizard = ({
  children,
  onSubmit,
  initialValues,
  validateOnChange,
  validateOnBlur,
  renderStepper,
}) => {
  const [page, setPage] = useState(0);
  const activeForm = React.Children.toArray(children)[page];
  const isLastPage = page === React.Children.count(children) - 1;

  const previous = () => {
    setPage(Math.max(page - 1, 0));
  };

  const next = () => {
    setPage(Math.min(page + 1, children.length - 1));
  };

  const handleSubmits = (values, { setSubmitting }) => {
    if (activeForm.props.onPageSubmit) {
      activeForm.props.onPageSubmit();
    }
    if (isLastPage) {
      onSubmit(values);

      return;
    }

    setSubmitting(false);
    next();
  };

  const {
    values,
    handleSubmit,
    isSubmitting,
    isValid,
    errors,
    handleBlur,
    handleChange,
    touched,
    ...rest
  } = useFormik({
    initialValues,
    validationSchema: Yup.object(activeForm.props.validationSchema),
    validateOnChange,
    validateOnBlur,
    onSubmit: handleSubmits,
  });

  const clone = React.cloneElement(activeForm, {
    values,
    isValid,
    errors,
    handleBlur,
    handleChange,
    touched,
    ...rest,
  });

  const defaultStepper = (
    <>
      {page > 0 && (
        <button type="button" onClick={previous}>
          Previous
        </button>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isLastPage ? 'Submit' : 'Next'}
      </button>
    </>
  );

  const stepper =
    typeof renderStepper === 'function'
      ? renderStepper({
          page,
          previous,
          next,
          isSubmitting,
          isValid,
          errors,
        })
      : defaultStepper;

  return (
    <form onSubmit={handleSubmit}>
      {clone}

      {stepper}

      {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
    </form>
  );
};

export default FormWizard;
