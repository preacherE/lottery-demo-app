import Modal from '@mui/material/Modal';
import closeIcon from './close.svg';
import IconButton from '@mui/material/IconButton';
import smallTicket from './smallTicketIcon.svg';
import Button from '@mui/material/Button';

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
}

const ModalTicket = (props) => {
    const { openModal, handlModaleClose } = props;

    return (
        <Modal
            open={openModal}
            onClose={handlModaleClose}
        >
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <p className={styles.text_1}>
                        Beli Undian
                    </p>
                    <IconButton
                        aria-label="close"
                        className='p-0'
                        onClick={handlModaleClose}
                    >
                        <img src={closeIcon} alt='close' />
                    </IconButton>
                </div>
                <div className={styles.modalFormHeader}>
                    <p className={styles.text_1}>
                        Beli:
                    </p>
                    <p className={styles.text_2}>
                        Undian <img src={smallTicket} alt='ticket' />
                    </p>
                </div>
                <div className={styles.modalFormWrapper}>
                    <input type='number' dir='rtl' className={styles.modalFormInput} placeholder="0" />
                    <p className={styles.text_3}>
                        <spa>0.02</spa> Matic
                    </p>
                </div>
                <div className={styles.modalFormFooter}>
                    <p className={styles.alert}>
                        Saldo Tidak Mencukupi
                    </p>
                    <p className={styles.text_4}>
                        Saldo: <span>0.01</span>
                    </p>
                </div>
                <div className={styles.modalFooter}>
                    <p className={styles.text_5}>
                        Harga Per Undian: <spa>0.01</spa> Matic
                    </p>
                    <p className={styles.text_5}>
                        Anda membeli: <spam>2</spam> Tiket Undian
                    </p>
                    <p className={styles.text_5}>
                        Anda membayar: <span>0.02</span> Matic
                    </p>
                    <Button 
                        variant="contained" 
                        className={styles.buttonFull}
                    >
                        Beli Undian
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
 
export default ModalTicket;