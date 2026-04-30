function DashboardCourseTable({ courses, onEdit, onDelete }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Level</th>
              <th className="px-4 py-3 font-semibold">Rating</th>
              <th className="px-4 py-3 font-semibold">Price</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {courses.map((course) => (
              <tr key={course.id} className="text-slate-700">
                <td className="px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-900">{course.title}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {course.description}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                    {course.category}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-600">{course.level}</td>
                <td className="px-4 py-4 text-slate-600">{course.rating}</td>
                <td className="px-4 py-4 text-slate-900">${course.price}</td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(course)}
                      className="rounded-md border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(course)}
                      className="rounded-md border border-red-200 px-3 py-1 text-xs font-semibold text-red-600 transition-colors hover:border-red-300 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardCourseTable
