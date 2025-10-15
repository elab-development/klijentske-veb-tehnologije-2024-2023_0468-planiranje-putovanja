import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import MyPlans from './pages/MyPlans';
import Planner from './pages/Planner';

export default function App() {
  const linkClasses =
    'px-3 py-2 rounded hover:bg-gray-200 transition text-sm font-medium';
  const activeClasses = 'bg-blue-600 text-white hover:bg-blue-600';

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-white border-b'>
        <div className='container mx-auto flex items-center justify-between py-3 px-4'>
          <NavLink to='/' className='text-lg font-semibold'>
            ✈️ TravelPlanner
          </NavLink>
          <nav className='flex gap-1'>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeClasses}` : linkClasses
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/planner'
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeClasses}` : linkClasses
              }
            >
              Planner
            </NavLink>
            <NavLink
              to='/plans'
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeClasses}` : linkClasses
              }
            >
              My Plans
            </NavLink>
            <NavLink
              to='/explore'
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeClasses}` : linkClasses
              }
            >
              Explore
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeClasses}` : linkClasses
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className='flex-1 container mx-auto px-4 py-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planner' element={<Planner />} />
          <Route path='/plans' element={<MyPlans />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>

      <footer className='bg-gray-100 py-4 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} TravelPlanner
      </footer>
    </div>
  );
}
