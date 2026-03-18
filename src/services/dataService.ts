import { z } from "zod";

export const DealSchema = z.object({
  objectId: z.string(),
  discount: z.string(),
  dineIn: z.string().optional(),
  lightning: z.string().optional(),
  open: z.string().optional(),
  close: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  qtyLeft: z.string().optional(),
});

export const RestaurantSchema = z.object({
  objectId: z.string(),
  name: z.string(),
  address1: z.string().optional().nullable(),
  suburb: z.string().optional().nullable(),
  cuisines: z.array(z.string()).optional().nullable(),
  imageLink: z.string().optional().nullable(),
  open: z.string().optional().nullable(),
  close: z.string().optional().nullable(),
  deals: z.array(DealSchema).optional().nullable(),
});

export const SafeRestaurantPayload = z.object({
  restaurants: z
    .array(
      z.any().transform((val) => {
        const parsed = RestaurantSchema.safeParse(val);
        if (!parsed.success) {
          console.warn(parsed.error.message);
          return null;
        }
        return parsed.data;
      }),
    )
    .transform((arr) =>
      arr.filter((r): r is z.infer<typeof RestaurantSchema> => r !== null),
    ),
});

export type Deal = z.infer<typeof DealSchema>;
export type Restaurant = z.infer<typeof RestaurantSchema>;
export type RestaurantPayload = z.infer<typeof SafeRestaurantPayload>;

export async function fetchRestaurantsData(): Promise<Restaurant[]> {
  try {
    const res = await fetch("https://eccdn.com.au/misc/challengedata.json", {
      cache: "force-cache", // TODO: Development purpose only - remove for production
    });

    if (!res.ok) {
      console.error(`Fetch API Error ${res.status}`);
      return [];
    }

    const payload = await res.json();
    const result = SafeRestaurantPayload.safeParse(payload);

    if (result.success) {
      return result.data.restaurants;
    } else {
      console.error(result.error.message);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
