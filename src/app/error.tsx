"use client"
import Image from "next/image"
import styles  from 'app/sass/global-error.module.sass'

export default function GlobalError({reset}: ErrorPageProps) {
    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
            <Image
                className={styles.Error__image}  
                src="/images/error404.png" 
                alt="Error" 
                width={500}
                height={350}
            />
            <p className={styles.Error__message}>Al parecer ha ocurrido un error, Pero no te sientas mal</p>
            <button className={styles.Error__button} onClick={reset}>Volver a Intentar</button>
        </main>
    )
}