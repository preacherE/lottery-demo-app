import Container from '@mui/material/Container';
import telegram from './telegram.svg'
import twitter from './twitter.svg'
import IconButton from '@mui/material/IconButton';

const styles = {
    footer: `mt-auto text-white py-[22px] text-center`,
    socialMedia: `flex justify-center mb-[6px] gap-[11px]`,
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.socialMedia}>
                    <IconButton 
                        href="http://google.com" 
                        target='_blank' 
                        aria-label="telegram"
                    >
                        <img src={telegram} alt='telegram' />
                    </IconButton>
                    <IconButton 
                        href="http://google.com" 
                        target='_blank' 
                        aria-label="twitter"
                    >
                        <img src={twitter} alt='twitter' />
                    </IconButton>
                </div>
                <p className='text-[17px] leading-[20px] font-bold'>
                    Copyright &copy; 2023
                </p>
            </Container>
        </footer>
    );
}
 
export default Footer;