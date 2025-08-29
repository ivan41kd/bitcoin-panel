import { DataItem } from "../../entities/ui/DataItem";
import { BitcoinApi } from "../../shared/model";

export const DataList = () => {
  const data = BitcoinApi.getData();

  return (
    <div className="data__items">
      {data.map((item) => {
        return <DataItem key={item.id} item={item} />;
      })}
    </div>
  );
};
