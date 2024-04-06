import styles from './MainProducts.module.sass'
import Image from 'next/image'
import { getProducts } from 'app/services/shopify'

export const MainProducts = async () => {
    const products = await getProducts()
    console.log(products)
    return(
        <section className={styles.MainProducts}>
            <h3>Nuevos Productos!</h3>
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
