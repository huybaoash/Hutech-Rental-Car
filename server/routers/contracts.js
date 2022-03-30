import express from 'express';
import { getContracts, createContract, updateContract,removeContract } from '../controllers/contracts.js';

const router = express.Router();
//http://localhost:5000/posts

router.get('/', getContracts);

router.post('/', createContract);

router.post('/update', updateContract);

router.post('/remove', removeContract);

export default router;
