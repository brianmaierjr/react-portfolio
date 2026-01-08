import './App.css'
import Colophon from './pages/colophon'
import Home from './pages/home'
import Uses from './pages/uses'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { AnimatedRoutes } from './components/animated-routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AnimatedRoutes />}>
      <Route path="/" element={<Home />} />
      <Route path="/uses" element={<Uses />} />
      <Route path="/colophon" element={<Colophon />} />
    </Route>
  )
)

function App() {
  return (
    <div className="app flow">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
