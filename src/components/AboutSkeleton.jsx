import Container from './Container'

function AboutSkeleton() {
  return (
    <div className="space-y-16 pb-12 animate-pulse">
      <section>
        <Container className="py-12">
          <div className="space-y-4 text-center">
            <div className="mx-auto h-8 w-64 rounded bg-slate-200" />
            <div className="mx-auto h-4 w-3/4 rounded bg-slate-200" />
            <div className="mx-auto h-4 w-2/3 rounded bg-slate-200" />
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div className="h-4 w-32 rounded bg-slate-200" />
              <div className="h-7 w-3/4 rounded bg-slate-200" />
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-5/6 rounded bg-slate-200" />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gray-50 p-6">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="mt-4 h-4 w-5/6 rounded bg-slate-200" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 2 }, (_, index) => (
                  <div key={index} className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="h-4 w-24 rounded bg-slate-200" />
                    <div className="mt-3 h-4 w-full rounded bg-slate-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="space-y-8">
            <div className="mx-auto h-6 w-40 rounded bg-slate-200" />
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-5 w-2/3 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-full rounded bg-slate-200" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12">
          <div className="space-y-8 text-center">
            <div className="mx-auto h-6 w-32 rounded bg-slate-200" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-5 w-2/3 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-1/2 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutSkeleton
