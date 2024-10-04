import express from 'express';
import calculateBMI from './bmiCalculator';

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
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
