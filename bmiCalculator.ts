interface BMIValues {
  height: number;
  weight: number;
}

const parseArgs = (args: string[]): BMIValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBMI = (height: number, weight: number): string => {
  if (height === 0 || weight === 0) {
    throw new Error('Height or weight cannot be zero. Please provide a valid value.');
  }

  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters * heightInMeters);

  const UNDERWEIGHT_THRESHOLD = 18.5;
  const NORMAL_THRESHOLD = 25;
  const OVERWEIGHT_THRESHOLD = 30;

  let bmiCategory: string;

  if (bmi <= UNDERWEIGHT_THRESHOLD) {
    bmiCategory = 'Underweight';
  } else if (bmi <= NORMAL_THRESHOLD) {
    bmiCategory = 'Normal weight';
  } else if (bmi <= OVERWEIGHT_THRESHOLD) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obese';
  }

  return bmiCategory;
};

if (require.main === module) {
  try {
    const { height, weight } = parseArgs(process.argv);
    console.log(calculateBMI(height, weight));
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
}

export default calculateBMI;
