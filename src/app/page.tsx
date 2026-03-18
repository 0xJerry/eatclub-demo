import styles from './RestaurantList.module.css';
import { fetchRestaurantsData } from '@/services/dataService';
import RestaurantCard from '@/components/RestaurantCard/RestaurantCard';

export default async function Home() {
  const restaurants = await fetchRestaurantsData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {restaurants.length === 0 ? (
          <p>No data: Add Error Boundary</p>
        ) : (
          restaurants.map((restaurant, i) => (
            <RestaurantCard key={i} restaurant={restaurant} />
          ))
        )}
      </main>
    </div>
  );
}
