// Material Dashboard 2 PRO React TS Base Styles
import colors from "../base/colors";
import borders from "../base/borders";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "../functions/pxToRem";

const { white } = colors;
const { borderRadius } = borders;

// types
type Types = any;

const sidenav: Types = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: white.main,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export default sidenav;
