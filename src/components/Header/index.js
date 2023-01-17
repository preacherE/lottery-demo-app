import logo from "./logo.svg";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Blockies from "react-blockies";
import { loadAccount } from "../../store/interaction";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config.json";

const styles = {
  header: `fixed bg-[#1B2D5F] flex w-full h-[56px] items-center border-b-2 border-white z-10`,
  wrapper: `flex justify-between`,
  button: `bg-[#FF6D33] capitalize hover:bg-[#FF6D33] font-bold text-[13px]`,
  wallet: `flex items-center text-white m-px`,
  blockies: `m-2`,
};

const Header = () => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const account = useSelector((state) => state.provider.account);
  const chainId = useSelector((state) => state.provider.chainId);

  const handleConnect = async () => {
    await loadAccount(provider, dispatch);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <img src={logo} alt="logo" />
          {account ? (
            <a
              href={
                config[chainId]
                  ? `${config[chainId].explorerURL}/address/${account}`
                  : `#`
              }
              target="_blank"
              rel="noreferrer"
              className={styles.wallet}
            >
              {account.slice(0, 5) + "..." + account.slice(38, 42)}
              <Blockies seed={account} className={styles.blockies} />
            </a>
          ) : (
            <Button
              variant="contained"
              className={styles.button}
              onClick={handleConnect}
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
