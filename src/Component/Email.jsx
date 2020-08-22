import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';

import NameField from './NameField';
import EmailField from './EmailField';
import MessageField from './MessageField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function Email() {
  const classes = useStyles();
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [message, setMessage] = useState();
  const [MessageError, setMessageError] = useState();

  const submit = () => {
    const data = { name, email, message };

    const isError = checkValidation();

    if (!isError) {
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
        });
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

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div className='formContainer'>
        <NameField setName={setName} setNameError={setNameError} nameError={nameError} />
        <EmailField setEmail={setEmail} setEmailError={setEmailError} emailError={emailError} />
        <MessageField setMessage={setMessage} setMessageError={setMessageError} MessageError={MessageError} />
        <Button variant='contained' color='primary' onClick={() => submit()}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Email;
