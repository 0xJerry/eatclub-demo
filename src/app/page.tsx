import styles from "./RestaurantList.module.css";
import { fetchRestaurantsData } from "../services/dataService";

export default async function Home() {
  const restaurants = await fetchRestaurantsData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Restaurants</h1>
        {restaurants.length === 0 ? (
          <p>No restaurants found or error loading data.</p>
        ) : (
          <pre>
            <code style={{ fontSize: "0.8rem" }}>
              {JSON.stringify(restaurants, null, 2)}
            </code>
          </pre>
        )}
      </main>
    </div>
  );
}
