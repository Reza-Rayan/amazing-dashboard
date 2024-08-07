import Hidden from "@mui/material/Hidden";
import { styled } from "@mui/material/styles";
import NavbarContent from "./NavbarContent";

const navbarWidth = 280;

interface StyledNavBarProps {
  theme?: any;
  open: boolean;
  position?: string;
}

const StyledNavBar = styled("div")(
  ({ theme, open, position }: StyledNavBarProps) => ({
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    ...(!open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(position === "left" && {
        marginLeft: `-${navbarWidth}px`,
      }),
      ...(position === "right" && {
        marginRight: `-${navbarWidth}px`,
      }),
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const Navbar = () => {
  return (
    <>
      <Hidden lgDown>
        <StyledNavBar
          open
          className="flex-col flex-auto sticky top-0 overflow-hidden  shrink-0 z-20 shadow-5 bg-blue-900 h-screen text-white
           p-10"
        >
          <NavbarContent />
        </StyledNavBar>
      </Hidden>
    </>
  );
};

export default Navbar;
