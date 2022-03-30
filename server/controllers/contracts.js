import { ContractModel } from '../models/ContractModel.js';

export const getContracts = async (req, res) => {
  try {
    const contracts = await ContractModel.find();
    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createContract = async (req, res) => {
  try {
    const newcontract = req.body;

    const contract = new ContractModel(newcontract);
    await contract.save();

    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateContract = async (req, res) => {
  try {
    const updateContract = req.body;

    const contract = await ContractModel.findOneAndUpdate(
      { _id: updateContract._id },
      updateContract,
      { new: true }
    );
    console.log('[contract]',contract);
    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



export const removeContract = async (req, res) => {
  try {
    const updateContract = req.body;

    const contract = await ContractModel.findByIdAndDelete(
      { _id: updateContract._id }
      
    );
    console.log('[contract]',contract);
    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

