import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import EmptyState from '../components/EmptyState'
import CourseDetailsSkeleton from '../components/CourseDetailsSkeleton'
import courseData from '../data/courses.json'

function CourseDetails() {
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const courseId = Number(id)
  const course = courseData.find((item) => item.id === courseId)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 350)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <CourseDetailsSkeleton />
  }

  return (
    <div className="space-y-10 pb-12">
      <Container className="py-10">
        <Link
          to="/courses"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Back to Courses
        </Link>
      </Container>

      {course ? (
        <section>
          <Container className="py-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="space-y-4">
                <span className="inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  {course.category}
                </span>
                <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {course.title}
                </h1>
                <p className="text-base text-slate-600">{course.description}</p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Level
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {course.level}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Rating
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {course.rating}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Price
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    ${course.price}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : (
        <Container className="py-8">
          <EmptyState description="The course you are looking for was not found." />
        </Container>
      )}
    </div>
  )
}

export default CourseDetails
