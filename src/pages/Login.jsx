import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import logo from '../assets/logo.png'

const initialValues = {
  email: '',
  password: '',
}

const authKey = 'coursehub_is_authenticated'

function getErrors(values) {
  const nextErrors = {}

  if (!values.email.trim()) {
    nextErrors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Enter a valid email address.'
  }

  if (!values.password.trim()) {
    nextErrors.password = 'Password is required.'
  } else if (values.password.length < 6) {
    nextErrors.password = 'Password must be at least 6 characters.'
  }

  return nextErrors
}

function PasswordIcon({ open }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.8 12c1.81 4.56 5.94 7.8 10.2 7.8 1.5 0 2.95-.28 4.28-.78m2.84-1.82A10.43 10.43 0 0 0 22.2 12c-1.81-4.56-5.94-7.8-10.2-7.8-1.05 0-2.07.14-3.03.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 4 16 16" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const errors = getErrors(values)
  const isFormValid = Object.keys(errors).length === 0
  const visibleErrors = submitted ? errors : {}

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    if (!isFormValid || isLoading) {
      return
    }

    setIsLoading(true)
    localStorage.setItem(authKey, 'true')

    setTimeout(() => {
      navigate('/', { replace: true })
    }, 700)
  }

  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Container>
        <div className="mx-auto w-full max-w-[420px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 ring-1 ring-blue-100">
                <img src={logo} alt="CourseHub logo" className="h-9 w-9" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
                Welcome Back
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                Sign in to CourseHub
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Use your account to continue exploring courses and managing your dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="login-email">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  placeholder="you@example.com"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {visibleErrors.email ? (
                  <p className="mt-2 text-xs text-red-600">{visibleErrors.email}</p>
                ) : null}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="login-password">
                  Password
                </label>
                <div className="relative mt-2">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    placeholder="Enter your password"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 transition-colors hover:text-slate-700"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <PasswordIcon open={showPassword} />
                  </button>
                </div>
                {visibleErrors.password ? (
                  <p className="mt-2 text-xs text-red-600">{visibleErrors.password}</p>
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  Remember me
                </label>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-600"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Signing in...' : 'Login'}
              </button>
            </form>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login