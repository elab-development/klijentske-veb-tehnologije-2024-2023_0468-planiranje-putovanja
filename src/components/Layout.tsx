import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <Navbar />
      <main className='flex-1'>
        <div className='max-w-7xl mx-auto px-4 py-6'>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
