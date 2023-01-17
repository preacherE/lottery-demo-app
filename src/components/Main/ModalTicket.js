import Modal from "@mui/material/Modal";
import AlertTransaction from './Alert'
import closeIcon from "./close.svg";
import IconButton from "@mui/material/IconButton";
import smallTicket from "./smallTicketIcon.svg";
import Button from "@mui/material/Button";
import { useState } from "react";
import config from "../../config.json";
import { buyTicket } from "../../store/interaction";
import { useSelector, useDispatch } from "react-redux";
import { loadAccount } from "../../store/interaction";

const styles = {
  modalBox: `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[380px] w-full bg-[#1B2D5F] p-[24px] shadow`,
  modalHeader: `flex justify-between items-start w-full flex-row  mb-[55px]`,
  modalFormHeader: `flex justify-between w-full flex-row items-center mb-[12px]`,
  modalFormWrapper: `h-[70px] bg-[#D9D9D9] rounded-[10px] px-[21px] py-[12px] mb-[13px]`,
  modalFormInput: `w-full text-[24px] leading-[29px] font-bold text-[#000] bg-transparent outline-none`,
  modalFormFooter: `flex justify-between w-full flex-row mb-[42px] items-center`,
  modalFooter: `flex flex-col w-full`,
  alert: `text-[16px] leading-[19px] text-[#F03D3D] font-bold`,
  buttonFull: `bg-[#FF6D33] mt-[16px] w-full hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
  text_1: `text-white text-[24px] leading-none`,
  text_2: `text-white text-[24px] leading-none flex items-center flex-row gap-[13px]`,
  text_3: `text-[18px] leading-[22px] font-bold text-right`,
  text_4: `text-white text-[20px] leading-[24px]`,
  text_5: `text-white text-[20px] leading-[24px] mb-[7px]`,
};

const ModalTicket = (props) => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const balance = useSelector((state) => state.provider.balance);
  const account = useSelector((state) => state.provider.account);
  const chainId = useSelector((state) => state.provider.chainId);
  const lottery = useSelector((state) => state.lottery.contract);
  const [open, setOpen] = useState(false);

  const { openModal, handlModaleClose } = props;
  const [amount, setAmount] = useState(0);
  const [amountEth, setAmountEth] = useState(0);
  const [errorBalance, setErrorBalance] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
    if (e.target.value * config[chainId].ticketPrice > balance) {
      setErrorBalance(true);
    } else {
      setAmountEth(e.target.value * config[chainId].ticketPrice);
      setErrorBalance(false);
    }
  };

  const handleInitialState = () => {
    setAmount(0);
    setAmountEth(0);
    setErrorBalance(false);
    handlModaleClose();
  };

  const handleTx = () => {
    setOpen(true);
  }

  const handleBuy = (e) => {
    e.preventDefault();
    buyTicket(provider, lottery, account, amountEth, dispatch);
    handleTx();
  };

  const handleConnect = async () => {
    await loadAccount(provider, dispatch);
  };

  const childProps = {
    setOpen,
    open
  }

  return (
    <Modal open={openModal} onClose={handleInitialState}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <p className={styles.text_1}>Beli Undian</p>
          <IconButton
            aria-label="close"
            className="p-0"
            onClick={handleInitialState}
          >
            <img src={closeIcon} alt="close" />
          </IconButton>
        </div>
        <AlertTransaction {...childProps}/>
        <div className={styles.modalFormHeader}>
          <p className={styles.text_1}>Beli:</p>
          <p className={styles.text_2}>
            Undian <img src={smallTicket} alt="ticket" />
          </p>
        </div>
        <div className={styles.modalFormWrapper}>
          <input
            type="number"
            dir="rtl"
            className={styles.modalFormInput}
            placeholder="0"
            onChange={(e) => handleInput(e)}
          />
          <p className={styles.text_3}>
            <span>{amountEth}</span> ETH
          </p>
        </div>
        <div className={styles.modalFormFooter}>
          {errorBalance && (
            <p className={styles.alert}>Saldo Tidak Mencukupi</p>
          )}
          {balance ? (
            <p className={styles.text_4}>
              Saldo: <span>{Number(balance).toFixed(4)}</span>
            </p>
          ) : (
            <p className={styles.text_4}>
              Saldo: <span>0.00</span>
            </p>
          )}
        </div>
        <div className={styles.modalFooter}>
          {chainId ? (
            <p className={styles.text_5}>
              Harga Per Undian: <span>{config[chainId].ticketPrice}</span> ETH
            </p>
          ) : (
            <p className={styles.text_5}>
              Harga Per Undian: <span>0.01</span> ETH
            </p>
          )}

          <p className={styles.text_5}>
            Anda membeli: <span>{amount}</span> Tiket Undian
          </p>
          <p className={styles.text_5}>
            Anda membayar: <span>{amountEth}</span> ETH
          </p>
          {account ? (
            <Button
              variant="contained"
              className={styles.buttonFull}
              onClick={(e) => handleBuy(e)}
            >
              Beli Undian
            </Button>
          ) : (
            <Button
              variant="contained"
              className={styles.buttonFull}
              onClick={handleConnect}
            >
              Connect Wallet
            </Button>
          )}
          
        </div>
      </div>
    </Modal>
  );
};

export default ModalTicket;
