import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

function EmailField(props) {
  const [errorState, setErrorState] = useState(false);

  const validate = (Email) => {
    const trimmedEmail = Email.trim();

    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const correctFormat = re.test(trimmedEmail);

    if (!correctFormat) {
      setErrorState(true);
      props.setEmailError(true);
    } else {
      setErrorState(false);
      props.setEmail(trimmedEmail);
      props.setEmailError(false);
    }
  };

  return (
    <TextField
      required
      id='standard-required'
      label='Email'
      helperText={errorState || props.emailError ? 'E-mail must be in correct format' : ' '}
      onBlur={(event) => validate(event.target.value)}
      error={errorState || props.emailError}
    />
  );
}

export default EmailField;
