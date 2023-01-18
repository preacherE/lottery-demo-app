import logo from "./logo.svg";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Blockies from "react-blockies";
import { loadAccount } from "../../store/interaction";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config.json";
import statis from "../../statis.json";
import { useEffect, useState } from "react";

const styles = {
  header: `fixed bg-[#1B2D5F] flex w-full h-[56px] items-center border-b-2 border-white z-10`,
  wrapper: `flex justify-between`,
  rightSection: `flex`,
  button: `bg-[#FF6D33] capitalize hover:bg-[#FF6D33] font-bold text-[13px]`,
  wallet: `flex items-center text-white m-px`,
  blockies: `m-2`,
};

const Header = (props) => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const account = useSelector((state) => state.provider.account);
  const chainId = useSelector((state) => state.provider.chainId);
  const [isAdmin, setIsAdmin] = useState(false);
  const admins = statis.adminWallets;

  const { handleModalAdminOpen } = props;

  const handleConnect = async () => {
    await loadAccount(provider, dispatch);
  };

  useEffect(() => {
    const checkAdmin = () => {
      const check = admins.filter((address) => address === account);
      if (check.length) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, [admins, account]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <img src={logo} alt="logo" />
          <div className={styles.rightSection}>
            {isAdmin && (
              <Button
                variant="contained"
                className={styles.button}
                onClick={handleModalAdminOpen}
              >
                Admin
              </Button>
            )}

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
        </div>
      </Container>
    </header>
  );
};

export default Header;
