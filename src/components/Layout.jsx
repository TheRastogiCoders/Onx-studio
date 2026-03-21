import Nav from './Nav';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="main-wrap">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
