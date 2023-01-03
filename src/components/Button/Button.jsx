import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import style from '../defStyles.module.css';

export const Button = ({ loadMoreFunc, status }) => {
    return <div>
        {status === true? <Loader /> : <button className={style.Button} onClick={loadMoreFunc} type="button">load more</button>}
    </div>

}

Button.propTypes = {
    loadMoreFunc: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
}