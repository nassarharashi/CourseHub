import Container from './Container'

function HomeSkeleton() {
  return (
    <div className="space-y-16 pb-12 animate-pulse">
      <section className="bg-white/60">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="h-20 w-20 rounded-full bg-slate-200" />
              <div className="space-y-3">
                <div className="h-8 w-3/4 rounded bg-slate-200" />
                <div className="h-6 w-2/3 rounded bg-slate-200" />
                <div className="h-5 w-5/6 rounded bg-slate-200" />
              </div>
              <div className="flex gap-4">
                <div className="h-11 w-36 rounded-md bg-slate-200" />
                <div className="h-11 w-32 rounded-md bg-slate-200" />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="h-16 rounded-xl bg-slate-200" />
                <div className="h-16 rounded-xl bg-slate-200" />
                <div className="h-16 rounded-xl bg-slate-200" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="space-y-8">
            <div className="mx-auto h-6 w-40 rounded bg-slate-200" />
            <div className="mx-auto h-8 w-80 rounded bg-slate-200" />
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-12 w-12 rounded-xl bg-slate-200" />
                  <div className="mt-5 h-5 w-2/3 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-full rounded bg-slate-200" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-8">
          <div className="space-y-8">
            <div className="mx-auto h-6 w-40 rounded bg-slate-200" />
            <div className="mx-auto h-8 w-72 rounded bg-slate-200" />
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-5/6 rounded bg-slate-200" />
                  <div className="mt-6 h-4 w-1/3 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="space-y-8">
            <div className="mx-auto h-6 w-40 rounded bg-slate-200" />
            <div className="mx-auto h-8 w-72 rounded bg-slate-200" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-5 w-20 rounded bg-slate-200" />
                  <div className="mt-4 h-8 w-28 rounded bg-slate-200" />
                  <div className="mt-4 space-y-2">
                    <div className="h-4 w-5/6 rounded bg-slate-200" />
                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                    <div className="h-4 w-3/4 rounded bg-slate-200" />
                  </div>
                  <div className="mt-6 h-10 w-full rounded-md bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
            <div className="mx-auto max-w-2xl space-y-4">
              <div className="h-8 w-2/3 rounded bg-slate-200 mx-auto" />
              <div className="h-4 w-3/4 rounded bg-slate-200 mx-auto" />
              <div className="mx-auto h-11 w-36 rounded-md bg-slate-200" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default HomeSkeleton
