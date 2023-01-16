import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ModalTicket from "./components/Main/ModalTicket";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAccount, loadChainId, loadProvider, loadLottery} from "./store/interaction";
import config from './config.json'
import { ethers } from "ethers";

const styles = {
  app: `min-h-screen flex flex-col bg-[#1B2D5F]`,
};

const App = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const handlModaleOpen = () => setOpenModal(true);
  const handlModaleClose = () => setOpenModal(false);

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
    const lottery = await loadLottery(provider, lotteryAddress, dispatch)
    console.log("Lottery", lottery)

    const ownerContract = await lottery.owner();
    console.log("Owner Contract", ownerContract)

    const ticketPrice = await lottery.ticketPrice();
    console.log("Remaining Tickets", ethers.utils.formatEther(ticketPrice))

    const tiketcs = await lottery.getTickets();
    console.log("List of users joined", tiketcs)

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
