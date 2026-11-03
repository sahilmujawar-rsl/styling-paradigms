export default function Sidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="rounded-card bg-surface p-card shadow-md dark:bg-gray-900">
      <h2 className="mb-4 text-xl font-bold text-foreground dark:text-gray-100">
        Categories
      </h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`w-full rounded-card p-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'text-muted hover:bg-surface dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
