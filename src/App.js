import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ModalTicket from './components/Main/ModalTicket';
import { useState } from 'react';

const styles = {
  app: `min-h-screen flex flex-col bg-[#1B2D5F]`,
}

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const handlModaleOpen = () => setOpenModal(true);
  const handlModaleClose = () => setOpenModal(false);
  
  const props = {
    openModal,
    handlModaleOpen,
    handlModaleClose
  }
  
  return (
    <div className={styles.app}>
      <Header />
      <Main {...props} />
      <ModalTicket {...props} />
      <Footer />
    </div>
  );
}

export default App;