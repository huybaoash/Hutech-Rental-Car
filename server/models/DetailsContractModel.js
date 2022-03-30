import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    carid: {
      type: String,
      required: true,
    },
    contractid: {
      type: String,
      required: true,
    },
    dayrent:{
      type: Number,
      required: true,
      default:0 
    },
    deposits:{
        type: Number,
        required: true,
        default:0 
      }
      

  },
  { timestamps: true }
);

export const DetailsContractModel = mongoose.model('DetailsContracts', schema);
