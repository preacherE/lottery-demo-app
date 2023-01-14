import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const styles = {
    section: `w-full pb-[30px] flex justify-center`,
    card: `bg-[#3157FF] text-white max-w-[380px] w-full text-center py-1`,
    text_1: `text-[17px] leading-[20px] font-bold`,
    list_wrapper: `text-left list-decimal px-[32px] pt-[14px]`,
    list_1: `text-[17px] leading-[20px] mb-1`,
    list_2: `text-[17px] leading-[20px]`,
}

const HowToPlay = () => {
    return (
        <section className={styles.section}>
            <Card className={styles.card}>
                <CardContent>
                    <p className={styles.text_1}>
                        Cara Bermain
                    </p>
                    <ol className={styles.list_wrapper}>
                        <li className={styles.list_1}>
                            Beli Tiket
                        </li>
                        <li className={styles.list_1}>
                            Tunggu Undian
                        </li>
                        <li className={styles.list_2}>
                            Klaim Hadiah Jika Menang
                        </li>
                    </ol>
                </CardContent>
            </Card>
        </section>
    );
}
 
export default HowToPlay;