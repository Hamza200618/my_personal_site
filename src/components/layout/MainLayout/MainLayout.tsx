import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop/BackToTop';

/**
 * MainLayout — global layout shell.
 * Composes Navbar, page content (Outlet), Footer, and scroll utilities.
 */
export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <div id="main-content" className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}