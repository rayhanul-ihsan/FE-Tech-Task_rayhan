import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaUserCircle } from "react-icons/fa";
import signout from "../../../assets/logout.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center gap-2">
        <BsMoon size={20}/>
        <Menu.Button className="inline-flex justify-center items-center gap-2 w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700">
          <FaUserCircle className="text-xl" />
          <span className="mr-2">User Inc</span>
          <MdKeyboardArrowDown />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    " px-4 py-2 text-sm inline-flex gap-2 w-[100%]"
                  )}
                >
                  <FaUserCircle className="text-xl" />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    " px-4 py-2 text-sm inline-flex gap-2 w-[100%]"
                  )}
                >
                  <img src={signout} alt="signout" />
                  Sign Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
