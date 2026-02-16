type UnitSystem = 'metric' | 'imperial';
type Sex = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';

export function calculateBMI(height: number, weight: number, unit: UnitSystem): number {
  if (unit === 'imperial') {
    // Convert inches to meters and pounds to kg
    height = height * 0.0254;
    weight = weight * 0.453592;
  } else {
    // Convert cm to meters
    height = height / 100;
  }

  const bmi = weight / (height * height);
  return bmi;
}

export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

export function calculateTDEE(
  sex: Sex,
  age: number,
  height: number,
  weight: number,
  activityLevel: ActivityLevel
): number {
  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr: number;
  if (sex === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Apply activity multiplier
  const activityMultipliers: Record<ActivityLevel, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    'very-active': 1.9,
  };

  const tdee = bmr * activityMultipliers[activityLevel];
  return tdee;
}
