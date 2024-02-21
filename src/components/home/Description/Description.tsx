"use client"

import Image from 'next/image'
import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE = 'data:image/png;base64,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'

export const Description = () => {
    const [hasBorder, setBorder] = useState(false)

    const handleClick = () => setBorder(!hasBorder)

    const cx = classNames.bind(styles)

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
      })

    return(
        <section className={styles.Description}>
            
            <button className={buttonStyles} onClick={handleClick}>
                <div className={styles.Description__imageContainer}>
                    <Image 
                        src="/images/product1.jpg" 
                        alt="product marketplace" 
                        fill
                        placeholder='blur'
                        blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            <div>
                <h2>Description</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae molestias nihil culpa hic corporis, nemo doloribus nesciunt. Autem dolor sit quo ipsa expedita, nemo qui doloribus animi vero! Natus.</p>
            </div> 
        </section>
    )
}