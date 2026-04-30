import { useMemo, useState } from 'react'

const categories = ['Frontend', 'Backend', 'Design', 'Programming']
const levels = ['Beginner', 'Intermediate', 'Advanced']

function CourseForm({ initialValues, onSubmit, onCancel }) {
  const [values, setValues] = useState({
    title: initialValues.title ?? '',
    category: initialValues.category ?? '',
    level: initialValues.level ?? '',
    price: initialValues.price ?? '',
    rating: initialValues.rating ?? '',
    description: initialValues.description ?? '',
  })
  const [errors, setErrors] = useState({})

  const normalizedValues = useMemo(() => {
    return {
      ...values,
      price: values.price === '' ? '' : Number(values.price),
      rating: values.rating === '' ? '' : Number(values.rating),
    }
  }, [values])

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.title.trim()) {
      nextErrors.title = 'Title is required.'
    }
    if (!values.category) {
      nextErrors.category = 'Category is required.'
    }
    if (!values.level) {
      nextErrors.level = 'Level is required.'
    }
    if (values.price === '' || Number(values.price) <= 0) {
      nextErrors.price = 'Price must be a positive number.'
    }
    if (
      values.rating === '' ||
      Number(values.rating) < 0 ||
      Number(values.rating) > 5
    ) {
      nextErrors.rating = 'Rating must be between 0 and 5.'
    }
    if (!values.description.trim()) {
      nextErrors.description = 'Description is required.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    onSubmit({
      ...normalizedValues,
      title: values.title.trim(),
      description: values.description.trim(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={values.title}
          onChange={handleChange('title')}
          className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {errors.title ? (
          <p className="mt-2 text-xs text-red-600">{errors.title}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={values.category}
            onChange={handleChange('category')}
            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category ? (
            <p className="mt-2 text-xs text-red-600">{errors.category}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="level">
            Level
          </label>
          <select
            id="level"
            value={values.level}
            onChange={handleChange('level')}
            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select level</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.level ? (
            <p className="mt-2 text-xs text-red-600">{errors.level}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            min="0"
            step="1"
            value={values.price}
            onChange={handleChange('price')}
            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {errors.price ? (
            <p className="mt-2 text-xs text-red-600">{errors.price}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="rating">
            Rating
          </label>
          <input
            id="rating"
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={values.rating}
            onChange={handleChange('rating')}
            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {errors.rating ? (
            <p className="mt-2 text-xs text-red-600">{errors.rating}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          value={values.description}
          onChange={handleChange('description')}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {errors.description ? (
          <p className="mt-2 text-xs text-red-600">{errors.description}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Save Course
        </button>
      </div>
    </form>
  )
}

export default CourseForm
