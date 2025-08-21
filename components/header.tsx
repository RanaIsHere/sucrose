import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src="/icons/sucrose-logo.svg" alt='Sucrose Logo' width={192} height={64} />

            <div className={styles.buttonGroup}>
                <a href='/cart'>
                    <Image src="/icons/cart-btn.svg" alt="View cart" width={48} height={48} />
                </a>

                <a href='#menu'>
                    <Image src="/icons/menu-btn.svg" alt="Menu button" width={48} height={48} />
                </a>
            </div>
        </header>
    )
}