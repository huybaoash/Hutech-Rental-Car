import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    carname: {
      type: String,
      required: true,
      default: 'Anonymous',
    },
    pricerent: {
      type: String,
      required: true,
    },
    cartype: {
        type: String,
        required: true,
        default: 'Anonymous',
      },
    carcompany: {
        type: String,
        required: true,
        default: 'Anonymous',
      },
    image: {
      type: String,
      
      
    },
    

  },
  { timestamps: true }
);

export const CarModel = mongoose.model('Cars', schema);
