'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from '../RestaurantCard.module.css';

const FavouriteButton = () => {
  return (
    <button className={styles.btnHeart} type="button" onClick={() => {}}>
      <FontAwesomeIcon icon={faHeart} size="xl" />
      <span className="sr-only">Add to Favourites</span>
    </button>
  );
};

export default FavouriteButton;
