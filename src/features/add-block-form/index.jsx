import { useState } from "react";
import { useModalContext } from "../../shared/hooks/useModalContext";
import { useBlockContext } from "../../shared/hooks/useBlockContext";
import TextField from "@mui/material/TextField";
import { Button, Switch } from "@mui/material";

export const AddBlockForm = () => {
  const { selectedData, setData } = useBlockContext();
  const { handleClose } = useModalContext();
  const [value, setValue] = useState("New block");
  const [addedBlock, setAddedBlock] = useState({
    title: value !== "" ? value : "New block",
    enabled: true,
    miningPerHour: 0,
  });

  const submitNewBlock = (e) => {
    e.preventDefault();
    handleClose();

    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedData
          ? {
              ...item,
              blocks: [...item.blocks, addedBlock],
            }
          : item
      )
    );
  };
  const handleChange = () => {
    setAddedBlock((prevBlock) => ({
      ...prevBlock,
      enabled: !prevBlock.enabled,
    }));
  };
  return (
    <form
      className="block__form"
      onSubmit={(e) => {
        submitNewBlock(e);
      }}
    >
      <div className="block__form-wrapper">
        <TextField
          label="Block name"
          variant="standard"
          defaultValue={"New Block"}
          onChange={(e) => setValue(e.target.value.trim())}
        />
        <div className="block__form-feature">
          <p className="block__form-text">Enabled</p>
          <Switch
            checked={addedBlock.enabled}
            slotProps={{
              input: { "aria-label": "controlled" },
              sx: { color: "#fff" },
            }}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          onClick={(e) => submitNewBlock(e)}
        >
          Add
        </Button>
      </div>
    </form>
  );
};
