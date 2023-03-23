// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "../functions/pxToRem";

// Material Dashboard 2 PRO React TS Base Styles
import colors from "../base/colors";
import boxShadows from "../base/boxShadows";
import borders from "../base/borders";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

// types
type Types = any;

const popover: Types = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
