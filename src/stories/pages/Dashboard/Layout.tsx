import { ReactNode } from "react";

// Material Dashboard 2 PRO React TS components
import MDBox from "../../molecules/MDBox";

function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: pxToRem(0),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </MDBox>
  );
}

export default Layout;
