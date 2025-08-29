import { useState } from "react";
import { useModalContext } from "../../shared/hooks/useModalContext";
import { useBlockContext } from "../../shared/hooks/useBlockContext";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
export const EditBlockForm = ({ block }) => {
  const { handleClose } = useModalContext();
  const [value, setValue] = useState(block.title);
  const { selectedData, setData } = useBlockContext();

  const submitInfo = (e) => {
    e.preventDefault();
    handleClose();
    const updatedBlock = {
      ...block,
      title: value !== "" ? value : block.title,
    };
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
    <form
      className="block__form"
      onSubmit={(e) => {
        submitInfo(e);
      }}
    >
      <div className="block__form-wrapper">
        <TextField
          label="Block name"
          variant="standard"
          defaultValue={block.title}
          onChange={(e) => setValue(e.target.value.trim())}
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
};
