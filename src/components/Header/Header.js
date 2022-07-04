import './Header.scss';
import logoImage from '../../assets/images/BrainFlix-logo.svg';
import SearchForm from '../SearchForm/SearchForm';
import UploadButton from '../UploadButton/UploadButton';


const Header = () => {
    return (
        <header className='header'>
            <img src={logoImage} alt="brainflix logo" className='header__logo' />
            <nav className='header__nav'>
                <SearchForm />
                <UploadButton />
            </nav>
        </header>
    );
};

export default Header;
