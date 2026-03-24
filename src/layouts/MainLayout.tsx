 
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-brand-stone selection:text-brand-stoneBlack">
      <Navbar />
      <main className="flex-grow w-full pt-20"> {/* pt-20 to account for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
