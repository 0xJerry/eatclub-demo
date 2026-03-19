import styles from './RestaurantCard.module.css';
import FavouriteButton from './components/FavouriteButton';
import { Restaurant, formatNameForUrl } from '@/services/dataService';
import Badge from '@/components/Badge';
import RestaurantImage from './components/RestaurantImage';
import Link from 'next/link';

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const safeName = formatNameForUrl(restaurant.name);
  const shortId = restaurant.objectId.split('-')[0].toLowerCase();
  
  return (
    <Link href={`/restaurant/${safeName}-${shortId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className={styles.card}>
        {restaurant.deals?.map((deal, i) => (
          <Badge key={i} deal={deal} />
        ))}
        <RestaurantImage
          imageLink={restaurant.imageLink}
          name={restaurant.name}
        />
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>{restaurant.name}</h2>
            <FavouriteButton />
          </div>
          <p className={styles.surburb}>{restaurant.suburb}</p>
          <small className={styles.cuisines}>
            {restaurant.cuisines?.join(', ')}
          </small>
          <p className={styles.methods}>Dine In • Takeaway • Order Online</p>
        </div>
      </article>
    </Link>
  );
};

export default RestaurantCard;
