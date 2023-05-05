import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.components";
import Menu from "../Menu/Menu.components";
import { LayoutWrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <main>
      <LayoutWrapper>
        <div>
          <Menu />
          <Outlet />
          <Footer />
        </div>
      </LayoutWrapper>
    </main>
  );
};

export default Layout;
