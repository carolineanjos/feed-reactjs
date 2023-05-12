import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

//author : {avatar_url: "", name:"", role:""}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/carolineanjos.png",
      name: "Caroline Anjos",
      role: "Software Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},  
      { type: "link", content: "jane.design/doctorcare" },   
    ],
    publishedAt: new Date("2023-05-10 10:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thais Silva",
      role: "Front End Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},  
      { type: "link", content: "jane.design/doctorcare" },   
    ],
    publishedAt: new Date("2023-05-11 10:00")
  }
]

export function App() {

  return ( 
  <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map((post) => {
          return (
            <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            key={post.id}
            /> 
          )  
        })}
      </main>
    </div>
  </div>
  )
}
