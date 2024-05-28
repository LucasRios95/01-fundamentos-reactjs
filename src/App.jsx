import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Lucas Rios"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a rerum labore similique, animi et, voluptas velit laudantium doloribus odit veritatis! Est saepe illo praesentium blanditiis obcaecati neque laborum quaerat."
          />
          <Post
            author="João Mag"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ut commodi praesentium veniam reprehenderit sit quaerat placeat tempore doloribus! Sed quaerat natus officiis modi quo velit necessitatibus laudantium autem est!"
          />
        </main>
      </div>
    </div>
  );
}
