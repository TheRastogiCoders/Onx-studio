import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main className="main-wrap">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
