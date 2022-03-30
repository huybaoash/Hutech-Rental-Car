import express from 'express';
import { getCars, createCar, updateCar,removeCar } from '../controllers/cars.js';

const router = express.Router();
//http://localhost:5000/posts

router.get('/', getCars);

router.post('/', createCar);

router.post('/update', updateCar);

router.post('/remove', removeCar);

export default router;
