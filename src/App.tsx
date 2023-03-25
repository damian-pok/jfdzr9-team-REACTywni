import React from "react";

//import libraries:
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Navigate } from "react-router-dom";

//import components:
import Layout from "./components/Layout/Layout";

//import pages:
import AdminPanel from "./pages/AdminPanel.page";
import Homepage from "./pages/Homepage.page";
import HowClient from "./pages/HowClient.page";
import HowFreelancer from "./pages/HowFreelancer.page";
import LinkContainer from "./pages/LinkContainer.page";
import Login from "./pages/Login.page";
import NotFound from "./pages/NotFound.page";
import PrivacyPolicy from "./pages/PrivacyPolicy.page";
import ProfileClient from "./pages/ProfileClient.page";
import ProfileFreelancer from "./pages/ProfileFreelancer.page";
import Register from "./pages/Register.page";
import Search from "./pages/Search.page";
import Statute from "./pages/Statute.page";
import GlobalStyle from "./theme/globalStyles";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LinkContainer />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="howclient" element={<HowClient />} />
        <Route path="howfreelancer" element={<HowFreelancer />} />
        <Route path="login" element={<Login />} />
        <Route path="client" element={<ProfileClient />} />
        <Route path="freelancer" element={<ProfileFreelancer />} />
        <Route path="register" element={<Register />} />
        <Route path="search" element={<Search />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="statute" element={<Statute />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="not-found" replace={true} />} />
      </Route>,
    ),
  );

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
