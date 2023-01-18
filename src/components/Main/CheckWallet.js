import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import AlertTransaction from "./Alert";

import { claimRewards } from "../../store/interaction";
import { ethers } from "ethers";

const styles = {
  section: `w-full pb-[30px] flex justify-center`,
  button: `bg-[#FF6D33] hover:bg-[#FF6D33] capitalize font-bold text-[14px]`,
  card: `bg-[#3157FF] text-white max-w-[380px] w-full text-center py-1`,
  content: `my-2`,
  text_1: `text-[17px] leading-[20px] font-bold mb-[16px]`,
  text_2: `text-[20px] leading-[24px] font-bold`,
  text_3: `text-[26px] leading-[31px] font-bold`,
};

const CheckWallet = () => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const lottery = useSelector((state) => state.lottery.contract);
  const account = useSelector((state) => state.provider.account);
  const [claimAmount, setClaimAmount] = useState(0);
  const [canClaim, setCanClaim] = useState(false);
  const [notWinner, setNotWinner] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);
  const [open, setOpen] = useState(false);

  const handleWinning = async () => {
    const amountWinnings = ethers.utils.formatEther(
      await lottery.winnings(account)
    );

    if (amountWinnings > 0) {
      setClaimAmount(amountWinnings);
      setCanClaim(true);
      setCloseBtn(false);
    } else {
      setNotWinner(true);
    }
  };

  const handleClaim = async () => {
    claimRewards(provider, lottery, account, dispatch);
    setOpen(true);
    setCanClaim(false);
    setCloseBtn(true);
    console.log("Rewards Claimed");
  };

  const childProps = {
    setOpen,
    open,
  };

  useEffect(() => {
    setCanClaim(false);
    setNotWinner(false);
  }, [account]);

  return (
    <section className={styles.section}>
      <Card className={styles.card}>
        <CardContent>
          <AlertTransaction {...childProps} />
          <p className={styles.text_1}>Cek Apakah Anda Menang</p>
          <Collapse in={closeBtn}>
            <Button
              variant="contained"
              className={styles.button}
              onClick={handleWinning}
            >
              Cek Wallet
            </Button>
          </Collapse>
          <div>
            {notWinner && (
              <div className={styles.content}>
                <p className={styles.text_1}>
                  Anda belum menang! Beli undian untuk meningkatkan peluang
                  menang anda!
                </p>
              </div>
            )}
          </div>
          <div>
            {canClaim && (
              <div>
                <p>You win {claimAmount} ETH</p>
                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={handleClaim}
                >
                  claim Rewards
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CheckWallet;
