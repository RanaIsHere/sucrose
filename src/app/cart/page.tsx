import CartItem from "../../../components/cartItem";
import Header from "../../../components/header";
import styles from "./page.module.css";

export default function Cart() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <div className={styles.title}>
                    <p>Cart</p>
                    <p>—</p>
                    <p>Your orders</p>
                </div>

                <div className={styles.itemContainer}>
                    <CartItem />
                </div>
            </main>
        </div>
    );
}