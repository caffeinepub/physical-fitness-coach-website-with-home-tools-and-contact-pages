import { Link } from '@tanstack/react-router';
import { ArrowRight, Dumbbell, Target, TrendingUp, Users } from 'lucide-react';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home | FitCoach');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Body,{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Elevate Your Life
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Expert fitness coaching and powerful tools to help you achieve your health goals.
                Start your transformation journey today.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/tools"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
                >
                  Explore Tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-semibold transition-all hover:bg-accent"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/fitness-hero-banner.dim_1600x900.png"
                alt="Fitness training"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose FitCoach?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to succeed on your fitness journey, all in one place.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Personalized Plans</h3>
              <p className="text-muted-foreground">
                Custom workout and nutrition plans tailored to your unique goals and fitness level.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Professional coaching from certified trainers with years of experience.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your improvements with powerful tools and detailed analytics.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community Support</h3>
              <p className="text-muted-foreground">
                Join a supportive community of like-minded individuals on the same journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Your Transformation?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Take the first step towards a healthier, stronger you. Our tools and expert guidance
            are here to support you every step of the way.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-semibold transition-all hover:bg-accent"
            >
              Try Our Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
