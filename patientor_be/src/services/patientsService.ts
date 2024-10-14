import data from '../../data/patients';

import { NonSensitivePatientData, NewPatientData, Patient } from '../types';

const patients: NonSensitivePatientData[] = data as NonSensitivePatientData[];

const getPatients = (): NonSensitivePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientData): Patient => {
  const newPatient = {
    id: '1',
    ...entry,
  };

  data.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient,
};
