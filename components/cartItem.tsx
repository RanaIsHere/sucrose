'use client'

import { useState } from 'react';

import Image from 'next/image';
import styles from './cartItem.module.css';

export default function CartItem() {
    const [quantity, setQuantity] = useState<number>(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }

    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    return (
        <div className={styles.cardBody}>
            <div className={styles.cardHead}>
                <Image src="/coffee.jpg" alt='Cart item' width={256} height={210} className={styles.cardImage} />

                <div className={styles.cardInfo}>
                    <div className={styles.cardTitle}>
                        <p>UNKNOWN ITEM</p>
                        <p>Unknown Type</p>
                    </div>

                    <div className={styles.cardCurrency}>
                        <p>$0.00</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardAction}>
                <div className={styles.quantityIncrementor}>
                    <Image src="icons/plus-icon.svg" alt="Add" width={48} height={48} onClick={incrementQuantity} />
                    <input type="number" name="quantity" id="quantity" className={styles.itemQuantity} defaultValue={quantity} min={1} onChange={onChangeInputValue} disabled />
                    <Image src="icons/minus-icon.svg" alt="Subtract" width={48} height={48} onClick={decrementQuantity} />
                </div>

                <Image src="icons/trash-icon.svg" alt="Remove" width={48} height={48} />
            </div>
        </div>
    );
}