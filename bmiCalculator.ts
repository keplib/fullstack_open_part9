const calculateBMI = (height: number, weight: number): string => {
  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters * heightInMeters);

  if (bmi <= 18.4) {
    return 'Underweight';
  } else if (bmi >= 18.5 || bmi <= 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25.0 || bmi <= 39.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
};

console.log(calculateBMI(185, 86));
