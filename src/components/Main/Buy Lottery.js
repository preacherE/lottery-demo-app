import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const styles = {
  section: `w-full pb-[30px] flex justify-center`,
  button: `bg-[#FF6D33] hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
  card: `bg-[#3157FF] text-white max-w-[380px] w-full text-center py-1`,
  card_detail_1: `text-center pb-4`,
  card_detail_2: `text-center bg-[#1B2D5F] p-7`,
  text_1: `text-[16px] leading-[19px] font-bold mb-[7px]`,
  text_2: `text-[20px] leading-[24px] font-bold`,
  text_3: `text-[26px] leading-[31px] font-bold`,
  text_4: `text-left text-[17px] leading-[20px] font-bold mb-[5px]`,
  text_5: `text-left text-[16px] leading-[19px] font-bold mb-[5px]`,
  text_6: `text-left text-[16px] leading-[19px] font-bold mb-[16px]`,
};

const BuyLottery = (props) => {
  const account = useSelector((state) => state.provider.account);
  const tickets = useSelector((state) => state.lottery.tickets.data);
  const expired = useSelector((state) => state.lottery.expired);

  const [ticketBought, setTicketBought] = useState(0);
  const { handlModaleOpen } = props;

  useEffect(() => {
    const loadTickets = async () => {
      const data = tickets.filter((address) => address === account);
      setTicketBought(data.length);
    };
    loadTickets();
  }, [tickets, account]);

  return (
    <section className={styles.section}>
      <Card className={styles.card}>
        <CardContent>
          <div className={styles.card_detail_1}>
            <p className={styles.text_1}>Beli Undian Sekarang!</p>
            <p className={styles.text_2}>Tersisa</p>
            <p className={styles.text_3}>
              <Countdown date={Date.now() + 7200000} />
            </p>
            <p className={styles.text_2}>untuk undian selanjutnya</p>
          </div>
          <div className={styles.card_detail_2}>
            {ticketBought > 0 ? (
              <p className={styles.text_4}>
                Anda Telah Membeli: {ticketBought} Undian
              </p>
            ) : (
              <p className={styles.text_4}>Anda Memiliki: 0 Undian</p>
            )}
            {expired && (
              <p className={styles.text_6}>Pengundian Selanjutnya: {expired}</p>
            )}

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
  );
};

export default BuyLottery;
