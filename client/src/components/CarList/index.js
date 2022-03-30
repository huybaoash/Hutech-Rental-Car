import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import Car from './Car';
import { carsState$ } from '../../redux/selectors';

export default function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(carsState$);

  React.useEffect(() => {
    dispatch(actions.getCars.getCarsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {cars.map((car) => (
        <Grid key={car._id} item xs={12} sm={6}>
          <Car car={car} />
        </Grid>
      ))}
    </Grid>
  );
}
