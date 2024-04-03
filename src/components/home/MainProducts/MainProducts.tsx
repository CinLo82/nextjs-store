import styles from './MainProducts.module.sass'
import Image from 'next/image'

const getProducts = async () => {
    try {
         const response = await fetch(`https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json?`, {
            headers: new  Headers({
              'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            })
        })
        const { products } = await response.json()
        return products
    } catch(error) {
        console.log('Error', error)
    }     
}

export const MainProducts = async () => {
    const products = await getProducts()
    console.log(products)
    return(
        <section className={styles.MainProducts}>
            <h3>New Products released!</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product) =>  {
                    const imageSrc = product.images[0].src
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image 
                                src={imageSrc} 
                                alt={product.title}
                                loading="eager"
                                fill
                            />
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
