import React, { useState } from 'react';
import { Button, Paper } from '@material-ui/core';

import NameField from './NameField';
import EmailField from './EmailField';
import MessageField from './MessageField';

import emailGif from '../emailGif.gif';

function Email() {
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [message, setMessage] = useState();
  const [MessageError, setMessageError] = useState();
  const [isSending, setIsSending] = useState(false);

  const submit = () => {
    const data = { name, email, message };

    const isError = checkValidation();

    if (!isError) {
      setIsSending(true);
      fetch('https://hpwifegr0m.execute-api.us-west-1.amazonaws.com/v1/mkc_email', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => console.log(res))
        .catch((err) => {
          throw err;
        })
        .finally(() => setIsSending(false));
    }
  };

  const checkValidation = () => {
    let error = false;

    if (nameError === undefined || nameError) {
      error = true;
      setNameError(true);
    }

    if (emailError === undefined || emailError) {
      error = true;
      setEmailError(true);
    }

    if (MessageError === undefined || MessageError) {
      error = true;
      setMessageError(true);
    }

    return error;
  };

  return isSending ? (
    <img src={emailGif} alt='emailing' height='100px' />
  ) : (
    <Paper elevation={5}>
      <div className='formContainer'>
        <NameField setName={setName} setNameError={setNameError} nameError={nameError} />
        <EmailField setEmail={setEmail} setEmailError={setEmailError} emailError={emailError} />
        <MessageField setMessage={setMessage} setMessageError={setMessageError} MessageError={MessageError} />
        <Button variant='contained' color='primary' onClick={() => submit()}>
          Submit
        </Button>
      </div>
    </Paper>
  );
}

export default Email;
