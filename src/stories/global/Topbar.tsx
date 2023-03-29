import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Avatar, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const TopBar = () => {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.common.white,
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton>
          <Avatar />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
