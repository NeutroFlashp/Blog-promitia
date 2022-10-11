import type { NextPage } from 'next'
import styles from "../../styles/Hero.module.css";


type cardType = {
    url_image: string,
    url_author?: string,
    category: string,
    title: string,
    name_author: string,
    description: string,
    time_to_read: string,
    publication_date: string
}

type PropsCard = {
    card: cardType
}

const Article: NextPage<PropsCard> = (props: PropsCard) =>{
    return <a href="https://xnxx.com" className={styles.card}>
                <h2>{props.card.title}</h2>
                <p>{props.card.description}</p>
            </a>
}

export default Article

