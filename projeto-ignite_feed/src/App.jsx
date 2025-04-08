import {Header} from './components/Header/Header'
import {Sidebar} from './components/Sidebar/Sidebar'
import {Post} from './components/Post/Post.jsx'

import styles from './App.module.css'

const post = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/favaro01.png',
            name: 'Rafael Favaro',
            role: 'Tech Lead'
        },
        content: [
            {type: 'paragraph', content: 'Fala galera'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio'},
            {type: 'link', content: '#studying'},
        ],
        publishedAt: new Date('2022-05-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/viniciustorress.png',
            name: 'Vinicius Torres',
            role: 'Full Stack Developer'
        },
        content: [
            {type: 'paragraph', content: 'Fala galera!'},
            {type: 'paragraph', content: 'Estou estudando sobre WEBGL e Three.js!'},
            {type: 'link', content: '#euamoprogramação'}
        ],
        publishedAt: new Date('2022-05-10 20:00:00')
    }
]; // Qtnd de posts

function App() {
    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {post.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </>
    )
}

export default App