import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

function NameField(props) {
  const [errorState, setErrorState] = useState(false);

  const validate = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setErrorState(true);
      props.setNameError(true);
    } else {
      setErrorState(false);
      props.setName(trimmedName);
      props.setNameError(false);
    }
  };

  return (
    <TextField
      required
      id='standard-required'
      label='Name'
      onBlur={(event) => validate(event.target.value)}
      error={errorState || props.nameError}
    />
  );
}

export default NameField;
