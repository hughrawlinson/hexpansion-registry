import hexpansions_contents from '../hexpansions.json';
import {z} from 'zod';

export const hexpansion_description = z.object({
    maker: z.string(),
    unique_name: z.string(),
    homepage: z.optional(z.string()),
    description: z.string(),
    shop_link: z.optional(z.string()),
    image_url: z.optional(z.string()),
})

export const hexpansions_file = z.array(hexpansion_description);

export const hexpansions = hexpansions_file.parse(hexpansions_contents);