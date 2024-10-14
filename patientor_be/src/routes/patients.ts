/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Response } from 'express';
import express from 'express';
import { NonSensitivePatientData, Patient } from '../types';
import patientsService from '../services/patientsService';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getPatients());
});

patientsRouter.post('/', (req, res: Response<Patient>) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const addedPatient = patientsService.addPatient({ name, dateOfBirth, ssn, gender, occupation });

  res.json(addedPatient);
});

export default patientsRouter;
