import express from 'express';
import { getDetailsContracts, createDetailsContract, updateDetailsContract,removeDetailsContract } from '../controllers/DetailsContracts.js';

const router = express.Router();
//http://localhost:5000/posts

router.get('/', getDetailsContracts);

router.post('/', createDetailsContract);

router.post('/update', updateDetailsContract);

router.post('/remove', removeDetailsContract);

export default router;
