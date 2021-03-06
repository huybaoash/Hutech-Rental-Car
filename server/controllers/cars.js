import { CarModel } from '../models/CarModel.js'; 

export const getCars = async (req, res) => {
  try {
    const cars = await CarModel.find(); 
    res.status(200).json(cars); 
  } catch (err) { 
    res.status(500).json({ error: err });
  }
};

export const getCar = async (req, res) => {
  try {
    const getCar = req.body; 
    console.log('[getCar]',getCar);
    const car = await CarModel.findOne( { _id: getCar._id }); 
    res.status(200).json(car); 
  } catch (err) { 
    res.status(500).json({ error: err });
  }
};

export const createCar = async (req, res) => {
  try {
    const newcar = req.body; 
    const car = new CarModel(newcar); 

    await car.save(); 

    res.status(200).json(car); 
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateCar = async (req, res) => {
  try {
    const updateCar = req.body; 
    const car = await CarModel.findOneAndUpdate(
      { _id: updateCar._id },
      updateCar,  
      { new: true } 
    );
    console.log('[car]',car);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



export const removeCar = async (req, res) => {
  try {
    const updateCar = req.body;

    const car = await CarModel.findByIdAndDelete(
      { _id: updateCar._id } 
      
    );
    console.log('[car]',car);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

