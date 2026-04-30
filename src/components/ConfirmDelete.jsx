function ConfirmDelete({ course, onCancel, onConfirm }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Are you sure you want to delete
        <span className="font-semibold text-slate-900"> {course.title}</span>?
        This action cannot be undone.
      </p>
      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
        >
          Delete Course
        </button>
      </div>
    </div>
  )
}

export default ConfirmDelete
