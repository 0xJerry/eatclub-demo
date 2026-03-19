import { Deal, Restaurant } from '@/services/dataService';

const getDiscountValue = (deal: Deal): number =>
  parseInt(deal.discount, 10) || 0;

const getBestDiscountValue = (restaurant: Restaurant): number =>
  Math.max(...(restaurant.deals || []).map(getDiscountValue), 0);

/**
 * Sorts an array of deals by discount percentage in descending order
 */
export const sortDealsByDiscount = (deals: Deal[]): Deal[] => {
  return [...deals].sort((a, b) => getDiscountValue(b) - getDiscountValue(a));
};

/**
 * Sorts an array of restaurants by their best deal percentage in descending order.
 */
export const sortRestaurantsByBestDeal = (
  restaurants: Restaurant[]
): Restaurant[] => {
  return [...restaurants].sort(
    (a, b) => getBestDiscountValue(b) - getBestDiscountValue(a)
  );
};
