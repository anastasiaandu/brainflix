import { Link } from 'react-router-dom';
import './PageHeader.scss';
import logoImage from '../../assets/images/BrainFlix-logo.svg';
import SearchForm from '../SearchForm/SearchForm';
import UploadButton from '../UploadButton/UploadButton';


const PageHeader = () => {
    return (
        <header className='header'>
            <Link to='/' className='header__logo'><img src={logoImage} alt="brainflix logo" /></Link>
            <nav className='header__nav'>
                <SearchForm />
                <UploadButton />
            </nav>
        </header>
    );
};

export default PageHeader;
