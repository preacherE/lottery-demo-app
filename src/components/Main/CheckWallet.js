import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Collapse } from "@mui/material";

const styles = {
  section: `w-full pb-[30px] flex justify-center`,
  button: `bg-[#FF6D33] hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
  card: `bg-[#3157FF] text-white max-w-[380px] w-full text-center py-1`,
  text_1: `text-[17px] leading-[20px] font-bold mb-[16px]`,
  text_2: `text-[20px] leading-[24px] font-bold`,
  text_3: `text-[26px] leading-[31px] font-bold`,
};

const CheckWallet = () => {
  const isWinner = useSelector((state) => state.lottery.checkWallet.isWinner);
  const [canClaim, setCanClaim] = useState(false);
  const [notWinner, setNotWinner] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  const handleCheckWinning = async () => {
    if (isWinner) {
      setCanClaim(true);
      setCloseBtn(false);
    } else {
      setNotWinner(true);
    }
  };

  return (
    <section className={styles.section}>
      <Card className={styles.card}>
        <CardContent>
          <p className={styles.text_1}>Cek Apakah Anda Menang</p>
          <Collapse in={closeBtn}>
            <Button
              variant="contained"
              className={styles.button}
              onClick={handleCheckWinning}
            >
              Cek Wallet
            </Button>
          </Collapse>
          <div>
            {notWinner && (
              <div>
                <h1>
                  Anda belum menang, beli lebih banyak <strong>undian</strong> untuk meningkatkan
                  peluang menang anda!
                </h1>
                <p className={styles.text_2}>Tersisa</p>
                <p className={styles.text_3}>2 Jam 30 Menit</p>
              </div>
            )}
          </div>
          <div>
            {canClaim && (
              <Button
                variant="contained"
                className={styles.button}
                onClick={handleCheckWinning}
              >
                claim Rewards
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CheckWallet;
