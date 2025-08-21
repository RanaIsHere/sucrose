import Image from "next/image";
import Header from "../../components/header";
import styles from "./page.module.css";
import Category from "../../components/category";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <p>Welcome to Sucrose</p>
        <p>Search for meals, drinks & dessert</p>

        <div className={styles.searchGroup}>
          <div className={styles.searchBarContainer}>
            <Image className={styles.searchBarIcon} src="icons/search-icon.svg" alt="Search" width={48} height={48} />
            <input type="text" name="search" id="searchbar" className={styles.searchBar} placeholder="Search" />
          </div>
          <a href="#sort">
            <Image src="icons/sort-btn.svg" alt="Sort list button" width={48} height={48} />
          </a>
        </div>
      </main>

      <Category title={"PAST JOY"} subtitle={"Your previous order"}>
        <p>test</p>
      </Category>
      <Category title={"QUICK & SIMPLE"} subtitle={"On-the-go meals"}>
        <p>test</p>
      </Category>
      <Category title={"FULFILLING & WARM"} subtitle={"Breakfast & dinner"}>
        <p>test</p>
      </Category>
    </div>
  );
}
