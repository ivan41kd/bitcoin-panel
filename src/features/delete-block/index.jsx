import { Button } from "@mui/material";
import { useBlockContext } from "../../shared/hooks/useBlockContext";
export const DeleteBlock = ({ block }) => {
  const { selectedData, setData } = useBlockContext();

  const deleteBlock = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedData
          ? {
              ...item,
              blocks: item.blocks.filter((b) => b.title !== block.title),
            }
          : item
      )
    );
  };
  return (
    <Button onClick={deleteBlock} variant="contained" color="error">
      Delete
    </Button>
  );
};
