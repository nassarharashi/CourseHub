import { Link } from 'react-router-dom'

function PricingCard({ name, price, features, ctaLabel, highlighted }) {
  const cardStyles = highlighted
    ? 'border-blue-600 bg-blue-50/40 shadow-md'
    : 'border-slate-200 bg-white shadow-sm'

  return (
    <div className={`rounded-2xl border p-6 ${cardStyles}`}>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-indigo-500">{name}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{price}</p>
        </div>
        <ul className="space-y-2 text-sm text-slate-600">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/courses"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
          highlighted
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600'
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  )
}

export default PricingCard
