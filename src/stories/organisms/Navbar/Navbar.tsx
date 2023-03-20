import React from "react";
import { Navbar, Form, Input } from "react-daisyui";
import { HomeIcon } from "@heroicons/react/24/solid";
import ProfileDropDown from "../ProfileDropdown/ProfileDropDown";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <div className="flex-1">
          <div>
            <HomeIcon className="h-6 w-3 text-blue-500" />
          </div>
        </div>
        <div className="flex-none gap-2">
          <Form>
            <Input bordered type="text" placeholder="Search" />
          </Form>
          <ProfileDropDown />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
