import { Link } from 'react-router-dom'
import Container from '../components/Container'
import logo from '../assets/logo.png'

function Register() {
  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Container>
        <div className="mx-auto w-full max-w-[420px] rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 ring-1 ring-blue-100">
              <img src={logo} alt="CourseHub logo" className="h-9 w-9" />
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Register
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">
              Create your account
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This page is kept simple for now. You can return to the login page anytime.
            </p>
          </div>

          <Link
            to="/login"
            className="mt-8 flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Back to Login
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Register