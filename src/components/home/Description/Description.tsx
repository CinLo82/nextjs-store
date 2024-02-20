import Image from 'next/image'
import styles from './Description.module.sass'

export const Description = () => {
    return(
        <section className={styles.Description}>
            <Image 
                src="/images/product1.jpg" 
                alt="product marketplace" 
                width={500}
                height={300}
            />
            <div>
                <h2>Description</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae molestias nihil culpa hic corporis, nemo doloribus nesciunt. Autem dolor sit quo ipsa expedita, nemo qui doloribus animi vero! Natus.</p>
            </div> 
        </section>
    )
}