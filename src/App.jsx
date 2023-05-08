import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'


export function App() {

  return ( 
  <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post author="Caroline Anjos"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis quas doloremque facere vero voluptatum, accusantium ab ad magni ducimus saepe, velit laborum a fugit dignissimos? Rem fugiat odit ullam?" 
        />
        <Post author="Caroline Anjos"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis quas doloremque facere vero voluptatum, accusantium ab ad magni ducimus saepe, velit laborum a fugit dignissimos? Rem fugiat odit ullam?" 
        />
      </main>
    </div>
  </div>
  )
}
