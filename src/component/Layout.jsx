// components/Layout.jsx

import Navbar from "./NavigationBar";
import Footer from "./Footer";
///Users/tensaekebede/Desktop/newPortfolio/my-portfolio/src/component/Layout.jsx

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
