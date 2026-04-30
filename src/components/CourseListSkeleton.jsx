import CourseCardSkeleton from './CourseCardSkeleton'

const skeletons = Array.from({ length: 6 }, (_, index) => index)

function CourseListSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skeletons.map((item) => (
        <div key={item} className="animate-pulse">
          <CourseCardSkeleton />
        </div>
      ))}
    </div>
  )
}

export default CourseListSkeleton
