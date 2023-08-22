import './styles.css';
import Logo from '../../assets/logo.svg';
import LogoFacebook from '../../assets/facebook.svg';
import LogoInstagram from '../../assets/instagram.svg';

function Footer() {
    return (
    <footer>
        <div className="left-footer">
            <div className="address-container">
                <strong>Endereço:</strong>
                <span>Rua Cubos, 10</span>
                <span>Jardim Academy</span>
                <span>Salvador - Bahia - CEP 41820-021</span>
            </div>
            <div className="social-container">
                <img src={LogoFacebook} alt="logo facebook" />
                <img src={LogoInstagram} alt="logo instagram" />
            </div>
        </div>

        <div className='vertical-line'></div>

        <div className="right-footer">
            <img src={Logo} alt="Logo footer"/>
        </div>
    </footer>
    )
}

export default Footer;