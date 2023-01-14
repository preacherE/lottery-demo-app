import Container from '@mui/material/Container';
import HowToPlay from './HowToPlay';
import CheckWallet from './CheckWallet';
import Hero from './Hero';
import BuyLottery from './Buy Lottery';

const styles = {
    main: `mt-[56px] overflow-y-hidden`,
}

const Main = (props) => {
    return (
        <main className={styles.main}>
            <Container>
                <Hero {...props} />
                <BuyLottery {...props} />
                <CheckWallet />
                <HowToPlay />
            </Container>
        </main>
    );
}

export default Main;