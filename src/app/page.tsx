import Header from "../../components/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        {/* <p>Hello world!</p> */}
      </main>
    </div>
  );
}
