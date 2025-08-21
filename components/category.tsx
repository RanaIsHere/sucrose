import { ReactNode } from "react";
import styles from "./category.module.css";

type CategoryProps = {
    title: string,
    subtitle: string
    children: ReactNode
}

export default function Category({ title, subtitle, children }: CategoryProps) {
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryHead}>
                <p className={styles.categoryTitle}>{title}</p>
                <p className={styles.categorySubtitle}>—</p>
                <p className={styles.categorySubtitle}>{subtitle}</p>
            </div>

            <div className={styles.categoryContent}>
                {children}
            </div>
        </div>
    )
}