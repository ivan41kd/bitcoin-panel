import { useEffect, useState } from "react";
import { BlockContext } from "../contexts/BlockContext";
import { BitcoinApi } from "../../shared/model";

export const BlockProvider = ({ children }) => {
  const apiData = BitcoinApi.getData();
  const [data, setData] = useState(apiData);
  const [selectedData, setSelectedData] = useState(data[0].id);
  const [blocks, setBlocks] = useState(selectedData.blocks);
  useEffect(() => {
    const data = BitcoinApi.getData().filter(
      (item) => item.id === selectedData
    );
    setBlocks(data[0].blocks);
  }, [selectedData]);

  return (
    <BlockContext.Provider
      value={{
        selectedData,
        setSelectedData,
        blocks,
        setBlocks,
        setData,
        data,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};
