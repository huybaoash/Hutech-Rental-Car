import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import { createCar, hideModal_Car } from '../../redux/actions';

export default function CreateCarModal() {
  const [data, setData] = React.useState({
    carname: '',
    pricerent: '',
    cartype: '',
    carcompany: '',
    image: '',
    
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();

  const onClose = React.useCallback(() => {
    dispatch(hideModal_Car());
    setData({
      carname: '',
      pricerent: '',
      cartype: '',
      carcompany: '',
      image: '',
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    dispatch(createCar.createCarRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div className={classes.paper} id='simple-modal-carname'>
      <h2>Thêm xe mới</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.carname}
          required
          label='Tên xe'
          value={data.carname}
          onChange={(e) => setData({ ...data, carname: e.target.value })}
        />
        <TextField
          className={classes.pricerent}
          required
          label='Giá xe'
          value={data.pricerent}
          type='number'
          onChange={(e) => setData({ ...data, pricerent: e.target.value })}
        />
        <TextField
          className={classes.cartype}
          required
          label='Loại xe'
          value={data.cartype}
          onChange={(e) => setData({ ...data, cartype: e.target.value })}
        />
        <TextField
          className={classes.carcompany}
          required
          label='Hãng xe'
          value={data.carcompany}
          onChange={(e) => setData({ ...data, carcompany: e.target.value })}
        />
        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.image}
          onDone={({ base64 }) => setData({ ...data, image: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Thêm
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
