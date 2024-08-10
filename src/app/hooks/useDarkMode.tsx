import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from "react";

// Define types for the context state and actions
interface DarkModeState {
  darkMode: boolean;
}

type DarkModeAction = { type: "TOGGLE_DARK_MODE" };

// Create the context with the state and dispatch function types
const DarkModeContext = createContext<
  { state: DarkModeState; dispatch: React.Dispatch<DarkModeAction> } | undefined
>(undefined);

// Define the reducer function
const darkModeReducer = (
  state: DarkModeState,
  action: DarkModeAction
): DarkModeState => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Define the provider component
export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(darkModeReducer, { darkMode: false });

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      dispatch({ type: "TOGGLE_DARK_MODE" });
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    if (state.darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the dark mode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
