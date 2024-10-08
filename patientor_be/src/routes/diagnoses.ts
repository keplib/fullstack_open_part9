import { Response } from 'express';
import express from 'express';
import { Diagnoses } from '../types';
import diagnosesService from '../services/diagnosesService';

const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res: Response<Diagnoses[]>) => {
  res.send(diagnosesService.getDiagnoses());
});

export default diagnosesRouter;
