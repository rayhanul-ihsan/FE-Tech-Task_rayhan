import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import logoipsum from "../../assets/Vector.png";
import caseIcon from "../../assets/case.svg";
import setIcon from "../../assets/data_set.svg";
import dbIcon from "../../assets/fi_database.svg";
import IconLogo from "../../assets/fi_figma.svg";
import imageicon from "../../assets/fi_image.svg";
import roleIcon from "../../assets/fi_pocket.png";
import userIcon from "../../assets/fi_user.png";
import wifi from "../../assets/fi_wifi.svg";
import dashboardIcon from "../../assets/logoDash.svg";
import barmenu from "../../assets/menu.svg";
import visualIcon from "../../assets/visual.svg";
import wpIcon from "../../assets/workpres.svg";
import Dropdown from "./components/Dropdown";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const isActive = (path: string) => location.pathname === path;

  const getMenuItemClass = (path: string) => isActive(path) ? 'text-white font-semibold' : 'text-[#6A7187]';

  return (
    <div className="flex">
      <IconContext.Provider value={{ size: "1.5em" }}>
        <Sidebar collapsed={collapsed} backgroundColor="#2A3042" className="h-auto">
          <Menu>
            <MenuItem icon={<img src={logoipsum} alt="logoipsum" />} className="text-white text-[24px] my-6 font-bold">
              Logoipsum
            </MenuItem>
            <MenuItem icon={<img src={dashboardIcon} alt="dashboard logo" />} className={`${getMenuItemClass('/dashboard')}`}>
              <Link to="/dashboard" className="inline-flex gap-2">
                 Dashboard</Link>
            </MenuItem>
            <MenuItem className="font-semibold text-[#6A7187]">DATA</MenuItem>
            <MenuItem icon={<img src={visualIcon} alt="visual logo" />} className="text-[#6A7187]">
              Visualization
            </MenuItem>
            <MenuItem icon={<img src={caseIcon} alt="case logo" />} className="text-[#6A7187]">
              Case
            </MenuItem>
            <MenuItem icon={<img src={setIcon} alt="set logo" />} className="text-[#6A7187]">
              Data Set
            </MenuItem>
            <MenuItem icon={<img src={dbIcon} alt="db logo" />} className={`${getMenuItemClass('/usermanagement')}`}>
              <Link to="/usermanagement">Data Source</Link>
            </MenuItem>
            <MenuItem icon={<img src={wifi} alt="wifi logo" />} className="text-[#6A7187]">
              Connection
            </MenuItem>
            <MenuItem className="font-semibold text-[#6A7187]">ASSETS</MenuItem>
            <MenuItem icon={<img src={IconLogo} alt="icon logo" />} className="text-[#6A7187]">
              Icon
            </MenuItem>
            <MenuItem icon={<img src={imageicon} alt="image logo" />} className="text-[#6A7187]">
              Image
            </MenuItem>
            <MenuItem className="font-semibold text-[#6A7187]">AUTHORIZATION</MenuItem>
            <MenuItem icon={<img src={userIcon} alt="user logo" />} className="text-[#6A7187]">
              Account
            </MenuItem>
            <MenuItem icon={<img src={roleIcon} alt="role logo" />} className="text-[#6A7187]">
              Role
            </MenuItem>
            <MenuItem icon={<img src={wpIcon} alt="wp logo" />} className="text-[#6A7187]">
              Workspace
            </MenuItem>
          </Menu>
        </Sidebar>
      </IconContext.Provider>
      <div className="flex-1">
        <nav className="flex items-center justify-between p-4 shadow">
          <button onClick={toggleSidebar} className="p-2 focus:outline-none">
            <img src={barmenu} alt="barmenu" />
          </button>
          <Dropdown />
        </nav>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
