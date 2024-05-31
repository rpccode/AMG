
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { showModal, hideModal, toggleModal } from '../config/slices/ModalSlice';


const useModal = () => {
  const dispatch = useAppDispatch();
  const modals = useAppSelector((state) => state.modals.modals);
  
  const handleShowModal = (modalName: string) => {
    dispatch(showModal(modalName));
  };

  const handleHideModal = (modalName: string) => {
    dispatch(hideModal(modalName));
  };

  const handleToggleModal = (modalName: string) => {
    dispatch(toggleModal(modalName));
  };




  return {
    handleHideModal,
    handleShowModal,
    handleToggleModal,
    modals
  }
}

export default useModal