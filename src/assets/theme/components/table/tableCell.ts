// Material Dashboard 2 PRO React TS Base Styles
import borders from "../../base/borders";
import colors from "../../base/colors";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "../../functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

// types
type Types = any;

const tableCell: Types = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
