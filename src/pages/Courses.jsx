import { useMemo, useState, useEffect } from 'react'
import Container from '../components/Container'
import SearchBar from '../components/SearchBar'
import FilterDropdown from '../components/FilterDropdown'
import CourseList from '../components/CourseList'
import CourseListSkeleton from '../components/CourseListSkeleton'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import { loadCourses } from '../utils/courseStorage'

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating: High to Low', value: 'rating-desc' },
]

function Courses() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState(sortOptions[0].value)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    let isMounted = true

    const loadCoursesData = () => {
      try {
        const data = loadCourses()

        setTimeout(() => {
          if (!isMounted) {
            return
          }
          setCourses(data)
          setError(false)
          setLoading(false)
        }, 500)
      } catch (loadError) {
        if (!isMounted) {
          return
        }
        setError(true)
        setLoading(false)
      }
    }

    loadCoursesData()

    return () => {
      isMounted = false
    }
  }, [])

  const filteredCourses = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    const visibleCourses = courses.filter((course) => {
      const matchesCategory =
        category === 'All' || course.category === category
      const matchesSearch = course.title
        .toLowerCase()
        .includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })

    return [...visibleCourses].sort((first, second) => {
      if (sort === 'price-asc') {
        return first.price - second.price
      }
      if (sort === 'price-desc') {
        return second.price - first.price
      }
      if (sort === 'rating-desc') {
        return second.rating - first.rating
      }
      return 0
    })
  }, [courses, search, category, sort])

  return (
    <div className="space-y-12 pb-12">
      <section className="bg-white">
        <Container className="py-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Courses
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Find the right course for your goals
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Explore curated courses built for focused learning and real outcomes.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr]">
            <SearchBar value={search} onChange={setSearch} />
            <FilterDropdown value={category} onChange={setCategory} />
            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="course-sort">
                Sort
              </label>
              <select
                id="course-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <CourseListSkeleton />
          ) : error ? (
            <ErrorState />
          ) : filteredCourses.length === 0 ? (
            <EmptyState description="Try adjusting your search or filter." />
          ) : (
            <CourseList courses={filteredCourses} />
          )}
        </Container>
      </section>
    </div>
  )
}

export default Courses
