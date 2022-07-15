import { Link } from 'react-router-dom';
import './PageHeader.scss';
import SearchForm from '../SearchForm/SearchForm';
import UploadButton from '../UploadButton/UploadButton';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const PageHeader = () => {
    return (
        <header className='header'>
            <Link to='/' className='header__logo'><img src={`${SERVER_URL}/images/BrainFlix-logo.svg`} alt="brainflix logo" /></Link>
            <nav className='header__nav'>
                <SearchForm />
                <UploadButton />
            </nav>
        </header>
    );
};

export default PageHeader;
