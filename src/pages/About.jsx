import { useEffect, useState } from 'react'
import Container from '../components/Container'
import AboutSkeleton from '../components/AboutSkeleton'

const values = [
  {
    title: 'Quality Learning',
    description: 'Well-structured courses curated to build real, practical skills.',
  },
  {
    title: 'Simple Experience',
    description: 'Clear layouts, organized content, and a focus on ease of use.',
  },
  {
    title: 'Career Growth',
    description: 'Guided learning paths designed to move careers forward.',
  },
]

const team = [
  { name: 'Nassar Harashi', role: 'Frontend Developer' },
  { name: 'Course Mentor', role: 'Learning Advisor' },
  { name: 'Support Team', role: 'Student Success' },
]

function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 350)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <AboutSkeleton />
  }

  return (
    <div className="space-y-16 pb-12">
      <section>
        <Container className="py-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              About CourseHub
            </h1>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              CourseHub is a modern learning platform designed to help students discover
              practical courses and grow their skills with a clean, simple experience.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Our Mission
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Build confidence through practical learning
              </h2>
              <p className="text-base text-slate-600">
                We focus on helping learners stay consistent, build momentum, and
                progress through real-world skills with a clean, guided experience.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gray-50 p-6">
              <p className="text-sm text-slate-600">
                CourseHub delivers a structured environment that keeps students focused,
                motivated, and confident throughout their learning journey.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-indigo-500">
                    Focused Paths
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Learn step-by-step with practical outcomes.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-indigo-500">
                    Trusted Content
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Curated lessons built by professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Our Values
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                A platform built with purpose
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12">
          <div className="space-y-8 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                The Team
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Dedicated to student success
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-base font-semibold text-slate-900">
                    {member.name}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default About
