const options = ['All', 'Frontend', 'Backend', 'Design', 'Programming']

function FilterDropdown({ value, onChange }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-sm font-medium text-slate-700" htmlFor="course-filter">
        Category
      </label>
      <select
        id="course-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterDropdown
