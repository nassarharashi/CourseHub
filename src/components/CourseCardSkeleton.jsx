function CourseCardSkeleton() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <div className="h-6 w-24 rounded-full bg-slate-200" />
        <div className="space-y-3">
          <div className="h-5 w-3/4 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-5/6 rounded bg-slate-200" />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded bg-slate-200" />
          <div className="h-4 w-12 rounded bg-slate-200" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 rounded bg-slate-200" />
          <div className="h-9 w-28 rounded-md bg-slate-200" />
        </div>
      </div>
    </div>
  )
}

export default CourseCardSkeleton
