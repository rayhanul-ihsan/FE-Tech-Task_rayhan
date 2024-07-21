import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/404NotFound";
import AboutUs from "./pages/AboutUs";
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ChartComp from "./pages/DashboardLayout/components/ChartComp";
import UserManagement from "./pages/DashboardLayout/components/UserManagement";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/dashboard", "/usermanagement"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <ChartComp />
            </DashboardLayout>
          }
        />
        <Route
          path="/usermanagement"
          element={
            <DashboardLayout>
              <UserManagement />
            </DashboardLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
