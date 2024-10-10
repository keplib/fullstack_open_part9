import data from '../../data/patients';

import { NonSensitivePatientData } from '../types';

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

export default {
  getPatients,
};
