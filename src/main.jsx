import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExerciseOne from './exercise-1/App'
import ExerciseTwo from './exercise-2/App'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExerciseOne />} />
        <Route path="/exercise-1" element={<ExerciseOne />} />
        <Route path="/exercise-2" element={<ExerciseTwo />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)

export default AppRouter
