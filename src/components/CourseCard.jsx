import { Link } from 'react-router-dom'

function CourseCard({ course }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="space-y-4">
        <span className="inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          {course.category}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{course.description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>{course.level}</span>
          <span className="font-semibold text-slate-900">{course.rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-slate-900">${course.price}</span>
          <Link
            to={`/courses/${course.id}`}
            className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
