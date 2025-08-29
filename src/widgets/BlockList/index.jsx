import { useBlockContext } from "../../shared/hooks/useBlockContext";
import { BlockItem } from "../../entities/ui/BlockItem";

export const BlockList = () => {
  const { data, selectedData } = useBlockContext();

  return (
    <div className="block__items">
      {data[selectedData - 1].blocks.map((item, index) => {
        return <BlockItem block={item} key={index} />;
      })}
    </div>
  );
};
