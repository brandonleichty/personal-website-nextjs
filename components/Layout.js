import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <Header />
        {children}
      <Footer />
    </div>
  );
}
