import React from "react";
import { Button, Dropdown } from "react-daisyui";
export interface ProfileDropDownProps {}

const ProfileDropDown: React.FC<ProfileDropDownProps> = () => {
  return (
    <Dropdown vertical="end">
      <Button color="ghost" className="avatar" shape="circle">
        <div className="w-10 rounded-full">
          <img
            src="https://api.lorem.space/image/face?hash=33791"
            alt="main logo"
          />
        </div>
      </Button>
      <Dropdown.Menu className="w-52 menu-compact">
        <li>
          <a className="justify-between" href="/">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropDown;
