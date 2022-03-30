import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/actions';

export default function User({ user }) {
  const classes = useStyles();
  



  return (
    <Card>
      <CardHeader
        avatar={<Avatar>user.username</Avatar>}
        title={user.username}
        subheader={moment(user.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {user.password}
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          {user.firstname}
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          {user.lastname}
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          {user.identify}
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          {user.email}
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          {user.phonenumber}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
