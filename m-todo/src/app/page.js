import TodoCard from "@/components/TodoCard/TodoCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TodoCard/>
      </main>
    </div>
  );
}
