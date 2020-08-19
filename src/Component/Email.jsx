import React from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

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
  // const [value, setValue] = React.useState('Controlled');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div className='formContainer'>
        <TextField required id='standard-required' label='Name' />
        <TextField required id='standard-required' label='Email' />
        <TextField id='outlined-multiline-static' label='Message' multiline rows={4} variant='outlined' />
        <Button variant='contained' color='primary'>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Email;
