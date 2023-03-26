import PropTypes from "prop-types";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, showModal, tags}) => {
    return ( 
        <li className={styles.galleryItem}>
                <img
                    className={styles.ImageGalleryItemImage}
                    onClick={() => showModal(largeImageURL)}
                    src={webformatURL}
                    alt={tags}
                />
            </li>
     );
}

ImageGalleryItem.propTypes = {
    showModal: PropTypes.func,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}
 
export default ImageGalleryItem;