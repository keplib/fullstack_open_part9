import { Response } from 'express';
import express from 'express';
import { NonSensitivePatientData } from '../types';
import patientsService from '../services/patientsService';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getPatients());
});

export default patientsRouter;
