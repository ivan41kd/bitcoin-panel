import { ModalProvider } from "../../../entities/provider/ModalProvider";
import { ModalAdd } from "../../../features/modal-add";

export const AddButton = () => {
  return (
    <ModalProvider>
      <ModalAdd />
    </ModalProvider>
  );
};
