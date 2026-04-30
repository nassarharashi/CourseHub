import courseData from '../data/courses.json'

const storageKey = 'coursehub_courses'

export const loadCourses = () => {
  if (typeof window === 'undefined') {
    return courseData
  }

  try {
    const stored = window.localStorage.getItem(storageKey)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed)) {
        return parsed
      }
    }
  } catch (error) {
    return courseData
  }

  return courseData
}

export const saveCourses = (courses) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(storageKey, JSON.stringify(courses))
}
