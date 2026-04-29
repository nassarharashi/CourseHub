import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../assets/logo.png'

function HeroSection({
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  stats,
}) {
  return (
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
              <img
                src={logo}
                alt="CourseHub logo"
                className="h-20 w-20 rounded-full border border-slate-200 bg-white p-2 shadow-sm"
              />
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-base text-slate-600 sm:text-lg">{subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={primaryTo}
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                {primaryLabel}
              </Link>
              <Link
                to={secondaryTo}
                className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-600"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span className="text-sm text-slate-600">{stat.label}</span>
                  <span className="text-lg font-semibold text-slate-900">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
