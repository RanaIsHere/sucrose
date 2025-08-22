import Image from 'next/image';
import styles from './foodItem.module.css';

export default function FoodItem() {
    return (
        <div className={styles.card}>
            <Image className={styles.cardImage} src="/coffee.jpg" alt="Food image" width={256} height={256} />

            <div className={styles.cardTitle}>
                <p>UNKNOWN ITEM</p>
                <p>$0.00</p>
            </div>

            <div className={styles.cardSubtitle}>
                <div className={styles.cardPerks}>
                    <div className={styles.perkItem}>
                        <Image src="icons/checkmark-icon.svg" alt="Yes" width={27} height={27} />
                        <p>DELIVERY</p>
                    </div>

                    <div className={styles.perkItem}>
                        <Image src="icons/checkmark-icon.svg" alt="Yes" width={27} height={27} />
                        <p>VOUCHER</p>
                    </div>
                </div>

                <Image src="icons/arrow-right-icon.svg" alt="Check" width={32} height={32} />
            </div>
        </div>
    );
}