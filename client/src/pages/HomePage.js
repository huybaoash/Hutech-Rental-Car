import React from 'react';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import PostList from '../components/PostList';
import UserList from '../components/UserList';
import CarList from '../components/CarList';
import useStyles from './styles';
import { showModal_Post, showModal_User,showModal_Car } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';
import CreateUsersModal from '../components/CreateUsersModal';
import CreateCarModal from '../components/CreateCarModal';

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal_Post());
  }, [dispatch]);

  const openCreateUserModal = React.useCallback(() => {
    dispatch(showModal_User());
  }, [dispatch]);

  const openCreateCarModal = React.useCallback(() => {
    dispatch(showModal_Car());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <Header />
      <CarList />
      <PostList />
      <UserList />
      
      
      <CreateCarModal/>
  
      <Fab
        color='primary'
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>

      <Fab
        color='primary'
        className={classes.fab}
        onClick={openCreateUserModal}
      >
        <AddIcon />
      </Fab>
      <Fab
        color='primary'
        className={classes.fab}
        onClick={openCreateCarModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
