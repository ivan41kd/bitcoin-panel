import { useColorScheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button } from "@mui/material";
export const DarkMode = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <div className="mode">
      <Button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        sx={{ background: mode === "light" ? "black" : "white" }}
      >
        <DarkModeIcon sx={{ color: mode === "light" ? "white" : "black" }} />
      </Button>
    </div>
  );
};
