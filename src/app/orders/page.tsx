import Image from 'next/image';
import Header from '../../../components/header';
import styles from './page.module.css';

export default function Orders() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <p>What did you order?</p>

                <div className={styles.searchGroup}>
                    <div className={styles.searchBarContainer}>
                        <Image className={styles.searchBarIcon} src="icons/compass-icon.svg" alt="Search" width={48} height={48} />
                        <input type="text" name="search" id="searchbar" className={styles.searchBar} placeholder="Search order" />
                    </div>

                    <a href="#find">
                        <Image src="icons/angle-right-icon.svg" alt="Enter button" width={48} height={48} />
                    </a>
                </div>
            </main>

            <footer className={styles.infographic}>
                <div className={styles.infoParagraph}>
                    <p>RECEIPTS</p>
                    <p>You can track your pending order, through receipts saved after checkout OR the table code under the QR.</p>
                    <p>Just put in the receipt code above!</p>
                </div>

                <Image src="/Render_Final.png" alt="A rendered photo of Sucrose's table" width={343} height={193} />
                <Image src="/Render2_Final.png" alt="A rendered photo of Sucrose's table" width={343} height={193} />
            </footer>
        </div>
    );
}