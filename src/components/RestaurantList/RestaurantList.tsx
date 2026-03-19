import styles from './RestaurantList.module.css';
import RestaurantCard from '@/components/RestaurantCard/RestaurantCard';
import { Restaurant } from '@/services/dataService';
import { sortRestaurantsByBestDeal } from '@/utils/deals';

export default function RestaurantList({
  restaurants
}: {
  restaurants: Restaurant[];
}) {
  return (
    <div className={styles.listView}>
      {restaurants.length === 0 ? (
        <p>No data</p>
      ) : (
        sortRestaurantsByBestDeal(restaurants).map((restaurant, i) => (
          <RestaurantCard key={i} restaurant={restaurant} />
        ))
      )}
    </div>
  );
}
