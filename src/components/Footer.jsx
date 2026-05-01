import Container from './Container'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gray-50">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <span className="text-base font-semibold text-slate-900">
              CourseHub
            </span>
            <p className="text-sm text-slate-600">
              A modern platform for practical online learning.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            © 2026 CourseHub. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
