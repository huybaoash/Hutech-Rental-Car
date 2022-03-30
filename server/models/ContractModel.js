import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    totalprice: {
      type: String,
      required: true,
    },
    status:{
      type: String,
      required: true,
      default:"Waiting..." 
    }
    

  },
  { timestamps: true }
);

export const ContractModel = mongoose.model('Contracts', schema);
