import data from '../../data/diagnoses';

import { Diagnoses } from '../types';

const diagnoses: Diagnoses[] = data as Diagnoses[];

const getDiagnoses = (): Diagnoses[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
