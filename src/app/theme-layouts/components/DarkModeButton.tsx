import { Button } from "@mui/material";
import { useDarkMode } from "../../hooks/useDarkMode";
// Icons
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const DarkModeButton = () => {
  const { state, dispatch } = useDarkMode();

  return (
    <Button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
      {state.darkMode ? (
        <SunIcon width={24} color="#fbbf24" />
      ) : (
        <MoonIcon width={24} color="#4b5563" />
      )}
    </Button>
  );
};

export default DarkModeButton;
