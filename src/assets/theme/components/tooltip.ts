// @mui material components
import Fade from "@mui/material/Fade";

// Material Dashboard 2 PRO React TS Base Styles
import colors from "../base/colors";
import typography from "../base/typography";
import borders from "../base/borders";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "../functions/pxToRem";

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

// types
type Types = any;

const tooltip: Types = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: black.main,
    },
  },
};

export default tooltip;
