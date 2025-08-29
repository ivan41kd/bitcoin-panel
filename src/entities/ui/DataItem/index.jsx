import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import { useBlockContext } from "../../../shared/hooks/useBlockContext";
export const DataItem = ({ item }) => {
  const { setSelectedData, selectedData } = useBlockContext();
  return (
    <div
      className={`data__item ${selectedData === item.id && "active"}`}
      onClick={() => setSelectedData(item.id)}
    >
      <DesktopWindowsIcon sx={{ fontSize: "60px" }} />
      <p className="data__item-name">{item.minerName}</p>
    </div>
  );
};
