// Material Dashboard 2 PRO React TS Base Styles
import colors from "../base/colors";

const { transparent } = colors;

// types
type Types = any;

const iconButton: Types = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
