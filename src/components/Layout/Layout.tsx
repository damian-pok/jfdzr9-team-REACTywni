import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.components";
import Menu from "../Menu/Menu.components";
import { LayoutWrapper, LayoutWrapperDiv } from "./Layout.styled";

const Layout = () => {
  return (
    <main>
      <LayoutWrapper>
        <LayoutWrapperDiv>
          <Menu />
          <Outlet />
          <Footer />
        </LayoutWrapperDiv>
      </LayoutWrapper>
    </main>
  );
};

export default Layout;
