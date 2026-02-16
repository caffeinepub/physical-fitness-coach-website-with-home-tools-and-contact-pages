import { useState } from 'react';
import { Calculator, Clipboard, ClipboardCheck } from 'lucide-react';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { calculateBMI, getBMICategory, calculateTDEE } from '../lib/fitnessCalculators';
import { copyToClipboard } from '../lib/clipboard';

type UnitSystem = 'metric' | 'imperial';
type Sex = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';

export default function Tools() {
  useDocumentTitle('Fitness Tools | FitCoach');

  // BMI Calculator State
  const [bmiUnit, setBmiUnit] = useState<UnitSystem>('metric');
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiResult, setBmiResult] = useState<{ bmi: number; category: string } | null>(null);

  // Calorie Calculator State
  const [calSex, setCalSex] = useState<Sex>('male');
  const [calAge, setCalAge] = useState('');
  const [calHeight, setCalHeight] = useState('');
  const [calWeight, setCalWeight] = useState('');
  const [calActivity, setCalActivity] = useState<ActivityLevel>('moderate');
  const [calResult, setCalResult] = useState<number | null>(null);

  // Workout Planner State
  const [workoutPlan, setWorkoutPlan] = useState<Record<string, string>>({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });
  const [copied, setCopied] = useState(false);

  const handleBMICalculate = () => {
    const height = parseFloat(bmiHeight);
    const weight = parseFloat(bmiWeight);

    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Please enter valid height and weight values');
      return;
    }

    const bmi = calculateBMI(height, weight, bmiUnit);
    const category = getBMICategory(bmi);
    setBmiResult({ bmi, category });
  };

  const handleCalorieCalculate = () => {
    const age = parseInt(calAge);
    const height = parseFloat(calHeight);
    const weight = parseFloat(calWeight);

    if (!age || !height || !weight || age <= 0 || height <= 0 || weight <= 0) {
      alert('Please enter valid values for all fields');
      return;
    }

    const tdee = calculateTDEE(calSex, age, height, weight, calActivity);
    setCalResult(tdee);
  };

  const handleExportPlan = async () => {
    const planText = Object.entries(workoutPlan)
      .map(([day, workout]) => `${day}: ${workout || 'Rest day'}`)
      .join('\n');

    const success = await copyToClipboard(`My Weekly Workout Plan\n\n${planText}`);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Fitness Tools</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Calculate your BMI, estimate daily calorie needs, and plan your weekly workouts.
          </p>
        </div>

        <div className="space-y-12">
          {/* BMI Calculator */}
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">BMI Calculator</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Unit System</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setBmiUnit('metric')}
                      className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        bmiUnit === 'metric'
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:bg-accent'
                      }`}
                    >
                      Metric (cm, kg)
                    </button>
                    <button
                      onClick={() => setBmiUnit('imperial')}
                      className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        bmiUnit === 'imperial'
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:bg-accent'
                      }`}
                    >
                      Imperial (in, lbs)
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="bmi-height" className="mb-2 block text-sm font-medium">
                    Height ({bmiUnit === 'metric' ? 'cm' : 'inches'})
                  </label>
                  <input
                    id="bmi-height"
                    type="number"
                    value={bmiHeight}
                    onChange={(e) => setBmiHeight(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={bmiUnit === 'metric' ? '170' : '67'}
                  />
                </div>

                <div>
                  <label htmlFor="bmi-weight" className="mb-2 block text-sm font-medium">
                    Weight ({bmiUnit === 'metric' ? 'kg' : 'lbs'})
                  </label>
                  <input
                    id="bmi-weight"
                    type="number"
                    value={bmiWeight}
                    onChange={(e) => setBmiWeight(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={bmiUnit === 'metric' ? '70' : '154'}
                  />
                </div>

                <button
                  onClick={handleBMICalculate}
                  className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90"
                >
                  Calculate BMI
                </button>
              </div>

              <div className="flex items-center justify-center rounded-lg bg-muted/30 p-6">
                {bmiResult ? (
                  <div className="text-center">
                    <div className="mb-2 text-5xl font-bold">{bmiResult.bmi.toFixed(1)}</div>
                    <div className="text-lg font-medium text-muted-foreground">
                      {bmiResult.category}
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Enter your measurements and click calculate to see your BMI
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Calorie Calculator */}
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Daily Calorie Estimator</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Sex</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCalSex('male')}
                      className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        calSex === 'male'
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:bg-accent'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setCalSex('female')}
                      className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        calSex === 'female'
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:bg-accent'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="cal-age" className="mb-2 block text-sm font-medium">
                    Age (years)
                  </label>
                  <input
                    id="cal-age"
                    type="number"
                    value={calAge}
                    onChange={(e) => setCalAge(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="30"
                  />
                </div>

                <div>
                  <label htmlFor="cal-height" className="mb-2 block text-sm font-medium">
                    Height (cm)
                  </label>
                  <input
                    id="cal-height"
                    type="number"
                    value={calHeight}
                    onChange={(e) => setCalHeight(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="170"
                  />
                </div>

                <div>
                  <label htmlFor="cal-weight" className="mb-2 block text-sm font-medium">
                    Weight (kg)
                  </label>
                  <input
                    id="cal-weight"
                    type="number"
                    value={calWeight}
                    onChange={(e) => setCalWeight(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="70"
                  />
                </div>

                <div>
                  <label htmlFor="cal-activity" className="mb-2 block text-sm font-medium">
                    Activity Level
                  </label>
                  <select
                    id="cal-activity"
                    value={calActivity}
                    onChange={(e) => setCalActivity(e.target.value as ActivityLevel)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="sedentary">Sedentary (little or no exercise)</option>
                    <option value="light">Light (exercise 1-3 days/week)</option>
                    <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                    <option value="active">Active (exercise 6-7 days/week)</option>
                    <option value="very-active">Very Active (intense exercise daily)</option>
                  </select>
                </div>

                <button
                  onClick={handleCalorieCalculate}
                  className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90"
                >
                  Calculate Calories
                </button>
              </div>

              <div className="flex items-center justify-center rounded-lg bg-muted/30 p-6">
                {calResult ? (
                  <div className="text-center">
                    <div className="mb-2 text-5xl font-bold">{Math.round(calResult)}</div>
                    <div className="text-lg font-medium text-muted-foreground">
                      calories per day
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      This is your estimated daily calorie needs to maintain your current weight
                    </p>
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Fill in all fields and click calculate to estimate your daily calorie needs
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Workout Planner */}
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Clipboard className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Weekly Workout Planner</h2>
              </div>
              <button
                onClick={handleExportPlan}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-accent"
              >
                {copied ? (
                  <>
                    <ClipboardCheck className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Clipboard className="h-4 w-4" />
                    Copy Plan
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4">
              {Object.keys(workoutPlan).map((day) => (
                <div key={day}>
                  <label htmlFor={`workout-${day}`} className="mb-2 block text-sm font-medium">
                    {day}
                  </label>
                  <input
                    id={`workout-${day}`}
                    type="text"
                    value={workoutPlan[day]}
                    onChange={(e) =>
                      setWorkoutPlan((prev) => ({ ...prev, [day]: e.target.value }))
                    }
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g., Upper body strength training, 45 min"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
