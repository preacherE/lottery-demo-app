import logo from './logo.svg';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const styles = {
    header: `fixed bg-[#1B2D5F] flex w-full h-[56px] items-center border-b-2 border-white z-10`,
    wrapper: `flex justify-between`,
    button: `bg-[#FF6D33] capitalize hover:bg-[#FF6D33] font-bold text-[13px]`,
}

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <img src={logo} alt="logo" />
                    <Button 
                        variant="contained" 
                        className={styles.button}
                    >
                        Connect Wallet
                    </Button>
                </div>
            </Container>
        </header>
    );
}
 
export default Header;