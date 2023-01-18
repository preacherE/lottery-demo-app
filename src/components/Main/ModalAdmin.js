import Modal from "@mui/material/Modal";
import AlertTransaction from "./Alert";
import closeIcon from "./close.svg";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { drawWinner, withdrawCommision } from "../../store/interaction";

const styles = {
  modalBox: `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[380px] w-full bg-[#1B2D5F] p-[24px] shadow`,
  modalHeader: `flex justify-between items-start w-full flex-row  mb-[55px]`,
  modalFormHeader: `flex justify-between w-full flex-row items-center mb-[12px]`,
  modalFormWrapper: `h-[70px] bg-[#D9D9D9] rounded-[10px] px-[21px] py-[12px] mb-[13px]`,
  modalFormInput: `w-full text-[24px] leading-[29px] font-bold text-[#000] bg-transparent outline-none`,
  modalFormFooter: `flex justify-between w-full flex-row mb-[42px] items-center`,
  modalFooter: `flex flex-col w-full m-2`,
  alert: `text-[16px] leading-[19px] text-[#F03D3D] font-bold`,
  buttonFull: `bg-[#FF6D33] mt-[16px] w-full hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
  text_1: `text-white text-[24px] leading-none`,
  text_2: `text-white text-[24px] leading-none flex items-center flex-row gap-[13px]`,
  text_3: `text-[18px] leading-[22px] font-bold text-right`,
  text_4: `text-white text-[20px] leading-[24px]`,
  text_5: `text-white text-[20px] leading-[24px] mb-[7px]`,
};

const ModalAdmin = (props) => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const account = useSelector((state) => state.provider.account);
  const lottery = useSelector((state) => state.lottery.contract);
  const [open, setOpen] = useState(false);

  const { openModalAdmin, hadnleModalAdminClose } = props;

  const handleDraw = async () => {
    drawWinner(provider, lottery, account, dispatch);
    setOpen(true);
  };

  const handleWithdraw = () => {
    withdrawCommision(provider, lottery, account, dispatch);
    setOpen(true);
    console.log("comission withdraw");
  };

  const childProps = {
    setOpen,
    open,
  };

  return (
    <Modal open={openModalAdmin}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <p className={styles.text_1}>Admin Page</p>
          <IconButton
            aria-label="close"
            className="p-0"
            onClick={hadnleModalAdminClose}
          >
            <img src={closeIcon} alt="close" />
          </IconButton>
        </div>
        <AlertTransaction {...childProps} />
        <div className={styles.modalFooter}>
          <p className={styles.text_5}>
            Total Undian Masuk: <span>100</span> Tiket
          </p>
          <Button
            variant="contained"
            className={styles.buttonFull}
            onClick={handleDraw}
          >
            Draw Pemenang
          </Button>
        </div>
        <div className={styles.modalFooter}>
          <p className={styles.text_5}>
            Total Komisi Diperoleh: <span>3</span> ETH
          </p>
          <Button
            variant="contained"
            className={styles.buttonFull}
            onClick={handleWithdraw}
          >
            Withdraw Komisi
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAdmin;
