import { useState } from 'react'
import Container from '../components/Container'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.'
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <div className="space-y-10 pb-12">
      <section className="bg-white">
        <Container className="py-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Contact
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Get in touch with CourseHub
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Send a quick message and we will get back to you soon.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange('name')}
                  className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                {errors.name ? (
                  <p className="mt-2 text-xs text-red-600">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                {errors.email ? (
                  <p className="mt-2 text-xs text-red-600">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows="5"
                  value={values.message}
                  onChange={handleChange('message')}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-red-600">{errors.message}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Message sent successfully. We will respond soon.
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Contact
