import { NavLink, Link } from 'react-router-dom'
import Container from './Container'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Dashboard', to: '/dashboard' },
]

function Navbar() {
  const linkBase =
    'text-sm font-medium text-slate-600 transition-colors hover:text-blue-600'
  const linkActive = 'text-blue-600'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CourseHub logo" className="h-8 w-8" />
            <span className="text-base font-semibold text-slate-900">
              CourseHub
            </span>
          </Link>
          <nav aria-label="Primary">
            <div className="flex flex-wrap items-center gap-4">
              <ul className="flex flex-wrap items-center gap-5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        [linkBase, isActive ? linkActive : ''].join(' ').trim()
                      }
                      end={link.to === '/'}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link
                to="/login"
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-100"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
