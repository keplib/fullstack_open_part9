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

console.log(calculateExercise([3, 3, 2, 4.5, 1, 3, 1], 2));
