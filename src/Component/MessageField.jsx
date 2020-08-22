import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

function MessageField(props) {
  const [errorState, setErrorState] = useState(false);

  const validate = (Message) => {
    const trimmedMessage = Message.trim();
    if (!trimmedMessage) {
      setErrorState(true);
      props.setMessageError(true);
    } else {
      setErrorState(false);
      props.setMessage(trimmedMessage);
      props.setMessageError(false);
    }
  };

  return (
    <TextField
      required
      id='outlined-multiline-static'
      label='Message'
      multiline
      rows={4}
      variant='outlined'
      onBlur={(event) => validate(event.target.value)}
      error={errorState || props.MessageError}
    />
  );
}

export default MessageField;
