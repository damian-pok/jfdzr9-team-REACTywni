import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.components";
import Menu from "../Menu/Menu.components";

const Layout = () => {
  return (
    <main>
      <Menu />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
