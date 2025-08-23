import Image from 'next/image';
import styles from './sidebar.module.css'

import Link from 'next/link'

type OpenableSidebarProps = {
    isOpenable: boolean,
    toggleSidebar: () => void,
}

export default function Sidebar({ isOpenable, toggleSidebar }: OpenableSidebarProps) {
    const login: boolean = false;

    return (
        <aside className={`${styles.sidebar} ${isOpenable ? styles.sidebarOpen : ''} `} onClick={toggleSidebar}>
            <div className={styles.sidebarTitle}>
                <Image src="icons/x-mark-icon.svg" alt="Close" width={64} height={64} onClick={toggleSidebar} />
                <p>Menu</p>
            </div>

            <div className={styles.sidebarGroup}>
                <Link href="/">Home</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/orders">Orders</Link>
                <Link href="/about-us">About Us</Link>
            </div>
        </aside>
    )
}