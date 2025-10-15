import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-blue-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-sm text-blue-800'>
            © {new Date().getFullYear()} TravelPlanner. All rights reserved.
          </p>
          <div className='flex items-center gap-3'>
            <a
              href='#'
              className='rounded p-1 hover:bg-blue-100'
              aria-label='GitHub'
            >
              <Github className='h-4 w-4 text-blue-700' />
            </a>
            <a
              href='#'
              className='rounded p-1 hover:bg-blue-100'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-4 w-4 text-blue-700' />
            </a>
            <a
              href='mailto:hello@example.com'
              className='rounded p-1 hover:bg-blue-100'
              aria-label='Email'
            >
              <Mail className='h-4 w-4 text-blue-700' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
