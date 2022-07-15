import './SearchForm.scss';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const SearchForm = () => {
    return (
        <div className='search'>
            <form className='search__form'>
                <label className='search__label' htmlFor='search'>
                    <input className='search__input' id='search' type='text' name='search' placeholder='Search'/>
                </label>
            </form>
            <img src={`${SERVER_URL}/images/Mohan-muruge.jpg`} alt='user avatar' className='search__avatar'/>
        </div>
    );
};

export default SearchForm;