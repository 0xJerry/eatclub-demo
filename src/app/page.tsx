import { fetchRestaurantsData } from '@/services/dataService';
import SearchContainer from '@/components/SearchContainer/SearchContainer';

export default async function Home() {
  const restaurants = await fetchRestaurantsData();

  return <SearchContainer initialRestaurants={restaurants} />;
}
