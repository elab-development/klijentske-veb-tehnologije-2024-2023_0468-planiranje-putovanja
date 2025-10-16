import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-blue-50 shadow-md'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex h-12 items-center justify-between'>
          <NavLink
            to='/'
            className='flex items-center gap-2 font-semibold text-blue-800'
          >
            <Plane className='h-5 w-5 text-blue-600' />
            <span>TravelPlanner</span>
          </NavLink>

          <nav className='hidden md:flex items-center gap-4'>
            <NavLink
              to='/'
              end
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              Home
            </NavLink>
            <NavLink
              to='/planner'
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              Planner
            </NavLink>
            <NavLink
              to='/plans'
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              My Plans
            </NavLink>
            <NavLink
              to='/about'
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              About
            </NavLink>
          </nav>

          <button
            className='md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-blue-100'
            aria-label='Toggle menu'
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className='h-5 w-5 text-blue-700' />
            ) : (
              <Menu className='h-5 w-5 text-blue-700' />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className='md:hidden bg-blue-50 shadow-inner'>
          <div className='px-4 py-3 flex flex-col gap-2'>
            <NavLink
              to='/'
              onClick={() => setOpen(false)}
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              Home
            </NavLink>
            <NavLink
              to='/planner'
              onClick={() => setOpen(false)}
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              Planner
            </NavLink>
            <NavLink
              to='/plans'
              onClick={() => setOpen(false)}
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              My Plans
            </NavLink>
            <NavLink
              to='/about'
              onClick={() => setOpen(false)}
              className='text-sm text-blue-800 hover:text-blue-600'
            >
              About
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
