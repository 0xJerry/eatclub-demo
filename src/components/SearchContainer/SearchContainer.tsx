'use client';

import { useState, useMemo } from 'react';
import useDebounce from '@/hooks/useDebounce';
import SearchBar from '@/components/SearchBar/SearchBar';
import RestaurantList from '@/components/RestaurantList/RestaurantList';
import { Restaurant } from '@/services/dataService';

type Props = {
  initialRestaurants: Restaurant[];
};

export default function SearchContainer({ initialRestaurants }: Props) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  const filteredRestaurants = useMemo(() => {
    if (!debouncedQuery) return initialRestaurants;
    const lowerQuery = debouncedQuery.toLowerCase();

    return initialRestaurants.filter(restaurant => {
      const nameMatch = restaurant.name.toLowerCase().includes(lowerQuery);
      const cuisineMatch = restaurant.cuisines?.some(cuisine =>
        cuisine.toLowerCase().includes(lowerQuery)
      );
      return nameMatch || cuisineMatch;
    });
  }, [debouncedQuery, initialRestaurants]);

  return (
    <div>
      <SearchBar query={query} onQueryChange={setQuery} />
      {initialRestaurants.length === 0 ? (
        <p>No results found</p>
      ) : (
        <RestaurantList restaurants={filteredRestaurants} />
      )}
    </div>
  );
}
