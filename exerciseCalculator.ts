interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingdescription: string;
  target: number;
  average: number;
}

const calculateExercise = (exerciseArray: number[], target: number): ExerciseResult => {
  const periodLength = exerciseArray.length;
  const trainingDays = exerciseArray.filter((exercise) => {
    return exercise !== 0;
  }).length;
  const average = exerciseArray.reduce((acc, num) => acc + num, 0) / exerciseArray.length;
  const success = average >= target;

  let rating;
  let ratingdescription;

  switch (true) {
    case average < target:
      rating = 1;
      break;
    case average === target:
      rating = 2;
      break;
    default:
      rating = 3;
  }

  switch (rating) {
    case 1:
      ratingdescription = 'You need to work harder!';
      break;
    case 2:
      ratingdescription = 'Good job!';
      break;
    default:
      ratingdescription = 'Excellent, you trained more as planned';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingdescription,
    target,
    average,
  };
};

const inputSequence = process.argv;
const exerciseSequence = inputSequence.slice(2, -1).map((item) => Number(item));
const target = Number(inputSequence.slice(-1)[0]);

if (require.main === module) {
  try {
    console.log(calculateExercise(exerciseSequence, target));
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
}

export default calculateExercise;
