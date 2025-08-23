import Image from "next/image";
import CartItem from "../../../components/cartItem";
import Header from "../../../components/header";
import styles from "./page.module.css";

export default function Cart() {
    const count: number = 1;

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <div className={styles.title}>
                    <p>Cart</p>
                    <p>—</p>
                    <p>Your orders</p>
                </div>

                <div className={styles.checkoutContainer}>
                    <div className={styles.itemContainer}>
                        <CartItem />
                    </div>

                    <hr />

                    <div className={styles.infoContainer}>
                        <div className={styles.separator}>
                            <div className={styles.subTotal}>
                                <div className={styles.total}>
                                    <p>Total</p>
                                    <p>$0.00</p>
                                </div>

                                <div className={styles.subTotalItem}>
                                    <p>— {count} items</p>
                                    <p>$0.00</p>
                                </div>

                                <div className={styles.subTotalVoucher}>
                                    <p>— VOUCHER (10% OFF)</p>
                                    <p>-$2.99</p>
                                </div>

                                <div className={styles.subTotalTax}>
                                    <p>— Tax</p>
                                    <p>$0.99</p>
                                </div>
                            </div>

                            <hr />

                            <div className={styles.additionals}>
                                <div className={styles.voucherPicker}>
                                    <p>Voucher</p>
                                    <button className={`${styles.button} ${styles.voucherButton}`}>
                                        <Image src="icons/plus-icon.svg" alt="Add" width={32} height={32} />
                                        <p>Add</p>
                                    </button>
                                </div>

                                <div className={styles.notes}>
                                    <div className={styles.notesTitle}>
                                        <p>Notes</p>
                                        <p>— Special Requests</p>
                                    </div>
                                    <textarea name="notes" id="notes" cols={32} rows={8} placeholder="Any requests you want for our chef?"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className={styles.checkoutGroup}>
                            <button className={styles.button}>
                                <Image src="icons/cart-btn.svg" alt="Add" width={32} height={32} />
                                <p>Checkout</p>
                            </button>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}