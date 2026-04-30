import { useMemo, useState, useEffect } from 'react'
import Container from '../components/Container'
import Modal from '../components/Modal'
import CourseForm from '../components/CourseForm'
import DashboardCourseTable from '../components/DashboardCourseTable'
import ConfirmDelete from '../components/ConfirmDelete'
import EmptyState from '../components/EmptyState'
import { loadCourses, saveCourses } from '../utils/courseStorage'
const categories = ['All', 'Frontend', 'Backend', 'Design', 'Programming']
const pageSize = 6

function Dashboard() {
  const [courses, setCourses] = useState(() => loadCourses())
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)
  const [modalState, setModalState] = useState({
    type: null,
    course: null,
  })

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All') {
      return courses
    }
    return courses.filter((course) => course.category === activeCategory)
  }, [courses, activeCategory])

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  const updateCourses = (nextCourses) => {
    const nextTotalPages = Math.max(
      1,
      Math.ceil(nextCourses.length / pageSize),
    )

    setCourses(nextCourses)
    setPage((prev) => Math.min(prev, nextTotalPages))
    saveCourses(nextCourses)
  }

  const openAddModal = () => {
    setModalState({ type: 'add', course: null })
  }

  const openEditModal = (course) => {
    setModalState({ type: 'edit', course })
  }

  const openDeleteModal = (course) => {
    setModalState({ type: 'delete', course })
  }

  const closeModal = () => {
    setModalState({ type: null, course: null })
  }

  const handleSave = (payload) => {
    if (modalState.type === 'edit' && modalState.course) {
      const nextCourses = courses.map((course) =>
          course.id === modalState.course.id
            ? { ...modalState.course, ...payload }
            : course,
      )
      updateCourses(nextCourses)
    } else {
      const nextId =
        courses.length === 0
          ? 1
          : Math.max(...courses.map((course) => course.id)) + 1
      updateCourses([...courses, { ...payload, id: nextId }])
    }

    closeModal()
  }

  const handleDelete = () => {
    if (!modalState.course) {
      return
    }

    updateCourses(
      courses.filter((course) => course.id !== modalState.course.id),
    )
    closeModal()
  }

  const modalTitle =
    modalState.type === 'edit' ? 'Edit Course' : 'Add Course'
  const formDefaults = modalState.course ?? {}

  return (
    <div className="space-y-10 pb-12">
      <section className="bg-white">
        <Container className="py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Dashboard
              </p>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Manage your courses
              </h1>
              <p className="text-base text-slate-600">
                Add, edit, and organize courses with a simple dashboard view.
              </p>
            </div>
            <button
              type="button"
              onClick={openAddModal}
              className="inline-flex w-fit items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Add Course
            </button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category)
                  setPage(1)
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredCourses.length === 0 ? (
            <EmptyState title="No courses available" />
          ) : (
            <div className="space-y-6">
              <DashboardCourseTable
                courses={paginatedCourses}
                onEdit={openEditModal}
                onDelete={openDeleteModal}
              />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-slate-600">
                  Page {currentPage} of {totalPages}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setPage((prev) => Math.max(1, Math.min(prev, totalPages) - 1))
                    }
                    className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setPage((prev) =>
                        Math.min(totalPages, Math.min(prev, totalPages) + 1),
                      )
                    }
                    className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      <Modal
        open={modalState.type === 'add' || modalState.type === 'edit'}
        title={modalTitle}
        onClose={closeModal}
      >
        <CourseForm
          initialValues={formDefaults}
          onSubmit={handleSave}
          onCancel={closeModal}
        />
      </Modal>

      <Modal
        open={modalState.type === 'delete'}
        title="Delete Course"
        onClose={closeModal}
      >
        {modalState.course ? (
          <ConfirmDelete
            course={modalState.course}
            onCancel={closeModal}
            onConfirm={handleDelete}
          />
        ) : null}
      </Modal>
    </div>
  )
}

export default Dashboard
