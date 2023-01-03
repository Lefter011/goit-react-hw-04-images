import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import style from './gallery.module.css'

export const ImageGallery = ({ imgs, onImgClick }) => {
    return <>
    <ul onClick={onImgClick} className={style.ImageGallery}>
        <ImageGalleryItem imgs={imgs} />
            </ul>
        </>
}

ImageGallery.propTypes = {
    imgs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    onImgClick: PropTypes.func.isRequired,
}