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


export default function Car({ car }) {
  const classes = useStyles();
  

  

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{car.carname}</Avatar>}
        title={car.carname}
        subheader={moment(car.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        image={car.image || ''}
        title='Title'
        className={classes.media}
      />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {car.pricerent}
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          {car.carcompany}
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          {car.cartype}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
