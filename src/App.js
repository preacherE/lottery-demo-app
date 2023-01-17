import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ModalTicket from "./components/Main/ModalTicket";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadAccount,
  loadChainId,
  loadProvider,
  loadLottery,
} from "./store/interaction";
import config from "./config.json";

const styles = {
  app: `min-h-screen flex flex-col bg-[#1B2D5F]`,
};

const App = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const handlModaleOpen = () => setOpenModal(true);
  const handlModaleClose = () => setOpenModal(false);
  // const isSuccessful = useSelector(
  //   (state) => state.lottery.transaction.isSuccessful
  // );
  // const isPending = useSelector((state) => state.lottery.transaction.isPending);
  // const isError = useSelector((state) => state.lottery.transaction.isError);

  const props = {
    openModal,
    handlModaleOpen,
    handlModaleClose,
  };

  const loadBlockchainData = async () => {
    const provider = loadProvider(dispatch);
    const chainId = await loadChainId(provider, dispatch);

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", () => {
      loadAccount(provider, dispatch);
    });

    const lotteryAddress = config[chainId].address;
    await loadLottery(provider, lotteryAddress, dispatch);
  };

  useEffect(() => {
    loadBlockchainData();
  });

  return (
    <div className={styles.app}>
      <Header />
      <Main {...props} />
      <ModalTicket {...props} />
      <Footer />
    </div>
  );
};

export default App;
