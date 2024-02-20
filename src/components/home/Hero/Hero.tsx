import styles  from './Hero.module.sass'

export const Hero = () => {
    return(
        <section className={styles.Hero}>
            <h1>Ranchesca Store</h1>
            <h2>A place where you can find the best products for your home and garden.</h2>
        </section>
    )
}