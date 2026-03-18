import Image from 'next/image';
import styles from './RestaurantCard.module.css';
import { Restaurant } from '@/services/dataService';
import Badge from '@/components/Badge';

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className={styles.card}>
      <p>{restaurant.deals?.map(deal => deal.discount).join(', ') || ''}</p>
      <Image
        src={restaurant.imageLink}
        alt={restaurant.name}
        width={100}
        height={100}
      />
      <h2>{restaurant.name}</h2>
      <p>
        {restaurant.address1}, {restaurant.suburb}
      </p>
      <small>{restaurant.cuisines?.join(', ')}</small>
    </div>
  );
};

export default RestaurantCard;
