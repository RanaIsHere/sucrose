'use client'

import { useState } from 'react';
import styles from './header.module.css'
import Image from 'next/image'
import Sidebar from './sidebar';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <Sidebar isOpenable={isOpen} toggleSidebar={openSidebar} />

            <Image src="/icons/sucrose-logo.svg" alt='Sucrose Logo' width={192} height={64} />

            <div className={styles.buttonGroup}>
                <a href='/cart'>
                    <Image src="/icons/cart-btn.svg" alt="View cart" width={48} height={48} />
                </a>

                <a onClick={openSidebar}>
                    <Image src="/icons/menu-btn.svg" alt="Menu button" width={48} height={48} />
                </a>
            </div>
        </header>
    )
}