import { DetailsContractModel } from '../models/DetailsContractModel.js';

export const getDetailsContracts = async (req, res) => {
  try {
    const detailscontracts = await DetailsContractModel.find();
    res.status(200).json(detailscontracts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createDetailsContract = async (req, res) => {
  try {
    const newdetailscontract = req.body;

    const detailscontract = new DetailsContractModel(newdetailscontract);
    await detailscontract.save();

    res.status(200).json(detailscontract);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateDetailsContract = async (req, res) => {
  try {
    const updateDetailsContract = req.body;

    const detailscontract = await DetailsContractModel.findOneAndUpdate(
      { _id: updateDetailsContract._id },
      updateDetailsContract,
      { new: true }
    );
    console.log('[detailscontract]',detailscontract);
    res.status(200).json(detailscontract);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



export const removeDetailsContract = async (req, res) => {
  try {
    const updateDetailsContract = req.body;

    const detailscontract = await DetailsContractModel.findByIdAndDelete(
      { _id: updateDetailsContract._id }
      
    );
    console.log('[detailscontract]',detailscontract);
    res.status(200).json(detailscontract);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

