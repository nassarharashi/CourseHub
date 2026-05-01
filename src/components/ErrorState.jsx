function ErrorState({ message = 'Error loading courses' }) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
      <h3 className="text-lg font-semibold text-red-700">{message}</h3>
      <p className="mt-2 text-sm text-red-600">
        Please refresh the page or try again shortly.
      </p>
    </div>
  )
}

export default ErrorState
