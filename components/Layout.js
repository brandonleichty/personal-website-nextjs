import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <Header />
        <div className="grid-wrapper">
        {children}
        </div>
      <Footer />
    </div>
  );
}
