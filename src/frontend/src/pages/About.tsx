import { Award, Heart, Target, Users } from 'lucide-react';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export default function About() {
  useDocumentTitle('About Us | FitCoach');

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About FitCoach</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Empowering individuals to achieve their fitness goals through expert guidance and
            innovative tools.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm md:p-12">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              At FitCoach, we believe that everyone deserves access to professional fitness guidance
              and the tools needed to transform their health. Our mission is to make fitness
              coaching accessible, effective, and sustainable for people at every stage of their
              journey.
            </p>
            <p className="text-lg text-muted-foreground">
              We combine evidence-based training methods with cutting-edge technology to deliver
              personalized fitness solutions that fit your lifestyle, goals, and preferences.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Results-Driven</h3>
              <p className="text-muted-foreground">
                We focus on measurable outcomes and sustainable progress that lasts.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Holistic Approach</h3>
              <p className="text-muted-foreground">
                We address fitness, nutrition, and mental well-being as interconnected pillars.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community First</h3>
              <p className="text-muted-foreground">
                We build supportive communities where members motivate and inspire each other.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in coaching, education, and client support.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">What We Offer</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">Personal Training</h3>
              <p className="mb-4 text-muted-foreground">
                One-on-one coaching sessions tailored to your specific goals, fitness level, and
                schedule. Our certified trainers provide expert guidance, motivation, and
                accountability.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Customized workout programs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Form correction and technique coaching
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Progress tracking and adjustments
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">Nutrition Coaching</h3>
              <p className="mb-4 text-muted-foreground">
                Personalized nutrition plans designed to complement your training and help you reach
                your goals faster. Learn sustainable eating habits that fit your lifestyle.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Macro and calorie guidance
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Meal planning and prep strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Supplement recommendations
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">Group Classes</h3>
              <p className="mb-4 text-muted-foreground">
                High-energy group training sessions that combine the motivation of community with
                expert instruction. Perfect for those who thrive in a team environment.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  HIIT and strength training
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Yoga and mobility work
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Bootcamp-style workouts
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">Online Coaching</h3>
              <p className="mb-4 text-muted-foreground">
                Train anywhere with our comprehensive online coaching programs. Get professional
                guidance and support no matter where you are in the world.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Video exercise libraries
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Weekly check-ins and feedback
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  24/7 support and resources
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of satisfied clients who have transformed their lives with FitCoach.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Get Started Today
          </a>
        </section>
      </div>
    </div>
  );
}
