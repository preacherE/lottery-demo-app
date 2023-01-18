import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ModalTicket from "./components/Main/ModalTicket";
import ModalAdmin from "./components/Main/ModalAdmin";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadAccount,
  loadChainId,
  loadProvider,
  loadLottery,
  loadTickets,
} from "./store/interaction";
import config from "./config.json";

const styles = {
  app: `min-h-screen flex flex-col bg-[#1B2D5F]`,
};

const App = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdmin, setOpenModalAdmin] = useState(false);
  const handlModaleOpen = () => setOpenModal(true);
  const handlModaleClose = () => setOpenModal(false);
  const handleModalAdminOpen = () => setOpenModalAdmin(true);
  const hadnleModalAdminClose = () => setOpenModalAdmin(false);

  const props = {
    openModal,
    handlModaleOpen,
    handlModaleClose,
    openModalAdmin,
    handleModalAdminOpen,
    hadnleModalAdminClose
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
    const lottery = await loadLottery(provider, lotteryAddress, dispatch);
    await loadTickets(lottery, dispatch);
  };

  useEffect(() => {
    loadBlockchainData();
  });

  return (
    <div className={styles.app}>
      <Header {...props}/>
      <Main {...props} />
      <ModalTicket {...props} />
      <ModalAdmin {...props} />
      <Footer />
    </div>
  );
};

export default App;
