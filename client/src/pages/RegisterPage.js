import React from 'react';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import PostList from '../components/PostList';
import UserList from '../components/UserList';
import CarList from '../components/CarList';
import useStyles from './styles';
import { Button, Input, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { modalState$ } from '../../redux/selectors';
import { createUser, hideModal_User } from '../../redux/actions';

export default function RegisterPage() {


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

  return (
    <Container maxWidth='lg'>
     <div className={classes.paper} id='simple-modal-username'>
      <h2>Create User</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.username}
          required
          label='Tên tài khoản'
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        
        <TextField
          className={classes.firstname}
          required
          label='Họ'
          value={data.firstname}
          onChange={(e) => setData({ ...data, firstname: e.target.value })}
        />

        <TextField
          className={classes.lastname}
          required
          label='Tên'
  
          value={data.lastname}
          onChange={(e) => setData({ ...data, lastname: e.target.value })}
        />

        <TextField
          className={classes.identify}
          required
          label='CMND'
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
          label='Số điện thoại'
          value={data.phonenumber}
          type='number'
          onChange={(e) => setData({ ...data, phonenumber: e.target.value })}
        />

        <TextField
          className={classes.password}
          required
          label='Mật khẩu'
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


    </Container>
  );
}
