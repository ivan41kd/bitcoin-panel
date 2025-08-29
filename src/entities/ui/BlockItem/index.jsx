import { ToggleBlock } from "../../../features/toogle-block";
import blockImg from "../../../shared/assets/mining-farm.jpg";
import { ModalEdit } from "../../../features/modal-edit";
import { ModalProvider } from "../../provider/ModalProvider";
import { DeleteBlock } from "../../../features/delete-block";
export const BlockItem = ({ block }) => {
  return (
    <div className="block__item">
      <img
        src={block.img || blockImg}
        alt="block"
        className="block__item-img"
      />
      <div className="block__item-wrapper">
        <div className="block__item-info">
          <p className="block__item-name">{block.title}</p>{" "}
          {block.miningPerHour}
          BTC/h
        </div>
        <div className="block__item-bottom">
          <ToggleBlock block={block} />
          <ModalProvider>
            <ModalEdit block={block} />
          </ModalProvider>
          <DeleteBlock block={block} />
        </div>
      </div>
    </div>
  );
};
