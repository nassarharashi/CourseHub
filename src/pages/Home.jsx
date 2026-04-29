import { Link } from 'react-router-dom'
import Container from '../components/Container'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'
import PricingCard from '../components/PricingCard'

const features = [
  {
    title: 'Practical Courses',
    description:
      'Career-focused content built by professionals who teach real-world skills.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    title: 'Progress Tracking',
    description:
      'Clear milestones and learning stats to keep momentum going strong.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5m6 14V9m6 10V7" />
      </svg>
    ),
  },
  {
    title: 'Flexible Learning',
    description:
      'Stay consistent with a clean experience built for modern schedules.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2M4 12a8 8 0 1016 0 8 8 0 00-16 0z"
        />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: 'CourseHub keeps my learning organized and helps me stay consistent.',
    name: 'Aisha Rahman',
    role: 'Product Designer',
  },
  {
    quote: 'The courses are practical and easy to follow. I can track everything.',
    name: 'Omar Khaled',
    role: 'Frontend Developer',
  },
  {
    quote: 'Clean layout, clear progress, and great structure for busy schedules.',
    name: 'Layla Hassan',
    role: 'Student',
  },
]

const pricingPlans = [
  {
    name: 'Basic',
    price: '$19/mo',
    features: ['Access to core courses', 'Weekly learning plan', 'Email support'],
    ctaLabel: 'Choose Basic',
  },
  {
    name: 'Pro',
    price: '$39/mo',
    features: ['Everything in Basic', 'Progress tracking', 'Priority support'],
    ctaLabel: 'Choose Pro',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$59/mo',
    features: ['Everything in Pro', 'Mentor sessions', 'Advanced projects'],
    ctaLabel: 'Choose Premium',
  },
]

function Home() {
  return (
    <div className="space-y-16 pb-12">
      <HeroSection
        title="Learn Skills That Move Your Career Forward"
        subtitle="Discover practical courses, expert content, and a simple learning experience built for modern students."
        primaryLabel="Explore Courses"
        primaryTo="/courses"
        secondaryLabel="Learn More"
        secondaryTo="/about"
        stats={[
          { label: 'Learners', value: '12K+' },
          { label: 'Courses', value: '150+' },
          { label: 'Completion Rate', value: '94%' },
        ]}
      />

      <section>
        <Container className="py-8">
          <div className="space-y-10">
            <div className="space-y-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Why CourseHub
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Built for focused learning
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-600">
                Everything you need to stay consistent, track growth, and move
                confidently through every course.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-8">
          <div className="space-y-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Learners love the experience
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                Join students who rely on CourseHub to stay organized and focused.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="space-y-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Choose the plan that fits
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                Flexible options for every learning pace, from self-study to guided growth.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50 px-6 py-12 text-center shadow-sm sm:px-10">
            <div className="mx-auto max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Start building your future today
              </h2>
              <p className="text-base text-slate-600">
                Join CourseHub and organize your learning journey in one simple platform.
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Home
