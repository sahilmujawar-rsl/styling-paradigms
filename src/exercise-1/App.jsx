import { useEffect, useState } from 'react'
import './index.css'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Products from './components/Products'

const categories = ['All', 'Electronics', 'Clothing', 'Books']

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    category: 'Electronics',
    status: 'In stock',
  },
  {
    id: 2,
    name: 'Everyday T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    category: 'Clothing',
    status: 'Out of stock',
  },
  {
    id: 3,
    name: 'The Creative Mind',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    category: 'Books',
    status: 'In stock',
  },
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') ?? 'light',
  )
  const visibleProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [theme])

  return (
    <div className="min-h-screen bg-page text-foreground dark:bg-gray-950 dark:text-gray-100">
      <Nav
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
        }
      />
      <div className="container mx-auto flex flex-col gap-card p-card md:flex-row md:p-8">
        <aside className="w-full shrink-0 md:w-56">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </aside>
        <main className="min-w-0 flex-1">
          <h1 className="mb-6 text-3xl font-bold text-foreground dark:text-gray-100">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h1>
          <Products products={visibleProducts} />
        </main>
      </div>
    </div>
  )
}

export default App
