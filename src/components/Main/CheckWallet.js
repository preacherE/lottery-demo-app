import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const styles = {
    section: `w-full pb-[30px] flex justify-center`,
    button: `bg-[#FF6D33] hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
    card: `bg-[#3157FF] text-white max-w-[380px] w-full text-center py-1`,
    text_1: `text-[17px] leading-[20px] font-bold mb-[16px]`,
}

const CheckWallet = () => {
    return (
        <section className={styles.section}>
            <Card className={styles.card}>
                <CardContent>
                    <p className={styles.text_1}>
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
    );
}
 
export default CheckWallet;