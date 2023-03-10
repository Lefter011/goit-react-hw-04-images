import PropTypes from 'prop-types';
import style from '../defStyles.module.css';

export const Searchbar = ({onSubmit, onInput, searchValue}) => {
    return <div className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={onSubmit}>
            
            <button className={style.SearchFormButton} type="submit">
                <label className={style.SearchFormButtonLabel}></label>
            </button>
                <input value={searchValue} onInput={onInput} className={style.SearchFormInput} type="text" name="searchBar" placeholder="Search images and photos..."/>
            
        </form>
        </div>
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInput: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
}