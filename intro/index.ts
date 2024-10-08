import express from 'express';
import calculateBMI from './bmiCalculator';
import calculateExercise from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;

  try {
    const heightValue: number = parseFloat(height as string);
    const weightValue: number = parseFloat(weight as string);

    if (isNaN(heightValue) || isNaN(weightValue)) {
      throw Error();
    }

    const bmi: string = calculateBMI(heightValue, weightValue);

    res.json({
      weight: weightValue,
      height: heightValue,
      bmi: bmi,
    });
  } catch {
    res.status(404).json({
      error: 'malformatted parameters',
    });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises: dailyExercises, target } = req.body;

  if (!dailyExercises || !target) {
    res.status(400).json({
      error: 'parameters missing',
    });
  }

  if (!Array.isArray(dailyExercises) || dailyExercises.some(isNaN) || isNaN(target as number)) {
    res.status(400).json({
      error: 'malformatted parameters',
    });
  }

  const result = calculateExercise(dailyExercises as number[], target as number);

  res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
