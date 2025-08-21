import styles from "./category.module.css";

type CategoryProps = {
    title: string,
    subtitle: string
}

export default function Category({ title, subtitle }: CategoryProps) {
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryHead}>
                <p className={styles.categoryTitle}>{title}</p>
                <p className={styles.categorySubtitle}>—</p>
                <p className={styles.categorySubtitle}>{subtitle}</p>
            </div>

            <div className={styles.categoryContent}>

            </div>
        </div>
    )
}