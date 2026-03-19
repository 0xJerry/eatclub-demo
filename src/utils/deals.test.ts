import { describe, it, expect } from 'vitest';
import { sortDealsByDiscount, sortRestaurantsByBestDeal } from './deals';
import { Deal, Restaurant } from '@/services/dataService';

describe('deals logic utils', () => {
  describe('sortDealsByDiscount', () => {
    it('should sort deals by discount in descending order', () => {
      const deals: Partial<Deal>[] = [
        { objectId: '1', discount: '10' },
        { objectId: '2', discount: '50' },
        { objectId: '3', discount: '30' }
      ];

      const sorted = sortDealsByDiscount(deals as Deal[]);
      expect(sorted[0].discount).toBe('50');
      expect(sorted[1].discount).toBe('30');
      expect(sorted[2].discount).toBe('10');
    });

    it('should handle malformed discount strings as 0', () => {
      const deals: Partial<Deal>[] = [
        { objectId: '1', discount: 'abc' },
        { objectId: '2', discount: '20' }
      ];

      const sorted = sortDealsByDiscount(deals as Deal[]);
      expect(sorted[0].discount).toBe('20');
      expect(sorted[1].discount).toBe('abc');
    });

    it('should handle empty list', () => {
      expect(sortDealsByDiscount([])).toEqual([]);
    });
  });

  describe('sortRestaurantsByBestDeal', () => {
    it('should sort restaurants by their best deal', () => {
      const restaurants: Partial<Restaurant>[] = [
        {
          name: 'Low Discount Resto',
          deals: [{ objectId: 'd1', discount: '10' } as Deal]
        },
        {
          name: 'High Discount Resto',
          deals: [
            { objectId: 'd2', discount: '20' } as Deal,
            { objectId: 'd3', discount: '50' } as Deal
          ]
        },
        {
          name: 'No Deals Resto',
          deals: []
        }
      ];

      const sorted = sortRestaurantsByBestDeal(restaurants as Restaurant[]);
      expect(sorted[0].name).toBe('High Discount Resto'); // 50
      expect(sorted[1].name).toBe('Low Discount Resto'); // 10
      expect(sorted[2].name).toBe('No Deals Resto'); // 0
    });
  });
});
