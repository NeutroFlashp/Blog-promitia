import type { NextPage } from 'next'
import styles from "../../styles/Hero.module.css";
import Article from './contentcard';

const articles = 
    [
        {
            "title" : "Documentation",
            "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis beatae eveniet cum natus amet temporibus laboriosam ipsum ullam nostrum optio quos doloribus asperiores, reprehenderit in voluptates incidunt voluptas eaque iure.",
        },

        {
            "title" : "Documentation",
            "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis beatae eveniet cum natus amet temporibus laboriosam ipsum ullam nostrum optio quos doloribus asperiores, reprehenderit in voluptates incidunt voluptas eaque iure.",
        },

        {
            "title" : "Documentation",
            "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis beatae eveniet cum natus amet temporibus laboriosam ipsum ullam nostrum optio quos doloribus asperiores, reprehenderit in voluptates incidunt voluptas eaque iure.",
        },

        {
            "title" : "Documentation",
            "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis beatae eveniet cum natus amet temporibus laboriosam ipsum ullam nostrum optio quos doloribus asperiores, reprehenderit in voluptates incidunt voluptas eaque iure.",
        },

        {
            "title" : "Documentation",
            "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis beatae eveniet cum natus amet temporibus laboriosam ipsum ullam nostrum optio quos doloribus asperiores, reprehenderit in voluptates incidunt voluptas eaque iure.",
        },

        {
            "title" : "Documentation",
            "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis beatae eveniet cum natus amet temporibus laboriosam ipsum ullam nostrum optio quos doloribus asperiores, reprehenderit in voluptates incidunt voluptas eaque iure.",
        },
    ];

const Cards: NextPage = () =>{
    return(
        <div className={styles.grid}>
           {articles.map((cardInfo) => {
                    return <Article card={cardInfo} />
                })}
        </div>
    )
}

export default Cards
