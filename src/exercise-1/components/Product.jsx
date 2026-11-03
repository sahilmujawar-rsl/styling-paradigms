export default function Product({ product }) {
  const isInStock = product.status === 'In stock'

  return (
    <article className="rounded-card bg-surface p-card shadow-md dark:bg-gray-900">
      <img
        src={product.image}
        alt={product.name}
        className="h-auto w-full rounded-card"
      />
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-muted">{product.category}</span>
        <span
          className={`rounded-full px-2 py-1 text-xs ${
            isInStock
              ? 'bg-stock-background text-stock'
              : 'bg-unavailable-background text-unavailable'
          }`}
        >
          {product.status}
        </span>
      </div>
      <h2 className="mt-2 text-xl font-bold text-foreground dark:text-gray-100">
        {product.name}
      </h2>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <button
          type="button"
          disabled={!isInStock}
          className="rounded-card bg-primary px-4 py-2 text-white hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}
