import Nav from './Nav';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import SmoothScroll from './SmoothScroll';
import Grain from './Grain';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';

export default function Layout({ children }) {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Grain />
      <CustomCursor />
      <Nav />
      <main className="main-wrap">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
