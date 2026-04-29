import { Link } from 'react-router-dom'
import Container from '../components/Container'

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
      'Stay motivated with clear milestones and a simple view of your progress.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4 4L19 6" />
      </svg>
    ),
  },
  {
    title: 'Simple Management',
    description:
      'Organize lessons, track completion, and keep everything in one place.',
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
          d="M4 7h16M4 12h16M4 17h10"
        />
      </svg>
    ),
  },
]

const courses = [
  {
    title: 'React Fundamentals',
    category: 'Frontend',
    description: 'Build modern interfaces with components, hooks, and routing.',
    level: 'Beginner',
  },
  {
    title: 'UI Design Essentials',
    category: 'Design',
    description: 'Create clean, consistent layouts with typography and spacing.',
    level: 'Intermediate',
  },
  {
    title: 'Backend API Basics',
    category: 'Backend',
    description: 'Design reliable APIs with authentication and structured data.',
    level: 'Beginner',
  },
]

function Home() {
  return (
    <div className="space-y-16 pb-12">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div
          className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-100/70 blur-3xl"
          aria-hidden="true"
        />
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
                  CourseHub
                </p>
                <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
                  Learn Skills That Move Your Career Forward
                </h1>
                <p className="text-base text-slate-600 sm:text-lg">
                  Discover practical courses, expert content, and a simple dashboard to
                  manage your learning journey.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/courses"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/dashboard"
                  className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-600"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">Active learners</p>
                <p className="text-2xl font-semibold text-slate-900">12k+</p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-600">Popular courses</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Product Design', 'React', 'API Basics'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-600">Completion rate</p>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>92% average</span>
                    <span className="font-medium text-slate-900">+18%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[92%] rounded-full bg-indigo-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-8">
          <div className="space-y-10">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Course Preview
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Learn from curated tracks
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-600">
                Start with a focused path and grow confidently with structured lessons.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="space-y-4">
                    <span className="inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                      {course.category}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
                    <span>{course.level}</span>
                    <span className="font-semibold text-blue-600">View course</span>
                  </div>
                </div>
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
                Join CourseHub and organize your learning in one simple platform.
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
