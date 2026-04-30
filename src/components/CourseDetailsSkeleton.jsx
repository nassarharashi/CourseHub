import Container from './Container'

function CourseDetailsSkeleton() {
  return (
    <div className="space-y-10 pb-12 animate-pulse">
      <Container className="py-10">
        <div className="h-4 w-32 rounded bg-slate-200" />
      </Container>
      <section>
        <Container className="py-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-4">
              <div className="h-6 w-24 rounded-full bg-slate-200" />
              <div className="h-8 w-3/4 rounded bg-slate-200" />
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-5/6 rounded bg-slate-200" />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="h-3 w-16 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-24 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default CourseDetailsSkeleton
