import { Switch } from "@mui/material";
import { useBlockContext } from "../../shared/hooks/useBlockContext";
export const ToggleBlock = ({ block }) => {
  const { selectedData, setData } = useBlockContext();
  const handleChange = () => {
    const updatedBlock = { ...block, enabled: !block.enabled };

    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedData
          ? {
              ...item,
              blocks: item.blocks.map((b) =>
                b.title === block.title ? updatedBlock : b
              ),
            }
          : item
      )
    );
  };
  return (
    <Switch
      checked={block.enabled}
      slotProps={{
        input: { "aria-label": "controlled" },
        sx: { color: "#fff" },
      }}
      onChange={handleChange}
    />
  );
};
