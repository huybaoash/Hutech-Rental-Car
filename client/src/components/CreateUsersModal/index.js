import { Button, Input, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import { createUser, hideModal_User } from '../../redux/actions';

export default function CreateUsersModal() {
  const [data, setData] = React.useState({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      identify: '',
      email: '',
      phonenumber:'',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();

  const onClose = React.useCallback(() => {
    dispatch(hideModal_User());
    setData({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      identify: '',
      email: '',
      phonenumber:'',
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    dispatch(createUser.createUserRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div className={classes.paper} id='simple-modal-username'>
      <h2>Create User</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.username}
          required
          label='Username'
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        
        <TextField
          className={classes.firstname}
          required
          label='FirstName'
          value={data.firstname}
          onChange={(e) => setData({ ...data, firstname: e.target.value })}
        />

        <TextField
          className={classes.lastname}
          required
          label='LastName'
  
          value={data.lastname}
          onChange={(e) => setData({ ...data, lastname: e.target.value })}
        />

        <TextField
          className={classes.identify}
          required
          label='Identify'
          value={data.identify}
          type='number'
          onChange={(e) => setData({ ...data, identify: e.target.value })}
        />

        <TextField
          className={classes.email}
          required
          label='Email'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}

        />

        <TextField
          className={classes.phonenumber}
          required
          label='PhoneNumber'
          value={data.phonenumber}
          type='number'
          onChange={(e) => setData({ ...data, phonenumber: e.target.value })}
        />

        <TextField
          className={classes.password}
          required
          label='Password'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
 
        />

        
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
