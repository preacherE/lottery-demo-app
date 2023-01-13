import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import closeIcon from './close.svg';
import IconButton from '@mui/material/IconButton';
import ticket from './ticketIcon.svg';
import smallTicket from './smallTicketIcon.svg';

const styles = {
    main: `mt-[56px]`,
    hero: `w-full text-center pt-20 pb-20 text-white`,
    section: `w-full pb-[30px] flex justify-center`,
    textHeading: `text-white text-[20px] leading-[24px]`,
    textNominal: `text-white text-[40px] leading-[48px]`,
    button: `bg-[#FF6D33] hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
    buttonFull: `bg-[#FF6D33] mt-[16px] w-full hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
    card: `bg-[#3157FF] text-white max-w-[380px] w-full text-center py-1`,
    card_detail_1: `text-center pb-4`,
    card_detail_2: `text-center bg-[#1B2D5F] p-7`,
    modalBox: `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[380px] w-full bg-[#1B2D5F] p-[24px] shadow`,
    modalHeader: `flex justify-between items-start w-full flex-row  mb-[55px]`,
    modalFormHeader: `flex justify-between w-full flex-row items-center mb-[12px]`,
    modalFormWrapper: `h-[70px] bg-[#D9D9D9] rounded-[10px] px-[21px] py-[12px] mb-[13px]`,
    modalFormInput: `w-full text-[24px] leading-[29px] font-bold text-[#000] bg-transparent outline-none`,
    modalFormFooter: `flex justify-between w-full flex-row mb-[42px] items-center`,
    modalFooter: `flex flex-col w-full`,
    alert: `text-[16px] leading-[19px] text-[#F03D3D] font-bold`,
}

const Main = () => {
    const [openModal, setOpenModal] = useState(false);
    const handlModaleOpen = () => setOpenModal(true);
    const handlModaleClose = () => setOpenModal(false);

    return (
        <main className={styles.main}>
            <Container>
                <section className={styles.hero}>
                    <h1 className='text-[20px] leading-[24px] '>
                        Total Hadiah Undian!
                    </h1>
                    <h2 className='text-[40px] leading-[48px] font-bold mb-[16px]'>
                        Rp 50,780,998
                    </h2>
                    <div className='flex items-center gap-[18px] w-full justify-center'>
                        <img src={ticket} alt='ticket' />
                        <Button 
                            variant="contained" 
                            className={styles.button} 
                            onClick={handlModaleOpen}
                        >
                            Beli Undian
                        </Button>
                    </div>
                </section>
                <section className={styles.section}>
                    <Card className={styles.card}>
                        <CardContent>
                            <div className={styles.card_detail_1}>
                                <p className='text-[16px] leading-[19px] font-bold mb-[7px]'>
                                    Beli Undian Sekarang!
                                </p>
                                <p className='text-[20px] leading-[24px] font-bold'>
                                    Tersisa
                                </p>
                                <p className='text-[26px] leading-[31px] font-bold'>
                                    2 Jam 30 Menit
                                </p>
                                <p className='text-[20px] leading-[24px] font-bold'>
                                    untuk undian selanjutnya
                                </p>
                            </div>
                            <div className={styles.card_detail_2}>
                                <p className='text-left text-[17px] leading-[20px] font-bold mb-[5px]'>
                                    Anda Memiliki: 0 Undian
                                </p>
                                <p className='text-left text-[16px] leading-[19px] font-bold mb-[5px]'>
                                    Total Hadiah Saat Ini: Rp 50,780,998
                                </p>
                                <p className='text-left text-[16px] leading-[19px] font-bold mb-[16px]'>
                                    Undian Selanjutnya: 15 Jan, 20:00 WIB
                                </p>
                                <Button 
                                    variant="contained" 
                                    className={styles.button} 
                                    onClick={handlModaleOpen}
                                >
                                    Beli Undian
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className={styles.section}>
                    <Card className={styles.card}>
                        <CardContent>
                            <p className='text-[17px] leading-[20px] font-bold mb-[16px]'>
                                Cek Apakah Anda Menang
                            </p>
                            <Button 
                                variant="contained" 
                                className={styles.button}
                            >
                                Cek Wallet
                            </Button>
                        </CardContent>
                    </Card>
                </section>
                <section className={styles.section}>
                    <Card className={styles.card}>
                        <CardContent>
                            <p className='text-[17px] leading-[20px] font-bold'>
                                Cara Bermain
                            </p>
                            <ol className='text-left list-decimal px-[32px] pt-[14px]'>
                                <li className='text-[17px] leading-[20px] mb-1'>
                                    Beli Tiket
                                </li>
                                <li className='text-[17px] leading-[20px] mb-1'>
                                    Tunggu Undian
                                </li>
                                <li className='text-[17px] leading-[20px]'>
                                    Klaim Hadiah Jika Menang
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </section>
            </Container>
            <Modal
                open={openModal}
                onClose={handlModaleClose}
            >
                <div className={styles.modalBox}>
                    <div className={styles.modalHeader}>
                        <p className='text-white text-[24px] leading-none'>
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
                        <p className='text-white text-[24px] leading-none'>
                            Beli:
                        </p>
                        <p className='text-white text-[24px] leading-none flex items-center flex-row gap-[13px]'>
                            Undian <img src={smallTicket} alt='ticket' />
                        </p>
                    </div>
                    <div className={styles.modalFormWrapper}>
                        <input type='number' dir='rtl' className={styles.modalFormInput} placeholder="0" />
                        <p className='text-[18px] leading-[22px] font-bold text-right'>
                            <spa>0.02</spa> Matic
                        </p>
                    </div>
                    <div className={styles.modalFormFooter}>
                        <p className={styles.alert}>
                            Saldo Tidak Mencukupi
                        </p>
                        <p className='text-white text-[20px] leading-[24px]'>
                            Saldo: <span>0.01</span>
                        </p>
                    </div>
                    <div className={styles.modalFooter}>
                        <p className='text-white text-[20px] leading-[24px] mb-[7px]'>
                            Harga Per Undian: <spa>0.01</spa> Matic
                        </p>
                        <p className='text-white text-[20px] leading-[24px] mb-[7px]'>
                            Anda membeli: <spam>2</spam> Tiket Undian
                        </p>
                        <p className='text-white text-[20px] leading-[24px] mb-[7px]'>
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
        </main>
    );
}

export default Main;