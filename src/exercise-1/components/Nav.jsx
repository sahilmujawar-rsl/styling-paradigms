import { Link } from 'react-router-dom'

export default function Nav({ theme, onToggleTheme }) {
  return (
    <header className="bg-page p-card shadow-md dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground dark:text-gray-100">
          My Store
        </h1>
        <button
          type="button"
          onClick={onToggleTheme}
          className="rounded-card border border-gray-300 px-3 py-1 text-sm text-muted hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
        <Link to="/exercise-2" className="text-sm text-muted hover:text-primary">
          Exercise 2
        </Link>
      </div>
    </header>
  )
}