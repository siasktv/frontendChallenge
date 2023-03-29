import { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme/Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import Summarize from "@mui/icons-material/Summarize";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SafetyDivider from "@mui/icons-material/SafetyDivider";
import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import AccessTime from "@mui/icons-material/AccessTime";

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (selected: string) => void;
}

const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export const SidebarMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Sidebar
        defaultCollapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#ffffff",
            height: "100vh !important",
          },
          [`.${sidebarClasses.root}`]: {},
        }}
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="75px"
                  height="75px"
                  src={`logo.webp`}
                  style={{ cursor: "pointer" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h5" color={colors.primary[500]}>
                  Social Pro
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Summary"
              to="/team"
              icon={<Summarize />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Project Charts"
              to="/project-charts"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Labour Hours"
              to="/labour-hours"
              icon={<AccessTime />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Social Procurement"
              to="/socail-procurement"
              icon={<SafetyDivider />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Project Users"
              to="/project-users"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Companies"
              to="/directory-companies"
              icon={<BusinessCenterOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
