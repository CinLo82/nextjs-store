import { env } from 'app/config/env'
 
export const shopifyUrls = {
    products: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json?`
    },
    collections: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/smart_collections.json?`
    }
}