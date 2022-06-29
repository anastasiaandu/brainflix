import './SearchForm.scss';
import profilePicture from '../../assets/images/Mohan-muruge.jpg';

const SearchForm = () => {
    return (
        <div className='search'>
            <form className='search__form'>
                <label className='search__label' htmlFor='search'>
                    <input className='search__input' id='search' type='text' name='search' placeholder='Search'/>
                </label>
            </form>
            <img src={profilePicture} alt='user avatar' className='search__avatar'/>
        </div>
    );
};

export default SearchForm;