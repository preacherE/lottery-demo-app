import Button from "@mui/material/Button";
import ticket from "./ticketIcon.svg";
import CurrencyFormat from "react-currency-format";
import statis from "../../statis.json";
import { useEffect, useState } from "react";

const styles = {
  hero: `w-full text-center pt-20 pb-20 text-white`,
  section: `w-full pb-[30px] flex justify-center`,
  button: `bg-[#FF6D33] hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
  text_1: `text-[20px] leading-[24px]`,
  text_2: `text-[40px] leading-[48px] font-bold mb-[16px]`,
  ticket_detail: `flex items-center gap-[18px] w-full justify-center`,
};

const Hero = (props) => {
  const { handlModaleOpen } = props;
  const data = statis.initialRewards;
  const [rewards, setRewards] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      const add = rewards + 5439;
      setRewards(add);
    }, 3000);
    return () => clearTimeout(interval);
  }, [rewards]);

  return (
    <section className={styles.hero}>
      <h1 className={styles.text_1}>Total Hadiah Undian!</h1>
      <h2 className={styles.text_2}>
        <CurrencyFormat
          value={rewards}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp"}
          renderText={(value) => <div>{value}</div>}
        />
      </h2>
      <div className={styles.ticket_detail}>
        <img src={ticket} alt="ticket" />
        <Button
          variant="contained"
          className={styles.button}
          onClick={handlModaleOpen}
        >
          Beli Undian
        </Button>
      </div>
    </section>
  );
};

export default Hero;
