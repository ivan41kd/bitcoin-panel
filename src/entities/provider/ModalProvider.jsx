import { useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider
      value={{
        handleOpen,
        handleClose,
        open,
        setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
