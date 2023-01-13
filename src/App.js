import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const styles = {
  app: `min-h-screen flex flex-col bg-[#1B2D5F]`,
}

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;