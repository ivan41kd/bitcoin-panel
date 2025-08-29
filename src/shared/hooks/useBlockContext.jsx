import { useContext } from "react";
import { BlockContext } from "../../entities/contexts/BlockContext";

export const useBlockContext = () => {
  const data = useContext(BlockContext);
  if (!data) {
    throw new Error("useBlockContext must be used within a BlockProvider");
  }
  return data;
};
