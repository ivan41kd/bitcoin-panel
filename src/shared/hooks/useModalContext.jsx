import { useContext } from "react";
import { ModalContext } from "../../entities/contexts/ModalContext";

export const useModalContext = () => {
  const data = useContext(ModalContext);
  if (!data) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return data;
};
